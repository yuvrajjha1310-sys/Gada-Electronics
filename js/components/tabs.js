/* ==========================================================================
   tabs.js — Accessible tabbed panels (product specs, certifications,
   about-page content). Keyboard: arrow keys move focus, Home/End jump.
   ========================================================================== */
import { qsa } from "../core/dom-utils.js";

function activateTab(tabList, tabs, panels, newTab) {
  tabs.forEach((tab) => {
    const isSelected = tab === newTab;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    tab.classList.toggle("is-active", isSelected);
  });

  panels.forEach((panel) => {
    const isMatch = panel.id === newTab.getAttribute("aria-controls");
    panel.hidden = !isMatch;
    panel.classList.toggle("is-active", isMatch);
  });

  newTab.focus();
}

function bindTabGroup(tabList) {
  const tabs = qsa("[role='tab']", tabList);
  const panelIds = tabs.map((tab) => tab.getAttribute("aria-controls"));
  const panels = panelIds.map((id) => document.getElementById(id)).filter(Boolean);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tabList, tabs, panels, tab));

    tab.addEventListener("keydown", (event) => {
      let newIndex = null;
      if (event.key === "ArrowRight") newIndex = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") newIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") newIndex = 0;
      else if (event.key === "End") newIndex = tabs.length - 1;

      if (newIndex !== null) {
        event.preventDefault();
        activateTab(tabList, tabs, panels, tabs[newIndex]);
      }
    });
  });

  // Activate first tab (or one flagged data-default) on load
  const defaultTab = tabs.find((t) => t.dataset.default === "true") || tabs[0];
  if (defaultTab) activateTab(tabList, tabs, panels, defaultTab);
}

export function init() {
  qsa("[data-js='tabs']").forEach(bindTabGroup);
}

export default { init };