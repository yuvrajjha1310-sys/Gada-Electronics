/* ==========================================================================
   project-details.js — Page bootstrap for project-details.html.
   Fetches a single project by ?slug= from PROJECTS.DETAILS and renders
   title/description/gallery/client info. Mirrors modules/product-details.js
   but kept page-local since no other page reuses single-project rendering.
   ========================================================================== */
import { qs, createEl } from "../core/dom-utils.js";
import { get } from "../core/http-client.js";
import { ENDPOINTS } from "../config/api.config.js";
import { showToast } from "../components/toast.js";

function getSlugFromUrl() {
  return new URLSearchParams(window.location.search).get("slug");
}

function renderGallery(images = [], containerEl) {
  containerEl.innerHTML = "";
  images.forEach((img, index) => {
    containerEl.appendChild(
      createEl("a", {
        href: img.url,
        "data-lightbox-auto": "true",
        className: index === 0 ? "gallery__item is-primary" : "gallery__item",
      }, createEl("img", { src: img.url, alt: img.altText || "", loading: index === 0 ? "eager" : "lazy" }))
    );
  });
}

function populateTextFields(project) {
  const setText = (selector, value) => {
    const el = qs(selector);
    if (el) el.textContent = value || "";
  };

  setText("[data-js='project-title']", project.title);
  setText("[data-js='project-client']", project.clientName);
  setText("[data-js='project-category']", project.categoryName);
  setText("[data-js='project-status']", project.status);
  setText("[data-js='project-description']", project.description);
  document.title = `${project.title} — Gada Electronics`;
}

async function loadProject() {
  const slug = getSlugFromUrl();
  if (!slug) {
    window.location.href = "projects.html";
    return;
  }

  try {
    const { data: project } = await get(ENDPOINTS.PROJECTS.DETAILS(slug));
    populateTextFields(project);

    const galleryEl = qs("[data-js='project-gallery-detail']");
    if (galleryEl) renderGallery(project.images, galleryEl);

    document.dispatchEvent(new CustomEvent("gada:content-updated"));
  } catch (err) {
    showToast("Project not found or failed to load.", "error");
    setTimeout(() => (window.location.href = "projects.html"), 1500);
  }
}

export function init() {
  if (!qs("[data-js='project-details-page']")) return;
  loadProject();
}

export default { init };