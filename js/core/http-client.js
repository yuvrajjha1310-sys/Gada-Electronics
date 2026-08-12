/* ==========================================================================
   http-client.js
   Gada Electronics — Thin fetch() wrapper used by every module in js/modules/.
   Exposes get() / post() / put() / patch() / del() with:
   - JSON header injection
   - Bearer auth token injection (admin routes)
   - Request timeout (AbortController)
   - Standardized success/error response shape matching API_CONTRACT.md
   ========================================================================== */

import { REQUEST_CONFIG } from "../config/api.config.js";
import { getItem } from "./storage.js";

/**
 * Custom error class so callers can distinguish network/timeout errors
 * from API-returned error responses.
 */
export class HttpError extends Error {
  constructor(message, { status = null, errors = null, isTimeout = false, isNetworkError = false } = {}) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.errors = errors;
    this.isTimeout = isTimeout;
    this.isNetworkError = isNetworkError;
  }
}

/**
 * Builds request headers, injecting the Bearer token when one exists
 * in storage (admin-authenticated requests).
 */
function buildHeaders(customHeaders = {}, isFormData = false) {
  const headers = { ...customHeaders };

  if (!isFormData) {
    Object.assign(headers, REQUEST_CONFIG.DEFAULT_HEADERS);
  }

  const token = getItem(REQUEST_CONFIG.AUTH_TOKEN_STORAGE_KEY);
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Core request function all verb helpers delegate to.
 * Wraps fetch() with timeout handling and consistent error shaping.
 */
async function request(url, { method = "GET", body = null, headers = {}, isFormData = false, signal } = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_CONFIG.TIMEOUT_MS);

  // Allow an external signal to also abort this request (e.g. page navigation)
  if (signal) {
    signal.addEventListener("abort", () => controller.abort());
  }

  try {
    const response = await fetch(url, {
      method,
      headers: buildHeaders(headers, isFormData),
      body: isFormData ? body : body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    let payload = null;
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      payload = await response.json();
    } else if (contentType.includes("application/octet-stream") || contentType.includes("spreadsheet")) {
      // Binary responses (e.g. Excel export endpoints)
      payload = await response.blob();
    } else {
      payload = await response.text();
    }

    if (!response.ok) {
      throw new HttpError(
        (payload && payload.message) || `Request failed with status ${response.status}`,
        {
          status: response.status,
          errors: payload && payload.errors ? payload.errors : null,
        }
      );
    }

    return payload;
  } catch (err) {
    clearTimeout(timeoutId);

    if (err.name === "AbortError") {
      throw new HttpError("Request timed out. Please try again.", { isTimeout: true });
    }

    if (err instanceof HttpError) {
      throw err;
    }

    throw new HttpError("Network error. Please check your connection.", { isNetworkError: true });
  }
}

/**
 * GET request. `params` is an optional object serialized to a query string.
 */
export function get(url, params = null, options = {}) {
  let finalUrl = url;

  if (params && Object.keys(params).length > 0) {
    const query = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== "")
    ).toString();
    finalUrl = query ? `${url}?${query}` : url;
  }

  return request(finalUrl, { method: "GET", ...options });
}

/**
 * POST request. Pass isFormData: true when sending FormData (file uploads).
 */
export function post(url, body = null, options = {}) {
  return request(url, { method: "POST", body, ...options });
}

/**
 * PUT request — full resource replacement.
 */
export function put(url, body = null, options = {}) {
  return request(url, { method: "PUT", body, ...options });
}

/**
 * PATCH request — partial update (status toggles, reorder, etc).
 */
export function patch(url, body = null, options = {}) {
  return request(url, { method: "PATCH", body, ...options });
}

/**
 * DELETE request.
 */
export function del(url, options = {}) {
  return request(url, { method: "DELETE", ...options });
}

export default { get, post, put, patch, del, HttpError };