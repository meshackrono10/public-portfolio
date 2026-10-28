# Meshack's Portfolio Template

A high-performance, modular portfolio website and template engine built with pure **HTML, CSS, and JavaScript**.

All content is managed through clean, isolated JSON files in the **[`content/`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content)** directory. Anyone can customize text, add new projects, update services, or edit pages without touching complex code.

---

## 🎨 Modular Content Structure (`content/`)

Every project, service, and page has its own dedicated JSON file for effortless editing:

```text
content/
├── site.json                        # Global author info, metadata & SEO
├── navigation.json                  # Navbar brand & menu links
├── footer.json                      # Footer email, location, socials & copyright
├── pages/
│   ├── home.json                    # Homepage hero, rotating keywords & CTA
│   ├── about.json                   # About bio paragraphs, stats & skills
│   ├── work.json                    # Showcase header & filter categories
│   └── privacy-policy.json          # Privacy policy page
├── projects/                        # Dedicated file for EACH project:
│   ├── 381-event-space.json
│   ├── cycla.json
│   ├── ding-dong-ping-pong.json
│   ├── dojo.json
│   ├── kantine-komtur.json
│   ├── lokal-vier.json
│   ├── ohm-club.json
│   ├── reforma-x-people-people.json
│   ├── slyrs-experience-centre.json
│   ├── tresor-globus.json
│   └── <your-project>.json         # <-- Drop a new JSON here to create a new project!
└── services/                        # Dedicated file for EACH service:
    ├── brand-architecture.json
    ├── brand-product-activation.json
    ├── event-brand-experiences.json
    ├── interior-and-spatial-design.json
    ├── retail-hospitality.json
    ├── strategy-consulting.json
    └── workplace-new-work.json
```

---

## 🚀 How to Add or Edit Content

### 1. Adding a New Project
Create a new file in `content/projects/<slug>.json` (for example `content/projects/my-new-app.json`):
```json
{
  "slug": "my-new-app",
  "title": "My New App",
  "category": "Full-Stack Web Apps / Cloud Systems",
  "client": "Acme Corp",
  "year": "2026",
  "location": "Nairobi / Remote",
  "description": "Comprehensive case study overview of the project architecture and features...",
  "heroImage": "/images/og-social-preview.webp",
  "galleryImages": [
    "/images/og-social-preview.webp"
  ]
}
```
Run `npm run build` (or `node sync.js`). The template engine will automatically:
- Create `projects/my-new-app/index.html` from the blueprint template
- Add the project card into `/work` and the homepage
- Rebuild the search and navigation index

### 2. Editing an Existing Project
Open any file in `content/projects/*.json` (e.g. [`content/projects/dojo.json`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content/projects/dojo.json)) and update the title, year, client, or description.

### 3. Editing Services
Open any file in `content/services/*.json` (e.g. [`content/services/interior-and-spatial-design.json`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content/services/interior-and-spatial-design.json)) and update the headline, description, deliverables, or image.

### 4. Editing Pages & Bio
- **Home**: [`content/pages/home.json`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content/pages/home.json) (rotating hero headline words, CTA)
- **About**: [`content/pages/about.json`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content/pages/about.json) (bio paragraphs, skills, experience stats)
- **Work**: [`content/pages/work.json`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content/pages/work.json) (header and categories)
- **Global**: [`content/site.json`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content/site.json), [`content/navigation.json`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content/navigation.json), [`content/footer.json`](file:///c:/Users/ADMIN/Desktop/projects/personal/portfolio/content/footer.json)

---

## ⚡ Applying Changes

### Live in Browser (Development)
When running locally via VS Code Live Server or any static local server, the client-side bridge automatically reflects edits in real time!

### Static Pre-render (0ms Latency Production Build)
To compile all JSON files directly into static HTML:
```bash
npm run build
```
*(or `node sync.js`)*

---

## 📁 Repository Overview

```text
portfolio/
├── content/            # Isolated, modular JSON files for all content
├── css/                # Editable stylesheets (custom.css, fonts.css, etc.)
├── js/                 # Pure JavaScript & spring motion physics runtime
├── images/             # Semantic images & webp assets
├── fonts/              # Local webfonts (poppins, inter, magiel)
├── media/              # High-definition showcase MP4 videos
├── index.html          # Homepage
├── work/               # Work showcase catalog
├── about-us/           # About Us page
├── projects/           # Project case study pages (with .template.html)
├── services/           # Service pages (with .template.html)
├── sync.js             # 0ms static pre-render compiler
└── README.md           # Documentation
```
