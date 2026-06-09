# Implementation Tasks: IA Maturity Criteria Page

## Overview

Build `ia-maturity-criteria.html` as a new static page in the MITA 4.0 site's Information Architecture section. All work is vanilla HTML, CSS, and ES5-compatible JavaScript — no build step, no dependencies.

---

## Completed Tasks

### 1. Add nav link to all existing pages ✅

Added `<a href="./ia-maturity-criteria.html">IA Maturity Criteria</a>` to both the desktop `.nav-dropdown` and mobile `.mobile-nav-children` under the Architectures group in all existing HTML files.

### 2. Create page shell ✅

Created `ia-maturity-criteria.html` based on `ia-data-crosswalks.html` with:

- Updated `<title>`, `<meta name="description">`, and OG tags
- Active nav state on Architectures group and the new page link
- CSS links: `base.css` → `style.css` → `ia-page.css`
- Empty `<main id="main">` placeholder

### 3. Hero section ✅

Added `<section class="hero hero-ia">` with badge, H1, subtitle, and two CTAs:

- "Browse Criteria" → `#browser`
- "IA Overview" → `./information-architecture.html`

### 4. Overview section ✅

Added `<section id="overview">` with:

- 12 Criteria Dimensions as `.chip` elements in a `.chip-list`
- 5 Maturity Levels as `.stat-tile` elements in a `.stat-stack`
- `.reveal` and `.reveal-delay-*` classes for scroll animation

### 5. New CSS in `ia-page.css` ✅

Appended new rules under `/* === Maturity Criteria Browser === */`:

- `.criteria-filters`, `.filter-group`, `.filter-group select`
- `.criteria-results-grid` (1-col → 2-col at 900px)
- `.criteria-card`, `.criteria-card-header`, `.criteria-id`
- `.level-badge` + `.level-badge--1` through `.level-badge--5` (color-coded)
- `.criteria-card-dimension`, `.criteria-card-desc`, `.criteria-card-section`
- `.criteria-empty-state`

### 6. Criteria browser HTML structure ✅

Added `<section id="browser">` with:

- Two labeled `<select>` filter controls (dimension + level)
- `aria-live="polite"` status region (`#criteria-status`)
- `#criteria-results` container with `role="list"`

### 7. Embedded `IA_CRITERIA` data array ✅

Added inline `<script>` block with `var IA_CRITERIA = [...];` containing all 60 criteria objects (12 dimensions × 5 levels). Each object includes all 8 required fields: `id`, `level`, `dimension`, `description`, `checklist`, `evidence`, `dimensionQuestion`, `dataManagementCapability`.

### 8. Filter and render IIFE ✅

Added ES5-compatible IIFE with:

- `escapeHtml()` — XSS-safe string escaping
- `getFiltered(dim, lvl)` — filters `IA_CRITERIA` by dimension and/or level
- `renderChecklist(items)` — renders `<li>` elements
- `renderSection(label, text)` — renders optional sub-sections
- `renderCard(c)` — builds full `<article class="criteria-card">` HTML string
- `render()` — reads filters, writes to `#criteria-results` and `#criteria-status`, handles empty-data and no-results states
- `DOMContentLoaded` listener wiring `change` events and initial `render()` call

### 9. Download panel ✅

Added `<section id="download">` using `.download-panel` / `.download-item` / `.download-link` pattern. Download button wired to `Information-Architecture-Criteria-1.xlsx` via `data-download` / `data-filename` attributes for `app.js` handler.

### 10. Next-steps section ✅

Added `<section id="next">` with `.next-grid` containing two `.next-card` elements linking to `information-architecture.html` and `ia-data-crosswalks.html`.

### 11. Cross-links on other IA pages ✅

Added `.next-card` referencing `ia-maturity-criteria.html` to `ia-data-crosswalks.html`. (`information-architecture.html` does not yet exist in the workspace.)

---

## Optional Tasks (not implemented)

The following property-based tests were defined but not implemented, as the project has no existing test runner infrastructure:

- **Property 1:** Filter correctness — every visible card satisfies active filters
- **Property 2:** Filter completeness — no matching criterion excluded
- **Property 3:** Card rendering includes all required fields
- **Property 4:** Checklist items all rendered
- **Property 5:** All required fields present in `IA_CRITERIA`
- **Property 6:** `aria-live` region reflects filter result count

To implement these, introduce a JS test runner (e.g., `npx jest` or `npx fast-check`) and extract `getFiltered` and `renderCard` into a testable module.
