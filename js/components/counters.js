/* ==========================================================================
   counters.js — Animated number counters (stat bands), count once on
   scroll-into-view via IntersectionObserver. Respects reduced-motion.
   ========================================================================== */
import { qsa } from "../core/dom-utils.js";

function animateCounter(el) {
  const target = parseFloat(el.dataset.countTo || el.textContent);
  const duration = parseInt(el.dataset.countDuration || "1800", 10);
  const prefix = el.dataset.countPrefix || "";
  const suffix = el.dataset.countSuffix || "";
  const decimals = el.dataset.countDecimals ? parseInt(el.dataset.countDecimals, 10) : 0;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
    return;
  }

  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // power2/3 out
    const current = target * eased;
    el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
  }
  requestAnimationFrame(tick);
}

export function init() {
  const counters = qsa("[data-js='counter']");
  if (counters.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
}

export default { init };