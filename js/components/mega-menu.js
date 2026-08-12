/* ==========================================================================
   mega-menu.js
   Gada Electronics — Full-width mega menu.
   Opens on click/tap (desktop and touch use the same interaction), and on
   keyboard focus for accessibility. Closes on outside click, Esc, or
   selecting a link. Exports init().
   ========================================================================== */

import { qs, qsa, trapFocus } from "../core/dom-utils.js";

const OPEN_CLASS = "is-open";

let releaseFocusTrap = null;

function isTouchDevice() {
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

function openMenu(trigger, panel) {
  trigger.classList.add(OPEN_CLASS);
  panel.classList.add(OPEN_CLASS);
  trigger.setAttribute("aria-expanded", "true");
  releaseFocusTrap = trapFocus(panel);
}

function closeMenu(trigger, panel) {
  trigger.classList.remove(OPEN_CLASS);
  panel.classList.remove(OPEN_CLASS);
  trigger.setAttribute("aria-expanded", "false");
  if (releaseFocusTrap) {
    releaseFocusTrap();
    releaseFocusTrap = null;
  }
}

function bindDesktopTrigger(trigger, panel) {
  // Hover-to-open removed — desktop now opens the panel on click,
  // same interaction as touch, plus focus-open for keyboard users.
  bindTouchTrigger(trigger, panel);
  trigger.addEventListener("focus", () => openMenu(trigger, panel));
}

function bindTouchTrigger(trigger, panel) {
  trigger.addEventListener("click", (event) => {
    const isOpen = panel.classList.contains(OPEN_CLASS);
    if (!isOpen) {
      event.preventDefault();
      // Close any other open mega-menu panel first
      qsa("[data-js='mega-menu-panel'].is-open").forEach((openPanel) => {
        if (openPanel !== panel) {
          const otherTrigger = qs(
            `[data-js='mega-menu-trigger'][aria-controls="${openPanel.id}"]`
          );
          if (otherTrigger) closeMenu(otherTrigger, openPanel);
        }
      });
      openMenu(trigger, panel);
    }
    // second tap on an already-open trigger follows the link normally
  });
}

function bindGlobalCloseHandlers(items) {
  document.addEventListener("click", (event) => {
    items.forEach(({ trigger, panel }) => {
      if (!trigger.contains(event.target) && !panel.contains(event.target)) {
        closeMenu(trigger, panel);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    items.forEach(({ trigger, panel }) => {
      if (panel.classList.contains(OPEN_CLASS)) {
        closeMenu(trigger, panel);
        trigger.focus();
      }
    });
  });
}

export function init() {
  // Mega-menu popup disabled site-wide: "Products" (and any other
  // mega-menu trigger) now behaves as a plain nav link with no
  // dropdown panel. The panel markup/CSS stay in place but are never
  // opened, so nothing is rendered.
  const triggers = qsa("[data-js='mega-menu-trigger']");

  triggers.forEach((trigger) => {
    trigger.removeAttribute("aria-haspopup");
    trigger.removeAttribute("aria-expanded");
    trigger.removeAttribute("aria-controls");
  });
}

export default { init };