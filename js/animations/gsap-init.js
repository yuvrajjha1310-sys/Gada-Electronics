/* ==========================================================================
   gsap-init.js — Registers GSAP plugins used across the site (ScrollTrigger
   for parallax.js/scroll-effects.js). Assumes global gsap from
   js/vendor/gsap.min.js. No-ops gracefully if GSAP isn't loaded on a page
   that doesn't need it.
   ========================================================================== */

export function init() {
  if (typeof window.gsap === "undefined") {
    console.warn("[gsap-init] Vendor GSAP not loaded — skipping init.");
    return;
  }

  if (typeof window.ScrollTrigger !== "undefined") {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  // Global GSAP defaults keep motion consistent with FRONTEND_GUIDELINES.md
  // §7 (timing/easing tokens) without repeating them in every call site.
  window.gsap.defaults({
    ease: "power2.out",
    duration: 0.6,
  });

  // Respect reduced-motion globally: instantly finish any GSAP tween
  // instead of skipping animations ad hoc in every module.
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    window.gsap.globalTimeline.timeScale(50); // effectively instant
  }
}

export default { init };