/* ==========================================================================
   mobile-menu.js
   Gada Electronics — Off-canvas mobile navigation.
   Toggled by the hamburger button below --bp-lg (1024px). Traps focus
   while open, restores focus to the trigger on close, Esc closes,
   locks body scroll while open. Exports init().
   ========================================================================== */

import { qs, trapFocus } from "../core/dom-utils.js";
import { appState } from "../core/state.js";

const OPEN_CLASS = "is-open";
const BODY_LOCK_CLASS = "has-mobile-menu-open";

let releaseFocusTrap = null;
let triggerEl = null;
let panelEl = null;

function openMenu() {
  panelEl.classList.add(OPEN_CLASS);
  triggerEl.setAttribute("aria-expanded", "true");
  document.body.classList.add(BODY_LOCK_CLASS);
  appState.set("isMobileMenuOpen", true);
  releaseFocusTrap = trapFocus(panelEl);
}

function closeMenu() {
  panelEl.classList.remove(OPEN_CLASS);
  triggerEl.setAttribute("aria-expanded", "false");
  document.body.classList.remove(BODY_LOCK_CLASS);
  appState.set("isMobileMenuOpen", false);

  if (releaseFocusTrap) {
    releaseFocusTrap();
    releaseFocusTrap = null;
  }
  triggerEl.focus();
}

function toggleMenu() {
  const isOpen = panelEl.classList.contains(OPEN_CLASS);
  isOpen ? closeMenu() : openMenu();
}

/**
 * Mobile menu often nests an accordion for category sub-items —
 * handle expand/collapse for those without pulling in the full
 * accordion.js component (keeps this module self-contained).
 */
function bindSubmenuToggles() {
  const submenuToggles = panelEl.querySelectorAll("[data-js='mobile-submenu-toggle']");
  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const submenu = document.getElementById(toggle.getAttribute("aria-controls"));
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      if (submenu) submenu.classList.toggle("is-open", !isExpanded);
    });
  });
}

export function init() {
  triggerEl = qs("[data-js='mobile-menu-trigger']");
  panelEl = qs("[data-js='mobile-menu-panel']");
  const closeBtn = qs("[data-js='mobile-menu-close']", panelEl || document);
  const overlay = qs("[data-js='mobile-menu-overlay']");

  if (!triggerEl || !panelEl) return;

  triggerEl.setAttribute("aria-expanded", "false");
  triggerEl.addEventListener("click", toggleMenu);

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panelEl.classList.contains(OPEN_CLASS)) {
      closeMenu();
    }
  });

  // Close automatically if viewport grows past the mobile breakpoint
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
    if (event.matches && panelEl.classList.contains(OPEN_CLASS)) {
      closeMenu();
    }
  });

  bindSubmenuToggles();
}

export default { init };