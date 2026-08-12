/* ==========================================================================
   modal.js — Accessible modal dialogs (enquiry popups, image previews,
   confirmations). Traps focus, restores on close, Esc + overlay-click close.
   ========================================================================== */
import { qs, qsa, trapFocus } from "../core/dom-utils.js";
import { appState } from "../core/state.js";

let releaseFocusTrap = null;
let lastFocusedEl = null;

function openModal(modalId) {
  const modalEl = document.getElementById(modalId);
  if (!modalEl) return;

  lastFocusedEl = document.activeElement;
  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-modal-open");
  appState.set("activeModal", modalId);
  releaseFocusTrap = trapFocus(modalEl);
}

function closeModal(modalEl) {
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("has-modal-open");
  appState.set("activeModal", null);

  if (releaseFocusTrap) {
    releaseFocusTrap();
    releaseFocusTrap = null;
  }
  if (lastFocusedEl) lastFocusedEl.focus();
}

export function init() {
  // Triggers: <button data-js="modal-trigger" data-modal-target="enquiryModal">
  qsa("[data-js='modal-trigger']").forEach((trigger) => {
    trigger.addEventListener("click", () => openModal(trigger.dataset.modalTarget));
  });

  qsa("[data-js='modal']").forEach((modalEl) => {
    modalEl.setAttribute("aria-hidden", "true");

    qsa("[data-js='modal-close']", modalEl).forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => closeModal(modalEl));
    });

    modalEl.addEventListener("click", (event) => {
      if (event.target === modalEl) closeModal(modalEl); // overlay click
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openEl = qs("[data-js='modal'].is-open");
    if (openEl) closeModal(openEl);
  });
}

/** Programmatic API for other modules (e.g. product quick-view). */
export function open(modalId) {
  openModal(modalId);
}
export function close(modalId) {
  const el = document.getElementById(modalId);
  if (el) closeModal(el);
}

export default { init, open, close };