/* ==========================================================================
   api.config.js
   Gada Electronics — Single source of truth for API base URL & endpoints.
   Matches API_CONTRACT.md exactly. No hardcoded URLs anywhere else in the
   codebase — every module imports ENDPOINTS / API_BASE_URL from here.
   ========================================================================== */

/**
 * Base URL for all API calls.
 * Swap this (or wire an env-based build step later) to point at staging/prod.
 */
export const API_BASE_URL = "https://gada-electronics-backend.onrender.com/api/v1";

/**
 * Standard response envelope shape (for reference / JSDoc typing only):
 * { success: boolean, message: string, data: any, errors: any|null, timestamp: string }
 */

export const ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    ME: `${API_BASE_URL}/auth/me`,
    CHANGE_PASSWORD: `${API_BASE_URL}/auth/change-password`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgot-password`,
    RESET_PASSWORD: (token) => `${API_BASE_URL}/auth/reset-password/${token}`,
  },

  DASHBOARD: {
    SUMMARY: `${API_BASE_URL}/dashboard/summary`,
    ANALYTICS: `${API_BASE_URL}/dashboard/analytics`,
  },

  PRODUCTS: {
    LIST: `${API_BASE_URL}/products`,
    DETAILS: (slug) => `${API_BASE_URL}/products/${slug}`,
    CREATE: `${API_BASE_URL}/products`,
    UPDATE: (id) => `${API_BASE_URL}/products/${id}`,
    DELETE: (id) => `${API_BASE_URL}/products/${id}`,
    DELETE_IMAGE: (productId, imageId) =>
      `${API_BASE_URL}/products/${productId}/images/${imageId}`,
    SET_PRIMARY_IMAGE: (productId, imageId) =>
      `${API_BASE_URL}/products/${productId}/images/${imageId}/primary`,
    TOGGLE_STATUS: (id) => `${API_BASE_URL}/products/${id}/status`,
  },

  CATEGORIES: {
    LIST: `${API_BASE_URL}/categories`,
    DETAILS: (slug) => `${API_BASE_URL}/categories/${slug}`,
    CREATE: `${API_BASE_URL}/categories`,
    UPDATE: (id) => `${API_BASE_URL}/categories/${id}`,
    DELETE: (id) => `${API_BASE_URL}/categories/${id}`,
    TOGGLE_STATUS: (id) => `${API_BASE_URL}/categories/${id}/status`,
  },

  BRANDS: {
    LIST: `${API_BASE_URL}/brands`,
    DETAILS: (slug) => `${API_BASE_URL}/brands/${slug}`,
    CREATE: `${API_BASE_URL}/brands`,
    UPDATE: (id) => `${API_BASE_URL}/brands/${id}`,
    DELETE: (id) => `${API_BASE_URL}/brands/${id}`,
    TOGGLE_STATUS: (id) => `${API_BASE_URL}/brands/${id}/status`,
  },

  PROJECTS: {
    LIST: `${API_BASE_URL}/projects`,
    DETAILS: (slug) => `${API_BASE_URL}/projects/${slug}`,
    CREATE: `${API_BASE_URL}/projects`,
    UPDATE: (id) => `${API_BASE_URL}/projects/${id}`,
    DELETE: (id) => `${API_BASE_URL}/projects/${id}`,
    DELETE_IMAGE: (projectId, imageId) =>
      `${API_BASE_URL}/projects/${projectId}/images/${imageId}`,
    TOGGLE_STATUS: (id) => `${API_BASE_URL}/projects/${id}/status`,
  },

  JOBS: {
    LIST: `${API_BASE_URL}/jobs`,
    DETAILS: (slug) => `${API_BASE_URL}/jobs/${slug}`,
    CREATE: `${API_BASE_URL}/jobs`,
    UPDATE: (id) => `${API_BASE_URL}/jobs/${id}`,
    DELETE: (id) => `${API_BASE_URL}/jobs/${id}`,
    TOGGLE_STATUS: (id) => `${API_BASE_URL}/jobs/${id}/status`,
  },

  APPLICATIONS: {
    SUBMIT: `${API_BASE_URL}/applications`,
    LIST: `${API_BASE_URL}/applications`,
    DETAILS: (id) => `${API_BASE_URL}/applications/${id}`,
    UPDATE_STATUS: (id) => `${API_BASE_URL}/applications/${id}/status`,
    DELETE: (id) => `${API_BASE_URL}/applications/${id}`,
    EXPORT: `${API_BASE_URL}/applications/export`,
  },

  ENQUIRIES: {
    SUBMIT: `${API_BASE_URL}/enquiries`,
    LIST: `${API_BASE_URL}/enquiries`,
    DETAILS: (id) => `${API_BASE_URL}/enquiries/${id}`,
    UPDATE_STATUS: (id) => `${API_BASE_URL}/enquiries/${id}/status`,
    DELETE: (id) => `${API_BASE_URL}/enquiries/${id}`,
    EXPORT: `${API_BASE_URL}/enquiries/export`,
  },

  CERTIFICATES: {
    LIST: `${API_BASE_URL}/certificates`,
    CREATE: `${API_BASE_URL}/certificates`,
    UPDATE: (id) => `${API_BASE_URL}/certificates/${id}`,
    DELETE: (id) => `${API_BASE_URL}/certificates/${id}`,
    REORDER: `${API_BASE_URL}/certificates/reorder`,
  },

  SETTINGS: {
    GET_PUBLIC: `${API_BASE_URL}/settings`,
    UPDATE: `${API_BASE_URL}/settings`,
  },
};

/**
 * Shared request defaults consumed by http-client.js
 */
export const REQUEST_CONFIG = {
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
  },
  TIMEOUT_MS: 15000,
  AUTH_TOKEN_STORAGE_KEY: "gada_admin_token",
};

export default {
  API_BASE_URL,
  ENDPOINTS,
  REQUEST_CONFIG,
};