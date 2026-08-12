/* ==========================================================================
   accordion.js — FAQ accordion, mobile-menu submenus, spec breakdowns.
   Supports single-open (data-accordion-mode="single") or multi-open.
   ========================================================================== */
import { qsa } from "../core/dom-utils.js";

function togglePanel(item, allItems, mode) {
  const trigger = item.querySelector("[data-js='accordion-trigger']");
  const panel = item.querySelector("[data-js='accordion-panel']");
  const isOpen = item.classList.contains("is-open");

  if (mode === "single" && !isOpen) {
    allItems.forEach((otherItem) => {
      if (otherItem !== item) closePanel(otherItem);
    });
  }

  isOpen ? closePanel(item) : openPanel(item, trigger, panel);
}

function openPanel(item, trigger, panel) {
  item.classList.add("is-open");
  trigger.setAttribute("aria-expanded", "true");
  panel.style.height = "0px";
  panel.hidden = false;
  requestAnimationFrame(() => {
    panel.style.height = `${panel.scrollHeight}px`;
  });
  panel.addEventListener(
    "transitionend",
    () => {
      panel.style.height = "auto";
    },
    { once: true }
  );
}

function closePanel(item) {
  const trigger = item.querySelector("[data-js='accordion-trigger']");
  const panel = item.querySelector("[data-js='accordion-panel']");
  if (!item.classList.contains("is-open")) return;

  panel.style.height = `${panel.scrollHeight}px`;
  requestAnimationFrame(() => {
    panel.style.height = "0px";
  });
  item.classList.remove("is-open");
  trigger.setAttribute("aria-expanded", "false");

  panel.addEventListener(
    "transitionend",
    () => {
      if (!item.classList.contains("is-open")) panel.hidden = true;
    },
    { once: true }
  );
}

export function init() {
  qsa("[data-js='accordion']").forEach((accordionEl) => {
    const mode = accordionEl.dataset.accordionMode || "multi";
    const items = qsa("[data-js='accordion-item']", accordionEl);

    items.forEach((item) => {
      const trigger = item.querySelector("[data-js='accordion-trigger']");
      const panel = item.querySelector("[data-js='accordion-panel']");
      if (!trigger || !panel) return;

      panel.hidden = !item.classList.contains("is-open");
      trigger.setAttribute("aria-expanded", item.classList.contains("is-open") ? "true" : "false");

      trigger.addEventListener("click", () => togglePanel(item, items, mode));
    });
  });
}

export default { init };