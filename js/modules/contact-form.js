/* ==========================================================================
   contact-form.js — Main contact page form. Posts to ENQUIRIES endpoint
   per API_CONTRACT.md. Field-level validation on blur + full validation
   on submit.
   ========================================================================== */
import { qs, qsa } from "../core/dom-utils.js";
import {
  isRequired, isEmail, isPhone, minLength, validateForm, validateField, ERROR_MESSAGES,
} from "../core/validators.js";
import { ENDPOINTS } from "../config/api.config.js";
import { post } from "../core/http-client.js";
import { showToast } from "../components/toast.js";

const SCHEMA = {
  fullName: [
    { test: isRequired, message: ERROR_MESSAGES.required },
    { test: (v) => minLength(v, 2), message: () => ERROR_MESSAGES.minLength(2) },
  ],
  email: [
    { test: isRequired, message: ERROR_MESSAGES.required },
    { test: isEmail, message: ERROR_MESSAGES.email },
  ],
  phone: [{ test: isPhone, message: ERROR_MESSAGES.phone }],
  subject: [{ test: isRequired, message: ERROR_MESSAGES.required }],
  message: [
    { test: isRequired, message: ERROR_MESSAGES.required },
    { test: (v) => minLength(v, 10), message: () => ERROR_MESSAGES.minLength(10) },
  ],
};

function showFieldError(formEl, fieldName, message) {
  const field = qs(`[name='${fieldName}']`, formEl);
  const errorEl = qs(`[data-error-for='${fieldName}']`, formEl);
  if (field) field.classList.toggle("has-error", Boolean(message));
  if (errorEl) errorEl.textContent = message || "";
}

function clearAllErrors(formEl) {
  qsa("[data-error-for]", formEl).forEach((el) => (el.textContent = ""));
  qsa(".has-error", formEl).forEach((el) => el.classList.remove("has-error"));
}

function bindLiveValidation(formEl) {
  Object.keys(SCHEMA).forEach((fieldName) => {
    const field = qs(`[name='${fieldName}']`, formEl);
    if (!field) return;
    field.addEventListener("blur", () => {
      const message = validateField(field.value, SCHEMA[fieldName]);
      showFieldError(formEl, fieldName, message);
    });
  });
}

function getFormData(formEl) {
  const data = {};
  Object.keys(SCHEMA).forEach((fieldName) => {
    const field = qs(`[name='${fieldName}']`, formEl);
    data[fieldName] = field ? field.value : "";
  });
  return data;
}

async function handleSubmit(event, formEl) {
  event.preventDefault();
  clearAllErrors(formEl);

  const formData = getFormData(formEl);
  const { isValid, errors } = validateForm(formData, SCHEMA);

  if (!isValid) {
    Object.entries(errors).forEach(([field, message]) => showFieldError(formEl, field, message));
    qs(`[name='${Object.keys(errors)[0]}']`, formEl)?.focus();
    return;
  }

  const submitBtn = qs("[type='submit']", formEl);
  submitBtn.disabled = true;
  submitBtn.classList.add("is-loading");

  try {
    await post(ENDPOINTS.ENQUIRIES.SUBMIT, formData);
    showToast("Thanks for reaching out — we'll respond within 1 business day.", "success");
    formEl.reset();
  } catch (err) {
    showToast(err.message || "Failed to send your message. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("is-loading");
  }
}

export function init() {
  const formEl = qs("[data-js='contact-form']");
  if (!formEl) return;

  bindLiveValidation(formEl);
  formEl.addEventListener("submit", (event) => handleSubmit(event, formEl));
}

export default { init };