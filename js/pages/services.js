/* ==========================================================================
   services.js — Page bootstrap for services.html.
   Static content page (service cards + process-steps timeline). Tabs/
   accordion for "What's included" per service already handled by global
   components; this file only wires the process-step scroll-spy that
   highlights the current step's nav dot as the user scrolls.
   ========================================================================== */
import { qs, qsa, throttle } from "../core/dom-utils.js";

function initStepScrollSpy() {
  const steps = qsa("[data-js='process-step']");
  const navDots = qsa("[data-js='process-nav-dot']");
  if (steps.length === 0 || navDots.length === 0) return;

  function updateActiveDot() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    let activeIndex = 0;

    steps.forEach((step, index) => {
      if (step.offsetTop <= scrollPos) activeIndex = index;
    });

    navDots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));
  }

  window.addEventListener("scroll", throttle(updateActiveDot, 150), { passive: true });
  updateActiveDot();
}

export function init() {
  if (!qs("[data-js='services-page']")) return;
  initStepScrollSpy();
}

export default { init };