/* ==========================================================================
   product-details.js — Page bootstrap for product-details.html.
   Thin wrapper around modules/product-details.js (data fetch/render) +
   modules/enquiry-form.js (the modal form, pre-filled with product context
   once the product loads).
   ========================================================================== */
import { qs } from "../core/dom-utils.js";
import * as productDetails from "../modules/product-details.js";
import * as enquiryForm from "../modules/enquiry-form.js";

export function init() {
  if (!qs("[data-js='product-details-page']")) return;

  productDetails.init();
  enquiryForm.init();
}

export default { init };