/* ==========================================================================
   application-form.js — Job application form (job-details page). Multipart
   FormData submit (resume upload) to APPLICATIONS.SUBMIT per
   API_CONTRACT.md. Validates resume file type/size client-side before send.
   ========================================================================== */
import { qs, qsa } from "../core/dom-utils.js";
import {
  isRequired, isEmail, isPhone, isValidFileType, isValidFileSize,
  FILE_TYPE_PRESETS, validateForm, ERROR_MESSAGES,
} from "../core/validators.js";
import { ENDPOINTS } from "../config/api.config.js";
import { post } from "../core/http-client.js";
import { showToast } from "../components/toast.js";

const MAX_RESUME_MB = 5;

const TEXT_SCHEMA = {
  fullName: [{ test: isRequired, message: ERROR_MESSAGES.required }],
  email: [
    { test: isRequired, message: ERROR_MESSAGES.required },
    { test: isEmail, message: ERROR_MESSAGES.email },
  ],
  phone: [
    { test: isRequired, message: ERROR_MESSAGES.required },
    { test: isPhone, message: ERROR_MESSAGES.phone },
  ],
};

function showFieldError(formEl, fieldName, message) {
  const field = qs(`[name='${fieldName}']`, formEl);
  const errorEl = qs(`[data-error-for='${fieldName}']`, formEl);
  if (field) field.classList.toggle("has-error", Boolean(message));
  if (errorEl) errorEl.textContent = message || "";
}

function validateResumeFile(fileInput) {
  const file = fileInput.files[0];

  if (!file) return ERROR_MESSAGES.required;
  if (!isValidFileType(file, FILE_TYPE_PRESETS.RESUME)) return ERROR_MESSAGES.fileType;
  if (!isValidFileSize(file, MAX_RESUME_MB)) return ERROR_MESSAGES.fileSize(MAX_RESUME_MB);

  return null;
}

function bindResumePreview(fileInput) {
  const previewEl = qs("[data-js='resume-filename']", fileInput.closest("[data-js='file-field']") || document);
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (previewEl) previewEl.textContent = file ? file.name : "No file selected";
  });
}

async function handleSubmit(event, formEl) {
  event.preventDefault();

  const textData = {};
  Object.keys(TEXT_SCHEMA).forEach((fieldName) => {
    const field = qs(`[name='${fieldName}']`, formEl);
    textData[fieldName] = field ? field.value : "";
  });

  const { isValid, errors } = validateForm(textData, TEXT_SCHEMA);
  const resumeInput = qs("[name='resume']", formEl);
  const resumeError = validateResumeFile(resumeInput);

  if (!isValid || resumeError) {
    Object.entries(errors).forEach(([field, message]) => showFieldError(formEl, field, message));
    if (resumeError) showFieldError(formEl, "resume", resumeError);
    return;
  }

  const submitBtn = qs("[type='submit']", formEl);
  submitBtn.disabled = true;
  submitBtn.classList.add("is-loading");

  const formData = new FormData(formEl);
  formData.append("jobId", formEl.dataset.jobId || "");

  try {
    await post(ENDPOINTS.APPLICATIONS.SUBMIT, formData, { isFormData: true });
    showToast("Application submitted! We'll be in touch if there's a match.", "success");
    formEl.reset();
    const previewEl = qs("[data-js='resume-filename']", formEl);
    if (previewEl) previewEl.textContent = "No file selected";
  } catch (err) {
    showToast(err.message || "Failed to submit application. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("is-loading");
  }
}

export function init() {
  const formEl = qs("[data-js='application-form']");
  if (!formEl) return;

  const resumeInput = qs("[name='resume']", formEl);
  if (resumeInput) bindResumePreview(resumeInput);

  formEl.addEventListener("submit", (event) => handleSubmit(event, formEl));
}

export default { init };