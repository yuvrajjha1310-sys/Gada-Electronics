/* ==========================================================================
   job-details.js — Page bootstrap for job-details.html.
   Fetches a single job by ?slug= from JOBS.DETAILS, populates the job
   description/requirements, and initializes modules/application-form.js
   with the resolved jobId once the job loads.
   ========================================================================== */
import { qs } from "../core/dom-utils.js";
import { get } from "../core/http-client.js";
import { ENDPOINTS } from "../config/api.config.js";
import { showToast } from "../components/toast.js";
import * as applicationForm from "../modules/application-form.js";

function getSlugFromUrl() {
  return new URLSearchParams(window.location.search).get("slug");
}

function populateTextFields(job) {
  const setText = (selector, value) => {
    const el = qs(selector);
    if (el) el.textContent = value || "";
  };
  const setHtml = (selector, value) => {
    const el = qs(selector);
    if (el) el.innerHTML = value || "";
  };

  setText("[data-js='job-title']", job.title);
  setText("[data-js='job-department']", job.department);
  setText("[data-js='job-location']", job.location);
  setText("[data-js='job-type']", job.jobType);
  setHtml("[data-js='job-description']", job.description);
  setHtml("[data-js='job-requirements']", job.requirements);
  document.title = `${job.title} — Careers at Gada Electronics`;
}

async function loadJob() {
  const slug = getSlugFromUrl();
  if (!slug) {
    window.location.href = "careers.html";
    return;
  }

  try {
    const { data: job } = await get(ENDPOINTS.JOBS.DETAILS(slug));
    populateTextFields(job);

    const formEl = qs("[data-js='application-form']");
    if (formEl) formEl.dataset.jobId = job.id;

    applicationForm.init();
    document.dispatchEvent(new CustomEvent("gada:content-updated"));
  } catch (err) {
    showToast("This position is no longer available.", "error");
    setTimeout(() => (window.location.href = "careers.html"), 1500);
  }
}

export function init() {
  if (!qs("[data-js='job-details-page']")) return;
  loadJob();
}

export default { init };