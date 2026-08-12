<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Products | Gada Electronics</title>
  <meta name="description" content="Browse Gada Electronics' full range of industrial equipment — circuit breakers, transformers, switchgear — plus TVs, mobile phones, ACs, refrigerators, and home electronics from 25+ leading brands.">
  <link rel="canonical" href="https://www.gadaelectronics.com/products.html">

  <meta property="og:title" content="Our Products | Gada Electronics">
  <meta property="og:description" content="Circuit breakers, transformers, switchgear, cables, and automation equipment.">
  <meta property="og:image" content="assets/images/og/og-image.jpg">
  <meta property="og:type" content="website">

  <link rel="icon" href="assets/images/logo/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/print.css" media="print">
</head>
<body class="page-products" data-nav-page="products">

  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- ============================== HEADER ============================== -->
  <header class="site-header" data-js="header">
    <nav class="navbar" data-js="navbar">
      <div class="l-container navbar__inner">

        <a href="index.html" class="navbar__logo" data-js="site-logo" tabindex="0">
          <img src="assets/images/logo/logo-primary.svg" alt="Gada Electronics" class="navbar__logo-img navbar__logo-img--dark" />
          <img src="assets/images/logo/logo-white.svg" alt="Gada Electronics" class="navbar__logo-img navbar__logo-img--light" />
        </a>

        <ul class="navbar__links" role="menubar">
          <li role="none"><a href="index.html" data-nav-link="home" role="menuitem">Home</a></li>
          <li role="none"><a href="about.html" data-nav-link="about" role="menuitem">About</a></li>

          <li role="none" data-js="mega-menu-item" class="navbar__item--has-mega">
            <a href="products.html" data-nav-link="products" role="menuitem"
               data-js="mega-menu-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="productsMegaMenu">
              Products <i class="fa-solid fa-chevron-down navbar__caret"></i>
            </a>
            <div id="productsMegaMenu" class="mega-menu" data-js="mega-menu-panel" role="menu">
              <!-- Full mega-menu markup lives in partials/mega-menu.html -->
              <div class="l-container mega-menu__inner">
                <p class="mega-menu__placeholder">Mega menu content — see partials/mega-menu.html</p>
              </div>
            </div>
          </li>

          <li role="none"><a href="industries.html" data-nav-link="industries" role="menuitem">Industries</a></li>
          <li role="none"><a href="services.html" data-nav-link="services" role="menuitem">Services</a></li>
          <li role="none"><a href="brands.html" data-nav-link="brands" role="menuitem">Brands</a></li>
          <li role="none"><a href="projects.html" data-nav-link="projects" role="menuitem">Projects</a></li>
          <li role="none"><a href="careers.html" data-nav-link="careers" role="menuitem">Careers</a></li>
          <li role="none"><a href="contact.html" data-nav-link="contact" role="menuitem">Contact</a></li>
        </ul>

        <div class="navbar__actions">
          <a href="contact.html" class="btn btn--primary btn--sm navbar__cta">Get a Quote</a>
          <button type="button" class="navbar__mobile-trigger" data-js="mobile-menu-trigger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>

      </div>
    </nav>
  </header>

  <!-- Mobile Menu (off-canvas) -->
  <div class="mobile-menu" data-js="mobile-menu-panel" id="mobileMenuPanel">
    <!-- Full mobile-menu markup lives in partials/mobile-menu.html -->
    <div class="mobile-menu__placeholder">Mobile menu content — see partials/mobile-menu.html</div>
  </div>
  <div class="mobile-menu__overlay" data-js="mobile-menu-overlay"></div>

  <main id="main-content" data-js="products-page">

    <section class="page-banner" style="background-image: url('assets/images/products/products-banner.jpg');">
      <div class="l-container page-banner__content">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <span class="breadcrumbs__item"><a href="index.html">Home</a></span>
          <i class="fa-solid fa-chevron-right breadcrumbs__separator"></i>
          <span class="breadcrumbs__item">Products</span>
        </nav>
        <h1 class="page-banner__title">Our Products</h1>
        <p style="color: rgba(255,255,255,0.85); font-size: var(--fs-body-lg); max-width: 640px; margin-top: var(--space-3);">Industrial electrical equipment and automation gear, alongside TVs, mobile phones, ACs, refrigerators, and everyday home electronics.</p>
      </div>
    </section>

    <section class="section">
      <div class="l-container products-layout">

        <!-- ---------- Sidebar Filters ---------- -->
        <aside class="filters-sidebar" data-js="filters-sidebar" aria-label="Product filters">
          <div class="filters-sidebar__header">
            <h2 class="card__title" style="font-size: var(--fs-h5);">Filters</h2>
            <button type="button" class="filters-sidebar__clear" data-js="clear-filters">Clear All</button>
          </div>

          <div class="filter-group">
            <p class="filter-group__title">Shop</p>
            <div class="filter-group__list" data-js="filter-department">
              <div class="filter-option">
                <label><input type="radio" name="department" value="" checked> All Departments</label>
              </div>
              <div class="filter-option">
                <label><input type="radio" name="department" value="industrial"> Industrial &amp; Automation</label>
              </div>
              <div class="filter-option">
                <label><input type="radio" name="department" value="consumer"> Home &amp; Consumer Electronics</label>
              </div>
            </div>
          </div>

          <div class="filter-group">
            <p class="filter-group__title">Category</p>
            <div class="filter-group__list" data-js="filter-category">
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="circuit-breakers"> Circuit Breakers</label>
                <span class="filter-option__count">42</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="transformers"> Transformers</label>
                <span class="filter-option__count">28</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="switchgear"> Switchgear</label>
                <span class="filter-option__count">33</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="cables-wires"> Cables &amp; Wires</label>
                <span class="filter-option__count">21</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="relays"> Relays &amp; Protection</label>
                <span class="filter-option__count">17</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="panels"> Distribution Panels</label>
                <span class="filter-option__count">19</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="televisions"> Televisions</label>
                <span class="filter-option__count">24</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="mobile-phones"> Mobile Phones</label>
                <span class="filter-option__count">36</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="air-conditioners"> Air Conditioners</label>
                <span class="filter-option__count">18</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="refrigerators"> Refrigerators</label>
                <span class="filter-option__count">15</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="home-appliances"> Home Appliances</label>
                <span class="filter-option__count">22</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="category" value="gadgets-accessories"> Gadgets &amp; Accessories</label>
                <span class="filter-option__count">29</span>
              </div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="toasters"> Toasters</label><span class="filter-option__count">5</span></div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="air-fryers"> Air Fryers</label><span class="filter-option__count">5</span></div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="iron-press"> Iron &amp; Press</label><span class="filter-option__count">4</span></div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="microwaves"> Microwave Ovens</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="mixers"> Mixer Grinders</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="fans"> Fans</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="laptops"> Laptops</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="tablets"> Tablets</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="category" value="audio"> Audio &amp; Headphones</label><span class="filter-option__count">3</span></div>
            </div>
          </div>

          <div class="filter-group">
            <p class="filter-group__title">Brand</p>
            <div class="filter-group__list" data-js="filter-brand">
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="siemens"> Siemens</label>
                <span class="filter-option__count">58</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="schneider-electric"> Schneider Electric</label>
                <span class="filter-option__count">47</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="abb"> ABB</label>
                <span class="filter-option__count">39</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="legrand"> Legrand</label>
                <span class="filter-option__count">28</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="havells"> Havells</label>
                <span class="filter-option__count">44</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="samsung"> Samsung</label>
                <span class="filter-option__count">33</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="lg"> LG</label>
                <span class="filter-option__count">27</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="apple"> Apple</label>
                <span class="filter-option__count">14</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="sony"> Sony</label>
                <span class="filter-option__count">19</span>
              </div>
              <div class="filter-option">
                <label><input type="checkbox" name="brand" value="whirlpool"> Whirlpool</label>
                <span class="filter-option__count">12</span>
              </div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="oneplus"> OnePlus</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="xiaomi"> Xiaomi</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="vivo"> Vivo</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="oppo"> OPPO</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="motorola"> Motorola</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="tcl"> TCL</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="daikin"> Daikin</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="voltas"> Voltas</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="blue-star"> Blue Star</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="haier"> Haier</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="bosch"> Bosch</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="ifb"> IFB</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="philips"> Philips</label><span class="filter-option__count">5</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="bajaj"> Bajaj</label><span class="filter-option__count">6</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="sony"> Sony</label><span class="filter-option__count">4</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="jbl"> JBL</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="dyson"> Dyson</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="google"> Google</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="realme"> Realme</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="poco"> POCO</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="nothing"> Nothing</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="honor"> Honor</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="hitachi"> Hitachi</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="godrej"> Godrej</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="panasonic"> Panasonic</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="prestige"> Prestige</label><span class="filter-option__count">1</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="usha"> Usha</label><span class="filter-option__count">2</span></div>
              <div class="filter-option"><label><input type="checkbox" name="brand" value="inalsa"> Inalsa</label><span class="filter-option__count">1</span></div>
            </div>
          </div>

          <div class="filter-group">
            <p class="filter-group__title">Availability</p>
            <div class="filter-group__list" data-js="filter-availability">
              <div class="filter-option">
                <label><input type="radio" name="availability" value=""> All</label>
              </div>
              <div class="filter-option">
                <label><input type="radio" name="availability" value="in-stock"> In Stock</label>
              </div>
              <div class="filter-option">
                <label><input type="radio" name="availability" value="pre-order"> Pre-Order</label>
              </div>
              <div class="filter-option">
                <label><input type="radio" name="availability" value="out-of-stock"> Out of Stock</label>
              </div>
            </div>
          </div>

          <div class="filter-group">
            <p class="filter-group__title">Price Range (₹)</p>
            <div class="filter-price__inputs" data-js="filter-price">
              <label for="minPrice" class="u-sr-only">Minimum price</label>
              <input type="number" id="minPrice" class="form-control" placeholder="Min" min="0">
              <span>—</span>
              <label for="maxPrice" class="u-sr-only">Maximum price</label>
              <input type="number" id="maxPrice" class="form-control" placeholder="Max" min="0">
            </div>
            <button type="button" class="btn btn--secondary btn--sm btn--full u-mt-4" data-js="apply-price-filter">Apply</button>
          </div>
        </aside>

        <!-- ---------- Main Content ---------- -->
        <div>
          <!-- Toolbar -->
          <div class="products-toolbar">
            <div class="products-toolbar__left">
              <div class="search-input" style="flex: 1;">
                <label for="productSearch" class="u-sr-only">Search products</label>
                <i class="fa-solid fa-magnifying-glass search-input__icon"></i>
                <input type="search" id="productSearch" class="form-control" placeholder="Search products by name or SKU..." data-js="product-search">
                <button type="button" class="search-input__clear" aria-label="Clear search" data-js="product-search-clear"><i class="fa-solid fa-xmark"></i></button>
              </div>
              <span class="products-toolbar__count" data-js="products-count">111 Products</span>
            </div>
            <div class="products-toolbar__right">
              <select class="form-control" data-js="product-sort" aria-label="Sort products">
                <option value="createdAt-desc">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="popularity-desc">Most Popular</option>
              </select>
              <div class="view-toggle" role="group" aria-label="Toggle view">
                <button type="button" class="view-toggle__btn is-active" data-js="view-grid" aria-label="Grid view"><i class="fa-solid fa-grip"></i></button>
                <button type="button" class="view-toggle__btn" data-js="view-list" aria-label="List view"><i class="fa-solid fa-list"></i></button>
              </div>
            </div>
          </div>

          <!-- Active Filter Chips -->
          <div class="active-filters" data-js="active-filters"></div>

          <!-- Product Grid -->
          <div class="products-grid" data-js="products-grid">

            <div class="card product-card" data-aos="fade-up">
              <div class="card__media">
                <span class="badge badge--accent card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-mcb.jpg" alt="MCB Miniature Circuit Breaker 32A (reference photo, CC BY-SA 4.0 via Wikimedia Commons)" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Siemens</p>
                <h3 class="card__title"><a href="product-details.html?product=mcb-miniature-circuit-breaker-32a">MCB Circuit Breaker 32A</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹845</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-transformer.jpg" alt="Distribution Transformer 100kVA (reference photo, CC BY-SA 3.0 via Wikimedia Commons)" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">ABB</p>
                <h3 class="card__title"><a href="product-details.html?product=distribution-transformer-100kva">Distribution Transformer 100kVA</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹2,84,000</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-panel.jpg" alt="Smart Distribution Panel (reference photo, CC BY-SA 4.0 via Wikimedia Commons)" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Schneider Electric</p>
                <h3 class="card__title"><a href="product-details.html?product=smart-distribution-panel">Smart Distribution Panel</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹56,200</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-pre-order">Pre-Order</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-relay.jpg" alt="Protection Relay Unit (reference photo, CC BY-SA 3.0 via Wikimedia Commons)" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Legrand</p>
                <h3 class="card__title"><a href="product-details.html?product=protection-relay-unit">Protection Relay Unit</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹12,400</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-cable.jpg" alt="XLPE Armoured Cable (reference photo, public domain via Wikimedia Commons)" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Polycab</p>
                <h3 class="card__title"><a href="product-details.html?product=xlpe-armoured-cable">XLPE Armoured Cable (Per Meter)</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹185</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-switchgear.jpg" alt="Low Voltage Switchgear Unit (reference photo, CC BY-SA 3.0 via Wikimedia Commons)" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Eaton</p>
                <h3 class="card__title"><a href="product-details.html?product=low-voltage-switchgear-unit">Low Voltage Switchgear Unit</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,32,000</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-out-of-stock">Out of Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100">
              <div class="card__media">
                <span class="badge badge--accent card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-01.jpg" alt="Samsung 55-inch Crystal 4K Smart TV" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=samsung-55-crystal-4k-smart-tv">55&Prime; Crystal 4K Smart TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹42,990</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-01.jpg" alt="Apple iPhone 15 128GB" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Apple</p>
                <h3 class="card__title"><a href="product-details.html?product=apple-iphone-15-128gb">iPhone 15 (128GB)</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹65,900</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/lg-ac.jpg" alt="LG 1.5 Ton 5-Star Inverter Split AC" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">LG</p>
                <h3 class="card__title"><a href="product-details.html?product=lg-1-5-ton-inverter-split-ac">1.5 Ton 5-Star Inverter Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹38,490</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-01.jpg" alt="Samsung 253L 3-Star Double Door Refrigerator" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=samsung-253l-double-door-refrigerator">253L 3-Star Double Door Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹27,990</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-pre-order">Pre-Order</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-01.jpg" alt="Bosch Front Load Washing Machine 7kg" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bosch</p>
                <h3 class="card__title"><a href="product-details.html?product=bosch-front-load-washing-machine-7kg">Front Load Washing Machine 7kg</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹31,490</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150">
              <div class="card__media">
                <span class="badge badge--accent card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-02.jpg" alt="boAt Rockerz 450 Bluetooth Headphones" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">boAt</p>
                <h3 class="card__title"><a href="product-details.html?product=boat-rockerz-450-headphones">Rockerz 450 Bluetooth Headphones</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,499</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/smartwatch-01.jpg" alt="Noise ColorFit Pro 4 Smartwatch" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Noise</p>
                <h3 class="card__title"><a href="product-details.html?product=noise-colorfit-pro-4-smartwatch">ColorFit Pro 4 Smartwatch</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹2,299</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/powerbank-01.jpg" alt="Mi 20000mAh Power Bank" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Mi</p>
                <h3 class="card__title"><a href="product-details.html?product=mi-20000mah-power-bank">20000mAh Power Bank (22.5W)</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,899</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100">
              <div class="card__media">
                <span class="badge badge--accent card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/speaker-01.jpg" alt="JBL Flip 6 Bluetooth Speaker" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">JBL</p>
                <h3 class="card__title"><a href="product-details.html?product=jbl-flip-6-bluetooth-speaker">Flip 6 Portable Bluetooth Speaker</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹9,999</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150">
              <div class="card__media">
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-cable.jpg" alt="boAt Airdopes 141 Wireless Earbuds" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">boAt</p>
                <h3 class="card__title"><a href="product-details.html?product=boat-airdopes-141-earbuds">Airdopes 141 Wireless Earbuds</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,299</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-in-stock">In Stock</span>
                </div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/camera-01.jpg" alt="GoPro HERO12 Action Camera" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">GoPro</p>
                <h3 class="card__title"><a href="product-details.html?product=gopro-hero12-action-camera">HERO12 Action Camera</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹35,990</span></div>
                <div class="card__footer">
                  <span class="badge badge--status-pre-order">Pre-Order</span>
                </div>
              </div>
            </div>


            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="televisions" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-02.jpg" alt="43-inch 4K Crystal UHD Smart TV - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=43-inch-4k-crystal-uhd-smart-tv">43-inch 4K Crystal UHD Smart TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹32,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="televisions" data-brand="sony">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-03.jpg" alt="50-inch 4K UHD Google TV - Sony" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Sony</p>
                <h3 class="card__title"><a href="product-details.html?product=50-inch-4k-uhd-google-tv">50-inch 4K UHD Google TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹44,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="televisions" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-01.jpg" alt="55-inch QLED 4K Smart TV - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=55-inch-qled-4k-smart-tv">55-inch QLED 4K Smart TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹58,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="televisions" data-brand="lg">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-02.jpg" alt="65-inch OLED 4K Smart TV - LG" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">LG</p>
                <h3 class="card__title"><a href="product-details.html?product=65-inch-oled-4k-smart-tv">65-inch OLED 4K Smart TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,24,990</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="televisions" data-brand="tcl">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-03.jpg" alt="43-inch 4K Android Smart TV - TCL" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">TCL</p>
                <h3 class="card__title"><a href="product-details.html?product=43-inch-4k-android-smart-tv">43-inch 4K Android Smart TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹27,499</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="televisions" data-brand="tcl">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-01.jpg" alt="55-inch Mini LED 4K Google TV - TCL" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">TCL</p>
                <h3 class="card__title"><a href="product-details.html?product=55-inch-mini-led-4k-google-tv">55-inch Mini LED 4K Google TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹69,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="televisions" data-brand="oneplus">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-02.jpg" alt="32-inch HD Ready Smart LED TV - OnePlus" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">OnePlus</p>
                <h3 class="card__title"><a href="product-details.html?product=32-inch-hd-ready-smart-led-tv">32-inch HD Ready Smart LED TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹15,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="televisions" data-brand="hisense">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-03.jpg" alt="55-inch 4K Ultra HD Smart TV - Hisense" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Hisense</p>
                <h3 class="card__title"><a href="product-details.html?product=55-inch-4k-ultra-hd-smart-tv">55-inch 4K Ultra HD Smart TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹39,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="televisions" data-brand="acer">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-01.jpg" alt="65-inch QLED 4K Smart TV - Acer" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Acer</p>
                <h3 class="card__title"><a href="product-details.html?product=65-inch-qled-4k-smart-tv">65-inch QLED 4K Smart TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹74,990</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="televisions" data-brand="sony">
              <div class="card__media">
                <span class="badge badge--info card__badge">Premium</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tv-02.jpg" alt="75-inch 4K Google TV - Sony" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Sony</p>
                <h3 class="card__title"><a href="product-details.html?product=75-inch-4k-google-tv">75-inch 4K Google TV</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,49,990</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="mobile-phones" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-03.jpg" alt="Galaxy S26 Ultra 5G 256GB - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=galaxy-s26-ultra-5g-256gb">Galaxy S26 Ultra 5G 256GB</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,39,999</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="mobile-phones" data-brand="samsung">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-04.jpg" alt="Galaxy S26+ 5G 256GB - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=galaxy-s26-5g-256gb">Galaxy S26+ 5G 256GB</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,09,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="mobile-phones" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-01.jpg" alt="Galaxy A57 5G 256GB - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=galaxy-a57-5g-256gb">Galaxy A57 5G 256GB</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹41,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="mobile-phones" data-brand="apple">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-02.jpg" alt="iPhone 17 Pro 256GB - Apple" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Apple</p>
                <h3 class="card__title"><a href="product-details.html?product=iphone-17-pro-256gb">iPhone 17 Pro 256GB</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,34,900</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="mobile-phones" data-brand="apple">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-03.jpg" alt="iPhone 17 256GB - Apple" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Apple</p>
                <h3 class="card__title"><a href="product-details.html?product=iphone-17-256gb">iPhone 17 256GB</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹89,900</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="mobile-phones" data-brand="apple">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-04.jpg" alt="iPhone Air 256GB - Apple" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Apple</p>
                <h3 class="card__title"><a href="product-details.html?product=iphone-air-256gb">iPhone Air 256GB</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹99,900</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="mobile-phones" data-brand="oneplus">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-01.jpg" alt="OnePlus 13 5G 256GB - OnePlus" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">OnePlus</p>
                <h3 class="card__title"><a href="product-details.html?product=oneplus-13-5g-256gb">OnePlus 13 5G 256GB</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹69,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="mobile-phones" data-brand="xiaomi">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-02.jpg" alt="Xiaomi 15 Ultra 5G - Xiaomi" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Xiaomi</p>
                <h3 class="card__title"><a href="product-details.html?product=xiaomi-15-ultra-5g">Xiaomi 15 Ultra 5G</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹89,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="mobile-phones" data-brand="vivo">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-03.jpg" alt="Vivo X200 Pro 5G - Vivo" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Vivo</p>
                <h3 class="card__title"><a href="product-details.html?product=vivo-x200-pro-5g">Vivo X200 Pro 5G</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹94,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="mobile-phones" data-brand="oppo">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-04.jpg" alt="OPPO Find X8 Pro 5G - OPPO" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">OPPO</p>
                <h3 class="card__title"><a href="product-details.html?product=oppo-find-x8-pro-5g">OPPO Find X8 Pro 5G</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹99,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="mobile-phones" data-brand="motorola">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-01.jpg" alt="Motorola Edge 60 Pro 5G - Motorola" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Motorola</p>
                <h3 class="card__title"><a href="product-details.html?product=motorola-edge-60-pro-5g">Motorola Edge 60 Pro 5G</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹39,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="mobile-phones" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-fold.jpg" alt="Galaxy Z Fold8 - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=galaxy-z-fold8">Galaxy Z Fold8</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,74,999</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="air-conditioners" data-brand="lg">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/lg-ac.jpg" alt="1 Ton 5-Star Dual Inverter Split AC - LG" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">LG</p>
                <h3 class="card__title"><a href="product-details.html?product=1-ton-5-star-dual-inverter-split-ac">1 Ton 5-Star Dual Inverter Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹39,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="air-conditioners" data-brand="lg">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/lg-ac.jpg" alt="1.5 Ton 5-Star Dual Inverter Split AC - LG" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">LG</p>
                <h3 class="card__title"><a href="product-details.html?product=1-5-ton-5-star-dual-inverter-split-ac">1.5 Ton 5-Star Dual Inverter Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹46,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="air-conditioners" data-brand="daikin">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-01.jpg" alt="1.5 Ton 5-Star Inverter Split AC - Daikin" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Daikin</p>
                <h3 class="card__title"><a href="product-details.html?product=1-5-ton-5-star-inverter-split-ac">1.5 Ton 5-Star Inverter Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹52,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="air-conditioners" data-brand="daikin">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-02.jpg" alt="2 Ton 5-Star Inverter Split AC - Daikin" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Daikin</p>
                <h3 class="card__title"><a href="product-details.html?product=2-ton-5-star-inverter-split-ac">2 Ton 5-Star Inverter Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹67,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="air-conditioners" data-brand="samsung">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-01.jpg" alt="1.5 Ton 5-Star Inverter Split AC - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=1-5-ton-5-star-inverter-split-ac">1.5 Ton 5-Star Inverter Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹49,490</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="air-conditioners" data-brand="voltas">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-02.jpg" alt="1.5 Ton 3-Star Window AC - Voltas" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Voltas</p>
                <h3 class="card__title"><a href="product-details.html?product=1-5-ton-3-star-window-ac">1.5 Ton 3-Star Window AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹31,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="air-conditioners" data-brand="blue-star">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-01.jpg" alt="1.5 Ton 5-Star Split AC - Blue Star" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Blue Star</p>
                <h3 class="card__title"><a href="product-details.html?product=1-5-ton-5-star-split-ac">1.5 Ton 5-Star Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹44,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="air-conditioners" data-brand="panasonic">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-02.jpg" alt="1.5 Ton 5-Star Inverter AC - Panasonic" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Panasonic</p>
                <h3 class="card__title"><a href="product-details.html?product=1-5-ton-5-star-inverter-ac">1.5 Ton 5-Star Inverter AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹43,990</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="refrigerators" data-brand="lg">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-02.jpg" alt="185L 5-Star Single Door Refrigerator - LG" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">LG</p>
                <h3 class="card__title"><a href="product-details.html?product=185l-5-star-single-door-refrigerator">185L 5-Star Single Door Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹18,490</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="refrigerators" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-03.jpg" alt="236L 3-Star Double Door Refrigerator - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=236l-3-star-double-door-refrigerator">236L 3-Star Double Door Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹27,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="refrigerators" data-brand="whirlpool">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-01.jpg" alt="253L Convertible Double Door Refrigerator - Whirlpool" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Whirlpool</p>
                <h3 class="card__title"><a href="product-details.html?product=253l-convertible-double-door-refrigerator">253L Convertible Double Door Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹31,490</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="refrigerators" data-brand="lg">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-02.jpg" alt="340L Frost Free Double Door Refrigerator - LG" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">LG</p>
                <h3 class="card__title"><a href="product-details.html?product=340l-frost-free-double-door-refrigerator">340L Frost Free Double Door Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹42,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="refrigerators" data-brand="haier">
              <div class="card__media">
                <span class="badge badge--info card__badge">Premium</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-03.jpg" alt="415L Side-by-Side Refrigerator - Haier" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Haier</p>
                <h3 class="card__title"><a href="product-details.html?product=415l-side-by-side-refrigerator">415L Side-by-Side Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹62,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="refrigerators" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">Premium</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-01.jpg" alt="650L French Door Refrigerator - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=650l-french-door-refrigerator">650L French Door Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,29,990</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="refrigerators" data-brand="godrej">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-02.jpg" alt="240L Convertible Refrigerator - Godrej" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Godrej</p>
                <h3 class="card__title"><a href="product-details.html?product=240l-convertible-refrigerator">240L Convertible Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹25,490</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="refrigerators" data-brand="panasonic">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-03.jpg" alt="190L Direct Cool Refrigerator - Panasonic" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Panasonic</p>
                <h3 class="card__title"><a href="product-details.html?product=190l-direct-cool-refrigerator">190L Direct Cool Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹17,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="washing-machines" data-brand="lg">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-02.jpg" alt="7kg 5-Star Fully Automatic Front Load - LG" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">LG</p>
                <h3 class="card__title"><a href="product-details.html?product=7kg-5-star-fully-automatic-front-load">7kg 5-Star Fully Automatic Front Load</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹34,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="washing-machines" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-01.jpg" alt="8kg AI Ecobubble Front Load - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=8kg-ai-ecobubble-front-load">8kg AI Ecobubble Front Load</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹42,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="washing-machines" data-brand="ifb">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-02.jpg" alt="9kg Fully Automatic Front Load - IFB" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">IFB</p>
                <h3 class="card__title"><a href="product-details.html?product=9kg-fully-automatic-front-load">9kg Fully Automatic Front Load</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹39,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="washing-machines" data-brand="bosch">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-01.jpg" alt="8kg Fully Automatic Front Load - Bosch" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bosch</p>
                <h3 class="card__title"><a href="product-details.html?product=8kg-fully-automatic-front-load">8kg Fully Automatic Front Load</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹44,490</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="washing-machines" data-brand="whirlpool">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-02.jpg" alt="7kg 5-Star Top Load Washing Machine - Whirlpool" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Whirlpool</p>
                <h3 class="card__title"><a href="product-details.html?product=7kg-5-star-top-load-washing-machine">7kg 5-Star Top Load Washing Machine</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹24,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="washing-machines" data-brand="godrej">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-01.jpg" alt="8kg Fully Automatic Top Load - Godrej" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Godrej</p>
                <h3 class="card__title"><a href="product-details.html?product=8kg-fully-automatic-top-load">8kg Fully Automatic Top Load</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹22,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="washing-machines" data-brand="panasonic">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-02.jpg" alt="7kg Semi Automatic Washing Machine - Panasonic" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Panasonic</p>
                <h3 class="card__title"><a href="product-details.html?product=7kg-semi-automatic-washing-machine">7kg Semi Automatic Washing Machine</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹14,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="washing-machines" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">Premium</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/washer-01.jpg" alt="10kg AI Front Load Washing Machine - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=10kg-ai-front-load-washing-machine">10kg AI Front Load Washing Machine</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹59,990</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="toasters" data-brand="philips">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/toaster-01.jpg" alt="2-Slice Pop-Up Toaster - Philips" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Philips</p>
                <h3 class="card__title"><a href="product-details.html?product=2-slice-pop-up-toaster">2-Slice Pop-Up Toaster</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹2,499</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="toasters" data-brand="morphy-richards">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/toaster-02.jpg" alt="4-Slice Wide Slot Toaster - Morphy Richards" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Morphy Richards</p>
                <h3 class="card__title"><a href="product-details.html?product=4-slice-wide-slot-toaster">4-Slice Wide Slot Toaster</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹4,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="mixers" data-brand="bajaj">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/mixer-01.jpg" alt="750W Mixer Grinder with 3 Jars - Bajaj" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bajaj</p>
                <h3 class="card__title"><a href="product-details.html?product=750w-mixer-grinder-with-3-jars">750W Mixer Grinder with 3 Jars</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹3,499</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="mixers" data-brand="bajaj">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/mixer-02.jpg" alt="500W Mixer Grinder 3-Jar - Bajaj" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bajaj</p>
                <h3 class="card__title"><a href="product-details.html?product=500w-mixer-grinder-3-jar">500W Mixer Grinder 3-Jar</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹2,899</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="air-fryers" data-brand="philips">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/airfryer-01.jpg" alt="7.3L Premium Digital Air Fryer - Philips" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Philips</p>
                <h3 class="card__title"><a href="product-details.html?product=7-3l-premium-digital-air-fryer">7.3L Premium Digital Air Fryer</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹14,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="air-fryers" data-brand="agaro">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/airfryer-02.jpg" alt="4.2L Digital Air Fryer - AGARO" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">AGARO</p>
                <h3 class="card__title"><a href="product-details.html?product=4-2l-digital-air-fryer">4.2L Digital Air Fryer</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹5,499</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="microwaves" data-brand="samsung">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/microwave-01.jpg" alt="28L Convection Microwave Oven - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=28l-convection-microwave-oven">28L Convection Microwave Oven</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹12,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="microwaves" data-brand="lg">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/microwave-01.jpg" alt="20L Solo Microwave Oven - LG" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">LG</p>
                <h3 class="card__title"><a href="product-details.html?product=20l-solo-microwave-oven">20L Solo Microwave Oven</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹8,490</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="kitchen-appliances" data-brand="philips">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/philips-kettle.jpg" alt="1.7L Stainless Steel Electric Kettle - Philips" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Philips</p>
                <h3 class="card__title"><a href="product-details.html?product=1-7l-stainless-steel-electric-kettle">1.7L Stainless Steel Electric Kettle</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹2,799</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="kitchen-appliances" data-brand="prestige">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/philips-kettle.jpg" alt="1.5L Electric Kettle - Prestige" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Prestige</p>
                <h3 class="card__title"><a href="product-details.html?product=1-5l-electric-kettle">1.5L Electric Kettle</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,499</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="fans" data-brand="bajaj">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fan-01.jpg" alt="1200mm BLDC Ceiling Fan - Bajaj" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bajaj</p>
                <h3 class="card__title"><a href="product-details.html?product=1200mm-bldc-ceiling-fan">1200mm BLDC Ceiling Fan</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹3,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="fans" data-brand="bajaj">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fan-02.jpg" alt="Tower Fan with Remote - Bajaj" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bajaj</p>
                <h3 class="card__title"><a href="product-details.html?product=tower-fan-with-remote">Tower Fan with Remote</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹6,499</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="vacuum-cleaners" data-brand="dyson">
              <div class="card__media">
                <span class="badge badge--info card__badge">Premium</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-placeholder.jpg" alt="Cordless Stick Vacuum Cleaner - Dyson" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Dyson</p>
                <h3 class="card__title"><a href="product-details.html?product=cordless-stick-vacuum-cleaner">Cordless Stick Vacuum Cleaner</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹39,990</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="air-purifiers" data-brand="xiaomi">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-placeholder.jpg" alt="Smart Air Purifier 4 - Xiaomi" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Xiaomi</p>
                <h3 class="card__title"><a href="product-details.html?product=smart-air-purifier-4">Smart Air Purifier 4</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹11,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="home-appliances" data-brand="philips">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-placeholder.jpg" alt="Dry Iron 1000W - Philips" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Philips</p>
                <h3 class="card__title"><a href="product-details.html?product=dry-iron-1000w">Dry Iron 1000W</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,299</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="water-heaters" data-brand="bajaj">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-placeholder.jpg" alt="Instant Water Heater 15L - Bajaj" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bajaj</p>
                <h3 class="card__title"><a href="product-details.html?product=instant-water-heater-15l">Instant Water Heater 15L</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹9,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="ovens" data-brand="morphy-richards">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/microwave-01.jpg" alt="OTG Oven 28L - Morphy Richards" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Morphy Richards</p>
                <h3 class="card__title"><a href="product-details.html?product=otg-oven-28l">OTG Oven 28L</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹8,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="laptops" data-brand="apple">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/macbook-air.png" alt="MacBook Air 13-inch M4 - Apple" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Apple</p>
                <h3 class="card__title"><a href="product-details.html?product=macbook-air-13-inch-m4">MacBook Air 13-inch M4</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹99,900</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="laptops" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/laptop-01.jpg" alt="Galaxy Book5 Pro 14-inch - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=galaxy-book5-pro-14-inch">Galaxy Book5 Pro 14-inch</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,14,990</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="tablets" data-brand="samsung">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/tablet-01.jpg" alt="Galaxy Tab S10+ 12.4-inch - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=galaxy-tab-s10-12-4-inch">Galaxy Tab S10+ 12.4-inch</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹84,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="earbuds" data-brand="sony">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/sony-earbuds.jpg" alt="WF-1000XM5 Noise Cancelling Earbuds - Sony" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Sony</p>
                <h3 class="card__title"><a href="product-details.html?product=wf-1000xm5-noise-cancelling-earbuds">WF-1000XM5 Noise Cancelling Earbuds</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹24,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="headphones" data-brand="sony">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-cable.jpg" alt="WH-1000XM5 Wireless Headphones - Sony" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Sony</p>
                <h3 class="card__title"><a href="product-details.html?product=wh-1000xm5-wireless-headphones">WH-1000XM5 Wireless Headphones</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹29,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="smartwatches" data-brand="samsung">
              <div class="card__media">
                <span class="badge badge--info card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/smartwatch-01.jpg" alt="Galaxy Watch Ultra 2 - Samsung" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Samsung</p>
                <h3 class="card__title"><a href="product-details.html?product=galaxy-watch-ultra-2">Galaxy Watch Ultra 2</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹59,999</span></div>
                <div class="card__footer"><span class="badge badge--status-pre-order">Pre-Order</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="speakers" data-brand="jbl">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/speaker-01.jpg" alt="Portable 40W Bluetooth Speaker - JBL" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">JBL</p>
                <h3 class="card__title"><a href="product-details.html?product=portable-40w-bluetooth-speaker">Portable 40W Bluetooth Speaker</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹7,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="cameras" data-brand="gopro">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/camera-01.jpg" alt="4K Action Camera - GoPro" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">GoPro</p>
                <h3 class="card__title"><a href="product-details.html?product=4k-action-camera">4K Action Camera</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹35,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <!-- ===== Added: Mobile Phones ===== -->
            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="mobile-phones" data-brand="google">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-02.jpg" alt="Pixel 9a 5G (128GB) - Google" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Google</p>
                <h3 class="card__title"><a href="product-details.html?product=pixel-9a-5g-128gb">Pixel 9a 5G (128GB)</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹49,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="mobile-phones" data-brand="realme">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-03.jpg" alt="Realme 14 Pro+ 5G (256GB) - Realme" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Realme</p>
                <h3 class="card__title"><a href="product-details.html?product=realme-14-pro-plus-5g-256gb">Realme 14 Pro+ 5G (256GB)</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹27,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="mobile-phones" data-brand="poco">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-04.jpg" alt="POCO X7 Pro 5G (256GB) - POCO" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">POCO</p>
                <h3 class="card__title"><a href="product-details.html?product=poco-x7-pro-5g-256gb">POCO X7 Pro 5G (256GB)</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹24,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="mobile-phones" data-brand="nothing">
              <div class="card__media">
                <span class="badge badge--accent card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-01.jpg" alt="Nothing Phone (3a) 5G (128GB) - Nothing" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Nothing</p>
                <h3 class="card__title"><a href="product-details.html?product=nothing-phone-3a-5g-128gb">Nothing Phone (3a) 5G (128GB)</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹25,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="mobile-phones" data-brand="honor">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/phone-02.jpg" alt="Honor Magic 7 Pro 5G (512GB) - Honor" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Honor</p>
                <h3 class="card__title"><a href="product-details.html?product=honor-magic-7-pro-5g-512gb">Honor Magic 7 Pro 5G (512GB)</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹74,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <!-- ===== Added: Air Conditioners ===== -->
            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="air-conditioners" data-brand="voltas">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-01.jpg" alt="1.5 Ton 3-Star Fixed Speed Split AC - Voltas" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Voltas</p>
                <h3 class="card__title"><a href="product-details.html?product=voltas-1-5-ton-3-star-split-ac">1.5 Ton 3-Star Fixed Speed Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹32,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="air-conditioners" data-brand="daikin">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-02.jpg" alt="1 Ton 5-Star Inverter Split AC - Daikin" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Daikin</p>
                <h3 class="card__title"><a href="product-details.html?product=daikin-1-ton-5-star-inverter-split-ac">1 Ton 5-Star Inverter Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹36,490</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="air-conditioners" data-brand="blue-star">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-01.jpg" alt="2 Ton 3-Star Split AC - Blue Star" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Blue Star</p>
                <h3 class="card__title"><a href="product-details.html?product=blue-star-2-ton-3-star-split-ac">2 Ton 3-Star Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹41,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="air-conditioners" data-brand="hitachi">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/ac-02.jpg" alt="1.5 Ton 5-Star Inverter Split AC - Hitachi" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Hitachi</p>
                <h3 class="card__title"><a href="product-details.html?product=hitachi-1-5-ton-5-star-inverter-split-ac">1.5 Ton 5-Star Inverter Split AC</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹44,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <!-- ===== Added: Refrigerators ===== -->
            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="refrigerators" data-brand="haier">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-01.jpg" alt="195L Direct Cool Single Door Refrigerator - Haier" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Haier</p>
                <h3 class="card__title"><a href="product-details.html?product=haier-195l-direct-cool-single-door-refrigerator">195L Direct Cool Single Door Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹15,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="refrigerators" data-brand="whirlpool">
              <div class="card__media">
                <span class="badge badge--accent card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-02.jpg" alt="265L Frost Free Double Door Refrigerator - Whirlpool" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Whirlpool</p>
                <h3 class="card__title"><a href="product-details.html?product=whirlpool-265l-frost-free-double-door-refrigerator">265L Frost Free Double Door Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹27,490</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="refrigerators" data-brand="godrej">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-03.jpg" alt="190L Direct Cool Refrigerator - Godrej" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Godrej</p>
                <h3 class="card__title"><a href="product-details.html?product=godrej-190l-direct-cool-refrigerator">190L Direct Cool Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹14,290</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="refrigerators" data-brand="panasonic">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/fridge-01.jpg" alt="550L Side-by-Side Refrigerator - Panasonic" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Panasonic</p>
                <h3 class="card__title"><a href="product-details.html?product=panasonic-550l-side-by-side-refrigerator">550L Side-by-Side Refrigerator</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹78,990</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <!-- ===== Added: Toasters ===== -->
            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="toasters" data-brand="bajaj">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/toaster-01.jpg" alt="2-Slice Auto Pop-Up Toaster - Bajaj" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bajaj</p>
                <h3 class="card__title"><a href="product-details.html?product=bajaj-2-slice-auto-pop-up-toaster">2-Slice Auto Pop-Up Toaster</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,699</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="toasters" data-brand="prestige">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/toaster-02.jpg" alt="PPTPKB 4-Slice Pop-Up Toaster - Prestige" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Prestige</p>
                <h3 class="card__title"><a href="product-details.html?product=prestige-pptpkb-4-slice-toaster">PPTPKB 4-Slice Pop-Up Toaster</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹3,299</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="toasters" data-brand="usha">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/toaster-01.jpg" alt="3320 2-Slice Pop-Up Toaster - Usha" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Usha</p>
                <h3 class="card__title"><a href="product-details.html?product=usha-3320-2-slice-toaster">3320 2-Slice Pop-Up Toaster</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,449</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <!-- ===== Added: Air Fryers ===== -->
            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="air-fryers" data-brand="havells">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/airfryer-01.jpg" alt="Prolife 4.5L Digital Air Fryer - Havells" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Havells</p>
                <h3 class="card__title"><a href="product-details.html?product=havells-prolife-4-5l-digital-air-fryer">Prolife 4.5L Digital Air Fryer</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹6,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="air-fryers" data-brand="inalsa">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/airfryer-02.jpg" alt="Fry Light 5.5L Digital Air Fryer - Inalsa" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Inalsa</p>
                <h3 class="card__title"><a href="product-details.html?product=inalsa-fry-light-5-5l-air-fryer">Fry Light 5.5L Digital Air Fryer</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹5,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="air-fryers" data-brand="bajaj">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/consumer/airfryer-01.jpg" alt="Majesty AF 3.5L Air Fryer - Bajaj" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bajaj</p>
                <h3 class="card__title"><a href="product-details.html?product=bajaj-majesty-af-3-5l-air-fryer">Majesty AF 3.5L Air Fryer</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹4,499</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <!-- ===== Added: Iron & Press ===== -->
            <div class="card product-card" data-aos="fade-up" data-aos-delay="150" data-department="consumer" data-category="iron-press" data-brand="philips">
              <div class="card__media">
                <span class="badge badge--info card__badge">Bestseller</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-placeholder.jpg" alt="GC2040 Steam Iron 1440W - Philips" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Philips</p>
                <h3 class="card__title"><a href="product-details.html?product=philips-gc2040-steam-iron-1440w">GC2040 Steam Iron 1440W</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,899</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="0" data-department="consumer" data-category="iron-press" data-brand="usha">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-placeholder.jpg" alt="EI 3402 Steam Iron - Usha" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Usha</p>
                <h3 class="card__title"><a href="product-details.html?product=usha-ei-3402-steam-iron">EI 3402 Steam Iron</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹1,199</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="50" data-department="consumer" data-category="iron-press" data-brand="bajaj">
              <div class="card__media">
                
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-placeholder.jpg" alt="Majesty DX-7 Dry Iron 1000W - Bajaj" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Bajaj</p>
                <h3 class="card__title"><a href="product-details.html?product=bajaj-majesty-dx-7-dry-iron">Majesty DX-7 Dry Iron 1000W</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹899</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

            <div class="card product-card" data-aos="fade-up" data-aos-delay="100" data-department="consumer" data-category="iron-press" data-brand="havells">
              <div class="card__media">
                <span class="badge badge--accent card__badge">New</span>
                <div class="product-card__quick-actions">
                  <button aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
                  <button aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                </div>
                <img src="assets/images/products/placeholders/product-placeholder.jpg" alt="Adorn Cord-Free Steam Iron - Havells" loading="lazy">
              </div>
              <div class="card__body">
                <p class="product-card__brand">Havells</p>
                <h3 class="card__title"><a href="product-details.html?product=havells-adorn-cord-free-steam-iron">Adorn Cord-Free Steam Iron</a></h3>
                <div class="product-card__rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-card__price"><span class="product-card__price-current">₹2,999</span></div>
                <div class="card__footer"><span class="badge badge--status-in-stock">In Stock</span></div>
              </div>
            </div>

          </div>
          <div class="no-results u-hidden" data-js="products-no-results">
            <i class="fa-solid fa-magnifying-glass no-results__icon"></i>
            <h3>No products found</h3>
            <p class="text-secondary">Try adjusting your filters or search term.</p>
          </div>

          <!-- Pagination -->
          <nav class="pagination" data-js="products-pagination" aria-label="Products pagination"></nav>
          <p class="pagination-info" data-js="pagination-info">Showing 1–111 of 111 products</p>
        </div>

      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="l-container">
      <div class="site-footer__top">
        <div class="footer-brand">
          <img src="assets/images/logo/logo-white.svg" alt="Gada Electronics logo" class="footer-brand__logo" width="140" height="38">
          <p class="footer-brand__text">Gada Electronics delivers premium electrical and electronic equipment, engineering solutions, and industrial installations across India — powering industries through innovation for over 28 years.</p>
          <div class="footer-brand__social">
            <a href="https://facebook.com/gadaelectronics" aria-label="Facebook" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://linkedin.com/company/gadaelectronics" aria-label="LinkedIn" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://twitter.com/gadaelectronics" aria-label="Twitter" target="_blank" rel="noopener"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com/gadaelectronics" aria-label="Instagram" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://youtube.com/@gadaelectronics" aria-label="YouTube" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <p class="footer-col__title">Quick Links</p>
          <ul class="footer-col__list">
            <li><a href="about.html">About Us</a></li>
            <li><a href="products.html">Our Products</a></li>
            <li><a href="index.html#consumer-electronics">Consumer Electronics</a></li>
            <li><a href="industries.html">Industries We Serve</a></li>
            <li><a href="services.html">Services &amp; Solutions</a></li>
            <li><a href="projects.html">Projects &amp; Installations</a></li>
            <li><a href="quality.html">Quality Assurance</a></li>
            <li><a href="certifications.html">Certifications</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-col__title">Company</p>
          <ul class="footer-col__list">
            <li><a href="careers.html">Careers</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="contact.html#faq">FAQs</a></li>
            <li><a href="assets/docs/company-profile.pdf" target="_blank" rel="noopener">Company Profile (PDF)</a></li>
            <li><a href="404.html">Privacy Policy</a></li>
            <li><a href="404.html">Terms of Service</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-col__title">Get In Touch</p>
          <div class="footer-contact__item"><i class="fa-solid fa-location-dot icon"></i><span>Plot 45, MIDC Industrial Area, Andheri East, Mumbai, Maharashtra 400093, India</span></div>
          <div class="footer-contact__item"><i class="fa-solid fa-phone icon"></i><span>+91-22-4000-1234</span></div>
          <div class="footer-contact__item"><i class="fa-solid fa-envelope icon"></i><span>info@gadaelectronics.com</span></div>
          <div class="footer-newsletter">
            <p class="footer-col__title" style="margin-bottom: var(--space-2); font-size: var(--fs-body-sm);">Subscribe to our newsletter</p>
            <form class="footer-newsletter__form" data-js="newsletter-form" novalidate>
              <label for="newsletterEmail" class="u-sr-only">Email address</label>
              <input type="email" id="newsletterEmail" name="email" class="footer-newsletter__input" placeholder="Enter your email" required aria-describedby="newsletterMessage">
              <button type="submit" class="btn btn--primary btn--icon" aria-label="Subscribe"><i class="fa-solid fa-paper-plane"></i></button>
            </form>
            <p id="newsletterMessage" class="form-hint u-sr-only" role="status" aria-live="polite"></p>
            <input type="text" name="hp_field" class="u-sr-only" tabindex="-1" autocomplete="off">
          </div>
        </div>
      </div>
      <div class="site-footer__bottom">
        <p class="site-footer__copyright">&copy; <span data-js="current-year">2026</span> Gada Electronics. All rights reserved.</p>
        <div class="site-footer__bottom-links">
          <a href="404.html">Privacy Policy</a>
          <a href="404.html">Terms &amp; Conditions</a>
          <a href="404.html">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <button class="back-to-top" data-js="back-to-top" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
  <div class="toast-container" data-js="toast-container" aria-live="polite" aria-atomic="true"></div>

  <script src="js/vendor/aos.js"></script>
  <script src="js/vendor/swiper-bundle.min.js"></script>
  <script src="js/vendor/gsap.min.js"></script>
  <script type="module" src="js/main.js"></script>
  <script type="module" src="js/pages/products.js"></script>
</body>
</html>