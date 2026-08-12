/* ==========================================================================
   navbar.js
   Gada Electronics — Sticky navbar behavior.
   Transitions from transparent-on-hero to solid white with shadow after
   scrollY > 80px (per FRONTEND_GUIDELINES.md §15). Exports init().
   ========================================================================== */

import { qs, throttle } from "../core/dom-utils.js";

const SCROLL_THRESHOLD = 80;
const SCROLLED_CLASS = "is-scrolled";

let navbarEl = null;
let lastScrollY = 0;

function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  const isPastThreshold = scrollY > SCROLL_THRESHOLD;

  navbarEl.classList.toggle(SCROLLED_CLASS, isPastThreshold);

  // Optional: hide navbar on scroll-down, reveal on scroll-up (past threshold only)
  if (isPastThreshold) {
    const isScrollingDown = scrollY > lastScrollY;
    navbarEl.classList.toggle("is-hidden", isScrollingDown && scrollY > SCROLL_THRESHOLD * 3);
  } else {
    navbarEl.classList.remove("is-hidden");
  }

  lastScrollY = scrollY;
}

/**
 * Highlights the nav link matching the current page (data-nav-page on
 * <body>, matched against data-nav-link on each nav <a>).
 */
function setActiveLink() {
  const currentPage = document.body.dataset.navPage;
  if (!currentPage) return;

  const links = navbarEl.querySelectorAll("[data-nav-link]");
  links.forEach((link) => {
    const isActive = link.dataset.navLink === currentPage;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

export function init() {
  navbarEl = qs("[data-js='navbar']");
  if (!navbarEl) return;

  // Run once on load in case the page is already scrolled (e.g. anchor nav, refresh)
  handleScroll();
  setActiveLink();

  window.addEventListener("scroll", throttle(handleScroll, 100), { passive: true });
}

export default { init };