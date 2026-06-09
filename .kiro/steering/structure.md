# Project Structure

## Root Layout

```
/
├── index.html                    # Welcome / home page
├── introduction.html
├── companion-guide.html
├── outcomes-based-planning.html
├── architectures.html
├── information-architecture.html
├── ia-data-crosswalks.html
├── maturity-criteria.html
├── ssa-tool.html
├── tools-resources.html
├── references.html
├── site-map.html
├── implementation-process.html
│
├── app.js                        # All JS (single file)
├── base.css                      # Tokens + reset (loaded by every page)
├── style.css                     # Shared layout/components (loaded by every page)
├── ia-page.css                   # IA-specific page styles
├── sitemap-pages.css             # Sitemap/architecture page styles
├── process-page.css              # Implementation walkthrough styles
│
└── assets/
    └── downloads/                # Downloadable workbooks (.xlsx, .pptx, .docx)
```

## HTML Page Conventions

Every page follows the same shell structure:

1. `<head>` — charset, viewport, title, OG meta, Fontshare CDN link, then `base.css` → `style.css` → page-specific CSS
2. Skip link: `<a href="#main" class="skip-link">Skip to content</a>`
3. Mobile nav drawer: `<div class="mobile-nav" id="mobileNav" role="dialog">`
4. `<header class="site-header" id="siteHeader">` with `.container .header-inner` containing logo, `<nav class="nav-main">`, and `.header-actions`
5. `<main id="main">` — page content
6. `<footer class="site-footer">` with `.container .footer-inner`
7. `<script src="./app.js" defer></script>` — always last, always deferred

## Navigation Structure

The site nav has 8 top-level items, each with a dropdown. Both desktop (`nav-main` + `.nav-dropdown`) and mobile (`mobile-nav` with `.mobile-nav-group` / `.mobile-nav-children`) navs are duplicated in every HTML file. Active state uses class `active` on the relevant group and links.

Top-level nav items:
- Welcome → `index.html`
- Introduction → `introduction.html`
- Companion Guide → `companion-guide.html`
- Outcomes-based Planning → `outcomes-based-planning.html`
- Architectures → `architectures.html` (sub-pages: `information-architecture.html`, `ia-data-crosswalks.html`, `ia-maturity-criteria.html`)
- Maturity Criteria → `maturity-criteria.html` (sub-page: `ssa-tool.html`)
- Tools & Resources → `tools-resources.html`
- References → `references.html` (sub-pages: `site-map.html`, `implementation-process.html`)

## CSS Conventions

- All spacing via `--space-*` tokens (never raw `px` values for spacing)
- All colors via `--color-*` tokens (never hardcoded hex in page-specific CSS)
- All font sizes via `--text-*` tokens
- Responsive grids use CSS Grid with `grid-template-columns` overrides at `768px`, `900px`, and `1024px` breakpoints
- Component class naming is descriptive and flat: `.hero-badge`, `.section-eyebrow`, `.download-panel`, `.info-card`, etc.
- Scroll reveal: add class `reveal` to elements; `app.js` adds `visible` when in viewport. Use `reveal-delay-1` through `reveal-delay-4` for staggered timing.

## Downloadable Assets

All downloadable files live in `assets/downloads/`. Downloads are triggered via JS using `data-download="./assets/downloads/<filename>"` and `data-filename="<filename>"` attributes on `<button>` elements — never plain `<a>` tags.

## Adding a New Page

1. Copy the header/footer/nav shell from an existing page
2. Set the correct `active` class on the nav item(s)
3. Link `base.css` + `style.css` + the appropriate page-specific CSS (or create a new one)
4. Add `<main id="main">` with page content
5. Add the page link to the nav dropdowns in **every** existing HTML file
