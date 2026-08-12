/* ==========================================================================
   home.js — Page bootstrap for index.html.
   Global chrome/animations already run via main.js; this file only wires
   up what's unique to the homepage (stats counters + testimonials/brand
   carousels are handled by their own components already registered in
   main.js — nothing product/API-driven lives on the homepage itself).
   ========================================================================== */
import { qs } from "../core/dom-utils.js";

function initHeroCta() {
  // Smooth-scroll "Explore Products" hero CTA to the featured-categories
  // section instead of a hard jump, if present.
  const scrollCta = qs("[data-js='hero-scroll-cta']");
  const target = qs("[data-js='featured-categories']");
  if (!scrollCta || !target) return;

  scrollCta.addEventListener("click", (event) => {
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function init() {
  if (!qs("[data-js='home-page']")) return;
  initHeroCta();
}

export default { init };