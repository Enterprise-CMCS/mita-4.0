# Design Document: IA Maturity Criteria Page

## Overview

This document describes the technical design for `ia-maturity-criteria.html`, a new static page added to the Information Architecture section of the MITA 4.0 website. The page presents the structured maturity criteria from `Information-Architecture-Criteria-1.xlsx` in an interactive, browser-native format — eliminating the need to download and navigate a spreadsheet for routine assessment work.

The page is the third IA sub-page under the Architectures nav group, alongside `information-architecture.html` and `ia-data-crosswalks.html`. It follows all existing site conventions: vanilla HTML, `ia-page.css` for styles, `app.js` for shared interactions, full dark mode via CSS custom properties, and WCAG 2.1 AA accessibility.

### Key Design Decisions

**All data embedded in the page.** The site has no server, no build step, and no fetch infrastructure for data files. Embedding the criteria as a JS array literal in a `<script>` block in the HTML file is the only approach consistent with the static-site constraint. This also means the page works offline and loads instantly.

**Filtering via vanilla ES5 JS in an inline script block.** The existing `app.js` handles shared behaviors (dark mode, nav, downloads, scroll reveal). Page-specific interactive logic — the filter controls and card renderer — belongs in an inline `<script>` block at the bottom of the page, keeping `app.js` unchanged and the feature self-contained.

**Native `<select>` elements for filter controls.** The requirements allow either `<select>` or button-tab controls. `<select>` is the right choice here: there are 12 dimensions and 5 levels, making button tabs visually unwieldy. Native selects are keyboard-accessible, screen-reader-friendly, and require no additional CSS.

**`aria-live` region for filter result announcements.** When filters change, a visually hidden `aria-live="polite"` region is updated with the result count (e.g., "Showing 7 criteria"). This satisfies Requirement 8.4 without requiring a focus change.

---

## Architecture

The page is a single static HTML file. There is no build pipeline, no module system, and no external data source.

```
ia-maturity-criteria.html
├── <head>
│   ├── base.css          (tokens, reset, dark mode)
│   ├── style.css         (shared layout, header, footer, nav, buttons)
│   └── ia-page.css       (IA-specific components: cards, download panel, chips, etc.)
│
├── <body>
│   ├── Skip link
│   ├── Mobile nav drawer  (shared shell, copied from ia-data-crosswalks.html)
│   ├── <header>           (shared shell)
│   ├── <main id="main">
│   │   ├── Hero section           (#hero)
│   │   ├── Overview section       (#overview)
│   │   ├── Criteria browser       (#browser)
│   │   │   ├── Filter controls    (.criteria-filters)
│   │   │   ├── aria-live region   (#criteria-status)
│   │   │   └── Results area       (#criteria-results)
│   │   ├── Download section       (#download)
│   │   └── Next-steps section     (#next)
│   └── <footer>           (shared shell)
│
├── <script src="./app.js" defer></script>   (shared: dark mode, nav, downloads, reveal)
└── <script>                                  (inline: data + filter/render logic)
    ├── var IA_CRITERIA = [ ... ];            (embedded data array)
    └── (function() { ... })();              (filter + render IIFE)
```

### Interaction with `app.js`

The inline script does not conflict with `app.js`. The download button uses the standard `data-download` / `data-filename` attributes, so `app.js`'s existing download handler picks it up automatically. Scroll reveal (`.reveal` → `.visible`) is also handled by `app.js` for static sections; the dynamically rendered criteria cards do not use reveal classes (they appear/disappear on filter change, not on scroll).

---

## Components and Interfaces

### 1. Page Shell

Copied from `ia-data-crosswalks.html` with these changes:
- `<title>` → `MITA 4.0 IA Maturity Criteria`
- `<meta name="description">` updated
- Active nav state: `active` class on the Architectures `nav-item-group` and on the `ia-maturity-criteria.html` link in both desktop and mobile navs
- The Architectures dropdown in every existing HTML file gains a new child link: `<a href="./ia-maturity-criteria.html">IA Maturity Criteria</a>`

### 2. Hero Section

```html
<section class="hero hero-ia">
  <div class="container hero-content">
    <div class="hero-badge">Information Architecture</div>
    <h1>IA maturity criteria, <em>made browsable</em></h1>
    <p class="hero-sub">...</p>
    <div class="hero-actions">
      <a href="#browser" class="btn btn-primary">Browse criteria</a>
      <a href="./information-architecture.html" class="btn btn-ghost">Back to IA overview</a>
    </div>
  </div>
</section>
```

Uses `.hero-ia` for the gradient background already defined in `ia-page.css`. No new CSS needed.

### 3. Overview Section

Displays the 12 Criteria Dimensions as `.chip` elements in a `.chip-list`, and the 5 Maturity Levels as `.stat-tile` elements in a `.stat-stack`. Both component classes already exist in `ia-page.css`. Child elements carry `.reveal` and `.reveal-delay-*` classes for scroll animation.

### 4. Filter Controls

```html
<div class="criteria-filters">
  <div class="filter-group">
    <label for="filter-dimension">Criteria Dimension</label>
    <select id="filter-dimension" name="filter-dimension">
      <option value="">All Dimensions</option>
      <!-- 12 dimension options -->
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
```

The `aria-live="polite"` region uses the existing `.sr-only` class from `base.css` so it is announced to screen readers but not visible. The `<label>` elements satisfy Requirement 8.2 without needing `aria-label`.

New CSS needed in `ia-page.css`:
- `.criteria-filters` — flex row, wraps on small screens, gap between groups
- `.filter-group` — flex column, label + select stacked
- `select` within `.filter-group` — styled to match site tokens (border, radius, background, color, min-height 44px)

### 5. Criteria Results Area

```html
<div id="criteria-results" role="list" aria-label="Maturity criteria">
  <!-- Populated by inline JS -->
</div>
```

Each rendered card:

```html
<article class="criteria-card" role="listitem">
  <div class="criteria-card-header">
    <span class="level-badge level-badge--{1-5}">Level {N} — {Label}</span>
    <span class="criteria-id">{ID}</span>
  </div>
  <div class="criteria-card-dimension">{Dimension}</div>
  <p class="criteria-card-desc">{Description}</p>
  <div class="criteria-card-checklist">
    <p class="eyebrow-mini">Checklist</p>
    <ul>
      <li>{item}</li>
      ...
    </ul>
  </div>
  <div class="criteria-card-evidence">
    <p class="eyebrow-mini">Evidence</p>
    <p>{Evidence}</p>
  </div>
  <div class="criteria-card-question">
    <p class="eyebrow-mini">Dimension Question</p>
    <p>{DimensionQuestion}</p>
  </div>
  <div class="criteria-card-capability">
    <span class="chip">{DataManagementCapability}</span>
  </div>
</article>
```

New CSS needed in `ia-page.css`:
- `.criteria-card` — surface card (same base as `.criteria-panel`), padding, border, radius, shadow
- `.criteria-card-header` — flex row, space-between, align-center
- `.criteria-id` — small monospace-style label
- `.level-badge` — pill badge; five modifier classes (`--1` through `--5`) use distinct `--color-*` token combinations for background/text to visually distinguish levels
- `.criteria-card-dimension` — bold dimension label
- `.criteria-card-desc`, `.criteria-card-checklist`, `.criteria-card-evidence`, `.criteria-card-question`, `.criteria-card-capability` — sub-section spacing

Empty state:

```html
<div class="criteria-empty-state">
  <p>No criteria match the selected filters. Try adjusting the dimension or level.</p>
</div>
```

New CSS: `.criteria-empty-state` — centered text, muted color, padding.

### 6. Embedded Data Structure

```javascript
var IA_CRITERIA = [
  {
    id: 'IA-1-1',
    level: 1,
    dimension: 'Information Quality',
    description: '...',
    checklist: ['...', '...'],
    evidence: '...',
    dimensionQuestion: '...',
    dataManagementCapability: '...'
  },
  // ... all criteria
];
```

The array is defined in the inline `<script>` block before the filter/render IIFE. All 12 dimensions × 5 levels = up to 60 entries (actual count depends on the spreadsheet; some dimension/level combinations may not exist).

### 7. Filter and Render Logic (Inline Script)

```javascript
(function () {
  'use strict';

  var dimSelect   = document.getElementById('filter-dimension');
  var lvlSelect   = document.getElementById('filter-level');
  var resultsEl   = document.getElementById('criteria-results');
  var statusEl    = document.getElementById('criteria-status');

  var LEVEL_LABELS = {
    1: 'Initial', 2: 'Developing', 3: 'Definition', 4: 'Managed', 5: 'Optimizing'
  };

  function getFiltered() {
    var dim = dimSelect.value;
    var lvl = lvlSelect.value ? parseInt(lvlSelect.value, 10) : null;
    return IA_CRITERIA.filter(function (c) {
      var dimMatch = !dim || c.dimension === dim;
      var lvlMatch = !lvl  || c.level === lvl;
      return dimMatch && lvlMatch;
    });
  }

  function renderCard(c) {
    // Build card HTML string, return it
  }

  function render() {
    if (!IA_CRITERIA || !IA_CRITERIA.length) {
      resultsEl.innerHTML = '<div class="criteria-empty-state"><p>Criteria data is not available.</p></div>';
      statusEl.textContent = '';
      return;
    }
    var filtered = getFiltered();
    if (!filtered.length) {
      resultsEl.innerHTML = '<div class="criteria-empty-state"><p>No criteria match the selected filters. Try adjusting the dimension or level.</p></div>';
      statusEl.textContent = 'No criteria match the selected filters.';
      return;
    }
    resultsEl.innerHTML = filtered.map(renderCard).join('');
    statusEl.textContent = 'Showing ' + filtered.length + ' ' + (filtered.length === 1 ? 'criterion' : 'criteria') + '.';
  }

  dimSelect.addEventListener('change', render);
  lvlSelect.addEventListener('change', render);

  render(); // initial render
}());
```

The `renderCard` function builds an HTML string using string concatenation (ES5-compatible, no template literals). It escapes user-visible text using a simple `escapeHtml` helper to prevent XSS from data values.

### 8. Download Panel

Uses the existing `.download-panel` / `.download-item` / `.download-link` pattern from `ia-page.css`. The button carries `data-download="./assets/downloads/Information-Architecture-Criteria-1.xlsx"` and `data-filename="Information-Architecture-Criteria-1.xlsx"`, which `app.js`'s download handler picks up automatically.

### 9. Next-Steps Section

Uses `.next-grid` and `.next-card` from `ia-page.css` with links to `information-architecture.html` and `ia-data-crosswalks.html`. Mirrors the pattern in `ia-data-crosswalks.html`.

---

## Data Models

### Criterion Object

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique criteria identifier (e.g., `"IA-1-1"`) |
| `level` | number (1–5) | Maturity level number |
| `dimension` | string | One of the 12 Criteria Dimensions |
| `description` | string | Full criteria description text |
| `checklist` | string[] | Array of checklist item strings (may be empty) |
| `evidence` | string | Viewpoint artifacts cited as evidence (may be empty string) |
| `dimensionQuestion` | string | Guiding question for the dimension (may be empty string) |
| `dataManagementCapability` | string | Data management capability area (may be empty string) |

### The 12 Criteria Dimensions

1. Information Quality
2. Information Classification
3. Information Governance
4. Information Lifecycle Management
5. Information Architecture Standards
6. Data Integration and Interoperability
7. Metadata Management
8. Data Security and Privacy
9. Information Access and Sharing
10. Data Analytics and Reporting
11. Information Technology Alignment
12. Continuous Improvement

*(Exact names to be confirmed against the spreadsheet during implementation.)*

### The 5 Maturity Levels

| Number | Label |
|---|---|
| 1 | Initial |
| 2 | Developing |
| 3 | Definition |
| 4 | Managed |
| 5 | Optimizing |

### Filter State

The filter state is held entirely in the two `<select>` elements' `.value` properties. There is no separate state object. The `render()` function reads both values on every call, making the state trivially inspectable and resettable.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This feature is a static HTML page with an embedded data array and a pure filter/render function. The filter logic (`getFiltered`) and the card renderer (`renderCard`) are pure functions with clear input/output behavior, making them well-suited for property-based testing. Infrastructure checks (page shell, CSS classes, nav wiring) are deterministic one-time checks better handled as smoke tests.

### Property 1: Filter correctness — every visible card satisfies the active filters

*For any* combination of dimension filter value (including empty/"All") and level filter value (including empty/"All"), every criterion object returned by `getFiltered()` must satisfy both filter predicates simultaneously: its `dimension` must equal the selected dimension (or the dimension filter is empty), and its `level` must equal the selected level number (or the level filter is empty).

**Validates: Requirements 4.4, 4.5**

### Property 2: Filter completeness — no matching criterion is excluded

*For any* combination of dimension filter and level filter, every criterion in `IA_CRITERIA` that satisfies both predicates must appear in the result of `getFiltered()`. No matching criterion may be silently dropped.

**Validates: Requirements 4.4, 4.5**

### Property 3: Card rendering includes all required fields

*For any* criterion object with all required fields populated, the HTML string produced by `renderCard(criterion)` must contain the criterion's `id`, the level label string corresponding to `criterion.level`, the `dimension` string, and the `description` string.

**Validates: Requirements 5.1**

### Property 4: Checklist items are all rendered

*For any* criterion object whose `checklist` array is non-empty, the HTML string produced by `renderCard(criterion)` must contain exactly as many `<li>` elements as there are items in `criterion.checklist`, and each item's text must appear in the output.

**Validates: Requirements 5.2**

### Property 5: Criteria data completeness — all required fields present

*For any* criterion object in the `IA_CRITERIA` array, all eight required fields (`id`, `level`, `dimension`, `description`, `checklist`, `evidence`, `dimensionQuestion`, `dataManagementCapability`) must be present (not `undefined`) and `level` must be an integer between 1 and 5 inclusive.

**Validates: Requirements 6.2**

### Property 6: aria-live region reflects filter result count

*For any* filter combination applied via `render()`, the text content of the `#criteria-status` element must accurately reflect the number of criteria currently displayed: it must contain the same count as the length of `getFiltered()` for that filter state (or indicate zero/no results when the filtered array is empty).

**Validates: Requirements 8.4**

---

## Error Handling

### Empty or undefined data array

If `IA_CRITERIA` is empty or `undefined` at render time, the `render()` function detects this before calling `getFiltered()` and writes a fallback message to `#criteria-results`. The `aria-live` region is cleared. This prevents a blank section and satisfies Requirement 6.4.

### No results for a filter combination

When `getFiltered()` returns an empty array, `render()` writes the empty-state message to `#criteria-results` and updates the `aria-live` region with "No criteria match the selected filters." This satisfies Requirement 4.6.

### Download failure

The download button delegates entirely to `app.js`'s existing download handler, which already handles fetch errors by showing "Try again" and restoring the button label after a timeout. No additional error handling is needed in the page.

### Missing optional fields on a criterion

The `renderCard` function checks each optional field (`evidence`, `dimensionQuestion`, `dataManagementCapability`) before rendering its sub-section. If a field is an empty string or falsy, that sub-section is omitted from the card HTML. This prevents empty labeled sections from appearing in the UI.

---

## Testing Strategy

This feature is a static HTML page with no build step and no test runner configured in the project. Testing is therefore split into two categories:

### Smoke / Structural Tests (manual or DOM-query-based)

These are one-time checks that verify the page is correctly assembled. They can be run by opening the page in a browser and using DevTools, or by writing simple DOM queries in a test script.

- Page shell: skip link, mobile nav, header, main, footer, deferred `app.js` are all present
- CSS links: `base.css`, `style.css`, `ia-page.css` in correct order
- Nav wiring: `ia-maturity-criteria.html` link present in both desktop and mobile nav dropdowns; `active` class on correct elements
- Hero: `.hero.hero-ia` present with badge, h1, subtitle, and two CTA links
- Overview: all 12 dimension names and all 5 level labels present
- Filter controls: dimension select has 13 options, level select has 6 options; both have associated `<label>` elements
- Download panel: button with correct `data-download` and `data-filename` attributes present
- Next-steps: links to `information-architecture.html` and `ia-data-crosswalks.html` present
- Cross-links: `ia-maturity-criteria.html` link present in `information-architecture.html` and `ia-data-crosswalks.html`
- Accessibility: `aria-live` region present; all interactive elements have accessible names; semantic `<article>` elements used for cards

### Property-Based Tests

If a JavaScript test runner is introduced (e.g., by running `npx jest --testPathPattern=maturity` or similar), the following properties should be tested using a property-based testing library such as [fast-check](https://github.com/dubzzz/fast-check) for JavaScript.

Each property test should run a minimum of 100 iterations.

**Property 1 — Filter correctness** (`Feature: maturity-criteria-page, Property 1: every visible card satisfies the active filters`)
Generate random `(dimension, level)` pairs from the actual value sets (including empty string for "All"). Call `getFiltered(dimension, level)` and assert that every returned criterion satisfies both predicates.

**Property 2 — Filter completeness** (`Feature: maturity-criteria-page, Property 2: no matching criterion is excluded`)
For the same random inputs, assert that every criterion in `IA_CRITERIA` that satisfies both predicates appears in the result.

**Property 3 — Card rendering includes all required fields** (`Feature: maturity-criteria-page, Property 3: card rendering includes all required fields`)
Generate random criterion objects with all required fields populated. Call `renderCard(criterion)` and assert the output string contains the id, level label, dimension, and description.

**Property 4 — Checklist items are all rendered** (`Feature: maturity-criteria-page, Property 4: checklist items are all rendered`)
Generate random criterion objects with non-empty checklist arrays. Call `renderCard(criterion)` and assert the output contains exactly the right number of `<li>` elements with matching text.

**Property 5 — Criteria data completeness** (`Feature: maturity-criteria-page, Property 5: all required fields present in data`)
Iterate over every entry in `IA_CRITERIA` and assert all eight required fields are present and valid.

**Property 6 — aria-live region reflects filter result count** (`Feature: maturity-criteria-page, Property 6: aria-live region reflects filter result count`)
For random filter combinations, call `render()` and assert the `#criteria-status` text content contains the correct count matching `getFiltered().length`.

### Unit / Example Tests

- Empty data array: set `IA_CRITERIA = []`, call `render()`, assert fallback message is shown and no cards are rendered
- Empty data undefined: set `IA_CRITERIA = undefined`, call `render()`, assert fallback message is shown
- Filter combination with zero results: select a dimension/level combination known to produce no results, assert empty-state message is shown
- `renderCard` with all optional fields empty: assert no empty labeled sub-sections appear in output
