/**
 * portfolio.runtime.js
 * ====================
 * Real-time client-side synchronization bridge.
 * Ensures DOM elements always display the exact data from portfolio.config.json,
 * even after Framer/React hydration.
 */
(async function () {
  console.log(
    "%c⚡ Portfolio Live Bridge active",
    "color: #00aa66; font-size: 13px; font-weight: bold;"
  );

  // Seamless static navigation: ensures instant page transitions on any static host without Python/backend
  document.addEventListener(
    "click",
    function (e) {
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;

      // Skip external links, anchors, mailto, tel, or target="_blank"
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        a.getAttribute("target") === "_blank"
      ) {
        return;
      }

      // Allow natural browser navigation to static pages
      e.stopPropagation();
      window.location.href = href;
    },
    true // Capture phase intercepts before Framer's router
  );

  // Force all Framer appear-animation elements to be fully visible (prevent opacity:0.001 hiding text)
  const forceVisibleStyle = document.createElement("style");
  forceVisibleStyle.id = "portfolio-force-visible";
  forceVisibleStyle.textContent = `
    h1, h2, h3, h4, h5, h6,
[data-framer-appear-id],
[data-framer-name="Content"],
.framer-1k78wbv,
.framer-styles-preset-es7zc9,
.framer-styles-preset-bgyzp4,
[style*="opacity:0.001"],
[style*="opacity: 0.001"] {
  opacity: 1 !important;
  visibility: visible !important;
}

/* Ensure layout sizers remain completely hidden to prevent text obstruction */
[style*="visibility:hidden"],
[style*="visibility: hidden"],
[style*="pointer-events:none;white-space:pre-wrap"] {
  visibility: hidden !important;
  opacity: 0 !important;
}
  `;
  document.head.appendChild(forceVisibleStyle);

  let config = {};

  try {
    const timestamp = Date.now();
    // Try fetching unified manifest first
    const manifestRes = await fetch("/content/manifest.json?v=" + timestamp).catch(() => null);
    if (manifestRes && manifestRes.ok) {
      const manifest = await manifestRes.json();
      config = {
        author: manifest.site?.author || {},
        socials: manifest.site?.socials || {},
        site: manifest.site?.meta || {},
        hero: manifest.pages?.home?.hero || manifest.site?.hero || {},
        works: manifest.projects || [],
        services: manifest.services || [],
        about: manifest.pages?.about || {},
        footer: manifest.footer || {},
        navigation: manifest.navigation || {}
      };
    } else {
      // Fallback to separate files
      const [siteRes, workRes, aboutRes, servicesRes] = await Promise.all([
        fetch("/content/site.json?v=" + timestamp).catch(() => null),
        fetch("/content/work.json?v=" + timestamp).catch(() => null),
        fetch("/content/about.json?v=" + timestamp).catch(() => null),
        fetch("/content/services.json?v=" + timestamp).catch(() => null)
      ]);

      const siteData = siteRes && siteRes.ok ? await siteRes.json() : {};
      const workData = workRes && workRes.ok ? await workRes.json() : [];
      const aboutData = aboutRes && aboutRes.ok ? await aboutRes.json() : {};
      const servicesData = servicesRes && servicesRes.ok ? await servicesRes.json() : [];

      config = {
        author: siteData.author || {},
        socials: siteData.socials || {},
        site: siteData.meta || {},
        hero: siteData.hero || {},
        works: Array.isArray(workData) ? workData : (workData.works || []),
        about: aboutData,
        services: servicesData
      };
    }

    window.portfolioConfig = config;
  } catch (e) {
    console.warn("[Portfolio Runtime] Could not fetch content:", e);
  }

  function applyConfig() {
    if (!config) return;

    const path = window.location.pathname.replace(/\/+$/, "") || "/";

    // 1. PROJECT DETAIL PAGES: /projects/<slug>
    const allWorks = config.works || config.projects || [];

    if (path.includes("/projects/")) {
      const parts = path.split("/projects/");
      const slug = (parts[1] || "").split("/")[0];
      const project = allWorks.find((p) => p.slug === slug);

      if (project) {
        // Document Title
        if (project.title) {
          const authorShort = config.author?.shortName || "Portfolio";
          const newDocTitle = `${project.title} — ${project.category || "Work"} | ${authorShort}`;
          if (document.title !== newDocTitle) {
            document.title = newDocTitle;
          }
        }

        // Project H1 Title
        const h1 = document.querySelector("h1");
        if (h1 && project.title && h1.dataset.synced !== project.title) {
          h1.textContent = project.title;
          h1.dataset.synced = project.title;
          h1.style.opacity = "1";
          h1.style.transform = "none";
          h1.style.visibility = "visible";
          // Unhide all inner elements if any
          h1.querySelectorAll("span").forEach((s) => {
            s.style.opacity = "1";
            s.style.transform = "none";
          });
        }

        // Project Visible Description (H6 Case Study Overview)
        if (project.description) {
          const h6 = document.querySelector("h6");
          if (h6 && h6.dataset.synced !== project.description) {
            h6.textContent = project.description;
            h6.dataset.synced = project.description;
            h6.style.opacity = "1";
            h6.style.transform = "none";
            h6.style.visibility = "visible";
          }
        }

        // Project Metadata (Year, Client, Category, Location)
        const pTags = Array.from(document.querySelectorAll("p"));
        for (let i = 0; i < pTags.length; i++) {
          const text = pTags[i].textContent.trim();

          // Year
          if (text === "Year" && i + 1 < pTags.length && project.year) {
            const valEl = pTags[i + 1];
            if (valEl.textContent.trim() !== String(project.year)) {
              valEl.textContent = String(project.year);
              valEl.dataset.synced = String(project.year);
            }
          }

          // Client
          if (text === "Client" && i + 1 < pTags.length && project.client) {
            const valEl = pTags[i + 1];
            if (valEl.textContent.trim() !== project.client) {
              valEl.textContent = project.client;
              valEl.dataset.synced = project.client;
            }
          }

          // Services / Category
          if (text === "Services" && i + 1 < pTags.length && project.category) {
            const valEl = pTags[i + 1];
            if (valEl.textContent.trim() !== project.category) {
              valEl.textContent = project.category;
              valEl.dataset.synced = project.category;
            }
          }

          // Location
          if (text === "Location" && i + 1 < pTags.length && project.location) {
            const valEl = pTags[i + 1];
            if (valEl.textContent.trim() !== project.location) {
              valEl.textContent = project.location;
              valEl.dataset.synced = project.location;
            }
          }
        }

        // Hero Cover Image
        const heroUrl = typeof project.heroImage === "string" ? project.heroImage : project.heroImage?.url;
        if (heroUrl) {
          const heroImg = document.querySelector(".framer-1a48c48 img, .framer-hero img, img[alt*='" + project.title + "']");
          if (heroImg && heroImg.dataset.synced !== heroUrl) {
            heroImg.src = heroUrl;
            heroImg.dataset.synced = heroUrl;
          }
        }
      }
    }

    // 2. PROJECT CARDS ON /WORK & HOMEPAGE
    if (path.includes("/work")) {
      const container = document.querySelector(".framer-1ft8znd");
      if (container) {
        allWorks.forEach((proj) => {
          let cardLink = container.querySelector(`a[href*="/projects/${proj.slug}"]`);
          if (!cardLink) {
            const firstCard = container.querySelector("a.framer-1a06iym");
            if (firstCard) {
              const newCard = firstCard.cloneNode(true);
              newCard.setAttribute("href", `./projects/${proj.slug}`);
              const titleEl = newCard.querySelector('[data-framer-name="Titel"] p, .framer-1femap5 p');
              if (titleEl) titleEl.textContent = proj.title;
              const catEl = newCard.querySelector('[data-framer-name="Client"] p, .framer-1hkyrek p');
              if (catEl) catEl.textContent = proj.category || proj.client || "";
              const imgEl = newCard.querySelector("img");
              if (imgEl && proj.heroImage) {
                imgEl.src = proj.heroImage;
                imgEl.removeAttribute("srcset");
              }
              container.appendChild(newCard);
            }
          }
        });
      }
    }

    allWorks.forEach((proj) => {
      if (!proj.slug) return;
      const cardLinks = document.querySelectorAll(`a[href*="/projects/${proj.slug}"]`);
      cardLinks.forEach((link) => {
        // Card Title
        const titleEl = link.querySelector("h2, h3, h4, p[data-styles-preset], .framer-1femap5 p");
        if (titleEl && proj.title && titleEl.dataset.synced !== proj.title) {
          titleEl.textContent = proj.title;
          titleEl.dataset.synced = proj.title;
          titleEl.style.opacity = "1";
        }

        // Card Category
        if (proj.category) {
          const catEl = link.querySelector(".framer-1pxxh0g, .framer-1hkyrek, .framer-1hkyrek p");
          if (catEl && catEl.dataset.synced !== proj.category) {
            catEl.textContent = proj.category;
            catEl.dataset.synced = proj.category;
          }
        }

        // Card Hero Image
        const heroUrl = typeof proj.heroImage === "string" ? proj.heroImage : proj.heroImage?.url;
        if (heroUrl) {
          const img = link.querySelector("img");
          if (img && img.dataset.synced !== heroUrl) {
            img.src = heroUrl;
            img.dataset.synced = heroUrl;
          }
        }
      });
    });

    // 3. ABOUT US PAGE
    if (path.includes("/about-us") && config.about) {
      if (config.about.headline) {
        const aboutH1 = document.querySelector("h1");
        if (aboutH1 && aboutH1.dataset.synced !== config.about.headline) {
          aboutH1.textContent = config.about.headline;
          aboutH1.dataset.synced = config.about.headline;
          aboutH1.style.opacity = "1";
          aboutH1.style.transform = "none";
        }
      }
    }
  }

  // Initial execution
  applyConfig();

  // Watch for React/Framer hydration mounts and re-apply
  let runs = 0;
  const interval = setInterval(() => {
    applyConfig();
    runs++;
    if (runs > 10) clearInterval(interval);
  }, 250);

  const observer = new MutationObserver(() => applyConfig());
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), 6000);
})();
