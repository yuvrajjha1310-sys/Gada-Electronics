/* ==========================================================================
   product-images.js
   Gada Electronics — Auto-fills product images.

   Two layers:
   1. CURATED_IMAGES — hand-verified, real, openly-licensed photos (mostly
      Wikimedia Commons) for common categories. These are permanent and
      never change — no live lookup, no risk of a bad/irrelevant match.
   2. Live fallback — for any product whose category isn't curated yet,
      searches Openverse (real photo search, not loose tag-matching) using
      the product's name, then PERMANENTLY PINS whatever it finds in
      localStorage so the same product always shows the same photo on
      every future visit instead of re-rolling on each page load.

   To add a new category permanently: pick a real, openly-licensed photo
   URL and add it to CURATED_IMAGES below.
   ========================================================================== */

// Verified real photos — CC-BY-SA / CC-BY licensed, Wikimedia Commons unless
// noted. Hardcoded on purpose: never re-queried, never changes.
const CURATED_IMAGES = {
  mcb: "https://commons.wikimedia.org/wiki/Special:FilePath/MCB%20Hager%20C10.jpg",
  transformer: "https://commons.wikimedia.org/wiki/Special:FilePath/Polemount-singlephase-closeup.jpg",
  panel: "https://commons.wikimedia.org/wiki/Special:FilePath/Electrical%20Main%20and%20distribution%20panel%20for%20480%20volt.JPG",
  switchgear: "https://commons.wikimedia.org/wiki/Special:FilePath/Medium%20voltage%20panel.jpg",
  ac: "https://commons.wikimedia.org/wiki/Special:FilePath/DAIKIN%20AIR%20CONDITIONER%20INDOOR%20UNIT.jpg",
};

const OPENVERSE_ENDPOINT = "https://api.openverse.org/v1/images/";
const FALLBACK_KEYWORD = "electronics product";
const STORAGE_PREFIX = "gada_product_image::";
const PLACEHOLDER_SRC_PATTERN = /placeholders?\/([a-z0-9-]+)\.(?:jpg|jpeg|png|webp)$/i;

function getCategorySlug(img) {
  const match = img.getAttribute("src")?.match(PLACEHOLDER_SRC_PATTERN);
  if (!match) return null;
  return match[1].replace(/^product-/, "");
}

function buildQuery(img) {
  const alt = img.getAttribute("alt") || "";
  const cleaned = alt
    .replace(/\([^)]*\)/g, " ")
    .replace(/\b\d+[a-zA-Z%]*\b/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  return cleaned || alt || FALLBACK_KEYWORD;
}

function readPinned(query) {
  try {
    return window.localStorage.getItem(STORAGE_PREFIX + query);
  } catch {
    return null;
  }
}

function writePinned(query, url) {
  try {
    window.localStorage.setItem(STORAGE_PREFIX + query, url);
  } catch {
    /* storage unavailable — fall through, just won't persist */
  }
}

const inFlightCache = new Map();

async function fetchImageUrl(query) {
  if (inFlightCache.has(query)) return inFlightCache.get(query);

  const params = new URLSearchParams({
    q: query,
    page_size: "3",
    license_type: "commercial",
    mature: "false",
  });

  const promise = fetch(`${OPENVERSE_ENDPOINT}?${params.toString()}`)
    .then((res) => {
      if (!res.ok) throw new Error(`Openverse request failed (${res.status})`);
      return res.json();
    })
    .then((data) => {
      const hit = (data.results || []).find((r) => r.url);
      return hit ? hit.url : null;
    })
    .catch(() => null);

  inFlightCache.set(query, promise);
  return promise;
}

async function autoFillImage(img) {
  // 1. Curated, permanent, verified photo for this category — use and stop.
  const slug = getCategorySlug(img);
  if (slug && CURATED_IMAGES[slug]) {
    img.src = CURATED_IMAGES[slug];
    return;
  }

  // 2. Already resolved this exact product before — reuse the pinned result
  // so it never changes again on reload.
  const query = buildQuery(img);
  const pinned = readPinned(query);
  if (pinned) {
    img.src = pinned;
    return;
  }

  // 3. First time seeing this product — search live, then pin the result
  // permanently so future visits are stable and don't re-query.
  let url = await fetchImageUrl(query);
  if (!url && query !== FALLBACK_KEYWORD) {
    url = await fetchImageUrl(FALLBACK_KEYWORD);
  }

  if (url) {
    img.src = url;
    writePinned(query, url);
  }
}

export function init() {
  const images = document.querySelectorAll('img[src*="placeholders/"]');
  images.forEach((img) => {
    autoFillImage(img);
  });
}

export default { init };
