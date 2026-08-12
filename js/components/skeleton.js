/* ==========================================================================
   skeleton.js — Skeleton-screen show/hide helper for content awaiting
   API responses (product grid, project gallery, job list). Shimmer
   animation itself lives in _skeleton.css; this just toggles state.
   ========================================================================== */
import { createEl, qs } from "../core/dom-utils.js";

/**
 * Renders `count` skeleton placeholder cards into `container`, matching
 * the given `variant` (maps to a CSS modifier class, e.g. "product",
 * "project", "job"). Returns the created elements for later removal.
 */
export function showSkeleton(container, variant = "product", count = 6) {
  if (!container) return [];

  container.innerHTML = "";
  container.setAttribute("aria-busy", "true");

  const cards = Array.from({ length: count }, () =>
    createEl("div", { className: `skeleton-card skeleton-card--${variant}` }, [
      createEl("div", { className: "skeleton-card__image" }),
      createEl("div", { className: "skeleton-card__line skeleton-card__line--title" }),
      createEl("div", { className: "skeleton-card__line skeleton-card__line--text" }),
      createEl("div", { className: "skeleton-card__line skeleton-card__line--text short" }),
    ])
  );

  cards.forEach((card) => container.appendChild(card));
  return cards;
}

/**
 * Clears skeleton placeholders and marks the container ready for real
 * content. Call right before rendering fetched data into `container`.
 */
export function hideSkeleton(container) {
  if (!container) return;
  container.innerHTML = "";
  container.setAttribute("aria-busy", "false");
}

/**
 * init() is a no-op — this component is invoked directly by data-driven
 * modules (product-list.js, project-gallery.js, job-list.js) rather than
 * bootstrapped globally, but exported for consistency with other components.
 */
export function init() {}

export default { init, showSkeleton, hideSkeleton };