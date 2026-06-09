# Design Document: IA Maturity Criteria Page

## Overview

`ia-maturity-criteria.html` is a new static page in the MITA 4.0 website's Information Architecture section. It presents the structured maturity criteria from `Information-Architecture-Criteria-1.xlsx` in an interactive, browser-native format — eliminating the need to download and navigate a spreadsheet.

The page is the third IA sub-page under the Architectures nav group, alongside `information-architecture.html` and `ia-data-crosswalks.html`. It follows all existing site conventions: vanilla HTML, `ia-page.css` for styles, `app.js` for shared interactions, full dark mode via CSS custom properties, and WCAG 2.1 AA accessibility.

---

## Key Design Decisions

**All data embedded in the page.** The site has no server, no build step, and no fetch infrastructure. Embedding the criteria as a JS array literal in a `<script>` block is the only approach consistent with the static-site constraint. The page works offline and loads instantly.

**Filtering via vanilla ES5 JS in an inline script block.** `app.js` handles shared behaviors (dark mode, nav, downloads, scroll reveal). Page-specific filter/render logic belongs in an inline `<script>` block, keeping `app.js` unchanged.

**Native `<select>` elements for filter controls.** With 12 dimensions and 5 levels, button tabs would be visually unwieldy. Native selects are keyboard-accessible and screen-reader-friendly with no additional CSS.

**`aria-live` region for filter result announcements.** A visually hidden `aria-live="polite"` region is updated with the result count on each filter change, satisfying accessibility requirements without a focus change.

---

## Architecture

```
ia-maturity-criteria.html
├── <head>
│   ├── base.css          (tokens, reset, dark mode)
│   ├── style.css         (shared layout, header, footer, nav, buttons)
│   └── ia-page.css       (IA-specific components)
│
├── <body>
│   ├── Skip link
│   ├── Mobile nav drawer
│   ├── <header>
│   ├── <main id="main">
│   │   ├── Hero section           (#hero)
│   │   ├── Overview section       (#overview)
│   │   ├── Criteria browser       (#browser)
│   │   │   ├── Filter controls    (.criteria-filters)
│   │   │   ├── aria-live region   (#criteria-status)
│   │   │   └── Results area       (#criteria-results)
│   │   ├── Download section       (#download)
│   │   └── Next-steps section     (#next)
│   └── <footer>
│
├── <script src="./app.js" defer></script>
└── <script>
    ├── var IA_CRITERIA = [ ... ];
    └── (function() { ... })();
```

---

## Components

### Filter Controls

```html
<div class="criteria-filters">
  <div class="filter-group">
    <label for="filter-dimension">Criteria Dimension</label>
    <select id="filter-dimension">
      <option value="">All Dimensions</option>
      <!-- 12 dimension options -->
    </select>
  </div>
  <div class="filter-group">
    <label for="filter-level">Maturity Level</label>
    <select id="filter-level">
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

### Criteria Card Structure

```html
<article class="criteria-card" role="listitem">
  <div class="criteria-card-header">
    <span class="level-badge level-badge--{1-5}">Level {N} — {Label}</span>
    <span class="criteria-id">{ID}</span>
  </div>
  <div class="criteria-card-dimension">{Dimension}</div>
  <p class="criteria-card-desc">{Description}</p>
  <div class="criteria-card-section">
    <p class="eyebrow-mini">Checklist</p>
    <ul><li>{item}</li></ul>
  </div>
  <div class="criteria-card-section">
    <p class="eyebrow-mini">Evidence</p>
    <p>{Evidence}</p>
  </div>
  <div class="criteria-card-section">
    <p class="eyebrow-mini">Dimension Question</p>
    <p>{DimensionQuestion}</p>
  </div>
  <div class="criteria-card-section">
    <p class="eyebrow-mini">Data Management Capability</p>
    <span class="chip">{DataManagementCapability}</span>
  </div>
</article>
```

---

## Data Model

### Criterion Object

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Unique identifier (e.g., `"IQ-1"`) |
| `level` | number (1–5) | Maturity level number |
| `dimension` | string | One of the 12 Criteria Dimensions |
| `description` | string | Full criteria description text |
| `checklist` | string[] | Checklist items (empty array if none) |
| `evidence` | string | Viewpoint artifacts (empty string if none) |
| `dimensionQuestion` | string | Guiding question for the dimension |
| `dataManagementCapability` | string | Data management capability area |

### The 12 Criteria Dimensions

1. Information Quality
2. Information Classification
3. Information Analysis
4. Information Exchange
5. Information Reporting
6. Information Content
7. Information Metadata
8. Information Governance
9. Information Design
10. Reference Information
11. Master Information
12. Information Storage

### The 5 Maturity Levels

| Number | Label |
| --- | --- |
| 1 | Initial |
| 2 | Developing |
| 3 | Definition |
| 4 | Managed |
| 5 | Optimizing |

---

## New CSS Added to `ia-page.css`

All new rules use `--color-*` and `--space-*` tokens exclusively — no hardcoded values.

- `.criteria-filters` — flex row, wraps on small screens
- `.filter-group` — flex column, label + select stacked, min-width 220px
- `.filter-group select` — styled to match site tokens, min-height 44px
- `.criteria-results-grid` — single column, 2-column at 900px+
- `.criteria-card` — surface card with border, radius, shadow, flex column
- `.criteria-card-header` — flex row, space-between
- `.criteria-id` — small uppercase label
- `.level-badge` — pill badge base
- `.level-badge--1` through `.level-badge--5` — color-coded per level using `color-mix()`
- `.criteria-card-dimension`, `.criteria-card-desc`, `.criteria-card-section` — sub-section layout
- `.criteria-empty-state` — centered muted text for no-results state

---

## Correctness Properties

### Property 1: Filter correctness

For any combination of dimension and level filter values (including empty/"All"), every criterion returned by `getFiltered()` must satisfy both predicates simultaneously.

*Validates: Requirements 4.4, 4.5*

### Property 2: Filter completeness

For any filter combination, every criterion in `IA_CRITERIA` that satisfies both predicates must appear in the result — none silently dropped.

*Validates: Requirements 4.4, 4.5*

### Property 3: Card rendering includes all required fields

For any criterion object with all required fields populated, the HTML string from `renderCard(criterion)` must contain the id, level label, dimension, and description.

*Validates: Requirement 5.1*

### Property 4: Checklist items are all rendered

For any criterion with a non-empty checklist, `renderCard(criterion)` must produce exactly as many `<li>` elements as checklist items, each with matching text.

*Validates: Requirement 5.2*

### Property 5: Criteria data completeness

Every entry in `IA_CRITERIA` must have all eight required fields present (not `undefined`) and `level` must be an integer 1–5.

*Validates: Requirement 6.2*

### Property 6: aria-live region reflects filter result count

After any `render()` call, the `#criteria-status` text content must contain the same count as `getFiltered().length` for that filter state.

*Validates: Requirement 8.4*
