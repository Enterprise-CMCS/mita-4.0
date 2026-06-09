# Implementation Plan: MITA Maturity Criteria Page

## Overview

Replace the `public/maturity-criteria.html` placeholder with a fully functional, interactive criteria browser for all three MITA architectures (Business, Information, Technical). The page is a static HTML file using the existing site shell, `ia-page.css` for styles (plus 3 new CSS rules), and an inline `<script>` block for tab switching, filter logic, and rendering. `app.js` is not modified.

## Tasks

- [x] 1. Add the three new CSS rules to `ia-page.css`
  - Add `.arch-tabs` — flex row, gap, border-bottom separator line
  - Add `.arch-tab` — button reset, padding, font styling, hover/focus states, min 44px touch target
  - Add `.arch-tab.active` — primary color underline indicator using `--color-primary` token
  - Use only `--color-*`, `--space-*`, `--text-*`, and `--radius-*` tokens; no hardcoded values
  - _Requirements: 3.1, 3.4, 10.1, 10.4_

- [x] 2. Build the `MITA_CRITERIA` data object
  - [x] 2.1 Adapt the Information Architecture criteria from `ia-maturity-criteria.html`
    - Copy the `IA_CRITERIA` array from `ia-maturity-criteria.html`'s inline script
    - Rename each entry's `dimension` field to `capabilityArea`
    - Add `architecture: "information"` to every entry
    - Verify all 12 dimensions × 5 levels = 60 entries are present
    - _Requirements: 7.1, 7.2_

  - [x] 2.2 Write representative placeholder entries for Business Architecture
    - Create at least one entry per capability area (Member Management, Provider Management, Contractor Management, Operations Management, Care Management, Decision Support & Reporting, Program Integrity, Financial Management, Plan Management) covering the full range of levels 1–5
    - Each entry must include: `id`, `architecture: "business"`, `capabilityArea`, `level`, `description`, `checklist` (array), `evidence` (string), `dimensionQuestion` (string)
    - _Requirements: 7.1, 7.2_

  - [x] 2.3 Write representative placeholder entries for Technical Architecture
    - Create at least one entry per capability area (Application Architecture, Integration Architecture, Infrastructure Architecture, Security Architecture, Data Architecture) covering the full range of levels 1–5
    - Each entry must follow the same schema as Business and Information entries
    - _Requirements: 7.1, 7.2_

  - [ ]* 2.4 Write property test for criterion data schema (Property 6)
    - **Property 6: Criterion data objects satisfy the required schema**
    - **Validates: Requirements 7.2**
    - For every entry across all three `MITA_CRITERIA` arrays, assert: `architecture` is "business", "information", or "technical"; `capabilityArea` is a non-empty string; `level` is an integer in [1, 5]; `description` is a non-empty string

- [x] 3. Build the static HTML shell for `public/maturity-criteria.html`
  - Replace the existing placeholder file entirely
  - Copy the full site shell from `ia-maturity-criteria.html`: skip link, mobile nav drawer, site header with logo and nav, site footer, deferred `app.js` script
  - Set `active` class on the "Maturity Criteria" nav group and on the `maturity-criteria.html` link in both desktop nav and mobile nav drawer (remove `active` from any other group)
  - Update `<title>`, `<meta name="description">`, and OG meta tags to reflect the MITA Maturity Criteria page
  - Change the stylesheet link from `sitemap-pages.css` to `ia-page.css`
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 4. Implement the hero section and Companion Guide callout
  - [x] 4.1 Write the hero section HTML
    - Use `.hero` and `.hero-ia` CSS classes for the gradient background consistent with IA pages
    - Include a `.hero-badge` label, `<h1>` heading, `.hero-sub` subtitle explaining MITA maturity criteria and their role in the SS-A process
    - Include two CTA links: one to `#browser` ("Browse Criteria") and one to `companion-guide.html#document-ssa` ("Companion Guide Step 4")
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 4.2 Write the Companion Guide callout banner
    - Place a `.cta-panel-soft` or `.callout-panel` block between the hero and the overview section
    - Include a label explaining that maturity criteria are used in Step 4 of the Companion Guide
    - Include a `.btn` link to `companion-guide.html#document-ssa`
    - Apply `.reveal` class for scroll animation
    - _Requirements: 8.1_

- [x] 5. Implement the overview section
  - Write the overview section (`id="overview"`) with `.reveal` on child elements
  - Display the 5 maturity level labels using `.stat-tile` / `.stat-stack` component classes (Level 1 — Initial through Level 5 — Optimizing)
  - Display capability area chips using `.chip` / `.chip-list` for each architecture (Business, Information, Technical) — these can be static since the areas are known
  - Use existing `ia-page.css` component classes only; no new classes needed for this section
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 6. Implement the architecture tab bar and panel scaffolding
  - [x] 6.1 Write the tab bar HTML
    - Wrap in `<div class="arch-tabs" role="tablist" aria-label="Architecture type">`
    - Three `<button>` elements with `role="tab"`, `id="tab-{arch}"`, `aria-selected`, `aria-controls="panel-{arch}"` attributes
    - Business Architecture tab has `class="arch-tab active"` and `aria-selected="true"` by default; others have `aria-selected="false"`
    - _Requirements: 3.1, 3.3, 3.4, 10.2_

  - [x] 6.2 Write the three architecture panel HTML shells
    - Each panel: `<div class="arch-panel" id="panel-{arch}" role="tabpanel" aria-labelledby="tab-{arch}">`
    - Business panel has `class="arch-panel active"` (visible on load); Information and Technical panels are hidden by default via CSS (`.arch-panel` default `display:none`, `.arch-panel.active` `display:block`)
    - Add the two CSS rules for `.arch-panel` and `.arch-panel.active` to `ia-page.css`
    - Each panel contains: architecture cross-link block, filter controls, `aria-live` status paragraph, results grid `<div>`
    - _Requirements: 3.2, 3.3, 10.2_

  - [x] 6.3 Write the filter controls HTML for each panel
    - Each panel gets a `.criteria-filters` block with two `.filter-group` elements
    - Capability area `<select id="filter-area-{arch}">` with `<label>` — options populated dynamically by the inline script at runtime (only the "All Capability Areas" `<option value="">` is hardcoded in HTML)
    - Maturity level `<select id="filter-level-{arch}">` with `<label>` — all 5 level options hardcoded in HTML
    - `<p id="status-{arch}" aria-live="polite" class="sr-only"></p>` for screen reader announcements
    - `<div id="results-{arch}" class="criteria-results-grid" role="list" aria-label="{Architecture} maturity criteria"></div>` for rendered cards
    - _Requirements: 5.1, 5.2, 5.3, 5.7, 5.8, 10.3_

  - [x] 6.4 Write the architecture cross-link block for each panel
    - Use `.cta-panel-soft` with `.eyebrow-mini`, a short description, and a `.btn.btn-outline` link
    - Business panel → `architectures.html#business-ref`
    - Information panel → `architectures.html#information-ref`
    - Technical panel → `architectures.html#technical-ref`
    - _Requirements: 8.2, 8.3_

- [x] 7. Implement the inline script — `escapeHtml` and `renderCard`
  - [x] 7.1 Write the `escapeHtml(str)` utility function
    - Escapes `&`, `<`, `>`, `"`, `'` to prevent XSS when inserting criterion text into `innerHTML`
    - _Requirements: 7.3_

  - [x] 7.2 Write the `renderCard(criterion)` function
    - Returns an HTML string for an `<article class="criteria-card" role="listitem">` element
    - Header row: `<span class="level-badge level-badge--{N}">Level N — {Label}</span>` and `<span class="criteria-id">{id}</span>`
    - Capability area: `<div class="criteria-card-dimension">{capabilityArea}</div>`
    - Description: `<p class="criteria-card-desc">{description}</p>`
    - Conditional checklist section: rendered only when `criterion.checklist` is non-empty
    - Conditional evidence section: rendered only when `criterion.evidence` is non-empty
    - Conditional dimension question section: rendered only when `criterion.dimensionQuestion` is non-empty
    - All text values passed through `escapeHtml()` before insertion
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ]* 7.3 Write property test for `renderCard` output (Property 4)
    - **Property 4: Rendered card contains all required fields**
    - **Validates: Requirements 6.1, 6.2, 6.3**
    - Generate random criterion objects (valid schema); assert rendered HTML contains `capabilityArea`, `level-badge--{N}` class, and `description`; assert conditional sections appear iff corresponding fields are non-empty

- [x] 8. Implement the inline script — `populateAreaSelect` and `renderPanel`
  - [x] 8.1 Write the `populateAreaSelect(arch)` function
    - Reads `MITA_CRITERIA[arch]`, extracts unique `capabilityArea` values in insertion order
    - Clears existing options (except the "All" option at index 0) and appends one `<option>` per unique area
    - Called once per panel on page load
    - _Requirements: 5.2_

  - [x] 8.2 Write the `renderPanel(arch)` function
    - Reads the panel's two `<select>` values
    - Filters `MITA_CRITERIA[arch]` by `capabilityArea` and `level`
    - If data is missing/empty: renders the "not yet available" fallback message; clears `aria-live` status
    - If filtered result is empty: renders the "no match" empty-state message; sets `aria-live` status to "No criteria match the selected filters."
    - Otherwise: writes `filtered.map(renderCard).join('')` to the results grid; sets `aria-live` status to "Showing N criteria." (singular "criterion" when N = 1)
    - All DOM lookups guarded with null checks
    - _Requirements: 5.4, 5.5, 5.6, 7.4, 10.3_

  - [ ]* 8.3 Write property test for filter logic (Property 3)
    - **Property 3: Filter combination produces exactly matching cards**
    - **Validates: Requirements 5.4, 5.5, 5.6**
    - Generate random arch key, random capability area value (including ""), random level value (including ""); apply filters and call `renderPanel`; assert rendered card count equals count of criteria satisfying both predicates

  - [ ]* 8.4 Write property test for `aria-live` update (Property 7)
    - **Property 7: Filter change updates the aria-live status region**
    - **Validates: Requirements 10.3**
    - Generate random filter combination; call `renderPanel`; assert status element `textContent` is non-empty

  - [ ]* 8.5 Write property test for capability area select options (Property 5)
    - **Property 5: Capability area selector options match data**
    - **Validates: Requirements 5.2**
    - For each architecture, compare select options (excluding "All") to `[...new Set(MITA_CRITERIA[arch].map(c => c.capabilityArea))]`; assert exact set equality

- [x] 9. Implement the inline script — `activateTab` and keyboard navigation
  - [x] 9.1 Write the `activateTab(arch)` function
    - Iterates `ARCH_KEYS = ['business', 'information', 'technical']`
    - Toggles `active` class and `aria-selected` on each tab button
    - Toggles `active` class on each panel (shows/hides via CSS)
    - Resets both filter selects in the newly activated panel to `""`
    - Calls `renderPanel(arch)` to re-render the full criteria set
    - _Requirements: 3.2, 3.5, 3.6_

  - [x] 9.2 Wire tab click event listeners
    - Attach `click` listeners to each `.arch-tab` button that call `activateTab` with the corresponding arch key
    - _Requirements: 3.2_

  - [x] 9.3 Implement keyboard navigation on the tablist
    - Attach `keydown` listener to the tablist container
    - Handle `ArrowRight` / `ArrowLeft` to move focus to the next/previous tab (wrapping)
    - Handle `Home` / `End` to jump to first/last tab
    - Handle `Enter` / `Space` to activate the focused tab
    - _Requirements: 3.5_

  - [ ]* 9.4 Write property test for tab activation (Property 1)
    - **Property 1: Tab activation shows exactly one panel**
    - **Validates: Requirements 3.2**
    - Generate random arch key from `['business', 'information', 'technical']`; call `activateTab(key)`; assert exactly one panel has the `active` class

  - [ ]* 9.5 Write property test for tab switch resets filters (Property 2)
    - **Property 2: Tab switch resets filters and renders full criteria set**
    - **Validates: Requirements 3.6**
    - Pre-set filters to non-empty values; generate random arch key; call `activateTab(key)`; assert both selects reset to `""` and results grid contains `MITA_CRITERIA[key].length` cards

- [x] 10. Wire filter change listeners and initialize the page
  - Attach `change` event listeners to each panel's two `<select>` elements that call `renderPanel(arch)`
  - On `DOMContentLoaded` (or at script end after DOM is ready): call `populateAreaSelect` for all three architectures, then call `renderPanel('business')` to render the default panel
  - _Requirements: 5.4, 3.3_

- [x] 11. Checkpoint — verify core interactive behavior
  - Ensure all tests pass, ask the user if questions arise.
  - Manually verify in browser: Business tab active on load with criteria rendered; clicking Information/Technical tabs switches panels and resets filters; filter selects narrow results; empty state message appears when no criteria match; `aria-live` region updates on filter change

- [x] 12. Add the download panel and related pages section
  - [x] 12.1 Write the download panel HTML
    - Use `.download-panel`, `.download-panel-header`, `.download-list`, `.download-item`, `.download-meta`, `.download-link` classes from `ia-page.css`
    - Download button: `<button class="download-link" type="button" data-download="./assets/downloads/MITA Maturity Criteria_working document.docx" data-filename="MITA Maturity Criteria_working document.docx">Download Working Document</button>`
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 12.2 Write the related pages / next-grid section
    - Use `.next-grid` with `.next-card` articles linking to `companion-guide.html#document-ssa` and `architectures.html`
    - Apply `.reveal` and `.reveal-delay-*` classes for scroll animation
    - _Requirements: 8.1, 8.3_

- [x] 13. Update the page footer
  - Update footer description text and footer links to reflect the Maturity Criteria page content
  - Ensure footer logo and copyright text are consistent with other pages
  - _Requirements: 1.1_

- [x] 14. Final checkpoint — full page review
  - Ensure all tests pass, ask the user if questions arise.
  - Verify: skip link present; nav active state correct on "Maturity Criteria"; all three tabs functional; download button has correct `data-download` and `data-filename` attributes; no hardcoded color values in new CSS; dark mode renders correctly; page validates as WCAG 2.1 AA for tab ARIA pattern (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-controls`, `aria-labelledby`, `aria-selected`)

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- The page lives at `public/maturity-criteria.html` — the workspace root copy does not exist and does not need to be created
- `app.js` is NOT modified; all tab/filter/render logic lives in the page's own inline `<script>` block
- Business and Technical criteria ship as representative placeholders; implementers replace with real content from `MITA Maturity Criteria_working document.docx`
- Information Architecture criteria are adapted from the existing `IA_CRITERIA` array in `ia-maturity-criteria.html`
- Capability area `<select>` options are populated dynamically at runtime from the data — only the "All" option is hardcoded in HTML
- Property tests reference the design document's Correctness Properties section for full specifications
