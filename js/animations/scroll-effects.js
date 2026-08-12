/* ==========================================================================
   scroll-effects.js — GSAP ScrollTrigger-based reveal/pin/scrub effects
   that go beyond simple AOS fades: staggered card reveals, section pinning,
   progress-driven fills (e.g. certifications timeline). Assumes gsap-init.js
   has already run and registered ScrollTrigger.
   ========================================================================== */
import { qsa } from "../core/dom-utils.js";

function initStaggerReveals() {
  qsa("[data-js='stagger-reveal']").forEach((container) => {
    const items = qsa("[data-js='stagger-item']", container);
    if (items.length === 0) return;

    window.gsap.from(items, {
      y: 32,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}

function initTimelineProgress() {
  qsa("[data-js='timeline-progress']").forEach((track) => {
    const fill = track.querySelector("[data-js='timeline-fill']");
    if (!fill) return;

    window.gsap.to(fill, {
      scaleY: 1,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: track,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 0.5,
      },
    });
  });
}

function initPinnedSections() {
  qsa("[data-js='pin-section']").forEach((section) => {
    window.ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
    });
  });
}

export function init() {
  const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  if (!hasGsap) {
    console.warn("[scroll-effects] GSAP/ScrollTrigger not available — skipping init.");
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return; // AOS/CSS handle the reduced-motion baseline

  initStaggerReveals();
  initTimelineProgress();
  initPinnedSections();
}

export default { init };