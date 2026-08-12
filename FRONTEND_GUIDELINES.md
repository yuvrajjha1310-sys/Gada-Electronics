# FRONTEND_GUIDELINES.md
## Gada Electronics — Design System & Frontend Standards

This is the single source of truth for all visual and interaction decisions. Every CSS/JS file generated in this project must comply with these tokens and rules. Theme: **Premium, Corporate, Modern, Industrial, Minimal.**

---

## 1. Brand Direction

Gada Electronics sits at the intersection of heavy industry and modern engineering precision. The visual language should feel: confident, technical, trustworthy, and clean — think "premium industrial" (brushed metal, circuit-board precision, deep navy/steel palette with a single energetic accent) rather than generic corporate blue-and-white.

---

## 2. Color Palette

Defined as CSS Custom Properties in `css/base/_variables.css`.

### Primary Palette
```css
:root {
  /* Core Brand */
  --color-primary-900: #0A1628;   /* Deep navy — headers, footer, dark sections */
  --color-primary-800: #0F2340;
  --color-primary-700: #16324D;
  --color-primary-600: #1E4160;
  --color-primary-500: #2B5578;   /* Primary brand blue */
  --color-primary-400: #4A73A0;
  --color-primary-300: #7B9DC4;
  --color-primary-200: #B3C9E0;
  --color-primary-100: #E1EAF4;

  /* Accent — Energy / Electric */
  --color-accent-600: #C9820A;
  --color-accent-500: #F5A623;    /* Primary accent — CTAs, highlights, energy motif */
  --color-accent-400: #F7B94D;
  --color-accent-100: #FDF0DA;

  /* Industrial Steel Neutrals */
  --color-steel-900: #14181D;
  --color-steel-800: #20262E;
  --color-steel-700: #333B45;
  --color-steel-600: #4B545F;
  --color-steel-500: #6B7480;
  --color-steel-400: #98A1AB;
  --color-steel-300: #C2C8CF;
  --color-steel-200: #E1E5E9;
  --color-steel-100: #F1F3F5;
  --color-white: #FFFFFF;

  /* Semantic */
  --color-success: #1E8E5A;
  --color-warning: #E0A400;
  --color-error: #D64545;
  --color-info: #2B7DAE;

  /* Surface & Text */
  --color-bg-body: #FFFFFF;
  --color-bg-alt: var(--color-steel-100);
  --color-bg-dark: var(--color-primary-900);
  --color-text-primary: var(--color-steel-900);
  --color-text-secondary: var(--color-steel-600);
  --color-text-inverse: #FFFFFF;
  --color-border: var(--color-steel-200);
}
```

**Usage rules:**
- Accent (`--color-accent-500`) is reserved for CTAs, key stats, active states, and hover highlights — never for large background fills (keeps it feeling premium, not gaudy).
- Dark navy (`--color-primary-900`) is the signature dark-section color (hero overlay, footer, stat bands).
- Neutral steel tones drive 80% of the UI (text, borders, backgrounds) to keep the "minimal industrial" feel.

---

## 3. Typography

**Font Pairing:**
- **Headings:** `"Sora", sans-serif` — geometric, modern, technical feel
- **Body:** `"Inter", sans-serif` — highly legible at small sizes, neutral workhorse
- Loaded via Google Fonts `<link>` (or self-hosted `.woff2` in `/assets/fonts/` for performance) with `font-display: swap`.

```css
:root {
  --font-heading: "Sora", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

  --fs-display: clamp(2.75rem, 5vw, 4.5rem);   /* hero */
  --fs-h1: clamp(2.25rem, 4vw, 3.25rem);
  --fs-h2: clamp(1.75rem, 3vw, 2.5rem);
  --fs-h3: clamp(1.375rem, 2vw, 1.75rem);
  --fs-h4: 1.25rem;
  --fs-h5: 1.125rem;
  --fs-body-lg: 1.125rem;
  --fs-body: 1rem;
  --fs-body-sm: 0.875rem;
  --fs-caption: 0.75rem;

  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  --lh-tight: 1.15;
  --lh-heading: 1.3;
  --lh-body: 1.65;
}
```

**Rules:**
- Headings use `--fw-semibold` or `--fw-bold` with `--lh-heading`/`--lh-tight`.
- Body copy never smaller than `--fs-body-sm` (14px) for accessibility.
- Line length for body paragraphs capped at `~70ch` via `.u-prose` utility.
- Letter-spacing: headings `-0.01em` (tight, modern); all-caps labels/eyebrows `0.08em` with `--fs-caption`.

---

## 4. Spacing System

8px base unit scale, exposed as custom properties, used for margin/padding/gap everywhere (no arbitrary pixel values in component CSS):

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-7: 2.5rem;   /* 40px */
  --space-8: 3rem;     /* 48px */
  --space-9: 4rem;     /* 64px */
  --space-10: 5rem;    /* 80px */
  --space-11: 6.5rem;  /* 104px */
  --space-12: 8rem;    /* 128px */
}
```
- Section vertical padding standard: `var(--space-11)` desktop, `var(--space-8)` mobile.
- Card internal padding: `var(--space-5)` to `var(--space-6)`.

---

## 5. Grid System & Layout

- **Max content width:** `--container-max: 1280px`, with `--container-padding: clamp(1rem, 4vw, 2.5rem)` side padding via a `.l-container` utility.
- **Grid:** CSS Grid primary, Flexbox for component-level alignment.
- Standard grid utility classes: `.l-grid`, `.l-grid--2`, `.l-grid--3`, `.l-grid--4` (auto-responsive via `repeat(auto-fit, minmax(...))` where content-driven, explicit column counts collapsing at breakpoints where precise alignment is required, e.g. product/card grids).
- Gutter: `--grid-gutter: var(--space-6)` desktop, `var(--space-4)` mobile.

---

## 6. Breakpoints (Mobile-First)

```css
:root {
  --bp-sm: 480px;   /* large phones */
  --bp-md: 768px;   /* tablets */
  --bp-lg: 1024px;  /* small laptops */
  --bp-xl: 1280px;  /* desktops */
  --bp-2xl: 1536px; /* large desktops */
}
```
All media queries use `min-width` (mobile-first). Example pattern used consistently across every CSS file:
```css
.component { /* mobile styles (default) */ }
@media (min-width: 768px)  { .component { /* tablet */ } }
@media (min-width: 1024px) { .component { /* desktop */ } }
@media (min-width: 1280px) { .component { /* large desktop */ } }
```
Navbar collapses to hamburger/mobile menu below `--bp-lg` (1024px).

---

## 7. Animation Standards

**Libraries:** AOS (scroll-reveal for sections/cards), GSAP (hero entrance, counters, complex timelines, parallax), CSS transitions (micro-interactions: hover, focus, toggle).

```css
:root {
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-emphasized: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 450ms;
  --duration-hero: 900ms;
}
```

**Rules:**
- Micro-interactions (buttons, links, cards hover): `--duration-fast` to `--duration-base`, `--ease-standard`.
- Section reveals (AOS): `fade-up` with `data-aos-duration="600"` to `800`, staggered `data-aos-delay` in 100ms increments for grids/lists.
- Hero entrance (GSAP): staged timeline — background scale-in → headline word-reveal → subtext fade → CTA pop, total under 1.4s so it never feels sluggish.
- Counters animate once on scroll-into-view (GSAP `ScrollTrigger` or IntersectionObserver fallback), easing `power2.out`, duration 1.6–2.2s depending on magnitude.
- Parallax: subtle only (max 15–20% translate offset) — industrial premium feel avoids gimmicky heavy parallax.
- Respect `prefers-reduced-motion: reduce` — all non-essential animation is disabled/shortened via a global media query.

---

## 8. Button Styles

Base class `.btn`, modifiers for variant/size:

| Class | Use |
|---|---|
| `.btn--primary` | Accent-filled, dark text, primary CTAs |
| `.btn--secondary` | Navy outline, transparent fill |
| `.btn--ghost` | Text-only with underline-on-hover, tertiary actions |
| `.btn--dark` | Dark navy fill, white text — on light sections |
| `.btn--light` | White fill — on dark/hero sections |
| `.btn--icon` | Square, icon-only (e.g. carousel arrows) |
| `.btn--sm` / `.btn--lg` | Size modifiers |

**Spec:**
- Border-radius: `--radius-md: 8px` (buttons/inputs), `--radius-full` for pill/icon buttons.
- Padding: `.btn` default `0.875rem 1.75rem`; `--sm` `0.5rem 1.125rem`; `--lg` `1.125rem 2.25rem`.
- Hover: subtle lift (`transform: translateY(-2px)`) + shadow increase, `--duration-fast`.
- Focus-visible: `2px solid var(--color-accent-500)` outline with `2px` offset — never removed, only restyled.
- Disabled: `opacity: 0.5; cursor: not-allowed;` no hover transform.

---

## 9. Form Styles

- Inputs/selects/textareas share `.form-control` base: `1px solid var(--color-border)`, `--radius-md`, `padding: 0.875rem 1rem`, `--fs-body`.
- Focus state: border → `var(--color-primary-500)`, subtle `box-shadow: 0 0 0 3px var(--color-primary-100)`.
- Labels: `.form-label`, `--fw-medium`, `--fs-body-sm`, `margin-bottom: var(--space-2)`.
- Error state: `.form-control.has-error` → border `var(--color-error)`; `.form-error-message` below field, `--color-error`, `--fs-caption`.
- Helper text: `.form-hint`, `--color-text-secondary`, `--fs-caption`.
- File upload (resume/images): custom drag-and-drop styled zone `.file-dropzone`, dashed border, hover/drag-active state highlights in `--color-primary-100`.
- All forms use `<fieldset>`/`<label for>` pairing and `aria-describedby` linking hints/errors for accessibility.

---

## 10. Card Styles

Base `.card` with elevation and radius tokens:

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 999px;

  --shadow-sm: 0 1px 3px rgba(10, 22, 40, 0.08);
  --shadow-md: 0 4px 16px rgba(10, 22, 40, 0.10);
  --shadow-lg: 0 12px 32px rgba(10, 22, 40, 0.14);
  --shadow-hover: 0 16px 40px rgba(10, 22, 40, 0.18);
}
```

- `.product-card`, `.project-card`, `.job-card`, `.industry-card`, `.service-card` all extend `.card` (BEM blocks in their own component files) — consistent radius `--radius-lg`, `--shadow-sm` at rest, `--shadow-hover` + `translateY(-4px)` on hover, `--duration-base`.
- Image containers use fixed aspect-ratio (`aspect-ratio: 4/3` products, `16/9` projects) with `object-fit: cover` to keep grids visually aligned regardless of source image dimensions.
- Card borders are omitted in favor of shadow-based separation (keeps the "minimal" feel); a 1px border is used only on dark backgrounds where shadows don't read.

---

## 11. Icons

- **Font Awesome** (CDN, free set) for all standard UI/utility icons (nav, socials, form icons, arrows, checkmarks).
- Custom SVG icon set (`/assets/images/icons/custom/`) for anything brand/industry-specific (e.g. transformer, circuit, panel icons on category/industry cards) — inlined as `<svg>` for CSS `currentColor` theming, not `<img>`.
- Icon sizing standardized via utility classes: `.icon-sm` (16px), `.icon-md` (24px), `.icon-lg` (32px), `.icon-xl` (48px).
- Icons inside buttons vertically centered via flex, `gap: var(--space-2)` from adjacent text.

---

## 12. Naming Conventions (cross-reference)

See `PROJECT_STRUCTURE.md` §2 for the full authoritative naming convention list (BEM for CSS, kebab-case files, camelCase JS, `data-js`/`data-*` hooks, `is-`/`has-` state classes, `u-` utilities, `l-` layout classes).

---

## 13. Accessibility Standards

- Color contrast: all text/background combinations meet **WCAG 2.1 AA** minimum (4.5:1 normal text, 3:1 large text/UI components) — verified against the palette in §2.
- All interactive elements reachable and operable via keyboard; visible `:focus-visible` states on every focusable element (never `outline: none` without a replacement).
- Semantic HTML first: `<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<button>` used correctly rather than generic `<div>` + click handlers.
- All images require descriptive `alt` text (decorative images use `alt=""`).
- Forms: every input has an associated `<label>`, required fields marked with `aria-required="true"` and a visible indicator, error messages linked via `aria-describedby`, live-region (`aria-live="polite"`) for async validation/toast feedback.
- Skip-to-content link as the first focusable element on every page.
- Modals/mega-menu/mobile-menu trap focus while open and restore focus on close; `Esc` closes overlays.
- Reduced motion respected globally (§7).
- Minimum touch target size: 44×44px for interactive elements on touch devices.

---

## 14. SEO & Performance Standards (frontend-owned)

- Unique `<title>` and `<meta name="description">` per page, Open Graph + Twitter Card tags in every `<head>`.
- Semantic heading hierarchy: exactly one `<h1>` per page.
- `loading="lazy"` on all below-the-fold images; hero/critical images use `fetchpriority="high"`.
- Images served with explicit `width`/`height` attributes to prevent layout shift (CLS).
- `main.css` and critical above-the-fold styles kept lean; vendor CSS/JS (AOS, Swiper, GSAP) loaded but deferred where not needed for first paint.
- All pages include a canonical `<link rel="canonical">` and structured data (`Organization`, `Product`, `JobPosting`, `BreadcrumbList` JSON-LD) matching the API data shapes in `API_CONTRACT.md`.

---

## 15. Global Component Behavior Notes

- **Sticky Navbar:** transitions from transparent-on-hero to solid `--color-white` with `--shadow-sm` after `scrollY > 80px`, `--duration-base` ease.
- **Mega Menu:** opens on hover (desktop, with slight delay to avoid mis-trigger) / tap (touch), full-width panel, grouped by category with icons + a featured product/promo tile.
- **Loading Screen:** brand-mark animated wordmark or logo pulse, minimum display 400ms/maximum 1.5s, fades out once `window.onload` + minimum-time both resolve.
- **Skeleton Screens:** used for product grid, project gallery, job list, and dashboard-bound content while awaiting API responses — shimmer animation via CSS gradient sweep, `--duration-slow` loop.
- **Toast Notifications:** bottom-right (desktop) / bottom-center (mobile), stack vertically, auto-dismiss 4s with hover-to-pause, variants map to semantic colors (§2).
- **Back To Top:** appears after `scrollY > 600px`, smooth-scroll to top via native `scroll-behavior: smooth` with GSAP fallback for custom easing.

---

This design system is binding for all subsequent folder/file generation in this project.
