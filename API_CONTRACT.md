# API_CONTRACT.md
## Gada Electronics — Backend API Contract

Base URL: `/api/v1`
All responses use the standard envelope (see BACKEND_GUIDELINES.md §Response Format):

```json
{
  "success": true,
  "message": "string",
  "data": {},
  "errors": null,
  "timestamp": "2026-08-05T10:00:00.000Z"
}
```

Authentication: `Authorization: Bearer <JWT>` header, required on all `[ADMIN]`-tagged routes.
Public routes are tagged `[PUBLIC]`.

---

## 1. AUTHENTICATION — `/api/v1/auth`

### 1.1 Admin Login
- **Method / URL:** `POST /api/v1/auth/login`
- **Auth:** [PUBLIC]
- **Headers:** `Content-Type: application/json`
- **Request Body:**
```json
{ "email": "admin@gadaelectronics.com", "password": "SecurePass@123" }
```
- **Validation Rules:**
  - `email`: required, valid email format
  - `password`: required, min 6 characters
- **Sample Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "admin": { "id": 1, "name": "Rahul Gada", "email": "admin@gadaelectronics.com", "role": "super_admin" },
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": "24h"
  },
  "errors": null,
  "timestamp": "2026-08-05T10:00:00.000Z"
}
```
- **Status Codes:** `200` success · `400` validation error · `401` invalid credentials · `403` account inactive · `429` too many attempts

### 1.2 Get Logged-in Admin Profile
- **Method / URL:** `GET /api/v1/auth/me`
- **Auth:** [ADMIN]
- **Sample Response (200):** `data: { id, name, email, role, last_login }`
- **Status Codes:** `200` · `401` unauthorized

### 1.3 Change Password
- **Method / URL:** `PUT /api/v1/auth/change-password`
- **Auth:** [ADMIN]
- **Request Body:**
```json
{ "currentPassword": "OldPass@123", "newPassword": "NewPass@456" }
```
- **Validation Rules:** `currentPassword` required; `newPassword` required, min 8 chars, must contain letter + number
- **Status Codes:** `200` · `400` validation · `401` current password incorrect

### 1.4 Logout
- **Method / URL:** `POST /api/v1/auth/logout`
- **Auth:** [ADMIN]
- **Behavior:** Stateless JWT — client discards token; server responds success (token blacklist optional via Redis if added later).
- **Status Codes:** `200`

### 1.5 Forgot Password
- **Method / URL:** `POST /api/v1/auth/forgot-password`
- **Auth:** [PUBLIC]
- **Request Body:** `{ "email": "admin@gadaelectronics.com" }`
- **Behavior:** Generates a signed reset token (15 min expiry), emails reset link via `email.service.js`.
- **Status Codes:** `200` (always generic success message to avoid email enumeration) · `400` validation

### 1.6 Reset Password
- **Method / URL:** `POST /api/v1/auth/reset-password/:token`
- **Auth:** [PUBLIC]
- **Request Body:** `{ "newPassword": "NewPass@456" }`
- **Status Codes:** `200` · `400` invalid/expired token

---

## 2. DASHBOARD — `/api/v1/dashboard`

### 2.1 Get Dashboard Summary
- **Method / URL:** `GET /api/v1/dashboard/summary`
- **Auth:** [ADMIN]
- **Sample Response (200):**
```json
{
  "success": true,
  "message": "Dashboard summary fetched",
  "data": {
    "totals": {
      "products": 248, "categories": 12, "brands": 18, "projects": 56,
      "jobs": 6, "applications": 132, "enquiries": 340
    },
    "unread": { "enquiries": 24, "newApplications": 9 },
    "recentEnquiries": [ { "id": 501, "full_name": "Amit Shah", "subject": "Bulk order query", "created_at": "2026-08-04T09:00:00.000Z" } ],
    "recentApplications": [ { "id": 88, "full_name": "Priya Nair", "job_title": "Electrical Engineer", "status": "new" } ]
  },
  "errors": null,
  "timestamp": "2026-08-05T10:00:00.000Z"
}
```
- **Status Codes:** `200` · `401`

### 2.2 Get Analytics Chart Data
- **Method / URL:** `GET /api/v1/dashboard/analytics?range=30d`
- **Auth:** [ADMIN]
- **Query Params:** `range` = `7d | 30d | 90d | 12m` (default `30d`)
- **Sample Response (200):** `data: { enquiriesByDay: [...], applicationsByDay: [...], topProducts: [...] }`
- **Status Codes:** `200` · `400` invalid range · `401`

---

## 3. PRODUCTS — `/api/v1/products`

### 3.1 List Products
- **Method / URL:** `GET /api/v1/products`
- **Auth:** [PUBLIC]
- **Query Params:**
  - `page` (int, default 1), `limit` (int, default 12, max 100)
  - `search` (string — matches name/description via FULLTEXT)
  - `category` (slug), `brand` (slug)
  - `minPrice`, `maxPrice` (decimal)
  - `sort` = `newest | price_asc | price_desc | name_asc | popular` (default `newest`)
  - `featured` (boolean)
- **Sample Request:** `GET /api/v1/products?page=1&limit=12&category=switches&sort=price_asc`
- **Sample Response (200):**
```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": {
    "items": [
      {
        "id": 12, "name": "MCB 32A Double Pole", "slug": "mcb-32a-double-pole",
        "sku": "GE-MCB-032D", "price": "450.00", "discountPrice": "399.00",
        "stockQty": 120, "category": { "id": 3, "name": "Switches & MCBs", "slug": "switches" },
        "brand": { "id": 5, "name": "Havells", "slug": "havells" },
        "primaryImage": "/uploads/products/mcb-32a-1.jpg", "isFeatured": true
      }
    ],
    "pagination": { "page": 1, "limit": 12, "totalItems": 96, "totalPages": 8 }
  },
  "errors": null,
  "timestamp": "2026-08-05T10:00:00.000Z"
}
```
- **Status Codes:** `200` · `400` invalid query params

### 3.2 Get Single Product (by slug)
- **Method / URL:** `GET /api/v1/products/:slug`
- **Auth:** [PUBLIC]
- **Sample Response (200):** `data` includes full detail: `specifications` (object), `images` (array of `{id, imageUrl, isPrimary, sortOrder}`), `category`, `brand`, `relatedProducts`.
- **Status Codes:** `200` · `404` not found

### 3.3 Create Product
- **Method / URL:** `POST /api/v1/products`
- **Auth:** [ADMIN]
- **Headers:** `Content-Type: multipart/form-data`
- **Request Body (form-data):**
```
name: "MCB 32A Double Pole"
categoryId: 3
brandId: 5
sku: "GE-MCB-032D"
shortDescription: "High-quality double pole MCB for industrial use"
description: "Full HTML/plain description..."
specifications: '{"poles":"2","rating":"32A","breakingCapacity":"10kA"}'
price: 450.00
discountPrice: 399.00
stockQty: 120
isFeatured: true
metaTitle: "MCB 32A Double Pole | Gada Electronics"
metaDescription: "Buy MCB 32A double pole..."
images: [file, file, file]   // up to 10 files, field name "images"
```
- **Validation Rules:**
  - `name`: required, string, 3–200 chars
  - `categoryId`: required, integer, must exist in Categories
  - `brandId`: optional, integer, must exist in Brands
  - `sku`: required, unique, alphanumeric+hyphen, max 60 chars
  - `price`: required, decimal ≥ 0
  - `discountPrice`: optional, decimal, must be ≤ `price`
  - `stockQty`: optional, integer ≥ 0, default 0
  - `specifications`: optional, valid JSON object
  - `images`: optional, max 10 files, allowed types `jpg|jpeg|png|webp`, max 5MB each
- **Sample Response (201):** `data`: full created product object
- **Status Codes:** `201` · `400` validation · `401` · `404` category/brand not found · `409` duplicate SKU/slug

### 3.4 Update Product
- **Method / URL:** `PUT /api/v1/products/:id`
- **Auth:** [ADMIN]
- **Headers:** `Content-Type: multipart/form-data` (same fields as create, all optional; new `images` appended, not replaced)
- **Status Codes:** `200` · `400` · `401` · `404` · `409` duplicate SKU/slug

### 3.5 Delete Product
- **Method / URL:** `DELETE /api/v1/products/:id`
- **Auth:** [ADMIN]
- **Behavior:** Deletes product row (cascades ProductImages rows) and removes physical image files from `/uploads/products`.
- **Status Codes:** `200` · `401` · `404`

### 3.6 Delete a Single Product Image
- **Method / URL:** `DELETE /api/v1/products/:productId/images/:imageId`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401` · `404`

### 3.7 Set Primary Product Image
- **Method / URL:** `PATCH /api/v1/products/:productId/images/:imageId/primary`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401` · `404`

### 3.8 Toggle Product Active Status
- **Method / URL:** `PATCH /api/v1/products/:id/status`
- **Auth:** [ADMIN]
- **Request Body:** `{ "isActive": false }`
- **Status Codes:** `200` · `400` · `401` · `404`

---

## 4. CATEGORIES — `/api/v1/categories`

### 4.1 List Categories
- **Method / URL:** `GET /api/v1/categories?page=1&limit=20&search=switch&sort=name_asc`
- **Auth:** [PUBLIC] (public callers get only `is_active = 1`; admin callers with valid token get all)
- **Status Codes:** `200`

### 4.2 Get Category by slug
- **Method / URL:** `GET /api/v1/categories/:slug`
- **Auth:** [PUBLIC]
- **Status Codes:** `200` · `404`

### 4.3 Create Category
- **Method / URL:** `POST /api/v1/categories`
- **Auth:** [ADMIN]
- **Headers:** `Content-Type: multipart/form-data`
- **Request Body:** `name` (required, 2–100 chars), `description` (optional), `image` (optional single file, `jpg|jpeg|png|webp`, max 3MB)
- **Sample Response (201):** created category object
- **Status Codes:** `201` · `400` · `401` · `409` duplicate name/slug

### 4.4 Update Category
- **Method / URL:** `PUT /api/v1/categories/:id`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `400` · `401` · `404` · `409`

### 4.5 Delete Category
- **Method / URL:** `DELETE /api/v1/categories/:id`
- **Auth:** [ADMIN]
- **Behavior:** Blocked (returns `409`) if one or more active Products reference this category — RESTRICT FK.
- **Status Codes:** `200` · `401` · `404` · `409` category has linked products

### 4.6 Toggle Category Status
- **Method / URL:** `PATCH /api/v1/categories/:id/status`
- **Auth:** [ADMIN]
- **Request Body:** `{ "isActive": false }`
- **Status Codes:** `200` · `401` · `404`

---

## 5. BRANDS — `/api/v1/brands`

### 5.1 List Brands
- **Method / URL:** `GET /api/v1/brands?page=1&limit=20&search=hav`
- **Auth:** [PUBLIC]
- **Status Codes:** `200`

### 5.2 Get Brand by slug
- **Method / URL:** `GET /api/v1/brands/:slug`
- **Auth:** [PUBLIC]
- **Status Codes:** `200` · `404`

### 5.3 Create Brand
- **Method / URL:** `POST /api/v1/brands`
- **Auth:** [ADMIN]
- **Headers:** `Content-Type: multipart/form-data`
- **Request Body:** `name` (required), `description` (optional), `websiteUrl` (optional, valid URL), `logo` (optional single file, `jpg|jpeg|png|svg|webp`, max 2MB)
- **Status Codes:** `201` · `400` · `401` · `409` duplicate name/slug

### 5.4 Update Brand
- **Method / URL:** `PUT /api/v1/brands/:id`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `400` · `401` · `404` · `409`

### 5.5 Delete Brand
- **Method / URL:** `DELETE /api/v1/brands/:id`
- **Auth:** [ADMIN]
- **Behavior:** Blocked (`409`) if active Products reference this brand.
- **Status Codes:** `200` · `401` · `404` · `409`

### 5.6 Toggle Brand Status
- **Method / URL:** `PATCH /api/v1/brands/:id/status`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401` · `404`

---

## 6. PROJECTS — `/api/v1/projects`

### 6.1 List Projects
- **Method / URL:** `GET /api/v1/projects?page=1&limit=12&status=completed&category=industrial&featured=true`
- **Auth:** [PUBLIC]
- **Status Codes:** `200`

### 6.2 Get Project by slug
- **Method / URL:** `GET /api/v1/projects/:slug`
- **Auth:** [PUBLIC]
- **Sample Response (200):** `data` includes `gallery` array of `{id, imageUrl, caption, sortOrder}`
- **Status Codes:** `200` · `404`

### 6.3 Create Project
- **Method / URL:** `POST /api/v1/projects`
- **Auth:** [ADMIN]
- **Headers:** `Content-Type: multipart/form-data`
- **Request Body:**
```
title: "Industrial Wiring Overhaul - Ankleshwar Plant"
clientName: "ABC Industries Pvt Ltd"
location: "Ankleshwar, Gujarat"
category: "Industrial Electrical"
description: "Complete rewiring and panel upgrade..."
startDate: "2026-01-10"
endDate: "2026-03-20"
status: "completed"
isFeatured: true
coverImage: [file]
gallery: [file, file, file]   // up to 20 files, field name "gallery"
```
- **Validation Rules:**
  - `title`: required, 3–200 chars
  - `status`: required, one of `ongoing|completed|upcoming`
  - `startDate`/`endDate`: optional, valid ISO date; `endDate` ≥ `startDate`
  - `coverImage`: optional single file, image types, max 5MB
  - `gallery`: optional, max 20 files, image types, max 5MB each
- **Status Codes:** `201` · `400` · `401` · `409` duplicate slug

### 6.4 Update Project
- **Method / URL:** `PUT /api/v1/projects/:id`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `400` · `401` · `404` · `409`

### 6.5 Delete Project
- **Method / URL:** `DELETE /api/v1/projects/:id`
- **Auth:** [ADMIN]
- **Behavior:** Cascades ProjectImages rows; removes physical files.
- **Status Codes:** `200` · `401` · `404`

### 6.6 Delete a Gallery Image
- **Method / URL:** `DELETE /api/v1/projects/:projectId/images/:imageId`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401` · `404`

### 6.7 Toggle Project Status
- **Method / URL:** `PATCH /api/v1/projects/:id/status`
- **Auth:** [ADMIN]
- **Request Body:** `{ "isActive": false }`
- **Status Codes:** `200` · `401` · `404`

---

## 7. JOBS (Careers) — `/api/v1/jobs`

### 7.1 List Jobs
- **Method / URL:** `GET /api/v1/jobs?page=1&limit=10&department=engineering&jobType=full_time`
- **Auth:** [PUBLIC] (public sees only `is_active = 1` and `deadline >= today OR deadline IS NULL`)
- **Status Codes:** `200`

### 7.2 Get Job by slug
- **Method / URL:** `GET /api/v1/jobs/:slug`
- **Auth:** [PUBLIC]
- **Status Codes:** `200` · `404`

### 7.3 Create Job
- **Method / URL:** `POST /api/v1/jobs`
- **Auth:** [ADMIN]
- **Headers:** `Content-Type: application/json`
- **Request Body:**
```json
{
  "title": "Electrical Site Engineer",
  "department": "Engineering",
  "location": "Surat, Gujarat",
  "jobType": "full_time",
  "experienceLevel": "2-4 years",
  "description": "Responsible for on-site electrical installation supervision...",
  "requirements": "Diploma/B.E in Electrical Engineering, valid license...",
  "salaryRange": "₹25,000 - ₹40,000/month",
  "vacancies": 2,
  "deadline": "2026-09-30"
}
```
- **Validation Rules:**
  - `title`: required, 3–150 chars
  - `jobType`: required, one of `full_time|part_time|contract|internship`
  - `description`: required
  - `vacancies`: optional integer ≥ 1, default 1
  - `deadline`: optional, valid future ISO date
- **Status Codes:** `201` · `400` · `401` · `409` duplicate slug

### 7.4 Update Job
- **Method / URL:** `PUT /api/v1/jobs/:id`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `400` · `401` · `404`

### 7.5 Delete Job
- **Method / URL:** `DELETE /api/v1/jobs/:id`
- **Auth:** [ADMIN]
- **Behavior:** Cascades Applications for that job. Recommended: use status toggle instead of hard delete once applications exist (endpoint still permits hard delete for authorized roles).
- **Status Codes:** `200` · `401` · `404`

### 7.6 Toggle Job Status
- **Method / URL:** `PATCH /api/v1/jobs/:id/status`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401` · `404`

---

## 8. APPLICATIONS — `/api/v1/applications`

### 8.1 Submit Job Application
- **Method / URL:** `POST /api/v1/applications`
- **Auth:** [PUBLIC]
- **Headers:** `Content-Type: multipart/form-data`
- **Request Body:**
```
jobId: 4
fullName: "Priya Nair"
email: "priya.nair@example.com"
phone: "9876543210"
coverLetter: "I am excited to apply for..."
resume: [file]   // field name "resume", required
```
- **Validation Rules:**
  - `jobId`: required, integer, must exist and be active
  - `fullName`: required, 3–150 chars
  - `email`: required, valid email
  - `phone`: required, 10-digit Indian mobile format
  - `resume`: required single file, `pdf|doc|docx`, max 5MB
- **Sample Response (201):**
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "data": { "id": 133, "jobTitle": "Electrical Site Engineer", "status": "new" },
  "errors": null,
  "timestamp": "2026-08-05T10:00:00.000Z"
}
```
- **Status Codes:** `201` · `400` · `404` job not found/inactive · `413` file too large

### 8.2 List Applications
- **Method / URL:** `GET /api/v1/applications?page=1&limit=20&jobId=4&status=new&search=priya`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401`

### 8.3 Get Single Application
- **Method / URL:** `GET /api/v1/applications/:id`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401` · `404`

### 8.4 Update Application Status
- **Method / URL:** `PATCH /api/v1/applications/:id/status`
- **Auth:** [ADMIN]
- **Request Body:** `{ "status": "shortlisted", "notes": "Strong technical background" }`
- **Validation Rules:** `status` required, one of `new|shortlisted|interviewing|rejected|hired`
- **Status Codes:** `200` · `400` · `401` · `404`

### 8.5 Delete Application
- **Method / URL:** `DELETE /api/v1/applications/:id`
- **Auth:** [ADMIN]
- **Behavior:** Deletes row and removes stored resume file.
- **Status Codes:** `200` · `401` · `404`

### 8.6 Export Applications to Excel
- **Method / URL:** `GET /api/v1/applications/export?jobId=4&status=new&from=2026-01-01&to=2026-08-05`
- **Auth:** [ADMIN]
- **Response:** Binary stream, `Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, `Content-Disposition: attachment; filename="applications_export_2026-08-05.xlsx"`
- **Status Codes:** `200` · `401` · `404` no records match filters

---

## 9. ENQUIRIES — `/api/v1/enquiries`

### 9.1 Submit Enquiry (Contact Form)
- **Method / URL:** `POST /api/v1/enquiries`
- **Auth:** [PUBLIC]
- **Headers:** `Content-Type: application/json`
- **Request Body:**
```json
{
  "fullName": "Amit Shah",
  "email": "amit.shah@example.com",
  "phone": "9998887770",
  "subject": "Bulk order query",
  "message": "I would like a quote for 500 MCB units.",
  "sourcePage": "product:mcb-32a-double-pole"
}
```
- **Validation Rules:**
  - `fullName`: required, 3–150 chars
  - `email`: required, valid email
  - `phone`: optional, 10-digit format if present
  - `message`: required, 10–2000 chars
  - Rate limited: max 5 submissions per IP per 15 minutes
- **Behavior:** Persists enquiry, sends acknowledgement email to submitter and notification email to admin via `email.service.js`.
- **Status Codes:** `201` · `400` · `429` too many requests

### 9.2 List Enquiries
- **Method / URL:** `GET /api/v1/enquiries?page=1&limit=20&status=new&isRead=false&search=amit&from=2026-08-01&to=2026-08-05`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401`

### 9.3 Get Single Enquiry
- **Method / URL:** `GET /api/v1/enquiries/:id`
- **Auth:** [ADMIN]
- **Behavior:** Automatically marks `is_read = true` on fetch.
- **Status Codes:** `200` · `401` · `404`

### 9.4 Update Enquiry Status
- **Method / URL:** `PATCH /api/v1/enquiries/:id/status`
- **Auth:** [ADMIN]
- **Request Body:** `{ "status": "resolved" }`
- **Validation Rules:** `status` one of `new|in_progress|resolved|spam`
- **Status Codes:** `200` · `400` · `401` · `404`

### 9.5 Delete Enquiry
- **Method / URL:** `DELETE /api/v1/enquiries/:id`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401` · `404`

### 9.6 Export Enquiries to Excel
- **Method / URL:** `GET /api/v1/enquiries/export?status=new&from=2026-01-01&to=2026-08-05`
- **Auth:** [ADMIN]
- **Response:** Binary `.xlsx` stream (same headers pattern as 8.6)
- **Status Codes:** `200` · `401` · `404`

---

## 10. CERTIFICATES — `/api/v1/certificates`

### 10.1 List Certificates
- **Method / URL:** `GET /api/v1/certificates`
- **Auth:** [PUBLIC] (only `is_active = 1` shown to public)
- **Status Codes:** `200`

### 10.2 Upload Certificate
- **Method / URL:** `POST /api/v1/certificates`
- **Auth:** [ADMIN]
- **Headers:** `Content-Type: multipart/form-data`
- **Request Body:** `title` (required), `issuer` (optional), `issueDate` (optional ISO date), `file` (required single file, `pdf|jpg|jpeg|png`, max 5MB)
- **Status Codes:** `201` · `400` · `401`

### 10.3 Update Certificate
- **Method / URL:** `PUT /api/v1/certificates/:id`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `400` · `401` · `404`

### 10.4 Delete Certificate
- **Method / URL:** `DELETE /api/v1/certificates/:id`
- **Auth:** [ADMIN]
- **Status Codes:** `200` · `401` · `404`

### 10.5 Reorder Certificates
- **Method / URL:** `PATCH /api/v1/certificates/reorder`
- **Auth:** [ADMIN]
- **Request Body:** `{ "order": [{ "id": 3, "sortOrder": 0 }, { "id": 1, "sortOrder": 1 }] }`
- **Status Codes:** `200` · `400` · `401`

---

## 11. WEBSITE SETTINGS — `/api/v1/settings`

### 11.1 Get Public Settings
- **Method / URL:** `GET /api/v1/settings`
- **Auth:** [PUBLIC]
- **Sample Response (200):**
```json
{
  "success": true,
  "message": "Settings fetched successfully",
  "data": {
    "siteName": "Gada Electronics",
    "logoUrl": "/uploads/settings/logo.png",
    "faviconUrl": "/uploads/settings/favicon.ico",
    "contactEmail": "info@gadaelectronics.com",
    "contactPhone": "+91-9998887771",
    "address": "Plot 14, GIDC Industrial Estate, Surat, Gujarat",
    "socialLinks": { "facebook": "https://facebook.com/gadaelectronics", "instagram": "https://instagram.com/gadaelectronics" },
    "seoMeta": { "defaultTitle": "Gada Electronics", "defaultDescription": "Leading electrical equipment supplier" },
    "businessHours": "Mon-Sat: 9:00 AM - 7:00 PM",
    "mapEmbedUrl": "https://maps.google.com/embed?..."
  },
  "errors": null,
  "timestamp": "2026-08-05T10:00:00.000Z"
}
```
- **Status Codes:** `200`

### 11.2 Update Website Settings
- **Method / URL:** `PUT /api/v1/settings`
- **Auth:** [ADMIN]
- **Headers:** `Content-Type: multipart/form-data`
- **Request Body:** any subset of settings fields; `logo` and `favicon` as optional single-file uploads (`png|jpg|svg|ico`, max 2MB)
- **Validation Rules:**
  - `contactEmail`: optional, valid email
  - `contactPhone`: optional, valid phone format
  - `socialLinks`/`seoMeta`: optional, valid JSON object
- **Status Codes:** `200` · `400` · `401`

---

## 12. Global Error Codes Reference

| Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Resource created |
| 400 | Validation error |
| 401 | Missing/invalid/expired JWT |
| 403 | Authenticated but insufficient role/inactive account |
| 404 | Resource not found |
| 409 | Conflict (duplicate slug/SKU/email, RESTRICT FK violation) |
| 413 | Uploaded file exceeds size limit |
| 415 | Unsupported file type |
| 422 | Semantically invalid data (e.g., endDate before startDate) |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
