/* ==========================================================================
   testimonial-slider.js — Swiper-powered testimonial carousel (home/about).
   Assumes global Swiper from js/vendor/swiper-bundle.min.js.
   ========================================================================== */
import { qsa } from "../core/dom-utils.js";

export function init() {
  if (typeof window.Swiper === "undefined") {
    console.warn("[testimonial-slider] Vendor Swiper not loaded — skipping init.");
    return;
  }

  qsa("[data-js='testimonial-slider']").forEach((el) => {
    new window.Swiper(el, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoHeight: true,
      speed: 500,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev"),
      },
      a11y: {
        prevSlideMessage: "Previous testimonial",
        nextSlideMessage: "Next testimonial",
      },
    });
  });
}

export default { init };