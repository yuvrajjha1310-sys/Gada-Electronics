/* ==========================================================================
   validators.js
   Gada Electronics — Reusable form validation functions.
   Pure functions (no DOM access) so they're easy to unit test and reuse
   across contact-form.js, application-form.js, enquiry-form.js, etc.
   Each validator returns true/false; pair with getErrorMessage() for copy.
   ========================================================================== */

/* ---------- Primitive validators ---------- */

export function isRequired(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

export function isEmail(value) {
  if (!value) return false;
  // RFC 5322-lite — practical, not pedantic
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value.trim());
}

/**
 * Accepts Indian mobile numbers (+91 optional) and generic 10-digit
 * numbers, since Gada Electronics is an India-based industrial supplier.
 * Strips spaces/dashes before testing.
 */
export function isPhone(value) {
  if (!value) return false;
  const cleaned = value.replace(/[\s-]/g, "");
  const pattern = /^(\+91)?[6-9]\d{9}$/;
  return pattern.test(cleaned);
}

export function minLength(value, min) {
  if (!value) return false;
  return value.trim().length >= min;
}

export function maxLength(value, max) {
  if (!value) return true; // empty is handled by isRequired separately
  return value.trim().length <= max;
}

export function isNumeric(value) {
  if (value === "" || value === null || value === undefined) return false;
  return !isNaN(Number(value));
}

export function isInRange(value, min, max) {
  const num = Number(value);
  if (isNaN(num)) return false;
  return num >= min && num <= max;
}

export function isUrl(value) {
  if (!value) return false;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates a checkbox/consent field is checked (e.g. Terms & Privacy).
 */
export function isChecked(value) {
  return value === true;
}

/* ---------- File validators (resume upload, product image uploads) ---------- */

export function isValidFileType(file, allowedTypes = []) {
  if (!file) return false;
  return allowedTypes.includes(file.type);
}

export function isValidFileSize(file, maxSizeMB = 5) {
  if (!file) return false;
  return file.size <= maxSizeMB * 1024 * 1024;
}

export const FILE_TYPE_PRESETS = {
  RESUME: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  IMAGE: ["image/jpeg", "image/png", "image/webp"],
};

/* ---------- Standard error messages (keyed to match field names) ---------- */

export const ERROR_MESSAGES = {
  required: "This field is required.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  minLength: (min) => `Must be at least ${min} characters.`,
  maxLength: (max) => `Must be no more than ${max} characters.`,
  numeric: "Please enter a valid number.",
  range: (min, max) => `Must be between ${min} and ${max}.`,
  url: "Please enter a valid URL.",
  checked: "You must agree before continuing.",
  fileType: "Unsupported file type.",
  fileSize: (maxMB) => `File must be smaller than ${maxMB}MB.`,
};

/* ---------- Composable field validation ---------- */

/**
 * Runs a field value through an ordered list of {test, message} rules
 * and returns the first failing message, or null if all pass.
 *
 * Example:
 *   validateField(email, [
 *     { test: isRequired, message: ERROR_MESSAGES.required },
 *     { test: isEmail, message: ERROR_MESSAGES.email },
 *   ]);
 */
export function validateField(value, rules = []) {
  for (const rule of rules) {
    if (!rule.test(value)) {
      return typeof rule.message === "function" ? rule.message() : rule.message;
    }
  }
  return null;
}

/**
 * Validates a whole form-data object against a schema of field -> rules,
 * returning { isValid, errors: { fieldName: message } }.
 *
 * Example schema:
 *   { email: [{ test: isRequired, message: ERROR_MESSAGES.required },
 *              { test: isEmail, message: ERROR_MESSAGES.email }] }
 */
export function validateForm(formData, schema) {
  const errors = {};

  Object.entries(schema).forEach(([fieldName, rules]) => {
    const message = validateField(formData[fieldName], rules);
    if (message) errors[fieldName] = message;
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export default {
  isRequired,
  isEmail,
  isPhone,
  minLength,
  maxLength,
  isNumeric,
  isInRange,
  isUrl,
  isChecked,
  isValidFileType,
  isValidFileSize,
  FILE_TYPE_PRESETS,
  ERROR_MESSAGES,
  validateField,
  validateForm,
};