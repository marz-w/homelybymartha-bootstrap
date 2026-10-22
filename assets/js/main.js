/**
* Template Name: EstateAgency
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Updated: Aug 09 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      const configEl = swiperElement.querySelector(".swiper-config");
      if (!configEl) return;
      let config = JSON.parse(configEl.innerHTML.trim());

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter (if element exists)
   */
  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

  /**
   * Initiate GLightbox
   */
  let lightboxInstance = null;
  function initLightbox() {
    if (typeof GLightbox !== "undefined") {
      lightboxInstance = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    }
  }
  window.addEventListener("load", initLightbox);

  /*--------------------------------------------------------------
  # Homely Student Residents - Dynamic Rendering & Filtering Logic
  --------------------------------------------------------------*/

  // Map amenity string to Bootstrap Icon and label
  function getAmenityIcon(amenity) {
    const key = amenity.toLowerCase();
    if (key.includes("wi-fi")) return '<i class="bi bi-wifi"></i> Wi-Fi';
    if (key.includes("water")) return '<i class="bi bi-droplet-half"></i> 24/7 Water';
    if (key.includes("security")) return '<i class="bi bi-shield-check"></i> Security';
    if (key.includes("token") || key.includes("electricity")) return '<i class="bi bi-lightning-charge"></i> Tokens';
    if (key.includes("stage") || key.includes("matatu")) return '<i class="bi bi-bus-front"></i> Near Stage';
    if (key.includes("furnished")) return '<i class="bi bi-lamp"></i> Furnished';
    return `<i class="bi bi-check2-circle"></i> ${amenity}`;
  }

  // Generate HTML for a single property card
  function createPropertyCardHtml(listing, index) {
    const delay = ((index % 3) + 1) * 100;
    const amenitiesHtml = listing.amenities.slice(0, 4).map(item => `
      <span class="amenity-chip">${getAmenityIcon(item)}</span>
    `).join("");

    return `
      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="card h-100">
          <div class="property-card-img-wrap">
            <span class="property-card-badge">${listing.badge}</span>
            <span class="property-card-type">${listing.type}</span>
            <!-- Placeholder image: to be replaced with real photos before launch -->
            <img src="${listing.cover}" alt="${listing.title}" class="img-fluid" loading="lazy" width="600" height="400">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="property-card-price">${window.formatPrice ? window.formatPrice(listing.price) : `KSh ${listing.price.toLocaleString()} / month`}</div>
            <h3 class="property-card-title">
              <a href="property-single.html?id=${listing.id}">${listing.title}</a>
            </h3>
            <div class="property-card-area">
              <i class="bi bi-geo-alt-fill text-muted"></i> ${listing.area}
            </div>
            <div class="property-card-distance">
              <i class="bi bi-mortarboard-fill"></i> ${listing.campusDistance}
            </div>
            <div class="property-card-amenities mt-auto">
              ${amenitiesHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Filter listings based on area, room type, and budget
  function filterListings(areaVal, typeVal, budgetVal) {
    if (!window.listingsData) return [];
    return window.listingsData.filter(item => {
      // Area match
      if (areaVal && areaVal !== "all" && item.area.toLowerCase() !== areaVal.toLowerCase()) {
        return false;
      }
      // Room type match
      if (typeVal && typeVal !== "all" && item.type.toLowerCase() !== typeVal.toLowerCase()) {
        return false;
      }
      // Budget match
      if (budgetVal && budgetVal !== "all") {
        if (budgetVal === "under-5000" && item.price >= 5000) return false;
        if (budgetVal === "5000-8000" && (item.price < 5000 || item.price > 8000)) return false;
        if (budgetVal === "8000-12000" && (item.price < 8000 || item.price > 12000)) return false;
        if (budgetVal === "12000-20000" && (item.price < 12000 || item.price > 20000)) return false;
        if (budgetVal === "20000-plus" && item.price <= 20000) return false;
      }
      return true;
    });
  }

  // Render Area Cards (Index page)
  function initAreaCards() {
    const areaContainer = document.querySelector("#area-cards-container");
    if (!areaContainer || !window.areasData || !window.getListingCountByArea) return;

    areaContainer.innerHTML = window.areasData.map(area => {
      const count = window.getListingCountByArea(area.name);
      return `
        <div class="col-lg-4 col-md-6" data-aos="fade-up">
          <a href="properties.html?area=${encodeURIComponent(area.name)}" class="area-card">
            <div>
              <div class="area-card-icon">
                <i class="bi ${area.icon}"></i>
              </div>
              <h4 class="area-card-title">${area.name}</h4>
              <p class="area-card-campus"><i class="bi bi-mortarboard me-1"></i>${area.campus}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="area-card-count">${count} ${count === 1 ? 'Listing' : 'Listings'}</span>
              <span class="text-white small">Explore <i class="bi bi-arrow-right"></i></span>
            </div>
          </a>
        </div>
      `;
    }).join("");
  }

  // Initialize Featured Properties on Index page
  function initFeaturedProperties() {
    const featuredContainer = document.querySelector("#featured-properties-container");
    if (!featuredContainer || !window.listingsData) return;

    // Display first 6 featured listings
    const featuredListings = window.listingsData.slice(0, 6);
    featuredContainer.innerHTML = featuredListings.map((item, idx) => createPropertyCardHtml(item, idx)).join("");
  }

  // Initialize Homepage Search Form (Redirects to properties.html with query params)
  function initHomepageSearch() {
    const searchForm = document.querySelector("#homepage-search-form");
    if (!searchForm) return;

    searchForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const area = document.querySelector("#search-area")?.value || "all";
      const type = document.querySelector("#search-type")?.value || "all";
      const budget = document.querySelector("#search-budget")?.value || "all";

      const queryParams = new URLSearchParams({
        area: area,
        type: type,
        budget: budget
      });

      window.location.href = `properties.html?${queryParams.toString()}`;
    });
  }

  // Initialize Properties Grid & Filter Page (properties.html)
  function initPropertiesPage() {
    const gridContainer = document.querySelector("#properties-grid-container");
    if (!gridContainer || !window.listingsData) return;

    const areaSelect = document.querySelector("#filter-area");
    const typeSelect = document.querySelector("#filter-type");
    const budgetSelect = document.querySelector("#filter-budget");
    const filterForm = document.querySelector("#properties-filter-form");
    const countDisplay = document.querySelector("#results-count");

    // Read URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const initialArea = urlParams.get("area") || "all";
    const initialType = urlParams.get("type") || "all";
    const initialBudget = urlParams.get("budget") || "all";

    // Set select values from URL if present
    if (areaSelect) areaSelect.value = initialArea;
    if (typeSelect) typeSelect.value = initialType;
    if (budgetSelect) budgetSelect.value = initialBudget;

    // Apply filter and render
    function applyFilterAndRender() {
      const areaVal = areaSelect ? areaSelect.value : "all";
      const typeVal = typeSelect ? typeSelect.value : "all";
      const budgetVal = budgetSelect ? budgetSelect.value : "all";

      const filtered = filterListings(areaVal, typeVal, budgetVal);

      if (countDisplay) {
        countDisplay.textContent = `Showing ${filtered.length} of ${window.listingsData.length} student rooms`;
      }

      if (filtered.length === 0) {
        gridContainer.innerHTML = `
          <div class="col-12" data-aos="fade-up">
            <div class="no-results-box">
              <i class="bi bi-search"></i>
              <h3>No matching listings found</h3>
              <p class="text-muted mb-4">No student rooms match your selected criteria. Try selecting a different area or adjusting your budget range.</p>
              <button type="button" class="btn btn-primary-custom" id="reset-filters-btn">
                <i class="bi bi-arrow-counterclockwise"></i> Reset All Filters
              </button>
            </div>
          </div>
        `;
        document.querySelector("#reset-filters-btn")?.addEventListener("click", () => {
          if (areaSelect) areaSelect.value = "all";
          if (typeSelect) typeSelect.value = "all";
          if (budgetSelect) budgetSelect.value = "all";
          applyFilterAndRender();
        });
      } else {
        gridContainer.innerHTML = filtered.map((item, idx) => createPropertyCardHtml(item, idx)).join("");
      }

      // Re-trigger AOS animations
      if (typeof AOS !== "undefined") {
        AOS.refresh();
      }
    }

    if (filterForm) {
      filterForm.addEventListener("submit", function(e) {
        e.preventDefault();
        applyFilterAndRender();
      });
    }

    if (areaSelect) areaSelect.addEventListener("change", applyFilterAndRender);
    if (typeSelect) typeSelect.addEventListener("change", applyFilterAndRender);
    if (budgetSelect) budgetSelect.addEventListener("change", applyFilterAndRender);

    // Initial render
    applyFilterAndRender();
  }

  // Initialize Property Single Page (property-single.html)
  function initPropertySinglePage() {
    const singleContainer = document.querySelector("#property-single-content");
    if (!singleContainer || !window.listingsData) return;

    const urlParams = new URLSearchParams(window.location.search);
    const listingId = urlParams.get("id") || 1;
    const listing = window.getListingById(listingId);
    const agent = window.getAgentById(listing.agentId);

    // Update Page Title and Breadcrumb
    document.title = `${listing.title} - Homely Student Residents`;
    const titleEl = document.querySelector("#property-page-title");
    if (titleEl) titleEl.textContent = listing.title;
    const breadcrumbCurrent = document.querySelector("#breadcrumb-property-title");
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = listing.title;

    // Build GLightbox Gallery items
    const galleryHtml = listing.gallery.map((imgSrc, index) => {
      const isLarge = index === 0 ? "cover-large" : "";
      return `
        <!-- Placeholder image: to be replaced with real photos before launch -->
        <a href="${imgSrc}" class="glightbox gallery-item ${isLarge}" data-gallery="property-gallery">
          <img src="${imgSrc}" alt="${listing.title} - photo ${index + 1}" class="img-fluid" ${index === 0 ? '' : 'loading="lazy"'} width="800" height="600">
          <div class="gallery-overlay-icon">
            <i class="bi bi-arrows-fullscreen"></i>
          </div>
        </a>
      `;
    }).join("");

    // Build Amenities Checklist
    const fullAmenitiesList = [
      { name: "Wi-Fi", icon: "bi-wifi", label: "High-Speed Student Wi-Fi" },
      { name: "24/7 water", icon: "bi-droplet-half", label: "24/7 Reliable Water (Borehole Backup)" },
      { name: "security", icon: "bi-shield-check", label: "CCTV & Security Guard" },
      { name: "prepaid electricity tokens", icon: "bi-lightning-charge", label: "Prepaid Electricity Tokens (Private Meter)" },
      { name: "near matatu stage", icon: "bi-bus-front", label: "Walking Distance to Matatu Stage" },
      { name: "furnished", icon: "bi-lamp", label: "Furnished / Study Desk Included" }
    ];

    const amenitiesChecklistHtml = fullAmenitiesList.map(amenityItem => {
      const hasAmenity = listing.amenities.some(a => a.toLowerCase() === amenityItem.name.toLowerCase());
      if (hasAmenity) {
        return `<li><i class="bi bi-check-circle-fill text-success"></i> <span>${amenityItem.label}</span></li>`;
      } else {
        return `<li class="text-muted"><i class="bi bi-x-circle text-muted"></i> <span class="text-muted text-decoration-line-through">${amenityItem.label}</span></li>`;
      }
    }).join("");

    // Prefilled WhatsApp link
    const whatsappMsg = encodeURIComponent(`Hi ${agent.name}, I'm interested in "${listing.title}" (KSh ${listing.price.toLocaleString()}/mo) listed on Homely Student Residents. Is it currently available for viewing?`);
    const whatsappUrl = `https://wa.me/${agent.phoneClean}?text=${whatsappMsg}`;

    singleContainer.innerHTML = `
      <!-- Gallery Section -->
      <div class="property-gallery-grid">
        ${galleryHtml}
      </div>

      <div class="row justify-content-between gy-4 mt-2">
        <div class="col-lg-8" data-aos="fade-up">
          <div class="portfolio-description">
            <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
              <span class="badge bg-secondary">${listing.type}</span>
              <span class="badge bg-primary-custom" style="background-color: var(--primary-accent);">${listing.badge}</span>
              <span class="text-muted small"><i class="bi bi-geo-alt"></i> ${listing.area}</span>
            </div>

            <h2 class="mb-3">${listing.title}</h2>
            <p class="lead" style="color: #495057;">${listing.description}</p>

            <div class="campus-distance-highlight">
              <i class="bi bi-mortarboard-fill fs-4" style="color: var(--primary-accent);"></i>
              <div>
                <strong>Campus Proximity:</strong> ${listing.campusDistance}
              </div>
            </div>

            <div class="property-meta-box my-4">
              <div class="row align-items-center">
                <div class="col-md-6 mb-3 mb-md-0">
                  <div class="text-muted small text-uppercase fw-bold">Monthly Rent</div>
                  <div class="price-tag">${window.formatPrice ? window.formatPrice(listing.price) : `KSh ${listing.price.toLocaleString()} / month`}</div>
                </div>
                <div class="col-md-6 border-start-md">
                  <div class="text-muted small text-uppercase fw-bold">Deposit Required</div>
                  <div class="deposit-note fs-5">${listing.deposit}</div>
                  <small class="text-muted">Refundable upon lease completion</small>
                </div>
              </div>
            </div>

            <h4 class="mt-4 mb-3">Amenities & Student Features</h4>
            <ul class="amenity-checklist mb-4">
              ${amenitiesChecklistHtml}
            </ul>

            <div class="d-flex flex-wrap gap-3 mt-4 pt-3 border-top">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                <i class="bi bi-whatsapp"></i> Chat on WhatsApp
              </a>
              <a href="#contact-agent-section" class="btn btn-secondary-custom">
                <i class="bi bi-envelope"></i> Send In-App Inquiry
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <!-- Quick Summary Card -->
          <div class="portfolio-info mb-4">
            <h3 style="color: var(--secondary-accent);">Quick Overview</h3>
            <ul class="list-unstyled mb-0">
              <li class="py-2 border-bottom"><strong>Listing ID:</strong> HSR-00${listing.id}</li>
              <li class="py-2 border-bottom"><strong>Room Type:</strong> ${listing.type}</li>
              <li class="py-2 border-bottom"><strong>Area:</strong> ${listing.area}</li>
              <li class="py-2 border-bottom"><strong>Rent:</strong> ${window.formatPrice(listing.price)}</li>
              <li class="py-2 border-bottom"><strong>Deposit:</strong> ${listing.deposit}</li>
              <li class="py-2"><strong>Campus Proximity:</strong> ${listing.campusDistance}</li>
            </ul>
          </div>

          <!-- Listing Agent Card -->
          <div class="agent-profile-card">
            <!-- Placeholder image: to be replaced with real photos before launch -->
            <img src="${agent.photo}" alt="${agent.name}" class="agent-avatar" width="100" height="100">
            <h4 class="mb-1">${agent.name}</h4>
            <p class="text-muted small mb-2">${agent.role}</p>
            <div class="badge bg-light text-dark mb-3">Areas: ${agent.areas.join(", ")}</div>
            <p class="small text-muted mb-3">${agent.bio}</p>

            <div class="d-grid gap-2">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                <i class="bi bi-whatsapp"></i> WhatsApp Agent
              </a>
              <a href="tel:${agent.phoneClean}" class="btn btn-outline-secondary btn-sm">
                <i class="bi bi-telephone"></i> Call ${agent.phone}
              </a>
              <a href="agent-single.html?id=${agent.id}" class="btn btn-link btn-sm text-decoration-none">
                View Agent Profile & Other Listings &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Agent Form Section -->
      <div id="contact-agent-section" class="mt-5 p-4 rounded-4 bg-light border" data-aos="fade-up">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h3>Schedule a Free Room Viewing</h3>
            <p class="text-muted mb-3">Send your details to ${agent.name}. We will arrange a safe, guided in-person viewing of this property or connect via video call.</p>
            <ul class="list-unstyled text-muted small">
              <li><i class="bi bi-check2 text-success me-2"></i>No viewing fees or upfront consultation charges</li>
              <li><i class="bi bi-check2 text-success me-2"></i>Meet directly at the property or near the campus gate</li>
              <li><i class="bi bi-check2 text-success me-2"></i>Full lease verification assistance</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <form class="row g-3" onsubmit="event.preventDefault(); alert('Asante! Your viewing request for ' + '${listing.title}' + ' has been received. Agent ' + '${agent.name}' + ' will call you shortly on +254.');">
              <div class="col-md-6">
                <label class="form-label small fw-bold">Full Name</label>
                <input type="text" class="form-control" placeholder="e.g. Joy Muthoni" required>
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Phone Number (+254)</label>
                <input type="tel" class="form-control" placeholder="0712 345 678" required>
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">University / Campus</label>
                <input type="text" class="form-control" placeholder="e.g. USIU, KU, JKUAT">
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Message / Preferred Date</label>
                <textarea class="form-control" rows="3" placeholder="I would like to view this room on Friday afternoon..."></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary-custom w-100">Request Viewing Date</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    // Re-initialize GLightbox for newly injected elements
    setTimeout(() => {
      initLightbox();
    }, 100);
  }

  // Initialize Agent Single Page (agent-single.html)
  function initAgentSinglePage() {
    const agentContainer = document.querySelector("#agent-single-content");
    if (!agentContainer || !window.agentsData) return;

    const urlParams = new URLSearchParams(window.location.search);
    const agentId = urlParams.get("id") || "faith-wanjiku";
    const agent = window.getAgentById(agentId);
    const agentListings = window.getListingsByAgent(agent.id);

    // Update document title
    document.title = `${agent.name} - Homely Student Residents Agent`;
    const agentNameBreadcrumb = document.querySelector("#breadcrumb-agent-name");
    if (agentNameBreadcrumb) agentNameBreadcrumb.textContent = agent.name;

    const listingsCardsHtml = agentListings.length > 0
      ? agentListings.map((item, idx) => createPropertyCardHtml(item, idx)).join("")
      : `<div class="col-12"><p class="text-muted">No active listings currently assigned.</p></div>`;

    const whatsappUrl = `https://wa.me/${agent.phoneClean}?text=${encodeURIComponent(`Hi ${agent.name}, I saw your profile on Homely Student Residents and would like assistance finding housing.`)}`;

    agentContainer.innerHTML = `
      <div class="row gy-4 mb-5">
        <div class="col-lg-4" data-aos="fade-up">
          <div class="member h-100 text-center p-4 bg-white rounded-4 border shadow-sm">
            <div class="pic rounded-circle overflow-hidden mx-auto mb-3" style="width: 180px; height: 180px;">
              <!-- Placeholder image: to be replaced with real photos before launch -->
              <img src="${agent.photo}" class="img-fluid w-100 h-100 object-fit-cover" alt="${agent.name}">
            </div>
            <h3 class="mb-1" style="color: var(--secondary-accent);">${agent.name}</h3>
            <span class="text-muted d-block mb-3" style="color: var(--primary-accent); font-weight: 600;">${agent.role}</span>
            <div class="d-flex justify-content-center gap-2 mb-4">
              <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp btn-sm"><i class="bi bi-whatsapp"></i> WhatsApp</a>
              <a href="tel:${agent.phoneClean}" class="btn btn-outline-dark btn-sm"><i class="bi bi-telephone"></i> Call</a>
            </div>
            <ul class="list-unstyled text-start small border-top pt-3 text-muted">
              <li class="mb-2"><strong>Phone:</strong> ${agent.phone}</li>
              <li class="mb-2"><strong>Email:</strong> ${agent.email}</li>
              <li><strong>Areas:</strong> ${agent.areas.join(", ")}</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
          <div class="bg-white p-4 p-md-5 rounded-4 border shadow-sm h-100">
            <h3 style="color: var(--secondary-accent);">About ${agent.name}</h3>
            <p class="lead" style="color: #495057;">${agent.bio}</p>
            <p>Our student housing agents are physically based within Nairobi's university corridors. They conduct pre-inspections on every unit to ensure water pressure, token reliability, security standards, and lease honesty before any student makes a deposit.</p>

            <div class="row g-3 mt-3">
              <div class="col-sm-6">
                <div class="p-3 rounded-3" style="background: var(--secondary-accent-light);">
                  <div class="fw-bold" style="color: var(--secondary-accent);"><i class="bi bi-check-circle-fill text-success me-2"></i>Verified Landlords Only</div>
                  <small class="text-muted">Direct contact with building caretakers and registered managers.</small>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-3 rounded-3" style="background: var(--primary-accent-light);">
                  <div class="fw-bold" style="color: var(--primary-accent);"><i class="bi bi-clock-history me-2"></i>Quick Response Time</div>
                  <small class="text-muted">Average response time under 15 minutes during campus hours.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Agent's Listings Section -->
      <div class="mt-5" data-aos="fade-up">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 style="color: var(--secondary-accent);">Active Listings by ${agent.name} (${agentListings.length})</h3>
          <a href="properties.html" class="btn btn-outline-secondary btn-sm">All Properties &rarr;</a>
        </div>
        <div class="row gy-4">
          ${listingsCardsHtml}
        </div>
      </div>
    `;
  }

  // Initialize Agents Grid Page (agents.html)
  function initAgentsGridPage() {
    const agentsGrid = document.querySelector("#agents-grid-container");
    if (!agentsGrid || !window.agentsData) return;

    agentsGrid.innerHTML = window.agentsData.map((agent, idx) => {
      const delay = (idx + 1) * 100;
      const agentListings = window.getListingsByAgent ? window.getListingsByAgent(agent.id) : [];
      const whatsappUrl = `https://wa.me/${agent.phoneClean}?text=${encodeURIComponent(`Hi ${agent.name}, I found your contact on Homely Student Residents.`)}`;

      return `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${delay}">
          <div class="member">
            <div class="pic">
              <!-- Placeholder image: to be replaced with real photos before launch -->
              <img src="${agent.photo}" class="img-fluid" alt="${agent.name}" loading="lazy" width="400" height="400">
            </div>
            <div class="member-info">
              <h4>${agent.name}</h4>
              <span>${agent.role}</span>
              <div class="member-areas">
                <i class="bi bi-geo-alt-fill text-muted me-1"></i>Covering: <strong>${agent.areas.join(", ")}</strong>
              </div>
              <p class="small text-muted mb-3">${agent.bio.substring(0, 110)}...</p>
              <div class="d-flex justify-content-between align-items-center pt-2 border-top">
                <a href="agent-single.html?id=${agent.id}" class="text-decoration-none fw-semibold small" style="color: var(--primary-accent);">
                  View Profile (${agentListings.length} rooms) &rarr;
                </a>
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm px-3 py-1">
                  <i class="bi bi-whatsapp"></i> Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Master document load hook
  document.addEventListener("DOMContentLoaded", function() {
    initAreaCards();
    initFeaturedProperties();
    initHomepageSearch();
    initPropertiesPage();
    initPropertySinglePage();
    initAgentSinglePage();
    initAgentsGridPage();
  });

})();