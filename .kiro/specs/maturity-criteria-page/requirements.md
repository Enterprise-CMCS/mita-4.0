# Requirements Document

## Introduction

This feature adds an IA Maturity Criteria page to the MITA 4.0 website's Information Architecture section. The page presents the structured maturity criteria from the Information Architecture spreadsheet in a user-friendly, interactive format — replacing the need to download and navigate a spreadsheet. The page lives alongside `information-architecture.html` and `ia-data-crosswalks.html` as a third IA sub-page under the Architectures nav group.

The spreadsheet organizes IA maturity criteria across 12 Criteria Dimensions and 5 Maturity Levels (1–5: Initial, Developing, Definition, Managed, Optimizing). Each criterion entry includes a Criteria ID, Maturity Level, Criteria Description, Criteria Checklist (bullet points), Evidence (Viewpoint artifacts), Criteria Dimension Question, and Data Management Capability.

The page must follow all existing site conventions: vanilla HTML/CSS/JS, `ia-page.css` for styles, `app.js` for interactions, full dark mode support, and ARIA-compliant accessibility.

---

## Glossary

- **IA_Maturity_Criteria_Page**: The new HTML page (`ia-maturity-criteria.html`) added to the Information Architecture section.
- **Criteria_Dimension**: One of the 12 thematic groupings of maturity criteria (e.g., Information Quality, Information Classification, Information Governance).
- **Maturity_Level**: One of five numbered levels (1–5) representing progression from Initial to Optimizing.
- **Criterion**: A single row from the spreadsheet, identified by a Criteria ID, belonging to one Criteria Dimension and one Maturity Level.
- **Criteria_Checklist**: The bullet-point list of observable behaviors or actions associated with a Criterion.
- **Evidence**: The Viewpoint artifacts cited as evidence for a Criterion.
- **Dimension_Question**: The guiding question associated with a Criteria Dimension.
- **Data_Management_Capability**: The data management capability area linked to a Criterion.
- **Filter_Controls**: The UI controls (dimension selector and maturity level selector) that narrow the displayed criteria.
- **Criteria_Card**: The visual component that displays a single Criterion's full detail.
- **Site_Nav**: The shared navigation present in every HTML page on the site.
- **app.js**: The single vanilla JavaScript file that handles all site interactions.
- **ia-page.css**: The CSS file scoped to Information Architecture pages.

---

## Requirements

### Requirement 1: Page Shell and Navigation Integration

**User Story:** As a state agency staff member, I want the IA Maturity Criteria page to feel like a native part of the MITA 4.0 site, so that I can navigate to it from the existing site structure without confusion.

#### Acceptance Criteria

1. THE IA_Maturity_Criteria_Page SHALL use the same HTML shell structure as existing pages: skip link, mobile nav drawer, site header with logo and nav, `<main id="main">`, site footer, and deferred `app.js` script.
2. THE IA_Maturity_Criteria_Page SHALL link `base.css`, `style.css`, and `ia-page.css` in that order in the `<head>`.
3. THE Site_Nav SHALL include a link to `ia-maturity-criteria.html` as a child item under the Architectures nav group in both the desktop nav dropdown and the mobile nav drawer.
4. WHEN the IA_Maturity_Criteria_Page is active, THE Site_Nav SHALL apply the `active` class to the Architectures nav group and to the `ia-maturity-criteria.html` link.
5. THE IA_Maturity_Criteria_Page SHALL include a skip link (`<a href="#main" class="skip-link">Skip to content</a>`) as the first element in `<body>`.

---

### Requirement 2: Hero Section

**User Story:** As a visitor, I want a clear hero section at the top of the page, so that I immediately understand the page's purpose and can navigate to key sections.

#### Acceptance Criteria

1. THE IA_Maturity_Criteria_Page SHALL render a hero section using the `.hero` and `.hero-ia` CSS classes consistent with other IA pages.
2. THE hero section SHALL include a badge label, a primary heading, a descriptive subtitle, and at least two call-to-action links (one to the criteria browser section, one back to the Information Architecture overview page).
3. THE hero section SHALL use the existing gradient background defined in `ia-page.css` for `.hero-ia`.

---

### Requirement 3: Criteria Overview Section

**User Story:** As a state agency planner, I want a brief overview of the 12 Criteria Dimensions and 5 Maturity Levels, so that I understand the structure before browsing individual criteria.

#### Acceptance Criteria

1. THE IA_Maturity_Criteria_Page SHALL include an overview section that lists all 12 Criteria Dimensions by name.
2. THE overview section SHALL describe the 5 Maturity Levels (1–Initial, 2–Developing, 3–Definition, 4–Managed, 5–Optimizing) with a brief label for each.
3. THE overview section SHALL use `.reveal` classes on its child elements so that `app.js` scroll reveal animations apply.
4. THE overview section SHALL use existing CSS component classes from `ia-page.css` (such as `.chip`, `.chip-list`, `.criteria-pill`, or `.stat-tile`) to display dimension names and level labels — no new component classes are required for this section.

---

### Requirement 4: Interactive Criteria Browser

**User Story:** As a state agency assessor, I want to filter and browse maturity criteria by Criteria Dimension and Maturity Level, so that I can quickly find the criteria relevant to my current assessment focus.

#### Acceptance Criteria

1. THE IA_Maturity_Criteria_Page SHALL include a criteria browser section containing Filter_Controls and a criteria results area.
2. THE Filter_Controls SHALL include a Criteria Dimension selector that lists all 12 Criteria Dimensions plus an "All Dimensions" option.
3. THE Filter_Controls SHALL include a Maturity Level selector that lists all 5 levels (1–5) plus an "All Levels" option.
4. WHEN a user selects a Criteria Dimension or Maturity Level, THE IA_Maturity_Criteria_Page SHALL update the displayed Criteria_Cards to show only criteria matching the selected filters without a full page reload.
5. WHEN both filters are set to "All", THE IA_Maturity_Criteria_Page SHALL display all criteria.
6. WHEN no criteria match the active filter combination, THE IA_Maturity_Criteria_Page SHALL display a descriptive empty-state message.
7. THE Filter_Controls SHALL be implemented using native `<select>` elements or `<button>` tab controls consistent with the existing `app.js` tab pattern — no third-party libraries.
8. THE Filter_Controls SHALL have visible labels and meet WCAG 2.1 AA color contrast requirements.

---

### Requirement 5: Criteria Cards

**User Story:** As a state agency assessor, I want each criterion displayed in a structured card, so that I can read the description, checklist, evidence, and dimension question in one place without switching between views.

#### Acceptance Criteria

1. WHEN a Criterion is displayed, THE Criteria_Card SHALL show the Criteria ID, Maturity Level label, Criteria Dimension name, and Criteria Description.
2. WHEN a Criterion has a Criteria_Checklist, THE Criteria_Card SHALL render the checklist items as a bulleted list.
3. WHEN a Criterion has Evidence entries, THE Criteria_Card SHALL display the Evidence (Viewpoint artifacts) in a visually distinct sub-section.
4. WHEN a Criterion has a Dimension_Question, THE Criteria_Card SHALL display the Dimension_Question.
5. WHEN a Criterion has a Data_Management_Capability value, THE Criteria_Card SHALL display it as a labeled metadata item.
6. THE Criteria_Card SHALL use a Maturity Level badge that visually distinguishes the five levels (e.g., using color or a numbered indicator) so users can scan levels at a glance.
7. THE Criteria_Card SHALL use existing CSS component classes from `ia-page.css` (such as `.criteria-panel`, `.criteria-list`, `.eyebrow-mini`, `.chip`) — new classes may be added to `ia-page.css` only when no existing class is suitable.

---

### Requirement 6: Criteria Data Embedded in Page

**User Story:** As a developer, I want the criteria data embedded directly in the HTML page as a JavaScript data structure, so that the page works as a static file with no server-side processing or external data fetches.

#### Acceptance Criteria

1. THE IA_Maturity_Criteria_Page SHALL embed all criteria data as a JavaScript array or object literal within a `<script>` block in the HTML file.
2. THE embedded data SHALL include all fields for each Criterion: Criteria ID, Maturity Level (number), Criteria Dimension, Criteria Description, Criteria Checklist items (as an array), Evidence, Dimension_Question, and Data_Management_Capability.
3. THE filtering and rendering logic SHALL be implemented as vanilla ES5-compatible JavaScript within the page's inline `<script>` block or within `app.js` — no external libraries or frameworks.
4. IF the criteria data array is empty or undefined, THEN THE IA_Maturity_Criteria_Page SHALL display a fallback message in the criteria results area rather than a blank section.

---

### Requirement 7: Downloadable Source Workbook

**User Story:** As a state agency staff member, I want to download the original IA maturity criteria spreadsheet, so that I can work with the full dataset offline or share it with colleagues.

#### Acceptance Criteria

1. THE IA_Maturity_Criteria_Page SHALL include a download panel for the `Information-Architecture-Criteria-1.xlsx` file located in `assets/downloads/`.
2. THE download SHALL be triggered via a `<button>` element with `data-download` and `data-filename` attributes, consistent with the existing `app.js` download pattern.
3. THE download panel SHALL use the `.download-panel`, `.download-item`, and `.download-link` CSS classes from `ia-page.css`.
4. WHEN the download button is clicked, THE app.js download handler SHALL fetch the file and trigger a browser download, displaying "Preparing download..." during the fetch and restoring the original button label on completion.

---

### Requirement 8: Accessibility and Dark Mode

**User Story:** As a user with accessibility needs or a preference for dark mode, I want the IA Maturity Criteria page to be fully accessible and theme-aware, so that I can use it comfortably regardless of my settings.

#### Acceptance Criteria

1. THE IA_Maturity_Criteria_Page SHALL support dark mode by using only `--color-*` CSS custom property tokens from `base.css` — no hardcoded color values in `ia-page.css` or inline styles.
2. THE Filter_Controls SHALL have associated `<label>` elements or `aria-label` attributes so that screen readers announce their purpose.
3. THE Criteria_Card list SHALL use semantic HTML (`<article>` or `<section>` elements) so that screen readers can navigate between criteria.
4. WHEN the Filter_Controls update the displayed criteria, THE IA_Maturity_Criteria_Page SHALL update an `aria-live` region or equivalent so that screen reader users are informed of the result count change.
5. THE IA_Maturity_Criteria_Page SHALL apply `prefers-reduced-motion` behavior inherited from `base.css` — no additional motion overrides are required.
6. ALL interactive elements (filter controls, download button) SHALL have a minimum touch target size of 44×44 CSS pixels.

---

### Requirement 9: Navigation Cross-Links

**User Story:** As a user exploring the Information Architecture section, I want contextual links between the IA sub-pages, so that I can move between the IA overview, data crosswalks, and maturity criteria without returning to the top nav.

#### Acceptance Criteria

1. THE IA_Maturity_Criteria_Page SHALL include a next-steps or related-pages section with links to `information-architecture.html` and `ia-data-crosswalks.html`.
2. THE `information-architecture.html` page SHALL include a link or card referencing `ia-maturity-criteria.html` in its related or next-steps section.
3. THE `ia-data-crosswalks.html` page SHALL include a link or card referencing `ia-maturity-criteria.html` in its related or next-steps section.
4. THE cross-link components SHALL use existing card or CTA CSS classes from `ia-page.css` (such as `.next-card`, `.cta-panel-soft`, or `.next-grid`).
