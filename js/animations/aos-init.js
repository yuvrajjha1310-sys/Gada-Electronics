/* ==========================================================================
   aos-init.js — Initializes the vendor AOS (Animate On Scroll) library
   with Gada Electronics' house defaults. Assumes global AOS from
   js/vendor/aos.js + css/vendor/aos.css already loaded.
   ========================================================================== */

const AOS_DEFAULTS = {
  duration: 700,
  easing: "ease-out-quart",
  once: true,
  offset: 80,
  delay: 0,
  disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
};

export function init() {
  if (typeof window.AOS === "undefined") {
    console.warn("[aos-init] Vendor AOS not loaded — skipping init.");
    return;
  }

  window.AOS.init(AOS_DEFAULTS);

  // Re-calculate positions after dynamic content loads (product grids,
  // filtered lists) so newly-inserted [data-aos] elements animate correctly.
  document.addEventListener("gada:content-updated", () => {
    window.AOS.refreshHard();
  });
}

export default { init };