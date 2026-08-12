/* ==========================================================================
   enquiry-form.js — Product-page "Enquire Now" modal form. Same ENQUIRIES
   endpoint as contact-form.js, but pre-fills the product name/slug as
   context and lives inside a modal (components/modal.js) rather than a
   full page section.
   ========================================================================== */
import { qs, qsa } from "../core/dom-utils.js";
import { isRequired, isEmail, isPhone, validateForm, validateField, ERROR_MESSAGES } from "../core/validators.js";
import { ENDPOINTS } from "../config/api.config.js";
import { post } from "../core/http-client.js";
import { showToast } from "../components/toast.js";
import { close as closeModal } from "../components/modal.js";

const SCHEMA = {
  name: [{ test: isRequired, message: ERROR_MESSAGES.required }],
  email: [
    { test: isRequired, message: ERROR_MESSAGES.required },
    { test: isEmail, message: ERROR_MESSAGES.email },
  ],
  phone: [
    { test: isRequired, message: ERROR_MESSAGES.required },
    { test: isPhone, message: ERROR_MESSAGES.phone },
  ],
  quantity: [{ test: isRequired, message: ERROR_MESSAGES.required }],
};

function showFieldError(formEl, fieldName, message) {
  const field = qs(`[name='${fieldName}']`, formEl);
  const errorEl = qs(`[data-error-for='${fieldName}']`, formEl);
  if (field) field.classList.toggle("has-error", Boolean(message));
  if (errorEl) errorEl.textContent = message || "";
}

function getFormData(formEl) {
  const data = {};
  qsa("[name]", formEl).forEach((field) => {
    data[field.name] = field.value;
  });
  return data;
}

async function handleSubmit(event, formEl) {
  event.preventDefault();

  const formData = getFormData(formEl);
  const { isValid, errors } = validateForm(formData, SCHEMA);

  if (!isValid) {
    Object.entries(errors).forEach(([field, message]) => showFieldError(formEl, field, message));
    return;
  }

  const submitBtn = qs("[type='submit']", formEl);
  submitBtn.disabled = true;
  submitBtn.classList.add("is-loading");

  const productName = formEl.dataset.productName || "";
  const productSlug = formEl.dataset.productSlug || "";
  const { name, ...restFormData } = formData;

  try {
    await post(ENDPOINTS.ENQUIRIES.SUBMIT, {
      ...restFormData,
      fullName: name,
      subject: `Product Enquiry: ${productName}`,
      message: `Enquiry for "${productName}" (qty: ${formData.quantity}). ${formData.message || ""}`.trim(),
      sourcePage: productSlug ? `product:${productSlug}` : "",
    });

    showToast("Enquiry sent! Our sales team will contact you shortly.", "success");
    formEl.reset();

    const modalEl = formEl.closest("[data-js='modal']");
    if (modalEl) closeModal(modalEl.id);
  } catch (err) {
    showToast(err.message || "Failed to send enquiry. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("is-loading");
  }
}

export function init() {
  qsa("[data-js='enquiry-form']").forEach((formEl) => {
    formEl.addEventListener("submit", (event) => handleSubmit(event, formEl));
  });
}

export default { init };