/* ==========================================================================
   job-list.js — Fetches & renders open positions on careers.html, with
   department/job-type filters bound to appState.jobFilters.
   ========================================================================== */
import { qs, qsa, createEl } from "../core/dom-utils.js";
import { get } from "../core/http-client.js";
import { ENDPOINTS } from "../config/api.config.js";
import { appState } from "../core/state.js";
import { showSkeleton, hideSkeleton } from "../components/skeleton.js";
import { renderPagination } from "../components/pagination.js";
import { showToast } from "../components/toast.js";

let listEl = null;
let paginationEl = null;
let emptyStateEl = null;

function renderJobRow(job) {
  return createEl("article", { className: "job-row" }, [
    createEl("div", { className: "job-row__main" }, [
      createEl("h3", { className: "job-row__title" }, [
        createEl("a", { href: `job-details.html?slug=${job.slug}` }, job.title),
      ]),
      createEl("div", { className: "job-row__meta" }, [
        createEl("span", { className: "job-row__department" }, job.department || ""),
        createEl("span", { className: "job-row__location" }, job.location || ""),
        createEl("span", { className: `badge badge--type` }, job.jobType || ""),
      ]),
    ]),
    createEl("a", { href: `job-details.html?slug=${job.slug}`, className: "btn btn--primary btn--sm" }, "View & Apply"),
  ]);
}

function bindFilters() {
  qsa("[data-js='job-filter-department']").forEach((el) => {
    el.addEventListener("change", () => {
      const current = appState.get("jobFilters");
      appState.set("jobFilters", { ...current, department: el.value || null, page: 1 });
    });
  });

  qsa("[data-js='job-filter-type']").forEach((el) => {
    el.addEventListener("change", () => {
      const current = appState.get("jobFilters");
      appState.set("jobFilters", { ...current, jobType: el.value || null, page: 1 });
    });
  });
}

async function loadJobs() {
  const filters = appState.get("jobFilters");
  showSkeleton(listEl, "job", 5);
  if (emptyStateEl) emptyStateEl.hidden = true;

  try {
    const response = await get(ENDPOINTS.JOBS.LIST, {
      department: filters.department,
      jobType: filters.jobType,
      page: filters.page,
    });

    hideSkeleton(listEl);

    const jobs = response.data || [];
    if (jobs.length === 0) {
      if (emptyStateEl) emptyStateEl.hidden = false;
      if (paginationEl) paginationEl.innerHTML = "";
      return;
    }

    jobs.forEach((job) => listEl.appendChild(renderJobRow(job)));
    document.dispatchEvent(new CustomEvent("gada:content-updated"));

    const meta = response.meta || { currentPage: filters.page, totalPages: 1 };
    renderPagination(paginationEl, meta, (page) => {
      appState.set("jobFilters", { ...filters, page });
    });
  } catch (err) {
    hideSkeleton(listEl);
    showToast(err.message || "Failed to load open positions.", "error");
  }
}

export function init() {
  listEl = qs("[data-js='job-list']");
  if (!listEl) return;

  paginationEl = qs("[data-js='job-pagination']");
  emptyStateEl = qs("[data-js='job-empty-state']");

  bindFilters();
  appState.subscribe("jobFilters", loadJobs);
  loadJobs();
}

export default { init };