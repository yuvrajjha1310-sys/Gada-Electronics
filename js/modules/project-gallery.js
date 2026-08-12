/* ==========================================================================
   project-gallery.js — Fetches & renders the project grid on projects.html.
   Mirrors product-list.js structure but keyed to projectFilters/PROJECTS
   endpoints.
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

function renderProjectCard(project) {
  return createEl("article", { className: "card card--project" }, [
    createEl("a", { href: `project-details.html?slug=${project.slug}`, className: "card__image-link" }, [
      createEl("img", {
        src: project.thumbnailImage || "assets/images/projects/placeholder.jpg",
        alt: project.title,
        loading: "lazy",
      }),
      createEl("span", { className: `badge badge--${(project.status || "").toLowerCase()}` }, project.status || ""),
    ]),
    createEl("div", { className: "card__body" }, [
      createEl("span", { className: "card__eyebrow" }, project.categoryName || ""),
      createEl("h3", { className: "card__title" }, [
        createEl("a", { href: `project-details.html?slug=${project.slug}` }, project.title),
      ]),
      createEl("p", { className: "card__meta" }, project.clientName || ""),
    ]),
  ]);
}

async function loadProjects() {
  const filters = appState.get("projectFilters");
  showSkeleton(gridEl, "project", 6);
  if (emptyStateEl) emptyStateEl.hidden = true;

  try {
    const response = await get(ENDPOINTS.PROJECTS.LIST, {
      category: filters.category,
      status: filters.status,
      page: filters.page,
    });

    hideSkeleton(gridEl);

    const projects = response.data || [];
    if (projects.length === 0) {
      if (emptyStateEl) emptyStateEl.hidden = false;
      if (paginationEl) paginationEl.innerHTML = "";
      return;
    }

    projects.forEach((project) => gridEl.appendChild(renderProjectCard(project)));
    document.dispatchEvent(new CustomEvent("gada:content-updated"));

    const meta = response.meta || { currentPage: filters.page, totalPages: 1 };
    renderPagination(paginationEl, meta, (page) => {
      appState.set("projectFilters", { ...filters, page });
    });
  } catch (err) {
    hideSkeleton(gridEl);
    showToast(err.message || "Failed to load projects.", "error");
  }
}

export function init() {
  gridEl = qs("[data-js='project-grid']");
  if (!gridEl) return;

  paginationEl = qs("[data-js='project-pagination']");
  emptyStateEl = qs("[data-js='project-empty-state']");

  appState.subscribe("projectFilters", loadProjects);
  loadProjects();
}

export default { init };