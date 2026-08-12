/* ==========================================================================
   faq.js — FAQ section behavior (about/services/careers pages). Thin
   wrapper around components/accordion.js that also supports an optional
   client-side search/filter box above the FAQ list.
   ========================================================================== */
import { qs, qsa, debounce } from "../core/dom-utils.js";

function filterFaqs(searchTerm, faqItems) {
  const term = searchTerm.trim().toLowerCase();

  faqItems.forEach((item) => {
    const question = item.querySelector("[data-js='accordion-trigger']")?.textContent.toLowerCase() || "";
    const answer = item.querySelector("[data-js='accordion-panel']")?.textContent.toLowerCase() || "";
    const matches = term === "" || question.includes(term) || answer.includes(term);
    item.hidden = !matches;
  });

  const container = faqItems[0]?.closest("[data-js='faq-list']");
  if (container) {
    const visibleCount = faqItems.filter((item) => !item.hidden).length;
    const emptyState = qs("[data-js='faq-empty-state']", container.parentElement || document);
    if (emptyState) emptyState.hidden = visibleCount > 0;
  }
}

export function init() {
  const searchInput = qs("[data-js='faq-search']");
  const faqItems = qsa("[data-js='accordion-item']", qs("[data-js='faq-list']") || document);

  if (!searchInput || faqItems.length === 0) return;

  searchInput.addEventListener(
    "input",
    debounce((event) => filterFaqs(event.target.value, faqItems), 200)
  );
}

export default { init };