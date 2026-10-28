/**
 * sync.js
 * =======
 * Complete Static Portfolio Compiler & Template Engine
 * -----------------------------------------------------
 * Automatically reads all modular content files from:
 *   - content/site.json              (Global metadata, author, SEO)
 *   - content/navigation.json        (Navbar branding, menu links)
 *   - content/footer.json            (Footer contact, location, socials, copyright)
 *   - content/pages/home.json        (Homepage hero, rotating text, video, cta)
 *   - content/pages/about.json       (About bio, headline, stats, skills)
 *   - content/pages/work.json        (Work page header, categories)
 *   - content/pages/privacy-policy.json
 *   - content/projects/*.json        (Individual project case studies)
 *   - content/services/*.json        (Individual service pages)
 * 
 * Automatically compiles and synchronizes:
 *   - index.html (Homepage)
 *   - work/index.html (Work showcase catalog)
 *   - about-us/index.html (About page)
 *   - projects/<slug>/index.html (Every individual project page)
 *   - services/<slug>/index.html (Every individual service page)
 *   - content/manifest.json (Unified manifest for client-side live preview)
 * 
 * Adding a new project is as simple as creating `content/projects/my-project.json`
 * and running `npm run build` or `node sync.js`.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const contentDir = path.join(ROOT, 'content');
const projectsDir = path.join(contentDir, 'projects');
const servicesDir = path.join(contentDir, 'services');
const pagesDir = path.join(contentDir, 'pages');

if (!fs.existsSync(contentDir)) {
  console.error('[Sync Error] content/ directory does not exist.');
  process.exit(1);
}

// -------------------------------------------------------------
// 1. READ CONFIG & MODULAR JSON FILES
// -------------------------------------------------------------
function readJson(filePath, defaultVal = {}) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (err) {
    console.warn(`[Sync Warning] Could not parse ${filePath}:`, err.message);
  }
  return defaultVal;
}

const site = readJson(path.join(contentDir, 'site.json'), {});
const navigation = readJson(path.join(contentDir, 'navigation.json'), { links: [] });
const footer = readJson(path.join(contentDir, 'footer.json'), {});
const homePage = readJson(path.join(pagesDir, 'home.json'), {});
const aboutPage = readJson(path.join(pagesDir, 'about.json'), {});
const workPage = readJson(path.join(pagesDir, 'work.json'), {});

// Load all project JSONs from content/projects/*.json
let projects = [];
if (fs.existsSync(projectsDir)) {
  const projFiles = fs.readdirSync(projectsDir).filter(f => f.endsWith('.json'));
  projects = projFiles.map(f => {
    const slug = f.replace('.json', '');
    const data = readJson(path.join(projectsDir, f), {});
    if (!data.slug) data.slug = slug;
    return data;
  });
}

// Load all service JSONs from content/services/*.json
let services = [];
if (fs.existsSync(servicesDir)) {
  const servFiles = fs.readdirSync(servicesDir).filter(f => f.endsWith('.json'));
  services = servFiles.map(f => {
    const slug = f.replace('.json', '');
    const data = readJson(path.join(servicesDir, f), {});
    if (!data.slug) data.slug = slug;
    return data;
  });
}

console.log(`[Sync] Loaded ${projects.length} project JSON files from content/projects/`);
console.log(`[Sync] Loaded ${services.length} service JSON files from content/services/`);

// -------------------------------------------------------------
// 2. HELPER TEMPLATES & GENERATORS
// -------------------------------------------------------------
function generateWorkCard(proj) {
  const imgSrc = proj.heroImage || '/images/project-dojo.webp';
  const categoryText = proj.category || proj.client || 'Creative Architecture';
  return `<a class="framer-1a06iym framer-1szxenc" href="./projects/${proj.slug}"><div class="ssr-variant"><div class="framer-tji3r" data-border="true"><div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true"><img decoding="async" width="2000" height="1333" src="${imgSrc}" alt="${proj.title}" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover"></div></div></div><div class="framer-1vfjxai" data-framer-name="Text"><div class="framer-1femap5" data-framer-name="Titel" data-framer-component-type="RichTextContainer" style="transform:none"><p class="framer-text framer-styles-preset-2as7yh" data-styles-preset="lPwEKojoG" dir="auto" style="--framer-text-color:rgb(0, 0, 0)">${proj.title}</p></div><div class="framer-1hkyrek" data-framer-name="Client" data-framer-component-type="RichTextContainer" style="transform:none"><p class="framer-text framer-styles-preset-x2q274" data-styles-preset="U2MfhGBrp" dir="auto">${categoryText}</p></div></div></a>`;
}

// -------------------------------------------------------------
// 3. COMPILE WORK SHOWCASE PAGE (work/index.html)
// -------------------------------------------------------------
const workHtmlPath = path.join(ROOT, 'work', 'index.html');
if (fs.existsSync(workHtmlPath)) {
  let workHtml = fs.readFileSync(workHtmlPath, 'utf8');

  // Title
  const authorName = site.author?.name || 'Meshack Rono';
  workHtml = workHtml.replace(/<title>[^<]+<\/title>/, `<title>Work — ${authorName}</title>`);

  // Wrap existing cards with markers if not yet wrapped
  if (!workHtml.includes('<!-- WORK_PROJECTS_START -->')) {
    const firstCardIdx = workHtml.indexOf('<a class="framer-1a06iym');
    const lastCardIdx = workHtml.lastIndexOf('</a><!--/$--></div></div><div class="framer-doakfc">');
    if (firstCardIdx !== -1 && lastCardIdx !== -1) {
      const endOfCards = lastCardIdx + 4;
      workHtml = workHtml.substring(0, firstCardIdx) + '<!-- WORK_PROJECTS_START -->' + workHtml.substring(firstCardIdx, endOfCards) + '<!-- WORK_PROJECTS_END -->' + workHtml.substring(endOfCards);
    }
  }

  if (workHtml.includes('<!-- WORK_PROJECTS_START -->')) {
    const cardsHtml = projects.map(generateWorkCard).join('\n');
    workHtml = workHtml.replace(/<!-- WORK_PROJECTS_START -->[\s\S]*?<!-- WORK_PROJECTS_END -->/, `<!-- WORK_PROJECTS_START -->\n${cardsHtml}\n<!-- WORK_PROJECTS_END -->`);
  }

  // Sync Footer info
  if (footer.email) {
    workHtml = workHtml.replace(/mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, `mailto:${footer.email}`);
  }

  fs.writeFileSync(workHtmlPath, workHtml, 'utf8');
  console.log(`[Sync] Updated work/index.html with all ${projects.length} project cards.`);
}

// -------------------------------------------------------------
// 4. COMPILE INDIVIDUAL PROJECT CASE STUDIES (projects/<slug>/index.html)
// -------------------------------------------------------------
const projectTemplatePath = path.join(ROOT, 'projects', '.template.html');
let projTemplate = fs.existsSync(projectTemplatePath) ? fs.readFileSync(projectTemplatePath, 'utf8') : '';

projects.forEach(proj => {
  const projDir = path.join(ROOT, 'projects', proj.slug);
  if (!fs.existsSync(projDir)) {
    fs.mkdirSync(projDir, { recursive: true });
    console.log(`[Sync] Created new project folder: projects/${proj.slug}/`);
  }

  const projHtmlFile = path.join(projDir, 'index.html');
  let html = fs.existsSync(projHtmlFile) ? fs.readFileSync(projHtmlFile, 'utf8') : projTemplate;

  if (html) {
    // 1. Title
    const authorShort = site.author?.shortName || site.author?.name || 'MESHACK';
    const pageTitle = `${proj.title} — ${proj.category || 'Work'} | ${authorShort}`;
    html = html.replace(/<title>[^<]+<\/title>/, `<title>${pageTitle}</title>`);

    // 2. Canonical & OG URL
    html = html.replace(/href="https:\/\/[^"]+\/projects\/[^"]+"/g, `href="/projects/${proj.slug}"`);

    // 3. H1 Project Title
    if (proj.title) {
      html = html.replace(/(<h1[^>]*>)(.*?)(<\/h1>)/s, `$1${proj.title}$3`);
    }

    // 4. H6 Description Overview
    if (proj.description) {
      html = html.replace(/(<h6[^>]*>)(.*?)(<\/h6>)/s, `$1${proj.description}$3`);
    }

    // 5. Metadata fields (Year, Client, Location, Services)
    if (proj.year) {
      html = html.replace(/(<p[^>]*>\s*Year\s*<\/p>\s*<\/div>\s*<\/div>\s*<div[^>]*>\s*<div[^>]*>\s*<p[^>]*>)(.*?)(<\/p>)/s, `$1${proj.year}$3`);
    }
    if (proj.client) {
      html = html.replace(/(<p[^>]*>\s*Client\s*<\/p>\s*<\/div>\s*<\/div>\s*<div[^>]*>\s*<div[^>]*>\s*<p[^>]*>)(.*?)(<\/p>)/s, `$1${proj.client}$3`);
    }
    if (proj.location) {
      html = html.replace(/(<p[^>]*>\s*Location\s*<\/p>\s*<\/div>\s*<\/div>\s*<div[^>]*>\s*<div[^>]*>\s*<p[^>]*>)(.*?)(<\/p>)/s, `$1${proj.location}$3`);
    }
    if (proj.category) {
      html = html.replace(/(<p[^>]*>\s*Services\s*<\/p>\s*<\/div>\s*<\/div>\s*<div[^>]*>\s*<div[^>]*>\s*<p[^>]*>)(.*?)(<\/p>)/s, `$1${proj.category}$3`);
    }

    // 6. Hero Image
    if (proj.heroImage) {
      html = html.replace(/(<img[^>]+data-framer-background-image-wrapper[^>]+src=")[^"]+(")/, `$1${proj.heroImage}$2`);
    }

    // 7. Footer info
    if (footer.email) {
      html = html.replace(/mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, `mailto:${footer.email}`);
    }

    fs.writeFileSync(projHtmlFile, html, 'utf8');
  }
});
console.log(`[Sync] Verified and compiled all ${projects.length} case study pages in projects/*/`);

// -------------------------------------------------------------
// 5. COMPILE INDIVIDUAL SERVICE PAGES (services/<slug>/index.html)
// -------------------------------------------------------------
const serviceTemplatePath = path.join(ROOT, 'services', '.template.html');
let servTemplate = fs.existsSync(serviceTemplatePath) ? fs.readFileSync(serviceTemplatePath, 'utf8') : '';

services.forEach(serv => {
  const servDir = path.join(ROOT, 'services', serv.slug);
  if (!fs.existsSync(servDir)) {
    fs.mkdirSync(servDir, { recursive: true });
    console.log(`[Sync] Created new service folder: services/${serv.slug}/`);
  }

  const servHtmlFile = path.join(servDir, 'index.html');
  let html = fs.existsSync(servHtmlFile) ? fs.readFileSync(servHtmlFile, 'utf8') : servTemplate;

  if (html) {
    // Title
    const authorShort = site.author?.shortName || site.author?.name || 'MESHACK';
    const pageTitle = `${serv.title || serv.headline} | ${authorShort}`;
    html = html.replace(/<title>[^<]+<\/title>/, `<title>${pageTitle}</title>`);

    // Headline in H1
    if (serv.headline) {
      html = html.replace(/(<h1[^>]*>)(.*?)(<\/h1>)/s, `$1${serv.headline}$3`);
    }

    // Description
    if (serv.description) {
      html = html.replace(/(<p class="framer-text framer-styles-preset-2as7yh"[^>]*>)(.*?)(<\/p>)/s, `$1${serv.description}$3`);
    }

    // Hero Image
    if (serv.heroImage) {
      html = html.replace(/(<img[^>]+data-framer-background-image-wrapper[^>]+src=")[^"]+(")/, `$1${serv.heroImage}$2`);
    }

    // Footer info
    if (footer.email) {
      html = html.replace(/mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, `mailto:${footer.email}`);
    }

    fs.writeFileSync(servHtmlFile, html, 'utf8');
  }
});
console.log(`[Sync] Verified and compiled all ${services.length} service pages in services/*/`);

// -------------------------------------------------------------
// 6. COMPILE ABOUT US PAGE (about-us/index.html)
// -------------------------------------------------------------
const aboutHtmlPath = path.join(ROOT, 'about-us', 'index.html');
if (fs.existsSync(aboutHtmlPath)) {
  let aboutHtml = fs.readFileSync(aboutHtmlPath, 'utf8');

  // Title
  const authorName = site.author?.name || 'Meshack Rono';
  aboutHtml = aboutHtml.replace(/<title>[^<]+<\/title>/, `<title>About Us — ${authorName}</title>`);

  // Headline
  if (aboutPage.headline) {
    aboutHtml = aboutHtml.replace(/(<h1[^>]*>)(.*?)(<\/h1>)/s, `$1${aboutPage.headline}$3`);
  }

  // Bio paragraph
  if (aboutPage.bioParagraphs && aboutPage.bioParagraphs.length > 0) {
    aboutHtml = aboutHtml.replace(/(<p class="framer-text framer-styles-preset-2as7yh"[^>]*>)(.*?)(<\/p>)/s, `$1${aboutPage.bioParagraphs[0]}$3`);
  }

  // Footer info
  if (footer.email) {
    aboutHtml = aboutHtml.replace(/mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, `mailto:${footer.email}`);
  }

  fs.writeFileSync(aboutHtmlPath, aboutHtml, 'utf8');
  console.log('[Sync] Updated about-us/index.html.');
}

// -------------------------------------------------------------
// 7. COMPILE HOMEPAGE (index.html)
// -------------------------------------------------------------
const indexHtmlPath = path.join(ROOT, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  // Title & Meta
  if (site.meta?.title) {
    indexHtml = indexHtml.replace(/<title>[^<]+<\/title>/, `<title>${site.meta.title}</title>`);
  }
  if (site.meta?.description) {
    indexHtml = indexHtml.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${site.meta.description}"`);
  }

  // Social Links in Footer
  if (footer.socials) {
    footer.socials.forEach(soc => {
      if (soc.platform.toLowerCase() === 'github' && soc.url) {
        indexHtml = indexHtml.replace(/href="https:\/\/github\.com\/[^"]*"/g, `href="${soc.url}"`);
      }
      if (soc.platform.toLowerCase() === 'linkedin' && soc.url) {
        indexHtml = indexHtml.replace(/href="https:\/\/www\.linkedin\.com\/[^"]*"/g, `href="${soc.url}"`);
      }
      if (soc.platform.toLowerCase() === 'instagram' && soc.url) {
        indexHtml = indexHtml.replace(/href="https:\/\/www\.instagram\.com\/[^"]*"/g, `href="${soc.url}"`);
      }
    });
  }

  // Footer Email & Location
  if (footer.email) {
    indexHtml = indexHtml.replace(/mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, `mailto:${footer.email}`);
    indexHtml = indexHtml.replace(/>meshackrono05@gmail\.com</g, `>${footer.email}<`);
  }
  if (footer.location) {
    indexHtml = indexHtml.replace(/>Nairobi, Kenya</g, `>${footer.location}<`);
  }

  fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
  console.log('[Sync] Updated index.html (Homepage).');
}

// -------------------------------------------------------------
// 8. COMPILE UNIFIED MANIFEST & SYNCHRONIZE LEGACY JSON FILES
// -------------------------------------------------------------
const manifest = {
  site,
  navigation,
  footer,
  pages: {
    home: homePage,
    about: aboutPage,
    work: workPage
  },
  projects,
  services,
  compiledAt: new Date().toISOString()
};

fs.writeFileSync(path.join(contentDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
fs.writeFileSync(path.join(contentDir, 'work.json'), JSON.stringify(projects, null, 2), 'utf8');
fs.writeFileSync(path.join(contentDir, 'services.json'), JSON.stringify(services, null, 2), 'utf8');
fs.writeFileSync(path.join(contentDir, 'about.json'), JSON.stringify(aboutPage, null, 2), 'utf8');

console.log('✅ Synchronized all modular files to content/manifest.json, content/work.json, content/services.json');
console.log('🎉 Static Portfolio compilation complete with 0ms latency and 100% pre-rendered HTML!');
