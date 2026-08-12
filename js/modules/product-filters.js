/* ==========================================================================
   product-filters.js — Binds the sidebar/toolbar filter controls on
   products.html and filters/sorts the product cards that are already
   rendered in the grid, entirely client-side (no backend required).
   ========================================================================== */

import { qs, qsa, debounce } from "../core/dom-utils.js";
import { appState } from "../core/state.js";

const INDUSTRIAL_CATEGORIES = new Set([
  "circuit-breakers",
  "transformers",
  "switchgear",
  "cables-wires",
  "relays",
  "panels",
]);

// Keyword → category-slug map.
// Used only as a fallback for cards that do not have data-category.
const CATEGORY_RULES = [
  ["circuit-breakers", [
    "mcb",
    "mccb",
    "rccb",
    "circuit breaker",
    "breaker",
  ]],

  ["transformers", [
    "transformer",
  ]],

  ["switchgear", [
    "switchgear",
    "contactor",
    "isolator",
    "starter",
    "switch disconnector",
  ]],

  ["cables-wires", [
    "cable",
    "wire",
  ]],

  ["relays", [
    "relay",
  ]],

  ["panels", [
    "panel",
    "distribution board",
  ]],

  ["televisions", [
    "tv",
    "television",
  ]],

  ["mobile-phones", [
    "iphone",
    "galaxy s",
    "galaxy a",
    "galaxy z",
    "galaxy note",
    "oneplus",
    "pixel",
    "redmi",
    "smartphone",
    "5g",
    "pro max",
    "find x",
    "edge 60",
  ]],

  ["air-conditioners", [
    " ac",
    "ac ",
    "split ac",
    "inverter ac",
    "air conditioner",
    "window ac",
  ]],

  ["refrigerators", [
    "fridge",
    "refrigerator",
  ]],

  ["iron-press", [
    "iron",
    "garment steamer",
  ]],

  ["home-appliances", [
    "washing machine",
    "washer",
    "dishwasher",
    "geyser",
    "water heater",
    "vacuum",
    "kettle",
    "chimney",
  ]],

  ["toasters", [
    "toaster",
  ]],

  ["air-fryers", [
    "air fryer",
    "airfryer",
  ]],

  ["microwaves", [
    "microwave",
  ]],

  ["mixers", [
    "mixer",
    "grinder",
  ]],

  ["fans", [
    "ceiling fan",
    "table fan",
    "tower fan",
    " fan",
  ]],

  ["laptops", [
    "laptop",
    "macbook",
    "notebook",
  ]],

  ["tablets", [
    "tablet",
    "ipad",
  ]],

  ["audio", [
    "headphone",
    "earbud",
    "earphone",
    "speaker",
    "soundbar",
  ]],

  ["gadgets-accessories", [
    "smartwatch",
    "smart watch",
    "camera",
    "power bank",
    "powerbank",
    "charger",
    "drone",
    "router",
  ]],
];

const KNOWN_BRAND_SLUGS = new Set([
  "siemens",
  "schneider-electric",
  "abb",
  "legrand",
  "havells",
  "samsung",
  "lg",
  "apple",
  "sony",
  "whirlpool",
  "oneplus",
  "xiaomi",
  "vivo",
  "oppo",
  "motorola",
  "tcl",
  "daikin",
  "voltas",
  "blue-star",
  "haier",
  "bosch",
  "ifb",
  "philips",
  "bajaj",
  "jbl",
  "dyson",
  "google",
  "realme",
  "poco",
  "nothing",
  "honor",
  "hitachi",
  "godrej",
  "panasonic",
  "prestige",
  "usha",
  "inalsa",
]);

const DEFAULT_FILTERS = {
  department: null,
  categories: [],
  brands: [],
  availability: null,
  minPrice: null,
  maxPrice: null,
  search: "",
  sort: "createdAt-desc",
};

let cardEntries = [];
let gridEl = null;
let countEl = null;
let paginationInfoEl = null;
let noResultsEl = null;

function slugify(text) {
  return (text || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeCategory(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function normalizeDepartment(value) {
  const department = String(value || "")
    .trim()
    .toLowerCase();

  if (
    department === "industrial" ||
    department === "consumer"
  ) {
    return department;
  }

  return null;
}

function classifyCategory(title, imgSrc) {
  const haystack = `${title || ""} ${imgSrc || ""}`
    .toLowerCase();

  for (const [slug, keywords] of CATEGORY_RULES) {
    if (
      keywords.some((keyword) =>
        haystack.includes(keyword)
      )
    ) {
      return slug;
    }
  }

  return "gadgets-accessories";
}

/**
 * Reads each already-rendered .product-card and builds
 * metadata used purely for client-side filtering.
 *
 * IMPORTANT:
 * The explicit data-* attributes from products.html
 * are used first. This prevents category/brand mismatches.
 */
function buildCardIndex() {
  const cards = qsa(".product-card", gridEl);

  cardEntries = cards.map((el, index) => {
    const titleEl = qs(
      ".card__title a",
      el
    );

    const brandEl = qs(
      ".product-card__brand",
      el
    );

    const priceEl = qs(
      ".product-card__price-current",
      el
    );

    const stockEl = qs(
      "[class*='badge--status-']",
      el
    );

    const imgEl = qs(
      "img",
      el
    );

    const title = titleEl
      ? titleEl.textContent.trim()
      : "";

    const brandName = brandEl
      ? brandEl.textContent.trim()
      : "";

    /*
     * Use explicit data-brand first.
     */
    const explicitBrand =
      String(el.dataset.brand || "")
        .trim()
        .toLowerCase();

    const brandSlug =
      explicitBrand ||
      slugify(brandName);

    /*
     * Use explicit data-category first.
     * Only classify from text/image when it is missing.
     */
    const explicitCategory =
      normalizeCategory(
        el.dataset.category
      );

    const category =
      explicitCategory ||
      classifyCategory(
        title,
        imgEl
          ? imgEl.getAttribute("src")
          : ""
      );

    /*
     * Use explicit data-department first.
     */
    const explicitDepartment =
      normalizeDepartment(
        el.dataset.department
      );

    const department =
      explicitDepartment ||
      (
        INDUSTRIAL_CATEGORIES.has(category)
          ? "industrial"
          : "consumer"
      );

    const price =
      priceEl
        ? Number(
            priceEl.textContent.replace(
              /[^\d.]/g,
              ""
            )
          ) || 0
        : 0;

    const stockMatch =
      stockEl &&
      stockEl.className.match(
        /badge--status-([a-z-]+)/
      );

    const stock =
      stockMatch
        ? stockMatch[1]
        : "in-stock";

    return {
      el,
      originalIndex: index,

      meta: {
        title,
        brandName,
        brandSlug,
        price,
        stock,
        category,
        department,
      },
    };
  });
}

function matchesFilters(meta, filters) {
  if (
    filters.department &&
    meta.department !== filters.department
  ) {
    return false;
  }

  if (
    filters.categories.length &&
    !filters.categories.includes(
      meta.category
    )
  ) {
    return false;
  }

  if (
    filters.brands.length &&
    !filters.brands.includes(
      meta.brandSlug
    )
  ) {
    return false;
  }

  if (
    filters.availability &&
    meta.stock !== filters.availability
  ) {
    return false;
  }

  if (
    filters.minPrice != null &&
    meta.price < filters.minPrice
  ) {
    return false;
  }

  if (
    filters.maxPrice != null &&
    meta.price > filters.maxPrice
  ) {
    return false;
  }

  if (filters.search) {
    const needle =
      filters.search.toLowerCase();

    const haystack =
      `${meta.title} ${meta.brandName}`
        .toLowerCase();

    if (!haystack.includes(needle)) {
      return false;
    }
  }

  return true;
}

function compareForSort(sort) {
  switch (sort) {
    case "price-asc":
      return (a, b) =>
        a.meta.price -
        b.meta.price;

    case "price-desc":
      return (a, b) =>
        b.meta.price -
        a.meta.price;

    case "name-asc":
      return (a, b) =>
        a.meta.title.localeCompare(
          b.meta.title,
          undefined,
          {
            sensitivity: "base",
          }
        );

    default:
      /*
       * Newest First / Most Popular:
       * The HTML catalogue does not contain
       * actual created-at/popularity values,
       * so preserve the original catalogue order.
       */
      return (a, b) =>
        a.originalIndex -
        b.originalIndex;
  }
}

/**
 * IMPORTANT AOS FIX
 *
 * The product cards contain data-aos="fade-up".
 * AOS normally adds .aos-animate when a card becomes
 * visible. Because the filter module moves cards around,
 * we explicitly ensure matching cards receive that class.
 */
function setCardVisibility(
  el,
  visible
) {
  if (visible) {
    el.hidden = false;

    el.style.removeProperty(
      "display"
    );

    el.style.removeProperty(
      "opacity"
    );

    el.style.removeProperty(
      "visibility"
    );

    /*
     * Required for AOS cards to become visible.
     */
    el.classList.add(
      "aos-init"
    );

    el.classList.add(
      "aos-animate"
    );

    el.classList.remove(
      "is-filter-hidden"
    );
  } else {
    el.hidden = true;

    el.style.setProperty(
      "display",
      "none",
      "important"
    );

    el.classList.remove(
      "aos-animate"
    );

    el.classList.add(
      "is-filter-hidden"
    );
  }
}

function refreshAOS() {
  if (
    window.AOS &&
    typeof window.AOS.refreshHard ===
      "function"
  ) {
    window.AOS.refreshHard();
  } else if (
    window.AOS &&
    typeof window.AOS.refresh ===
      "function"
  ) {
    window.AOS.refresh();
  }
}

function applyFilters() {
  const filters =
    appState.get(
      "productFilters"
    ) || DEFAULT_FILTERS;

  const sorted = [
    ...cardEntries,
  ].sort(
    compareForSort(
      filters.sort
    )
  );

  let visibleCount = 0;

  sorted.forEach((entry) => {
    /*
     * Reorder the existing DOM nodes.
     * This preserves all existing product links,
     * images, buttons and markup.
     */
    gridEl.appendChild(
      entry.el
    );

    const isMatch =
      matchesFilters(
        entry.meta,
        filters
      );

    setCardVisibility(
      entry.el,
      isMatch
    );

    if (isMatch) {
      visibleCount += 1;
    }
  });

  if (countEl) {
    countEl.textContent =
      `${visibleCount} Product${
        visibleCount === 1
          ? ""
          : "s"
      }`;
  }

  if (paginationInfoEl) {
    paginationInfoEl.textContent =
      visibleCount
        ? `Showing 1–${visibleCount} of ${visibleCount} products`
        : "Showing 0 of 0 products";
  }

  if (noResultsEl) {
    noResultsEl.classList.toggle(
      "u-hidden",
      visibleCount !== 0
    );

    noResultsEl.hidden =
      visibleCount !== 0;
  }

  /*
   * Re-apply visibility after the DOM has been
   * reordered, then refresh AOS.
   */
  window.requestAnimationFrame(() => {
    sorted.forEach((entry) => {
      const isMatch =
        matchesFilters(
          entry.meta,
          filters
        );

      setCardVisibility(
        entry.el,
        isMatch
      );
    });

    refreshAOS();
  });
}

function updateFilter(patch) {
  const current =
    appState.get(
      "productFilters"
    ) || DEFAULT_FILTERS;

  appState.set(
    "productFilters",
    {
      ...DEFAULT_FILTERS,
      ...current,
      ...patch,
    }
  );
}

function bindDepartmentFilter() {
  qsa(
    "[data-js='filter-department'] input[name='department']"
  ).forEach((el) => {
    el.addEventListener(
      "change",
      () => {
        if (el.checked) {
          updateFilter({
            department:
              el.value || null,
          });
        }
      }
    );
  });
}

function bindCheckboxGroup(
  dataJsAttr,
  filterKey
) {
  const container =
    qs(
      `[data-js='${dataJsAttr}']`
    );

  if (!container) {
    return;
  }

  qsa(
    "input[type='checkbox']",
    container
  ).forEach((el) => {
    el.addEventListener(
      "change",
      () => {
        const checked =
          qsa(
            "input[type='checkbox']:checked",
            container
          ).map(
            (checkbox) =>
              checkbox.value
          );

        updateFilter({
          [filterKey]: checked,
        });
      }
    );
  });
}

function bindAvailabilityFilter() {
  qsa(
    "[data-js='filter-availability'] input[name='availability']"
  ).forEach((el) => {
    el.addEventListener(
      "change",
      () => {
        if (el.checked) {
          updateFilter({
            availability:
              el.value || null,
          });
        }
      }
    );
  });
}

function bindPriceFilter() {
  const applyBtn = qs(
    "[data-js='apply-price-filter']"
  );

  if (!applyBtn) {
    console.warn(
      "Price filter Apply button not found."
    );
    return;
  }

  applyBtn.addEventListener(
    "click",
    function (event) {
      event.preventDefault();

      const minInput = qs("#minPrice");
      const maxInput = qs("#maxPrice");

      const minValue =
        minInput && minInput.value !== ""
          ? Number(minInput.value)
          : null;

      const maxValue =
        maxInput && maxInput.value !== ""
          ? Number(maxInput.value)
          : null;

      /*
       * Validate the values.
       */
      const minPrice =
        Number.isFinite(minValue) &&
        minValue >= 0
          ? minValue
          : null;

      const maxPrice =
        Number.isFinite(maxValue) &&
        maxValue >= 0
          ? maxValue
          : null;

      /*
       * If both values exist but Min > Max,
       * don't apply an invalid range.
       */
      if (
        minPrice !== null &&
        maxPrice !== null &&
        minPrice > maxPrice
      ) {
        alert(
          "Minimum price cannot be greater than maximum price."
        );
        return;
      }

      /*
       * Update the global filter state.
       * The appState subscription will automatically
       * call applyFilters().
       */
      updateFilter({
        minPrice,
        maxPrice,
      });
    }
  );
}

function bindSortFilter() {
  const sortSelect =
    qs(
      "[data-js='product-sort']"
    );

  if (!sortSelect) {
    return;
  }

  sortSelect.addEventListener(
    "change",
    () => {
      updateFilter({
        sort:
          sortSelect.value ||
          "createdAt-desc",
      });
    }
  );
}

function bindSearchFilter() {
  const searchInput =
    qs(
      "[data-js='product-search']"
    );

  if (!searchInput) {
    return;
  }

  searchInput.addEventListener(
    "input",
    debounce(
      (event) => {
        updateFilter({
          search:
            event.target.value.trim(),
        });
      },
      250
    )
  );

  const clearBtn =
    qs(
      "[data-js='product-search-clear']"
    );

  if (clearBtn) {
    clearBtn.addEventListener(
      "click",
      () => {
        searchInput.value = "";

        updateFilter({
          search: "",
        });
      }
    );
  }
}

function resetFilterControlsToDefault() {
  qsa(
    "[data-js='filter-department'] input, " +
    "[data-js='filter-availability'] input"
  ).forEach((el) => {
    el.checked =
      el.value === "";
  });

  qsa(
    "[data-js='filter-category'] input, " +
    "[data-js='filter-brand'] input"
  ).forEach((el) => {
    el.checked = false;
  });

  const minInput =
    qs("#minPrice");

  const maxInput =
    qs("#maxPrice");

  if (minInput) {
    minInput.value = "";
  }

  if (maxInput) {
    maxInput.value = "";
  }

  const searchInput =
    qs(
      "[data-js='product-search']"
    );

  if (searchInput) {
    searchInput.value = "";
  }

  const sortSelect =
    qs(
      "[data-js='product-sort']"
    );

  if (sortSelect) {
    sortSelect.value =
      "createdAt-desc";
  }
}

function bindClearFilters() {
  const clearBtn =
    qs(
      "[data-js='clear-filters']"
    );

  if (!clearBtn) {
    return;
  }

  clearBtn.addEventListener(
    "click",
    () => {
      resetFilterControlsToDefault();

      appState.set(
        "productFilters",
        {
          ...DEFAULT_FILTERS,
        }
      );
    }
  );
}

export function init() {
  const filterBar =
    qs(
      "[data-js='filters-sidebar']"
    );

  gridEl =
    qs(
      "[data-js='products-grid']"
    );

  if (!filterBar || !gridEl) {
    return;
  }

  countEl =
    qs(
      "[data-js='products-count']"
    );

  paginationInfoEl =
    qs(
      "[data-js='pagination-info']"
    );

  noResultsEl =
    qs(
      "[data-js='products-no-results']"
    );

  /*
   * Build the product index before subscribing
   * to state changes.
   */
  buildCardIndex();

  /*
   * Start with all filters cleared.
   */
  appState.set(
    "productFilters",
    {
      ...DEFAULT_FILTERS,
    }
  );

  appState.subscribe(
    "productFilters",
    applyFilters
  );

  bindDepartmentFilter();

  bindCheckboxGroup(
    "filter-category",
    "categories"
  );

  bindCheckboxGroup(
    "filter-brand",
    "brands"
  );

  bindAvailabilityFilter();
  bindPriceFilter();
  bindSortFilter();
  bindSearchFilter();
  bindClearFilters();

  /*
   * Initial render.
   * This explicitly makes all matching product cards
   * visible, including cards carrying data-aos.
   */
  applyFilters();
}

export default {
  init,
};