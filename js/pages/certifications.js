/* ==========================================================================
   certifications.js — Page bootstrap for certifications.html.
   Fetches the active certificate list from CERTIFICATES.LIST and renders
   a grid of certificate cards (thumbnail + title/issuer/date), each
   opening the full file via lightbox for images or a new tab for PDFs.
   ========================================================================== */
import { qs, createEl } from "../core/dom-utils.js";
import { get } from "../core/http-client.js";
import { ENDPOINTS } from "../config/api.config.js";
import { showSkeleton, hideSkeleton } from "../components/skeleton.js";

function isPdf(fileUrl) {
  return fileUrl.toLowerCase().endsWith(".pdf");
}

function renderCertificateCard(cert) {
  const linkAttrs = isPdf(cert.fileUrl)
    ? { href: cert.fileUrl, target: "_blank", rel: "noopener" }
    : { href: cert.fileUrl, "data-lightbox-auto": "true" };

  return createEl("article", { className: "card card--certificate" }, [
    createEl("a", { className: "card__image-link", ...linkAttrs }, [
      isPdf(cert.fileUrl)
        ? createEl("div", { className: "card__pdf-icon" }, [createEl("i", { className: "fa-solid fa-file-pdf" })])
        : createEl("img", { src: cert.fileUrl, alt: cert.title, loading: "lazy" }),
    ]),
    createEl("div", { className: "card__body" }, [
      createEl("h3", { className: "card__title" }, cert.title),
      cert.issuer ? createEl("p", { className: "card__meta" }, cert.issuer) : null,
      cert.issueDate ? createEl("p", { className: "card__meta card__meta--date" }, new Date(cert.issueDate).getFullYear().toString()) : null,
    ]),
  ]);
}

async function loadCertificates() {
  const gridEl = qs("[data-js='certifications-grid']");
  if (!gridEl) return;

  // Keep the server-rendered demo cards visible until we know the backend
  // is actually reachable — same fallback pattern as modules/product-list.js —
  // so a missing/offline API never wipes out working static content.
  const previousHtml = gridEl.innerHTML;
  showSkeleton(gridEl, "certificate", 6);

  try {
    const { data: certificates } = await get(ENDPOINTS.CERTIFICATES.LIST);
    hideSkeleton(gridEl);

    if (!certificates || certificates.length === 0) {
      gridEl.appendChild(createEl("p", { className: "empty-state" }, "Certificates coming soon."));
      return;
    }

    certificates.forEach((cert) => gridEl.appendChild(renderCertificateCard(cert)));
    document.dispatchEvent(new CustomEvent("gada:content-updated"));
  } catch (err) {
    gridEl.innerHTML = previousHtml;
  }
}

export function init() {
  if (!qs("[data-js='certifications-page']")) return;
  loadCertificates();
}

export default { init };