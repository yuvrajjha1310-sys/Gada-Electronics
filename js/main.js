/* ==========================================================================
   main.js — Global bootstrap script loaded on every page (type="module").
   Initializes shared chrome (loading screen, navbar, menus, toast, back-to-
   top) and animation libraries. Page-specific logic lives in js/pages/*.js
   and is loaded separately per page, AFTER this file.
   ========================================================================== */

import * as loadingScreen from "./components/loading-screen.js";
import * as navbar from "./components/navbar.js";
import * as megaMenu from "./components/mega-menu.js";
import * as mobileMenu from "./components/mobile-menu.js";
import * as backToTop from "./components/back-to-top.js";
import * as toast from "./components/toast.js";
import * as modal from "./components/modal.js";
import * as tabs from "./components/tabs.js";
import * as accordion from "./components/accordion.js";
import * as counters from "./components/counters.js";
import * as testimonialSlider from "./components/testimonial-slider.js";
import * as brandCarousel from "./components/brand-carousel.js";
import * as lightboxInit from "./components/lightbox-init.js";
import * as parallax from "./components/parallax.js";

import * as aosInit from "./animations/aos-init.js";
import * as gsapInit from "./animations/gsap-init.js";
import * as scrollEffects from "./animations/scroll-effects.js";

import * as newsletterForm from "./modules/newsletter-form.js";
import * as faq from "./modules/faq.js";
import * as productImages from "./modules/product-images.js";

/**
 * Modules run in this order deliberately:
 * 1. Loading screen first (paints immediately, hides everything else's jank)
 * 2. Animation libraries before any component that depends on them
 * 3. Global chrome (navbar/menus/toast/modal) needed on every page
 * 4. Lightweight modules that are safe to run even if their markup
 *    isn't present on the current page (each checks for its own DOM hooks)
 */
const GLOBAL_MODULES = [
  loadingScreen,
  gsapInit,
  aosInit,
  navbar,
  megaMenu,
  mobileMenu,
  backToTop,
  toast,
  modal,
  tabs,
  accordion,
  counters,
  testimonialSlider,
  brandCarousel,
  lightboxInit,
  parallax,
  scrollEffects,
  newsletterForm,
  faq,
  productImages,
];

function bootstrap() {
  GLOBAL_MODULES.forEach((module) => {
    try {
      module.init();
    } catch (err) {
      // One failing module (e.g. missing vendor lib) should never
      // take down the rest of the page's interactivity.
      console.error(`[main.js] Failed to init module:`, err);
    }
  });

  document.dispatchEvent(new CustomEvent("gada:app-ready"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}