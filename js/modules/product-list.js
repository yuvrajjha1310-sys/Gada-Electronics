/* ==========================================================================
   product-list.js — Fetches & renders the product grid on products.html
   (and category-scoped variants). Reads active filters from appState,
   shows skeleton while loading, renders pagination.
   ========================================================================== */
import { qs, createEl } from "../core/dom-utils.js";
import { get } from "../core/http-client.js";
import { ENDPOINTS } from "../config/api.config.js";
import { appState } from "../core/state.js";
import { showSkeleton, hideSkeleton } from "../components/skeleton.js";
import { renderPagination } from "../components/pagination.js";
import { showToast } from "../components/toast.js";

let gridEl = null;
let paginationEl = null;
let emptyStateEl = null;
let countEl = null;
let paginationInfoEl = null;
let hasLoadedOnce = false;

function renderProductCard(product) {
  const detailsUrl = `product-details.html?slug=${product.slug}`;
  const brandName = product.brand && product.brand.name;
  const price = product.discountPrice || product.price;
  const inStock = (product.stockQty || 0) > 0;

  return createEl("div", { className: "card product-card" }, [
    createEl("div", { className: "card__media" }, [
      createEl("div", { className: "product-card__quick-actions" }, [
        createEl("button", { "aria-label": "Add to wishlist" }, createEl("i", { className: "fa-regular fa-heart" })),
        createEl("a", { href: detailsUrl, "aria-label": "View details" }, createEl("i", { className: "fa-solid fa-eye" })),
      ]),
      createEl("img", {
        src: product.primaryImage || "assets/images/products/placeholders/product-placeholder.jpg",
        alt: product.name,
        loading: "lazy",
      }),
    ]),
    createEl("div", { className: "card__body" }, [
      brandName ? createEl("p", { className: "product-card__brand" }, brandName) : null,
      createEl("h3", { className: "card__title" }, [createEl("a", { href: detailsUrl }, product.name)]),
      createEl("div", { className: "product-card__price" }, [
        createEl("span", { className: "product-card__price-current" }, `₹${Number(price).toLocaleString("en-IN")}`),
      ]),
      createEl("div", { className: "card__footer" }, [
        createEl("span", { className: `badge badge--status-${inStock ? "in-stock" : "out-of-stock"}` }, inStock ? "In Stock" : "Out of Stock"),
      ]),
    ]),
  ]);
}

async function loadProducts() {
  const filters = appState.get("productFilters");

  // Keep the server-rendered demo cards visible for the very first paint —
  // only swap to skeletons once we know we're actually fetching (i.e. after
  // the user has touched a filter, or the initial load succeeds).
  const previousHtml = gridEl.innerHTML;
  showSkeleton(gridEl, "product", 8);
  if (emptyStateEl) emptyStateEl.hidden = true;

  try {
    const response = await get(ENDPOINTS.PRODUCTS.LIST, {
      category: filters.category,
      brand: filters.brand,
      search: filters.search,
      sort: filters.sort,
      page: filters.page,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      // Not part of the documented contract (API_CONTRACT.md §3.1) yet — sent
      // anyway so this "just works" once the backend adds support; unknown
      // params are ignored by a spec-compliant server in the meantime.
      department: filters.department,
      availability: filters.availability,
    });

    hideSkeleton(gridEl);

    const products = (response.data && response.data.items) || [];
    const pagination = (response.data && response.data.pagination) || { page: filters.page, totalPages: 1, totalItems: products.length };

    if (products.length === 0) {
      if (emptyStateEl) emptyStateEl.hidden = false;
      if (paginationEl) paginationEl.innerHTML = "";
      if (countEl) countEl.textContent = "0 Products";
      if (paginationInfoEl) paginationInfoEl.textContent = "Showing 0 of 0 products";
      hasLoadedOnce = true;
      return;
    }

    products.forEach((product) => gridEl.appendChild(renderProductCard(product)));
    document.dispatchEvent(new CustomEvent("gada:content-updated"));

    if (countEl) countEl.textContent = `${pagination.totalItems} Product${pagination.totalItems === 1 ? "" : "s"}`;
    if (paginationInfoEl) {
      const start = (pagination.page - 1) * (pagination.limit || products.length) + 1;
      const end = Math.min(pagination.page * (pagination.limit || products.length), pagination.totalItems);
      paginationInfoEl.textContent = `Showing ${start}–${end} of ${pagination.totalItems} products`;
    }

    renderPagination(paginationEl, { currentPage: pagination.page, totalPages: pagination.totalPages }, (page) => {
      appState.set("productFilters", { ...filters, page });
    });

    hasLoadedOnce = true;
  } catch (err) {
    if (!hasLoadedOnce) {
      // No backend reachable yet (e.g. static preview) — restore the
      // original markup instead of leaving the grid empty/broken.
      gridEl.innerHTML = previousHtml;
      if (paginationEl) paginationEl.setAttribute("aria-busy", "false");
    } else {
      hideSkeleton(gridEl);
    }
    showToast(err.message || "Failed to load products.", "error");
  }
}

export function init() {
  gridEl = qs("[data-js='products-grid']");
  if (!gridEl) return;

  paginationEl = qs("[data-js='products-pagination']");
  emptyStateEl = qs("[data-js='products-no-results']");
  countEl = qs("[data-js='products-count']");
  paginationInfoEl = qs("[data-js='pagination-info']");

  appState.subscribe("productFilters", loadProducts);
  loadProducts();
}

export default { init };