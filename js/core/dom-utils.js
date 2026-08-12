/* ==========================================================================
   dom-utils.js
   Gada Electronics — Framework-agnostic DOM helpers reused everywhere.
   Query shortcuts, element creation, event delegation, debounce/throttle,
   and small visibility/viewport helpers used by components & modules.
   ========================================================================== */

/**
 * Shorthand querySelector, scoped to a parent (defaults to document).
 */
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * Shorthand querySelectorAll, returns a real Array (not a NodeList)
 * so callers can use .map/.filter/.forEach freely.
 */
export function qsa(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

/**
 * Create a DOM element with attributes, class list, and children in one call.
 * Example:
 *   createEl('button', { className: 'btn btn--primary', dataset: { js: 'submit' } }, 'Submit')
 */
export function createEl(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);

  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "className") {
      el.className = value;
    } else if (key === "dataset") {
      Object.entries(value).forEach(([dKey, dValue]) => {
        el.dataset[dKey] = dValue;
      });
    } else if (key === "html") {
      el.innerHTML = value;
    } else if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (value !== undefined && value !== null) {
      el.setAttribute(key, value);
    }
  });

  const childArray = Array.isArray(children) ? children : [children];
  childArray.forEach((child) => {
    if (child === null || child === undefined) return;
    el.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  });

  return el;
}

/**
 * Event delegation helper: attaches one listener on `parent` and only
 * fires the callback when the event target matches `selector`.
 * Returns an unsubscribe function.
 */
export function on(parent, eventType, selector, callback) {
  const handler = (event) => {
    const match = event.target.closest(selector);
    if (match && parent.contains(match)) {
      callback(event, match);
    }
  };
  parent.addEventListener(eventType, handler);
  return () => parent.removeEventListener(eventType, handler);
}

/**
 * Debounce: delays invoking `fn` until `wait` ms have passed since the
 * last call. Used for search inputs, resize handlers, scroll handlers.
 */
export function debounce(fn, wait = 300) {
  let timeoutId;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), wait);
  };
}

/**
 * Throttle: ensures `fn` runs at most once every `limit` ms.
 * Used for scroll-position-driven UI (sticky navbar, back-to-top, parallax).
 */
export function throttle(fn, limit = 200) {
  let inThrottle = false;
  return function throttled(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Returns true if `el` is at least partially within the viewport.
 * Lightweight alternative to IntersectionObserver for one-off checks.
 */
export function isInViewport(el, offset = 0) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset
  );
}

/**
 * Smooth-scrolls to an element or selector, accounting for a fixed
 * header height (so anchored sections aren't hidden underneath it).
 */
export function scrollToEl(target, headerOffset = 96) {
  const el = typeof target === "string" ? qs(target) : target;
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Toggle one or more classes based on a boolean condition.
 * toggleClass(el, 'is-open', shouldOpen)
 */
export function toggleClass(el, className, force) {
  if (!el) return;
  el.classList.toggle(className, force);
}

/**
 * Traps focus within a container (modals, mega-menu, mobile-menu).
 * Returns a cleanup function that removes the listener.
 */
export function trapFocus(container) {
  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  const focusableEls = qsa(focusableSelector, container);
  if (focusableEls.length === 0) return () => {};

  const firstEl = focusableEls[0];
  const lastEl = focusableEls[focusableEls.length - 1];

  function handleKeydown(event) {
    if (event.key !== "Tab") return;

    if (event.shiftKey && document.activeElement === firstEl) {
      event.preventDefault();
      lastEl.focus();
    } else if (!event.shiftKey && document.activeElement === lastEl) {
      event.preventDefault();
      firstEl.focus();
    }
  }

  container.addEventListener("keydown", handleKeydown);
  firstEl.focus();

  return () => container.removeEventListener("keydown", handleKeydown);
}

/**
 * Reads a numeric CSS custom property from :root (e.g. breakpoints
 * defined in _variables.css) so JS can stay in sync with CSS tokens.
 */
export function getCssVar(name, parseAsNumber = false) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return parseAsNumber ? parseFloat(value) : value;
}

export default {
  qs,
  qsa,
  createEl,
  on,
  debounce,
  throttle,
  isInViewport,
  scrollToEl,
  toggleClass,
  trapFocus,
  getCssVar,
};