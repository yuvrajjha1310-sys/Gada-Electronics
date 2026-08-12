/* ==========================================================================
   project-filters.js — Binds category/status filter controls on
   projects.html to appState.projectFilters (project-gallery.js reacts).
   ========================================================================== */
import { qs, qsa } from "../core/dom-utils.js";
import { appState } from "../core/state.js";
import { get } from "../core/http-client.js";
import { ENDPOINTS } from "../config/api.config.js";

function updateFilter(patch) {
  const current = appState.get("projectFilters");
  appState.set("projectFilters", { ...current, ...patch, page: 1 });
}

function bindCategoryFilter() {
  qsa("[data-js='project-filter-category']").forEach((el) => {
    if (el.dataset.bound === "true") return;
    el.dataset.bound = "true";
    el.addEventListener("click", () => {
      qsa("[data-js='project-filter-category']").forEach((btn) => btn.classList.remove("is-active"));
      el.classList.add("is-active");
      updateFilter({ category: el.dataset.filterValue || null });
    });
  });
}

function bindStatusFilter() {
  qsa("[data-js='project-filter-status']").forEach((el) => {
    el.addEventListener("change", () => updateFilter({ status: el.value || null }));
  });
}

/**
 * Populates category filter pills dynamically from CATEGORIES endpoint,
 * scoped to whatever category taxonomy is shared between products/projects.
 * Replaces the static "All Projects / ..." pills rendered in the HTML
 * (which act as a no-JS/loading fallback) so the taxonomy stays in sync
 * with the backend and pills are never duplicated.
 */
async function populateCategoryPills() {
  const containerEl = qs("[data-js='project-filter-category-list']");
  if (!containerEl) return;

  try {
    const { data: categories } = await get(ENDPOINTS.CATEGORIES.LIST);

    containerEl.innerHTML = "";

    const allPill = document.createElement("button");
    allPill.type = "button";
    allPill.className = "projects-filter-bar__btn is-active";
    allPill.dataset.js = "project-filter-category";
    allPill.dataset.filterValue = "";
    allPill.textContent = "All Projects";
    containerEl.appendChild(allPill);

    categories.forEach((cat) => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "projects-filter-bar__btn";
      pill.dataset.js = "project-filter-category";
      pill.dataset.filterValue = cat.slug;
      pill.textContent = cat.name;
      containerEl.appendChild(pill);
    });
    bindCategoryFilter();
  } catch (err) {
    // Backend unreachable or endpoint failed — keep the static fallback
    // pills already rendered in the HTML (and already bound below).
    console.error("[project-filters] Failed to load categories:", err);
  }
}

export function init() {
  const filterBar = qs("[data-js='project-filter-bar']");
  if (!filterBar) return;

  bindCategoryFilter();
  bindStatusFilter();
  populateCategoryPills();
}

export default { init };