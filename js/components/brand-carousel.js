/* ==========================================================================
   brand-carousel.js — Swiper-powered auto-scrolling brand-logo strip
   (home page "Our Brands" band, brands.html hero band).
   ========================================================================== */
import { qsa } from "../core/dom-utils.js";

export function init() {
  if (typeof window.Swiper === "undefined") {
    console.warn("[brand-carousel] Vendor Swiper not loaded — skipping init.");
    return;
  }

  qsa("[data-js='brand-carousel']").forEach((el) => {
    new window.Swiper(el, {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 40,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      allowTouchMove: true,
      freeMode: true,
      breakpoints: {
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      },
    });
  });
}

export default { init };