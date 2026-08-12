/* ==========================================================================
   about.js — Page bootstrap for about.html.
   Content (mission/vision, timeline, leadership) is static markup animated
   via AOS/scroll-effects (already running from main.js). This file only
   handles the leadership-team "read more" bio toggles, which are page-
   specific and don't warrant a shared component.
   ========================================================================== */
import { qs, qsa } from "../core/dom-utils.js";

function initBioToggles() {
  qsa("[data-js='bio-toggle']").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest("[data-js='team-card']");
      const isExpanded = card.classList.toggle("is-expanded");
      toggle.textContent = isExpanded ? "Read less" : "Read more";
      toggle.setAttribute("aria-expanded", String(isExpanded));
    });
  });
}

export function init() {
  if (!qs("[data-js='about-page']")) return;
  initBioToggles();
}

export default { init };