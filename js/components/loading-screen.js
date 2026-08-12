/* ==========================================================================
   loading-screen.js
   Gada Electronics — Initial page loading screen.
   Brand-mark pulse shown on first paint. Fades out once BOTH
   window.onload has fired AND a minimum display time has elapsed
   (400ms min / 1.5s max per FRONTEND_GUIDELINES.md §15), so it never
   flashes on fast connections or hangs on slow ones.
   ========================================================================== */

import { qs } from "../core/dom-utils.js";

const MIN_DISPLAY_MS = 400;
const MAX_DISPLAY_MS = 1500;
const FADE_DURATION_MS = 350;

export function init() {
  const loaderEl = qs("[data-js='loading-screen']");
  if (!loaderEl) return;

  const startTime = performance.now();
  let hasFinished = false;

  function hideLoader() {
    if (hasFinished) return;
    hasFinished = true;

    loaderEl.classList.add("is-hidden");

    setTimeout(() => {
      loaderEl.setAttribute("hidden", "");
      document.body.classList.remove("is-loading");
    }, FADE_DURATION_MS);
  }

  function attemptHide() {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
    setTimeout(hideLoader, remaining);
  }

  document.body.classList.add("is-loading");

  if (document.readyState === "complete") {
    attemptHide();
  } else {
    window.addEventListener("load", attemptHide, { once: true });
  }

  // Hard ceiling — never let the loader block the page longer than this,
  // even if window.onload is delayed by a slow third-party script/video.
  setTimeout(hideLoader, MAX_DISPLAY_MS);
}

export default { init };