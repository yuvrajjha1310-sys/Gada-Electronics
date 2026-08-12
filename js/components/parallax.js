/* ==========================================================================
   parallax.js — Subtle scroll parallax (hero backgrounds, section
   accents). Max 15–20% translate offset per FRONTEND_GUIDELINES.md §7.
   Uses GSAP if available, falls back to a lightweight rAF loop.
   Respects prefers-reduced-motion (disabled entirely).
   ========================================================================== */
import { qsa } from "../core/dom-utils.js";

const MAX_OFFSET_RATIO = 0.18; // 18% — stays within the 15–20% guideline

function initWithGsap(elements) {
  elements.forEach((el) => {
    const speed = parseFloat(el.dataset.parallaxSpeed || "0.3");
    window.gsap.to(el, {
      yPercent: speed * 100 * MAX_OFFSET_RATIO,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("[data-js='parallax-section']") || el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

function initWithRaf(elements) {
  function update() {
    const viewportHeight = window.innerHeight;

    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallaxSpeed || "0.3");
      const rect = el.getBoundingClientRect();
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const offset = (progress - 0.5) * speed * MAX_OFFSET_RATIO * 100;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export function init() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const elements = qsa("[data-js='parallax']");
  if (elements.length === 0) return;

  const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  hasGsap ? initWithGsap(elements) : initWithRaf(elements);
}

export default { init };