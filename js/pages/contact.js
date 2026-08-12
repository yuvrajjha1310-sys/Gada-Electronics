/* ==========================================================================
   contact.js — Page bootstrap for contact.html.
   Delegates form handling to modules/contact-form.js; this file only
   wires the office-location card click-to-scroll (if multiple office
   cards are shown) and initializes any embedded map iframe lazy-load.
   ========================================================================== */
import { qs, qsa } from "../core/dom-utils.js";
import * as contactForm from "../modules/contact-form.js";

function initOfficeCardSelection() {
  const officeCards = qsa("[data-js='office-card']");
  if (officeCards.length <= 1) return;

  officeCards.forEach((card) => {
    card.addEventListener("click", () => {
      officeCards.forEach((c) => c.classList.remove("is-selected"));
      card.classList.add("is-selected");

      const mapFrame = qs("[data-js='office-map']");
      const mapSrc = card.dataset.mapEmbedUrl;
      if (mapFrame && mapSrc) {
        mapFrame.src = mapSrc;
      }
    });
  });
}

function initLazyMapLoad() {
  // Defer loading the map iframe until it scrolls into view, since
  // embedded maps are one of the heaviest third-party resources on the page.
  const mapFrame = qs("[data-js='office-map']");
  if (!mapFrame || !mapFrame.dataset.src) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mapFrame.src = mapFrame.dataset.src;
          obs.unobserve(mapFrame);
        }
      });
    },
    { rootMargin: "200px" }
  );

  observer.observe(mapFrame);
}

export function init() {
  if (!qs("[data-js='contact-page']")) return;

  contactForm.init();
  initOfficeCardSelection();
  initLazyMapLoad();
}

export default { init };