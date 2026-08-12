/* ==========================================================================
   lightbox-init.js — Initializes the vendor lightbox library for
   project-gallery and product-image-zoom use cases. Assumes the global
   `lightbox` object exported by js/vendor/lightbox.min.js is loaded first.
   ========================================================================== */
import { qsa } from "../core/dom-utils.js";

const LIGHTBOX_OPTIONS = {
  resizeDuration: 200,
  wrapAround: true,
  albumLabel: "Image %1 of %2",
  disableScrolling: true,
  fadeDuration: 250,
};

export function init() {
  if (typeof window.lightbox === "undefined") {
    console.warn("[lightbox-init] Vendor lightbox.min.js not loaded — skipping init.");
    return;
  }

  window.lightbox.option(LIGHTBOX_OPTIONS);

  // Group gallery images that don't already carry a data-lightbox
  // attribute so grids render as a single swipeable album per gallery.
  qsa("[data-js='gallery']").forEach((gallery, galleryIndex) => {
    qsa("a[data-lightbox-auto]", gallery).forEach((link) => {
      link.setAttribute("data-lightbox", `gallery-${galleryIndex}`);
    });
  });
}

export default { init };