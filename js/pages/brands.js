/* ==========================================================================
   brands.js — Page bootstrap for brands.html.
   Fetches the full brand list (partner/OEM logos + descriptions) from
   BRANDS.LIST and renders a searchable grid, since this page needs live
   brand data beyond the auto-scrolling carousel shown elsewhere.
   ========================================================================== */
import { qs, createEl, debounce } from "../core/dom-utils.js";
import { get } from "../core/http-client.js";
import { ENDPOINTS } from "../config/api.config.js";
import { showSkeleton, hideSkeleton } from "../components/skeleton.js";
import { showToast } from "../components/toast.js";

let allBrands = [];
let gridEl = null;

function renderBrandCard(brand) {
  return createEl("article", { className: "card card--brand" }, [
    createEl("img", { src: brand.logo, alt: `${brand.name} logo`, className: "card__logo", loading: "lazy" }),
    createEl("h3", { className: "card__title" }, brand.name),
    brand.description ? createEl("p", { className: "card__text" }, brand.description) : null,
  ]);
}

function renderBrands(brands) {
  gridEl.innerHTML = "";
  if (brands.length === 0) {
    gridEl.appendChild(createEl("p", { className: "empty-state" }, "No brands match your search."));
    return;
  }
  brands.forEach((brand) => gridEl.appendChild(renderBrandCard(brand)));
  document.dispatchEvent(new CustomEvent("gada:content-updated"));
}

function bindSearch() {
  const searchInput = qs("[data-js='brand-search']");
  if (!searchInput) return;

  searchInput.addEventListener(
    "input",
    debounce((event) => {
      const term = event.target.value.trim().toLowerCase();
      const filtered = term
        ? allBrands.filter((b) => b.name.toLowerCase().includes(term))
        : allBrands;
      renderBrands(filtered);
    }, 250)
  );
}

async function loadBrands() {
  showSkeleton(gridEl, "brand", 8);
  try {
    const { data } = await get(ENDPOINTS.BRANDS.LIST);
    allBrands = data || [];
    hideSkeleton(gridEl);
    renderBrands(allBrands);
  } catch (err) {
    hideSkeleton(gridEl);
    showToast(err.message || "Failed to load brands.", "error");
  }
}

export function init() {
  gridEl = qs("[data-js='brand-grid']");
  if (!gridEl) return;

  bindSearch();
  loadBrands();
}

export default { init };