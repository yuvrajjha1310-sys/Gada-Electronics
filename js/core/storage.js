/* ==========================================================================
   storage.js
   Gada Electronics — localStorage / sessionStorage helpers.
   Wraps browser storage APIs with JSON parsing, quota/availability
   error-handling, and a consistent function-based interface used
   across the codebase (http-client.js, forms, filters, etc).
   ========================================================================== */

const memoryFallback = new Map();
let storageAvailable = null;

/**
 * Detects whether localStorage is actually usable (private browsing /
 * disabled storage / quota exceeded can all make it throw).
 * Result is cached after first check.
 */
function isStorageAvailable(type = "localStorage") {
  if (storageAvailable !== null) return storageAvailable;

  try {
    const storage = window[type];
    const testKey = "__gada_storage_test__";
    storage.setItem(testKey, testKey);
    storage.removeItem(testKey);
    storageAvailable = true;
  } catch (err) {
    storageAvailable = false;
  }

  return storageAvailable;
}

/**
 * Get a value from localStorage (JSON-parsed). Falls back to an
 * in-memory Map if storage is unavailable, so callers never need
 * to special-case it.
 */
export function getItem(key, fallback = null) {
  if (!isStorageAvailable()) {
    return memoryFallback.has(key) ? memoryFallback.get(key) : fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    // Value wasn't JSON (legacy plain string) — return as-is
    return window.localStorage.getItem(key) ?? fallback;
  }
}

/**
 * Set a value in localStorage (JSON-stringified).
 */
export function setItem(key, value) {
  if (!isStorageAvailable()) {
    memoryFallback.set(key, value);
    return true;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    // Quota exceeded or write blocked — fail silently, caller can check return value
    console.warn(`[storage] Failed to set "${key}":`, err.message);
    return false;
  }
}

/**
 * Remove a single key from localStorage.
 */
export function removeItem(key) {
  if (!isStorageAvailable()) {
    memoryFallback.delete(key);
    return;
  }
  window.localStorage.removeItem(key);
}

/**
 * Clear all app-namespaced keys (prefix-based) without wiping
 * unrelated localStorage data from other scripts on the page.
 */
export function clearNamespace(prefix = "gada_") {
  if (!isStorageAvailable()) {
    for (const key of memoryFallback.keys()) {
      if (key.startsWith(prefix)) memoryFallback.delete(key);
    }
    return;
  }

  Object.keys(window.localStorage)
    .filter((key) => key.startsWith(prefix))
    .forEach((key) => window.localStorage.removeItem(key));
}

/* ---------- Session-scoped variants (cleared when the tab closes) ---------- */

export function getSessionItem(key, fallback = null) {
  try {
    const raw = window.sessionStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    return fallback;
  }
}

export function setSessionItem(key, value) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.warn(`[storage] Failed to set session key "${key}":`, err.message);
    return false;
  }
}

export function removeSessionItem(key) {
  window.sessionStorage.removeItem(key);
}

export default {
  getItem,
  setItem,
  removeItem,
  clearNamespace,
  getSessionItem,
  setSessionItem,
  removeSessionItem,
};