# Design Document

## Feature: MITA Maturity Criteria Page (`maturity-criteria.html`)

---

## Overview

This design covers the replacement of the `maturity-criteria.html` placeholder with a fully functional, interactive criteria browser for all three MITA architectures: Business, Information, and Technical.

The page is a static HTML file that follows every existing site convention defined in the [tech](.kiro/steering/tech.md) and [structure](.kiro/steering/structure.md) steering files: vanilla HTML/CSS/JS, `ia-page.css` for component styles, `app.js` for shared interactions (dark mode, mobile nav, downloads, scroll reveal), and full WCAG 2.1 AA accessibility. No build step, no framework, no external data fetches.

The maturity level labels (Initial → Optimizing) and the three architecture domain definitions are canonical in the [product steering file](.kiro/steering/product.md). This design document references them rather than re-defining them.

The primary interaction model is a three-tab architecture switcher layered on top of the per-tab filter/render pattern already established by `ia-maturity-criteria.html`. The page also provides a prominent link to Companion Guide Step 4 (`companion-guide.html#document-ssa`) and cross-links back to the relevant sections of `architectures.html`.

### Key Design Goals

1. **Reuse over reinvention** — all component CSS (`.criteria-card`, `.level-badge`, `.download-panel`, `.chip`, `.stat-tile`, etc.) comes from the existing `ia-page.css`. New CSS rules are added only where no existing class is suitable.
2. **Self-contained** — all criteria data is embedded as an ES5 JS object literal in an inline `<script>` block. No fetch, no server.
3. **Isolated per-panel state** — each architecture panel owns its own filter selects and `aria-live` status region. Switching tabs resets the incoming panel's filters to "All" and re-renders its full criteria set.
4. **Accessible tab pattern** — the architecture tabs use the ARIA `tablist`/`tab`/`tabpanel` pattern with `aria-selected`, `aria-controls`, and `aria-labelledby`. Keyboard navigation (arrow keys, Enter, Space) is handled in the inline script, not in `app.js`, to keep `app.js` unchanged.

---

## Architecture

### Component Hierarchy

```
maturity-criteria.html
├── <head>          base.css → style.css → ia-page.css
├── Site shell      (skip link, mobile nav, header, footer) — copied from existing pages
└── <main id="main">
    ├── Hero section
    ├── Companion Guide callout banner
    ├── Overview section (capability areas + level labels per architecture)
    ├── #browser section
    │   ├── Architecture tab bar  [role="tablist"]
    │   │   ├── tab: Business Architecture   [role="tab"]
    │   │   ├── tab: Information Architecture [role="tab"]
    │   │   └── tab: Technical Architecture  [role="tab"]
    │   └── Architecture panels
    │       ├── #panel-business   [role="tabpanel"]
    │       │   ├── Architecture cross-link (→ architectures.html#business-ref)
    │       │   ├── Filter controls (capabilityArea select + level select)
    │       │   ├── aria-live status region
    │       │   └── Criteria results grid
    │       ├── #panel-information [role="tabpanel"]
    │       │   └── (same structure)
    │       └── #panel-technical   [role="tabpanel"]
    │           └── (same structure)
    ├── Download panel
    └── Related pages / next-grid
```

### Interaction Flow

```
Page load
  → Business tab active (aria-selected=true)
  → #panel-business visible, others hidden (display:none)
  → render() called for business panel with no filters

User clicks "Information Architecture" tab
  → tab aria-selected updated
  → #panel-business hidden, #panel-information shown
  → information panel filters reset to "" (All)
  → render() called for information panel

User changes Capability Area filter in information panel
  → render() called for information panel only
  → aria-live status updated: "Showing N criteria."

User changes Maturity Level filter
  → render() called for information panel only
  → aria-live status updated
```

### Relationship to `app.js`

`app.js` is loaded deferred and handles: dark mode, mobile nav, header scroll, scroll reveal (`.reveal` → `.visible`), file downloads (`data-download`), and smooth scroll. **None of these are modified.**

The architecture tab switching and per-panel filter logic live entirely in the page's own inline `<script>` block (after `app.js`). This avoids any coupling to `app.js`'s role-tab pattern, which uses `data-role` attributes and `role-` prefixed IDs — a different naming convention than what this page needs.

---

## Components and Interfaces

### 1. Architecture Tab Bar

**HTML structure:**
```html
<div class="arch-tabs" role="tablist" aria-label="Architecture type">
  <button class="arch-tab active"
          role="tab"
          id="tab-business"
          aria-selected="true"
          aria-controls="panel-business">
    Business Architecture
  </button>
  <button class="arch-tab"
          role="tab"
          id="tab-information"
          aria-selected="false"
          aria-controls="panel-information">
    Information Architecture
  </button>
  <button class="arch-tab"
          role="tab"
          id="tab-technical"
          aria-selected="false"
          aria-controls="panel-technical">
    Technical Architecture
  </button>
</div>
```

**CSS classes needed:**
- `.arch-tabs` — flex row, gap, border-bottom line (new rule in `ia-page.css`)
- `.arch-tab` — button reset, padding, font styling, active/hover states (new rule in `ia-page.css`)
- `.arch-tab.active` — primary color underline indicator (new rule in `ia-page.css`)

These are the only new CSS rules required. All card, filter, badge, and download styles already exist.

### 2. Architecture Panel

**HTML structure:**
```html
<div class="arch-panel"
     id="panel-business"
     role="tabpanel"
     aria-labelledby="tab-business">

  <!-- Architecture cross-link -->
  <div class="cta-panel-soft reveal">
    <p class="eyebrow-mini">Business Architecture</p>
    <p>...</p>
    <a href="./architectures.html#business-ref" class="btn btn-outline">
      Open Business Architecture
    </a>
  </div>

  <!-- Filter controls -->
  <div class="criteria-filters">
    <div class="filter-group">
      <label for="filter-area-business">Capability Area</label>
      <select id="filter-area-business" name="filter-area-business">
        <option value="">All Capability Areas</option>
        <!-- options populated by inline script -->
      </select>
    </div>
    <div class="filter-group">
      <label for="filter-level-business">Maturity Level</label>
      <select id="filter-level-business" name="filter-level-business">
        <option value="">All Levels</option>
        <option value="1">Level 1 — Initial</option>
        <option value="2">Level 2 — Developing</option>
        <option value="3">Level 3 — Defined</option>
        <option value="4">Level 4 — Managed</option>
        <option value="5">Level 5 — Optimizing</option>
      </select>
    </div>
  </div>

  <!-- aria-live status -->
  <p id="status-business" aria-live="polite" class="sr-only"></p>

  <!-- Results grid -->
  <div id="results-business"
       class="criteria-results-grid"
       role="list"
       aria-label="Business Architecture maturity criteria">
  </div>
</div>
```

The Information and Technical panels follow the identical structure with `information` / `technical` suffixes on all IDs.

**Hidden panels** use `display: none` (set via the `.arch-panel` default and `.arch-panel.active` override), which removes them from the accessibility tree when inactive — correct behavior for `tabpanel` elements.

### 3. Criteria Card

Reuses the existing `ia-maturity-criteria.html` render pattern verbatim. The `renderCard()` function produces:

```html
<article class="criteria-card" role="listitem">
  <div class="criteria-card-header">
    <span class="level-badge level-badge--{N}">Level N — {Label}</span>
    <span class="criteria-id">{id}</span>
  </div>
  <div class="criteria-card-dimension">{capabilityArea}</div>
  <p class="criteria-card-desc">{description}</p>
  <!-- conditional sections: checklist, evidence, dimensionQuestion -->
</article>
```

The `criteria-id` field for the new page uses a generated ID in the format `{ARCH_PREFIX}-{AREA_ABBREV}-{LEVEL}` (e.g., `BA-MM-3`). Since the `.docx` source cannot be read programmatically, implementers will assign IDs when populating the data array.

### 4. Filter Logic

Each panel has its own `render(arch)` call. The function:
1. Reads the panel's two `<select>` values
2. Filters `MITA_CRITERIA[arch]` by `capabilityArea` and `level`
3. Writes rendered card HTML to the results `<div>`
4. Updates the `aria-live` status paragraph

```javascript
function renderPanel(arch) {
  var areaSelect  = document.getElementById('filter-area-'  + arch);
  var levelSelect = document.getElementById('filter-level-' + arch);
  var resultsEl   = document.getElementById('results-'      + arch);
  var statusEl    = document.getElementById('status-'       + arch);

  var area = areaSelect  ? areaSelect.value  : '';
  var lvl  = levelSelect ? parseInt(levelSelect.value, 10) : null;
  var data = MITA_CRITERIA[arch];

  if (!data || !data.length) {
    resultsEl.innerHTML = '<div class="criteria-empty-state"><p>Criteria data for this architecture is not yet available.</p></div>';
    statusEl.textContent = '';
    return;
  }

  var filtered = data.filter(function (c) {
    var areaMatch  = !area || c.capabilityArea === area;
    var levelMatch = !lvl  || c.level === lvl;
    return areaMatch && levelMatch;
  });

  if (!filtered.length) {
    resultsEl.innerHTML = '<div class="criteria-empty-state"><p>No criteria match the selected filters. Try adjusting the capability area or level.</p></div>';
    statusEl.textContent = 'No criteria match the selected filters.';
    return;
  }

  resultsEl.innerHTML = filtered.map(renderCard).join('');
  statusEl.textContent = 'Showing ' + filtered.length + ' ' + (filtered.length === 1 ? 'criterion' : 'criteria') + '.';
}
```

### 5. Tab Switching Logic

```javascript
function activateTab(arch) {
  // Update tab ARIA state
  ARCH_KEYS.forEach(function (key) {
    var tab   = document.getElementById('tab-'   + key);
    var panel = document.getElementById('panel-' + key);
    var isActive = key === arch;
    if (tab)   { tab.classList.toggle('active', isActive); tab.setAttribute('aria-selected', String(isActive)); }
    if (panel) { panel.classList.toggle('active', isActive); }
  });

  // Reset filters for the newly activated panel
  var areaSelect  = document.getElementById('filter-area-'  + arch);
  var levelSelect = document.getElementById('filter-level-' + arch);
  if (areaSelect)  areaSelect.value  = '';
  if (levelSelect) levelSelect.value = '';

  // Re-render
  renderPanel(arch);
}
```

Keyboard navigation on the tablist handles `ArrowLeft`, `ArrowRight`, `Home`, `End`, `Enter`, and `Space` per the ARIA Authoring Practices Guide roving tabindex pattern.

---

## Data Models

### `MITA_CRITERIA` Object

The inline script defines a single top-level object keyed by architecture type:

```javascript
var MITA_CRITERIA = {
  business: [
    /* Array of Criterion objects for Business Architecture */
  ],
  information: [
    /* Array of Criterion objects for Information Architecture */
    /* NOTE: These are the same entries as IA_CRITERIA in ia-maturity-criteria.html */
    /* Implementers should copy/reference that data here */
  ],
  technical: [
    /* Array of Criterion objects for Technical Architecture */
  ]
};
```

### Criterion Object Schema

Each entry in a criteria array has the following shape:

```javascript
{
  id:             String,   // e.g. "BA-MM-3" — architecture prefix + area abbrev + level
  architecture:   String,   // "business" | "information" | "technical"
  capabilityArea: String,   // e.g. "Member Management"
  level:          Number,   // 1 | 2 | 3 | 4 | 5
  description:    String,   // Full criteria text from the working document
  checklist:      Array,    // Optional: string[] of checklist items (may be empty [])
  evidence:       String,   // Optional: evidence guidance string (may be "")
  dimensionQuestion: String // Optional: guiding question string (may be "")
}
```

**Rationale for keyed object vs. flat array:**
A flat array filtered by `architecture` field would work, but a keyed object makes `MITA_CRITERIA['business']` an O(1) lookup and makes the data structure self-documenting. It also allows each architecture's data to be populated independently as the working document is transcribed.

**Placeholder data for Business and Technical architectures:**
Since the `.docx` source cannot be read programmatically, the initial implementation ships with representative placeholder entries for Business and Technical architectures. The placeholder entries follow the same schema and demonstrate the full range of levels and capability areas. Implementers replace them with real content from the working document.

**Information Architecture data:**
The Information Architecture criteria already exist in `ia-maturity-criteria.html` as `IA_CRITERIA`. The `MITA_CRITERIA.information` array should be populated with the same data, adapted to the new schema (renaming `dimension` → `capabilityArea`, adding `architecture: "information"`).

### Capability Area Lists (Placeholder)

These are the capability area names that will populate the filter `<select>` options. They are derived from the data at runtime — the inline script reads `MITA_CRITERIA[arch]`, extracts unique `capabilityArea` values in insertion order, and populates the select options dynamically.

**Business Architecture** (placeholder areas — implementers replace with actual areas from the working document):
- Member Management
- Provider Management
- Contractor Management
- Operations Management
- Care Management
- Decision Support & Reporting
- Program Integrity
- Financial Management
- Plan Management

**Information Architecture** (from existing `ia-maturity-criteria.html`):
- Information Quality, Information Classification, Information Analysis, Information Exchange, Information Reporting, Information Content, Information Metadata, Information Governance, Information Design, Reference Information, Master Information, Information Storage

**Technical Architecture** (placeholder areas — implementers replace):
- Application Architecture
- Integration Architecture
- Infrastructure Architecture
- Security Architecture
- Data Architecture

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property Reflection

Before writing properties, reviewing the prework for redundancy:

- 3.2 (tab shows panel, hides others) and 3.6 (tab switch resets filters and re-renders) are related but test different behaviors — both are kept.
- 5.4 (filter updates cards) subsumes 5.5 (all filters = all cards) and 5.6 (no match = empty state) as edge cases of the same property — 5.5 and 5.6 are folded into 5.4.
- 6.1 (card shows required fields), 6.2 (badge class matches level), and 6.3 (optional fields rendered when present) are all about the `renderCard` function — they can be combined into one comprehensive card rendering property.
- 7.2 (data schema completeness) and 8.2 (panel contains architecture cross-link) are independent and kept separate.
- 10.3 (aria-live updated on filter change) is independent and kept.

After reflection: 7 properties remain, down from 9 initial candidates.

---

### Property 1: Tab activation shows exactly one panel

*For any* architecture tab selection (business, information, or technical), exactly one architecture panel SHALL be visible (have the `active` class) and the other two panels SHALL be hidden.

**Validates: Requirements 3.2**

---

### Property 2: Tab switch resets filters and renders full criteria set

*For any* architecture tab that is activated, the capability area and maturity level filter selects within that panel SHALL both be reset to their empty ("All") value, and the results grid SHALL contain one card for every criterion in `MITA_CRITERIA[arch]`.

**Validates: Requirements 3.6**

---

### Property 3: Filter combination produces exactly matching cards

*For any* combination of capability area filter value and maturity level filter value applied to any architecture panel, the set of rendered criteria cards SHALL contain exactly those criteria from `MITA_CRITERIA[arch]` whose `capabilityArea` matches the selected area (or all areas if "All" is selected) AND whose `level` matches the selected level (or all levels if "All" is selected). No more, no fewer.

**Validates: Requirements 5.4, 5.5, 5.6**

---

### Property 4: Rendered card contains all required fields

*For any* criterion object in `MITA_CRITERIA`, the HTML produced by `renderCard(criterion)` SHALL contain: the capability area string, a level badge element with class `level-badge--{criterion.level}`, and the description string. Additionally, if `criterion.checklist` is non-empty, the rendered HTML SHALL contain a checklist section; if `criterion.evidence` is non-empty, the rendered HTML SHALL contain an evidence section; if `criterion.dimensionQuestion` is non-empty, the rendered HTML SHALL contain a dimension question section.

**Validates: Requirements 6.1, 6.2, 6.3**

---

### Property 5: Capability area selector options match data

*For any* architecture panel, the set of non-"All" options in the capability area `<select>` SHALL exactly equal the set of unique `capabilityArea` values present in `MITA_CRITERIA[arch]` — no extra options, no missing options.

**Validates: Requirements 5.2**

---

### Property 6: Criterion data objects satisfy the required schema

*For any* criterion object in any of the three `MITA_CRITERIA` arrays, the object SHALL have: `architecture` as a string equal to "business", "information", or "technical"; `capabilityArea` as a non-empty string; `level` as an integer in the range [1, 5]; and `description` as a non-empty string.

**Validates: Requirements 7.2**

---

### Property 7: Filter change updates the aria-live status region

*For any* filter selection event on any architecture panel, the `aria-live` status paragraph for that panel SHALL be updated to a non-empty string that includes the count of matching criteria (or a "no match" message when the count is zero).

**Validates: Requirements 10.3**

---

## Error Handling

### Empty or Missing Data Array

If `MITA_CRITERIA[arch]` is `undefined`, `null`, or an empty array, `renderPanel(arch)` renders a fallback message inside the results grid:

```html
<div class="criteria-empty-state">
  <p>Criteria data for this architecture is not yet available.</p>
</div>
```

The `aria-live` status is cleared to an empty string in this case so screen readers do not announce a stale count.

### Filter Produces No Results

When the filtered array is empty (valid data exists but no criteria match the selected combination), the results grid renders:

```html
<div class="criteria-empty-state">
  <p>No criteria match the selected filters. Try adjusting the capability area or level.</p>
</div>
```

The `aria-live` status is set to `"No criteria match the selected filters."`.

### Missing DOM Elements

All DOM lookups in the inline script are guarded with null checks before use. If an expected element is not found (e.g., a results grid `<div>`), the function returns early without throwing.

### XSS Prevention

All criterion field values are passed through `escapeHtml()` before being inserted into `innerHTML`. This is the same approach used in `ia-maturity-criteria.html`.

---

## Testing Strategy

This feature is a static HTML page with vanilla JS rendering logic. PBT is applicable to the pure rendering and filtering functions (`renderCard`, `renderPanel`, `activateTab`), which are pure or near-pure functions with clear input/output behavior and a large input space (any criterion object, any filter combination, any tab selection).

### Unit Tests (Example-Based)

These cover specific concrete behaviors and integration points:

- **Page structure**: verify skip link, nav active state, hero CTAs, download panel attributes
- **Default state**: on load, Business tab is active, its panel is visible, other panels are hidden
- **Tab keyboard navigation**: ArrowRight from Business tab focuses Information tab; Enter activates it
- **Companion Guide link**: page contains a link to `companion-guide.html#document-ssa`
- **Download button**: has `data-download` and `data-filename` attributes pointing to the correct file
- **Empty state message**: when `MITA_CRITERIA.business` is `[]`, the business panel shows the fallback message

### Property-Based Tests

Use a property-based testing library (e.g., [fast-check](https://github.com/dubzzz/fast-check) for JavaScript) with a minimum of 100 iterations per property.

Each test is tagged with: `Feature: mita-maturity-criteria, Property {N}: {property_text}`

**Property 1 test** — `Feature: mita-maturity-criteria, Property 1: Tab activation shows exactly one panel`
Generate a random tab key from `['business', 'information', 'technical']`. Call `activateTab(key)`. Assert that exactly one panel has the `active` class.

**Property 2 test** — `Feature: mita-maturity-criteria, Property 2: Tab switch resets filters and renders full criteria set`
Pre-set filters to non-empty values. Generate a random tab key. Call `activateTab(key)`. Assert both selects are reset to `""` and the results grid contains `MITA_CRITERIA[key].length` cards.

**Property 3 test** — `Feature: mita-maturity-criteria, Property 3: Filter combination produces exactly matching cards`
Generate a random architecture key, a random capability area value (including `""`), and a random level value (including `""`). Apply filters and call `renderPanel(arch)`. Assert the rendered card count equals the count of criteria satisfying both filter predicates.

**Property 4 test** — `Feature: mita-maturity-criteria, Property 4: Rendered card contains all required fields`
Generate a random criterion object (valid schema). Call `renderCard(criterion)`. Assert the returned HTML string contains the capability area, `level-badge--{N}` class, and description. Assert conditional sections appear iff the corresponding fields are non-empty.

**Property 5 test** — `Feature: mita-maturity-criteria, Property 5: Capability area selector options match data`
For each architecture, read the select options and compare to `[...new Set(MITA_CRITERIA[arch].map(c => c.capabilityArea))]`. Assert exact set equality.

**Property 6 test** — `Feature: mita-maturity-criteria, Property 6: Criterion data objects satisfy the required schema`
Iterate all entries across all three `MITA_CRITERIA` arrays. Assert each has the required fields with correct types and value ranges.

**Property 7 test** — `Feature: mita-maturity-criteria, Property 7: Filter change updates the aria-live status region`
Generate a random filter combination. Apply it and call `renderPanel(arch)`. Assert the status element's `textContent` is non-empty.

### Integration / Smoke Tests

- **Dark mode**: toggle `data-theme="dark"` on `<html>` and verify no hardcoded colors appear (CSS custom property audit)
- **Download handler**: click the download button and verify `app.js` fetch handler fires (requires a running static server)
- **Scroll reveal**: verify `.reveal` elements gain `.visible` class when scrolled into view
- **Mobile nav**: verify mobile nav opens and closes correctly
