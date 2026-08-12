/* ==========================================================================
   state.js
   Gada Electronics — Minimal app-level state store.
   A tiny pub/sub pattern (no external deps) for UI state that needs to be
   shared across components without prop-drilling — e.g. active product
   filters, mobile-menu open/closed, wishlist-style toggles, current page.
   ========================================================================== */

class Store {
  constructor(initialState = {}) {
    this._state = { ...initialState };
    this._listeners = new Map(); // key -> Set of callback fns
  }

  /**
   * Get the current value of a key (or the whole state if no key given).
   */
  get(key) {
    if (key === undefined) return { ...this._state };
    return this._state[key];
  }

  /**
   * Update one or more keys and notify subscribers of each changed key.
   * Accepts either (key, value) or a partial state object.
   */
  set(keyOrPartial, value) {
    const updates = typeof keyOrPartial === "string" ? { [keyOrPartial]: value } : keyOrPartial;

    Object.entries(updates).forEach(([key, newValue]) => {
      const oldValue = this._state[key];
      if (oldValue === newValue) return; // no-op, skip notifying

      this._state[key] = newValue;
      this._notify(key, newValue, oldValue);
    });
  }

  /**
   * Subscribe to changes on a specific key. Returns an unsubscribe function.
   * Example:
   *   const unsub = appState.subscribe('activeFilter', (value) => { ... });
   */
  subscribe(key, callback) {
    if (!this._listeners.has(key)) {
      this._listeners.set(key, new Set());
    }
    this._listeners.get(key).add(callback);

    return () => {
      const set = this._listeners.get(key);
      if (set) set.delete(callback);
    };
  }

  _notify(key, newValue, oldValue) {
    const set = this._listeners.get(key);
    if (!set) return;
    set.forEach((callback) => callback(newValue, oldValue));
  }

  /**
   * Reset one key (or the entire store) back to a given value/shape.
   */
  reset(key, value) {
    if (key === undefined) {
      this._state = {};
      this._listeners.forEach((_, k) => this._notify(k, undefined, this._state[k]));
      return;
    }
    this.set(key, value);
  }
}

/**
 * Single shared instance used app-wide. Seeded with sensible defaults
 * that components/modules read/write into (extend as new UI state is needed).
 */
export const appState = new Store({
  isMobileMenuOpen: false,
  isMegaMenuOpen: false,
  activeModal: null,
  productFilters: {
    department: null,
    category: null,
    brand: null,
    availability: null,
    minPrice: null,
    maxPrice: null,
    search: "",
    sort: "newest",
    page: 1,
  },
  projectFilters: {
    category: null,
    status: null,
    page: 1,
  },
  jobFilters: {
    department: null,
    jobType: null,
    page: 1,
  },
});

export default appState;