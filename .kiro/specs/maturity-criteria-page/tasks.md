# Implementation Plan: IA Maturity Criteria Page

## Overview

Build `ia-maturity-criteria.html` as a new static page in the MITA 4.0 site's Information Architecture section. The page embeds all criteria data as a JS array, provides two `<select>` filter controls, renders criteria cards dynamically, and wires into the shared site nav and `app.js` infrastructure. All work is vanilla HTML, CSS, and ES5-compatible JavaScript — no build step, no dependencies.

## Tasks

- [x] 1. Add `ia-maturity-criteria.html` link to every existing page's nav
  - In both the desktop `.nav-dropdown` and the mobile `.mobile-nav-children` under the Architectures group, add `<a href="./ia-maturity-criteria.html">IA Maturity Criteria</a>` to each of the following files: `architectures.html`, `ia-data-crosswalks.html`, `information-architecture.html`, `companion-guide.html`, `index.html`, `introduction.html`, `outcomes-based-planning.html`, `maturity-criteria.html`, `ssa-tool.html`, `tools-resources.html`, `references.html`, `site-map.html`, `implementation-process.html`
  - The new link must be inserted after the existing `ia-data-crosswalks.html` child link and before the `architectures.html#technical-ref` child link in both nav variants
  - _Requirements: 1.3_

- [x] 2. Create the `ia-maturity-criteria.html` page shell
  - Copy the full HTML shell from `ia-data-crosswalks.html` (skip link, mobile nav drawer, header, footer, deferred `app.js`)
  - Update `<title>` to `MITA 4.0 IA Maturity Criteria`
  - Update `<meta name="description">` to describe the maturity criteria browser
  - Update `<meta property="og:title">` and `<meta property="og:description">` accordingly
  - Set `active` class on the Architectures `nav-item-group` (desktop) and `mobile-nav-group` (mobile), and on the `ia-maturity-criteria.html` link in both navs
  - Link `base.css`, `style.css`, and `ia-page.css` in that order in `<head>`
  - Add `<main id="main">` as the page content container
  - _Requirements: 1.1, 1.2, 1.4, 1.5_

- [x] 3. Implement the hero section
  - Inside `<main>`, add a `<section class="hero hero-ia">` with `.container.hero-content`
  - Include: `<div class="hero-badge">Information Architecture</div>`, an `<h1>` with the page title, a `<p class="hero-sub">` subtitle, and a `.hero-actions` div with two CTA links — one `href="#browser"` (primary) and one `href="./information-architecture.html"` (ghost)
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 4. Implement the overview section
  - Add a `<section class="section" id="overview">` with `.container.page-shell`
  - Display all 12 Criteria Dimension names as `.chip` elements inside a `.chip-list`
  - Display the 5 Maturity Levels as `.stat-tile` elements inside a `.stat-stack`, each showing the level number and label (Initial, Developing, Definition, Managed, Optimizing)
  - Apply `.reveal` and `.reveal-delay-*` classes to child elements for scroll animation
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 5. Add new CSS to `ia-page.css` for filter controls and criteria cards
  - Add `.criteria-filters`: flex row, `flex-wrap: wrap`, gap between groups, margin-bottom spacing
  - Add `.filter-group`: flex column (`flex-direction: column`), gap between label and select
  - Add `select` styling within `.filter-group`: border using `oklch(from var(--color-text) l c h / 0.12)`, `border-radius: var(--radius-md)`, `background: var(--color-surface)`, `color: var(--color-text)`, `min-height: 44px`, `padding: var(--space-2) var(--space-3)`, `font-size: var(--text-sm)`, `font-family: var(--font-body)`
  - Add `.criteria-card`: same base surface as `.criteria-panel` (background, border, border-radius, padding, box-shadow), plus `display: flex; flex-direction: column; gap: var(--space-4)`
  - Add `.criteria-card-header`: `display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-2)`
  - Add `.criteria-id`: `font-size: var(--text-xs); font-weight: 700; letter-spacing: 0.06em; color: var(--color-text-muted); font-family: var(--font-display)`
  - Add `.level-badge`: pill badge base — `display: inline-flex; align-items: center; padding: var(--space-1) var(--space-3); border-radius: var(--radius-full); font-size: var(--text-xs); font-weight: 700`
  - Add five modifier classes `.level-badge--1` through `.level-badge--5` using distinct `--color-*` token combinations (e.g., `--1`: `background: var(--color-surface-offset); color: var(--color-text-muted)`, `--2`: primary highlight, `--3`: info highlight, `--4`: success highlight, `--5`: accent highlight) — all using CSS custom property tokens only, no hardcoded hex
  - Add `.criteria-card-dimension`: `font-size: var(--text-sm); font-weight: 700; color: var(--color-text)`
  - Add `.criteria-card-desc`: `font-size: var(--text-sm); color: var(--color-text-muted); line-height: 1.6`
  - Add `.criteria-card-checklist`, `.criteria-card-evidence`, `.criteria-card-question`, `.criteria-card-capability`: each `display: flex; flex-direction: column; gap: var(--space-2)`; list items inside checklist use `font-size: var(--text-sm); color: var(--color-text-muted)`
  - Add `.criteria-results-grid`: `display: grid; grid-template-columns: 1fr; gap: var(--space-4)` with a `@media (min-width: 900px)` override to `repeat(2, minmax(0, 1fr))`
  - Add `.criteria-empty-state`: `text-align: center; padding: var(--space-10); color: var(--color-text-muted); font-size: var(--text-base)`
  - _Requirements: 5.7, 8.1, 8.6_

- [x] 6. Implement the criteria browser section (HTML structure only)
  - Add `<section class="section section-alt" id="browser">` with `.container.page-shell`
  - Add section heading and lead paragraph
  - Add the filter controls markup:
    ```html
    <div class="criteria-filters">
      <div class="filter-group">
        <label for="filter-dimension">Criteria Dimension</label>
        <select id="filter-dimension" name="filter-dimension">
          <option value="">All Dimensions</option>
          <!-- 12 dimension options added by inline script -->
        </select>
      </div>
      <div class="filter-group">
        <label for="filter-level">Maturity Level</label>
        <select id="filter-level" name="filter-level">
          <option value="">All Levels</option>
          <option value="1">Level 1 — Initial</option>
          <option value="2">Level 2 — Developing</option>
          <option value="3">Level 3 — Definition</option>
          <option value="4">Level 4 — Managed</option>
          <option value="5">Level 5 — Optimizing</option>
        </select>
      </div>
    </div>
    <p id="criteria-status" aria-live="polite" class="sr-only"></p>
    <div id="criteria-results" class="criteria-results-grid" role="list" aria-label="Maturity criteria"></div>
    ```
  - _Requirements: 4.1, 4.2, 4.3, 4.7, 4.8, 8.2, 8.3, 8.4_

- [x] 7. Embed the `IA_CRITERIA` data array in the inline script block
  - At the bottom of `<body>` (after `<script src="./app.js" defer></script>`), open an inline `<script>` block
  - Declare `var IA_CRITERIA = [ ... ];` containing all criteria objects extracted from `Information-Architecture-Criteria-1.xlsx`
  - Each object must include all eight fields: `id` (string), `level` (number 1–5), `dimension` (string), `description` (string), `checklist` (array of strings), `evidence` (string), `dimensionQuestion` (string), `dataManagementCapability` (string)
  - Cover all 12 dimensions × up to 5 levels; omit entries only where the spreadsheet has no row for that combination
  - _Requirements: 6.1, 6.2_

- [x] 8. Implement the filter and render IIFE in the inline script block
  - After the `IA_CRITERIA` declaration, add an ES5-compatible IIFE `(function() { 'use strict'; ... }());`
  - Implement `escapeHtml(str)` helper that replaces `&`, `<`, `>`, `"`, `'` with their HTML entities
  - Implement `getFiltered()` that reads `dimSelect.value` and `lvlSelect.value`, filters `IA_CRITERIA`, and returns the matching subset
  - Implement `renderCard(c)` that builds and returns an HTML string for a single criterion using the `.criteria-card` structure defined in task 5; conditionally omit `.criteria-card-evidence`, `.criteria-card-question`, and `.criteria-card-capability` sub-sections when their fields are empty/falsy; use `escapeHtml` on all data values
  - Implement `render()` that: (a) handles empty/undefined `IA_CRITERIA` with a fallback message, (b) calls `getFiltered()`, (c) handles zero results with the empty-state message and updates `#criteria-status`, (d) otherwise sets `resultsEl.innerHTML` to the joined card HTML and updates `#criteria-status` with the count string ("Showing N criteria" / "Showing 1 criterion")
  - Attach `change` event listeners on both selects calling `render()`
  - Call `render()` once on load for the initial display
  - _Requirements: 4.4, 4.5, 4.6, 6.3, 6.4, 8.4_

- [ ]* 8.1 Write property test for filter correctness (Property 1)
  - **Property 1: every visible card satisfies the active filters**
  - For random `(dimension, level)` pairs from the actual value sets (including empty string for "All"), assert every object returned by `getFiltered()` satisfies both predicates
  - **Validates: Requirements 4.4, 4.5**

- [ ]* 8.2 Write property test for filter completeness (Property 2)
  - **Property 2: no matching criterion is excluded**
  - For the same random inputs, assert every criterion in `IA_CRITERIA` that satisfies both predicates appears in the result
  - **Validates: Requirements 4.4, 4.5**

- [ ]* 8.3 Write property test for card rendering required fields (Property 3)
  - **Property 3: card rendering includes all required fields**
  - Generate random criterion objects with all required fields populated; assert `renderCard(criterion)` output contains the id, level label, dimension, and description strings
  - **Validates: Requirements 5.1**

- [ ]* 8.4 Write property test for checklist rendering (Property 4)
  - **Property 4: checklist items are all rendered**
  - Generate random criterion objects with non-empty checklist arrays; assert `renderCard(criterion)` output contains exactly as many `<li>` elements as checklist items, each with matching text
  - **Validates: Requirements 5.2**

- [ ]* 8.5 Write property test for data completeness (Property 5)
  - **Property 5: all required fields present in IA_CRITERIA**
  - Iterate every entry in `IA_CRITERIA`; assert all eight required fields are present (not `undefined`) and `level` is an integer 1–5
  - **Validates: Requirements 6.2**

- [ ]* 8.6 Write property test for aria-live region count (Property 6)
  - **Property 6: aria-live region reflects filter result count**
  - For random filter combinations, call `render()` and assert `#criteria-status` text content contains the same count as `getFiltered().length`
  - **Validates: Requirements 8.4**

- [x] 9. Checkpoint — verify filter and render behavior
  - Ensure all tests pass, ask the user if questions arise.
  - Manually verify in browser: initial load shows all criteria, dimension filter narrows results, level filter narrows results, combined filters work, empty-state message appears for a no-match combination, `aria-live` region text updates on each filter change

- [x] 10. Implement the download panel section
  - Add `<section class="section" id="download">` with `.container.page-shell`
  - Use the `.download-panel` / `.download-item` / `.download-link` pattern from `ia-page.css`
  - The download button must carry `data-download="./assets/downloads/Information-Architecture-Criteria-1.xlsx"` and `data-filename="Information-Architecture-Criteria-1.xlsx"` so `app.js` handles it automatically
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 11. Implement the next-steps / related-pages section
  - Add `<section class="section section-alt" id="next">` with `.container.page-shell`
  - Use `.next-grid` and `.next-card` from `ia-page.css` with links to `information-architecture.html` and `ia-data-crosswalks.html`
  - _Requirements: 9.1, 9.4_

- [x] 12. Add cross-links to `information-architecture.html` and `ia-data-crosswalks.html`
  - In `information-architecture.html`: add a `.next-card` or `.cta-panel-soft` entry referencing `ia-maturity-criteria.html` in the existing next-steps or related section
  - In `ia-data-crosswalks.html`: add a `.next-card` or `.cta-panel-soft` entry referencing `ia-maturity-criteria.html` in the existing next-steps or related section
  - _Requirements: 9.2, 9.3, 9.4_

- [x] 13. Final checkpoint — full page review
  - Ensure all tests pass, ask the user if questions arise.
  - Verify the complete page in browser: nav link present and active state correct, hero renders, overview chips and stat tiles display, filter controls have visible labels, all criteria cards render with correct level badges, download button triggers `app.js` handler, next-steps links resolve, dark mode toggle applies correctly to all new components, no hardcoded colors in new CSS

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- All JS must be ES5-compatible (no `const`, `let`, arrow functions, template literals, or `async/await` in the inline script)
- All colors in new CSS must use `--color-*` tokens — no hardcoded hex values
- The `IA_CRITERIA` data array is the most time-intensive task; confirm dimension names against the spreadsheet before finalizing
- Property tests require introducing a JS test runner (e.g., `npx jest` or `npx fast-check`) since the project has no existing test infrastructure
