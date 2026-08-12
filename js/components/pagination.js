/* ==========================================================================
   pagination.js — Renders and wires numbered pagination controls for
   product-list, project-gallery, job-list. Pure render function + a
   click-delegate that emits a callback with the requested page number.
   ========================================================================== */
import { createEl } from "../core/dom-utils.js";

/**
 * Builds the visible page-number sequence with ellipses for large sets,
 * e.g. [1, '…', 4, 5, 6, '…', 20] when currentPage = 5, totalPages = 20.
 */
function buildPageSequence(currentPage, totalPages, siblingCount = 1) {
  const totalNumbers = siblingCount * 2 + 5; // first, last, current, 2 ellipses
  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);
  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  const pages = [1];
  if (showLeftEllipsis) pages.push("…");

  for (let i = Math.max(leftSibling, 2); i <= Math.min(rightSibling, totalPages - 1); i++) {
    pages.push(i);
  }

  if (showRightEllipsis) pages.push("…");
  pages.push(totalPages);

  return pages;
}

/**
 * Renders pagination into `container` and calls onPageChange(page) when
 * a page (or prev/next) is clicked. Re-render on every data fetch to
 * reflect the latest currentPage/totalPages from the API response meta.
 */
export function renderPagination(container, { currentPage, totalPages }, onPageChange) {
  if (!container) return;
  container.innerHTML = "";

  if (totalPages <= 1) return;

  const nav = createEl("nav", { className: "pagination", "aria-label": "Pagination" });
  const list = createEl("ul", { className: "pagination__list" });

  const makeButton = (label, page, { disabled = false, current = false, ariaLabel } = {}) =>
    createEl(
      "li",
      { className: "pagination__item" },
      createEl("button", {
        className: `pagination__link${current ? " is-current" : ""}`,
        disabled,
        "aria-current": current ? "page" : undefined,
        "aria-label": ariaLabel || `Go to page ${page}`,
        onClick: () => !disabled && !current && onPageChange(page),
      }, String(label))
    );

  list.appendChild(makeButton("‹", currentPage - 1, { disabled: currentPage === 1, ariaLabel: "Previous page" }));

  buildPageSequence(currentPage, totalPages).forEach((page) => {
    if (page === "…") {
      list.appendChild(createEl("li", { className: "pagination__item pagination__item--ellipsis" }, "…"));
    } else {
      list.appendChild(makeButton(page, page, { current: page === currentPage }));
    }
  });

  list.appendChild(makeButton("›", currentPage + 1, { disabled: currentPage === totalPages, ariaLabel: "Next page" }));

  nav.appendChild(list);
  container.appendChild(nav);
}

/** init() is a no-op — invoked directly by list modules (see skeleton.js note). */
export function init() {}

export default { init, renderPagination };