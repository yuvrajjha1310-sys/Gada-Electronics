/* ==========================================================================
   product-details.js — Fetches and renders a single product on
   product-details.html, keyed off ?slug= in the URL. Populates gallery,
   specs table, and wires the enquiry-form.js modal with product context.
   ========================================================================== */
import { qs, createEl } from "../core/dom-utils.js";
import { get } from "../core/http-client.js";
import { ENDPOINTS } from "../config/api.config.js";
import { showToast } from "../components/toast.js";

// No backend implementing API_CONTRACT.md exists yet, so product details
// fall back to this local, verified seed file (real specs/descriptions
// sourced from manufacturer & distributor pages — see the file's _readme).
const LOCAL_SEED_URL = "assets/data/products-industrial-seed.json";

let localSeedCache = null;

function getSlugFromUrl() {
  const params = new URLSearchParams(window.location.search);
  // products.html links currently use ?product=, product-details.js
  // historically expected ?slug= — accept either so both keep working.
  return params.get("slug") || params.get("product");
}

async function loadLocalSeed() {
  if (localSeedCache) return localSeedCache;
  const res = await fetch(LOCAL_SEED_URL);
  if (!res.ok) throw new Error(`Could not load ${LOCAL_SEED_URL}`);
  const json = await res.json();
  localSeedCache = json.products || [];
  return localSeedCache;
}

function seedToProduct(seed) {
  const img = seed.image;
  return {
    name: seed.name,
    slug: seed.slug,
    brandName: seed.brand && seed.brand.name,
    categoryName: seed.category && seed.category.name,
    description: seed.description,
    specifications: seed.specifications,
    images: img
      ? [{ url: img.url, altText: seed.name, credit: img.credit, sourceUrl: img.sourceUrl }]
      : [],
  };
}

/**
 * Tries the real API first (per API_CONTRACT.md); if there's no backend
 * to answer it yet, falls back to the local verified seed data so the
 * page still renders genuine, sourced content on the frontend alone.
 */
async function fetchProduct(slug) {
  try {
    const { data } = await get(ENDPOINTS.PRODUCTS.DETAILS(slug));
    return data;
  } catch (err) {
    const seedList = await loadLocalSeed();
    const seed = seedList.find((p) => p.slug === slug);
    if (!seed) throw err;
    return seedToProduct(seed);
  }
}

function renderGallery(images = [], containerEl) {
  containerEl.innerHTML = "";
  if (images.length === 0) {
    containerEl.appendChild(createEl("img", { src: "assets/images/products/placeholder.jpg", alt: "No image available" }));
    return;
  }

  images.forEach((img, index) => {
    containerEl.appendChild(
      createEl("a", {
        href: img.url,
        "data-lightbox-auto": "true",
        className: index === 0 ? "gallery__item is-primary" : "gallery__item",
      }, createEl("img", { src: img.url, alt: img.altText || "", loading: index === 0 ? "eager" : "lazy" }))
    );
  });

  // CC BY-SA (and similar) licenses legally require this credit line to
  // travel with the image — see each product's `image.credit` in the seed.
  const primary = images[0];
  if (primary && primary.credit) {
    containerEl.appendChild(
      createEl(
        "p",
        { className: "product-gallery__credit", style: "font-size: 12px; color: var(--color-text-muted, #888); margin-top: 6px;" },
        [
          document.createTextNode("Reference photo (not the exact branded product) — "),
          primary.sourceUrl
            ? createEl("a", { href: primary.sourceUrl, target: "_blank", rel: "noopener" }, primary.credit)
            : document.createTextNode(primary.credit),
        ]
      )
    );
  }
}

function renderSpecs(specs = {}, tableBodyEl) {
  tableBodyEl.innerHTML = "";
  Object.entries(specs).forEach(([label, value]) => {
    tableBodyEl.appendChild(
      createEl("tr", {}, [
        createEl("th", {}, label),
        createEl("td", {}, String(value)),
      ])
    );
  });
}

function populateTextFields(product) {
  const setText = (selector, value) => {
    const el = qs(selector);
    if (el) el.textContent = value || "";
  };

  setText("[data-js='product-name']", product.name);
  setText("[data-js='product-brand']", product.brandName);
  setText("[data-js='product-category']", product.categoryName);
  setText("[data-js='product-description']", product.description);

  // Price/SKU aren't part of the verified seed data (no fabricated
  // numbers) — show an honest placeholder rather than a made-up figure.
  const priceEl = qs("[data-js='product-price']");
  if (priceEl) {
    priceEl.textContent = product.price
      ? `₹${Number(product.price).toLocaleString("en-IN")}`
      : "Contact for Pricing";
  }
  const skuEl = qs("[data-js='product-sku']");
  if (skuEl) skuEl.textContent = product.sku || "—";

  document.title = `${product.name} — Gada Electronics`;
}

function wireEnquiryForm(product) {
  const formEl = qs("[data-js='enquiry-form']");
  if (!formEl) return;
  formEl.dataset.productName = product.name;
  formEl.dataset.productSlug = product.slug;
}

async function loadProduct() {
  const slug = getSlugFromUrl();
  if (!slug) {
    window.location.href = "products.html";
    return;
  }

  try {
    const product = await fetchProduct(slug);

    populateTextFields(product);

    const galleryEl = qs("[data-js='product-gallery']");
    if (galleryEl) renderGallery(product.images, galleryEl);

    const specsTableEl = qs("[data-js='product-specs-body']");
    if (specsTableEl && product.specifications) renderSpecs(product.specifications, specsTableEl);

    wireEnquiryForm(product);
    document.dispatchEvent(new CustomEvent("gada:content-updated"));
  } catch (err) {
    showToast("Product not found or failed to load.", "error");
    setTimeout(() => (window.location.href = "products.html"), 1500);
  }
}

export function init() {
  if (!qs("[data-js='product-details-page']")) return;
  loadProduct();
}

export default { init };