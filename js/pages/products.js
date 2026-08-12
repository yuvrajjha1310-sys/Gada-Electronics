/* ==========================================================================
   products.js — Page bootstrap for products.html.
   The product grid is server-rendered directly in the HTML; this just
   wires up modules/product-filters.js, which filters/sorts those cards
   client-side. (modules/product-list.js is kept in the repo for when a
   real backend implementing API_CONTRACT.md is wired up, but isn't used
   here since the grid never needs to be fetched.)
   ========================================================================== */
import { qs } from "../core/dom-utils.js";
import * as productFilters from "../modules/product-filters.js";

export function init() {
  if (!qs("[data-js='products-page']")) return;

  productFilters.init();
}

// This file is loaded as its own <script type="module"> in products.html,
// separately from main.js's bootstrap() — so, unlike the shared components
// in js/components/, nothing else calls init() for us. Run it ourselves.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

export default { init };