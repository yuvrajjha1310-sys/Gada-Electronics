/* ==========================================================================
   industries.js — Page bootstrap for industries.html.
   Static content page (industry cards + use-case tabs), animated via
   AOS. Tabs/accordion components already init globally from main.js —
   this file just handles the "Talk to an expert" CTA scroll-to-contact
   behavior specific to this page's layout.
   ========================================================================== */
import { qs } from "../core/dom-utils.js";

function initExpertCta() {
  const ctaButtons = document.querySelectorAll("[data-js='industry-expert-cta']");
  ctaButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const industryName = btn.dataset.industryName || "";
      const subjectField = qs("[name='subject']");
      if (subjectField) {
        subjectField.value = `Industry Enquiry: ${industryName}`;
      }
    });
  });
}

export function init() {
  if (!qs("[data-js='industries-page']")) return;
  initExpertCta();
}

export default { init };