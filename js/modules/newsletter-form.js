/* ==========================================================================
   newsletter-form.js — Footer newsletter signup. Reuses SETTINGS-adjacent
   enquiry-style submission (no dedicated newsletter endpoint in
   API_CONTRACT.md, so this posts to ENQUIRIES with a type flag — adjust
   ENDPOINTS.NEWSLETTER here if/when a dedicated route is added).
   ========================================================================== */
import { qs } from "../core/dom-utils.js";
import { isRequired, isEmail, validateForm, ERROR_MESSAGES } from "../core/validators.js";
import { ENDPOINTS } from "../config/api.config.js";
import { post } from "../core/http-client.js";
import { showToast } from "../components/toast.js";

const SCHEMA = {
  email: [
    { test: isRequired, message: ERROR_MESSAGES.required },
    { test: isEmail, message: ERROR_MESSAGES.email },
  ],
};

async function handleSubmit(event, formEl) {
  event.preventDefault();

  const emailInput = qs("[name='email']", formEl);
  const submitBtn = qs("[type='submit']", formEl);
  const { isValid, errors } = validateForm({ email: emailInput.value }, SCHEMA);

  if (!isValid) {
    showToast(errors.email, "error");
    emailInput.focus();
    return;
  }

  submitBtn.disabled = true;
  submitBtn.classList.add("is-loading");

  try {
    await post(ENDPOINTS.ENQUIRIES.SUBMIT, {
      fullName: "Newsletter Subscriber",
      email: emailInput.value.trim(),
      subject: "Newsletter signup",
      message: "Newsletter signup",
      type: "newsletter",
    });

    showToast("You're subscribed! Thanks for joining our list.", "success");
    formEl.reset();
  } catch (err) {
    showToast(err.message || "Something went wrong. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("is-loading");
  }
}

export function init() {
  const forms = document.querySelectorAll("[data-js='newsletter-form']");
  forms.forEach((formEl) => {
    formEl.addEventListener("submit", (event) => handleSubmit(event, formEl));
  });
}

export default { init };