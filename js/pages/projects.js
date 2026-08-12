/* ==========================================================================
   projects.js — Page bootstrap for projects.html.
   Delegates to modules/project-gallery.js (fetch/render) and
   modules/project-filters.js (category/status filter controls).
   ========================================================================== */
import { qs } from "../core/dom-utils.js";
import * as projectGallery from "../modules/project-gallery.js";
import * as projectFilters from "../modules/project-filters.js";

export function init() {
  if (!qs("[data-js='projects-page']")) return;

  projectFilters.init();
  projectGallery.init();
}

export default { init };