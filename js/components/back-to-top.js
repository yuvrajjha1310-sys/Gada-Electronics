/* ==========================================================================
   back-to-top.js
   Gada Electronics — "Back to top" floating button.
   Appears after scrollY > 600px (per FRONTEND_GUIDELINES.md §15).
   Smooth-scrolls to top; respects prefers-reduced-motion automatically
   via native scroll-behavior (no GSAP dependency needed for this one).
   ========================================================================== */

import { qs, throttle } from "../core/dom-utils.js";

const SHOW_THRESHOLD = 600;
const VISIBLE_CLASS = "is-visible";

export function init() {
  const buttonEl = qs("[data-js='back-to-top']");
  if (!buttonEl) return;

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    buttonEl.classList.toggle(VISIBLE_CLASS, scrollY > SHOW_THRESHOLD);
  }

  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Move focus to the skip-link/logo for keyboard users after scroll settles
    const logo = qs("[data-js='site-logo']");
    if (logo) {
      setTimeout(() => logo.focus({ preventScroll: true }), 400);
    }
  }

  buttonEl.setAttribute("aria-label", "Back to top");
  buttonEl.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", throttle(handleScroll, 150), { passive: true });

  handleScroll(); // run once in case page loads mid-scroll (anchor link, refresh)
}

export default { init };