/* ==========================================================================
   quality.js — Page bootstrap for quality.html.
   Static content (quality policy, process/inspection timeline). The
   timeline-progress GSAP effect is already handled globally by
   animations/scroll-effects.js — this file only wires the "Download
   Quality Policy PDF" tracking hook (analytics-ready no-op for now).
   ========================================================================== */
import { qs } from "../core/dom-utils.js";

function initPolicyDownloadTracking() {
  const downloadLink = qs("[data-js='quality-policy-download']");
  if (!downloadLink) return;

  downloadLink.addEventListener("click", () => {
    // Placeholder hook for analytics (GA4/GTM event) once wired up.
    document.dispatchEvent(new CustomEvent("gada:track", {
      detail: { event: "quality_policy_download" },
    }));
  });
}

export function init() {
  if (!qs("[data-js='quality-page']")) return;
  initPolicyDownloadTracking();
}

export default { init };