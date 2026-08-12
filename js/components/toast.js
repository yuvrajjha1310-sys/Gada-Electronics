/* ==========================================================================
   toast.js
   Gada Electronics — Toast notification system.
   Bottom-right (desktop) / bottom-center (mobile) via CSS, stacks
   vertically, auto-dismiss after 4s with hover-to-pause. Variants map
   to semantic colors (success/error/warning/info). Exports init() +
   a showToast() function other modules import directly.
   ========================================================================== */

import { createEl, qs } from "../core/dom-utils.js";

const AUTO_DISMISS_MS = 4000;
const ICONS = {
  success: "fa-circle-check",
  error: "fa-circle-exclamation",
  warning: "fa-triangle-exclamation",
  info: "fa-circle-info",
};

let containerEl = null;

function ensureContainer() {
  if (containerEl) return containerEl;

  containerEl = qs("[data-js='toast-container']");
  if (!containerEl) {
    containerEl = createEl("div", {
      className: "toast-container",
      dataset: { js: "toast-container" },
      "aria-live": "polite",
      "aria-atomic": "false",
    });
    document.body.appendChild(containerEl);
  }
  return containerEl;
}

function removeToast(toastEl) {
  toastEl.classList.add("is-leaving");
  toastEl.addEventListener(
    "transitionend",
    () => {
      toastEl.remove();
    },
    { once: true }
  );
}

/**
 * Shows a toast notification.
 * @param {string} message
 * @param {'success'|'error'|'warning'|'info'} variant
 * @param {number} [duration] - ms before auto-dismiss; pass 0 to persist until closed manually
 */
export function showToast(message, variant = "info", duration = AUTO_DISMISS_MS) {
  const container = ensureContainer();

  const toastEl = createEl(
    "div",
    {
      className: `toast toast--${variant}`,
      role: variant === "error" ? "alert" : "status",
    },
    [
      createEl("i", { className: `toast__icon fa-solid ${ICONS[variant] || ICONS.info}` }),
      createEl("p", { className: "toast__message" }, message),
      createEl("button", {
        className: "toast__close",
        "aria-label": "Dismiss notification",
        html: '<i class="fa-solid fa-xmark"></i>',
        onClick: () => removeToast(toastEl),
      }),
    ]
  );

  container.appendChild(toastEl);
  requestAnimationFrame(() => toastEl.classList.add("is-visible"));

  if (duration > 0) {
    let timeoutId = setTimeout(() => removeToast(toastEl), duration);

    toastEl.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    toastEl.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => removeToast(toastEl), duration);
    });
  }

  return toastEl;
}

/**
 * init() just prepares the container up front so it's ready the
 * instant any module calls showToast() (forms, etc).
 */
export function init() {
  ensureContainer();
}

export default { init, showToast };