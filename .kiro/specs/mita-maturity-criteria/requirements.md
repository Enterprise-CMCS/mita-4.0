# Requirements Document

## Introduction

This feature builds the `maturity-criteria.html` page for the MITA 4.0 website — a unified, interactive browser for the MITA Maturity Criteria covering all three architectures: Business, Information, and Technical. The page replaces the current placeholder ("Content coming soon") and lives under the existing "Maturity Criteria" top-level nav item.

The source content is the **MITA Maturity Criteria working document** (`assets/downloads/MITA Maturity Criteria_working document.docx`), which organizes criteria by architecture type, capability area, and maturity level (1–5). Each criterion entry includes a capability area, maturity level, and descriptive criteria text. The five maturity level labels (Initial through Optimizing) and the three architecture domain definitions are defined in the [product steering file](.kiro/steering/product.md).

The page serves the full range of site personas defined in the product steering file — from Medicaid Directors evaluating SS-A value, to CIOs and CTOs planning capability improvements, to Enterprise Architects modeling the full MITA enterprise.

The page follows all existing site conventions defined in the [tech](.kiro/steering/tech.md) and [structure](.kiro/steering/structure.md) steering files: vanilla HTML, `ia-page.css` for styles (extended as needed), `app.js` for shared interactions, full dark mode via CSS custom properties, and WCAG 2.1 AA accessibility. It mirrors the filter/browse pattern established by `ia-maturity-criteria.html` but adds architecture-level tab switching as the primary navigation layer.

The page must prominently link to the Companion Guide Step 4 ("Document Your State Self-Assessment" at `companion-guide.html#document-ssa`) — the step where maturity criteria are actively used — and back to the relevant architecture sections on `architectures.html`.

---

## Glossary

- **Maturity_Criteria_Page**: The HTML page (`maturity-criteria.html`) that presents MITA maturity criteria for all three architectures.
- **Architecture_Tab**: One of three top-level tab controls — Business, Information, or Technical — that switches the visible criteria set.
- **Architecture_Panel**: The content panel associated with one Architecture_Tab, containing that architecture's filter controls and criteria cards.
- **Capability_Area**: A named grouping of criteria within an architecture (e.g., "Member Management" in Business Architecture, "Information Quality" in Information Architecture).
- **Maturity_Level**: One of five numbered levels (1–5) representing progression: 1–Initial, 2–Developing, 3–Defined, 4–Managed, 5–Optimizing.
- **Criterion**: A single maturity criteria entry belonging to one architecture, one Capability_Area, and one Maturity_Level.
- **Criteria_Card**: The visual component that displays a single Criterion's full detail.
- **Filter_Controls**: The UI controls (capability area selector and maturity level selector) within each Architecture_Panel that narrow the displayed criteria.
- **Companion_Guide_SSA**: The "Document Your State Self-Assessment" step in the Companion Guide, located at `companion-guide.html#document-ssa`.
- **Architecture_Page**: The `architectures.html` page, which contains sections for Business (`#business-ref`), Information (`#information-ref`), and Technical (`#technical-ref`) architecture reference models.
- **Download_Panel**: The section offering the MITA Maturity Criteria working document for download.
- **Site_Nav**: The shared navigation present in every HTML page on the site.
- **app.js**: The single vanilla JavaScript file that handles all site interactions.
- **ia-page.css**: The CSS file used for IA and maturity criteria pages.

---

## Requirements

### Requirement 1: Page Shell and Navigation Integration

**User Story:** As a state agency staff member, I want the Maturity Criteria page to feel like a native part of the MITA 4.0 site, so that I can navigate to it from the existing site structure without confusion.

**Note:** The HTML shell structure, CSS link order, skip link, and nav active state conventions are defined in the [structure steering file](.kiro/steering/structure.md). The acceptance criteria below cover only the maturity-criteria-specific navigation behaviors.

**Acceptance Criteria**

1. WHEN the Maturity_Criteria_Page is active, THE Site_Nav SHALL apply the `active` class to the "Maturity Criteria" nav group and to the `maturity-criteria.html` link in both the desktop nav dropdown and the mobile nav drawer.
2. THE Maturity_Criteria_Page SHALL link `base.css`, `style.css`, and `ia-page.css` in that order in the `<head>`.

---

### Requirement 2: Hero Section

**User Story:** As a visitor, I want a clear hero section at the top of the page, so that I immediately understand what MITA maturity criteria are and how they connect to the SS-A process.

#### Acceptance Criteria

1. THE Maturity_Criteria_Page SHALL render a hero section with a badge label, a primary heading, and a descriptive subtitle explaining what MITA maturity criteria are and how they are used in the State Self-Assessment process.
2. THE hero section SHALL include at least two call-to-action links: one to the criteria browser section (`#browser`) and one to the Companion_Guide_SSA (`companion-guide.html#document-ssa`).
3. THE hero section SHALL use the `.hero` CSS class and a gradient background consistent with the site's IA page hero style.

---

### Requirement 3: Architecture Tabs

**User Story:** As a state agency assessor, I want to switch between Business, Information, and Technical architecture criteria using tabs, so that I can focus on the architecture relevant to my current assessment without scrolling through unrelated criteria.

#### Acceptance Criteria

1. THE Maturity_Criteria_Page SHALL include three Architecture_Tabs labeled "Business Architecture", "Information Architecture", and "Technical Architecture".
2. WHEN an Architecture_Tab is selected, THE Maturity_Criteria_Page SHALL show the corresponding Architecture_Panel and hide the other two panels.
3. WHEN the page loads, THE Maturity_Criteria_Page SHALL display the Business Architecture tab as the default active tab.
4. THE Architecture_Tabs SHALL use `role="tablist"` and `role="tab"` ARIA attributes, with `aria-selected="true"` on the active tab and `aria-selected="false"` on inactive tabs.
5. THE Architecture_Tabs SHALL be keyboard-navigable so that users can switch tabs using arrow keys or the Enter/Space keys.
6. WHEN an Architecture_Tab is activated, THE Maturity_Criteria_Page SHALL reset the Filter_Controls within that panel to their "All" default state and re-render all criteria for that architecture.

---

### Requirement 4: Criteria Overview per Architecture

**User Story:** As a state agency planner, I want a brief overview of the capability areas and maturity levels for each architecture, so that I understand the structure before browsing individual criteria.

**Acceptance Criteria**

1. THE Maturity_Criteria_Page SHALL include an overview section that lists the Capability_Areas for each architecture by name.
2. THE overview section SHALL describe the 5 Maturity_Levels using the standard labels defined in the [product steering file](.kiro/steering/product.md) (1–Initial through 5–Optimizing).
3. THE overview section SHALL use `.reveal` classes on its child elements so that `app.js` scroll reveal animations apply.
4. THE overview section SHALL use existing CSS component classes from `ia-page.css` (such as `.chip`, `.chip-list`, `.stat-tile`, `.stat-stack`) to display capability area names and level labels — no new component classes are required for this section.

---

### Requirement 5: Filter Controls per Architecture Panel

**User Story:** As a state agency assessor, I want to filter criteria within each architecture by capability area and maturity level, so that I can quickly find the criteria relevant to my current assessment focus.

#### Acceptance Criteria

1. EACH Architecture_Panel SHALL contain Filter_Controls with a Capability_Area selector and a Maturity_Level selector.
2. THE Capability_Area selector SHALL list all capability areas for that architecture plus an "All Capability Areas" option.
3. THE Maturity_Level selector SHALL list all 5 levels (1–5) with their labels plus an "All Levels" option.
4. WHEN a user selects a Capability_Area or Maturity_Level within an Architecture_Panel, THE Maturity_Criteria_Page SHALL update the displayed Criteria_Cards for that panel to show only criteria matching the selected filters without a full page reload.
5. WHEN both filters are set to "All", THE Architecture_Panel SHALL display all criteria for that architecture.
6. WHEN no criteria match the active filter combination, THE Architecture_Panel SHALL display a descriptive empty-state message.
7. THE Filter_Controls SHALL be implemented using native `<select>` elements — no third-party libraries.
8. THE Filter_Controls SHALL have visible `<label>` elements and meet WCAG 2.1 AA color contrast requirements.

---

### Requirement 6: Criteria Cards

**User Story:** As a state agency assessor, I want each criterion displayed in a structured card, so that I can read the capability area, maturity level, and criteria description in one place without switching between views.

#### Acceptance Criteria

1. WHEN a Criterion is displayed, THE Criteria_Card SHALL show the Capability_Area name, Maturity_Level label and number, and the criteria description text.
2. THE Criteria_Card SHALL use a Maturity_Level badge that visually distinguishes the five levels using distinct color tokens so users can scan levels at a glance.
3. WHEN a Criterion has additional detail fields (such as checklist items, evidence, or guiding questions) present in the source document, THE Criteria_Card SHALL render those fields in visually distinct sub-sections.
4. THE Criteria_Card SHALL use existing CSS component classes from `ia-page.css` (such as `.criteria-card`, `.level-badge`, `.eyebrow-mini`, `.chip`) — new classes may be added to `ia-page.css` only when no existing class is suitable.
5. THE Criteria_Card SHALL use semantic HTML (`<article>` element) so that screen readers can navigate between criteria.

---

### Requirement 7: Criteria Data Embedded in Page

**User Story:** As a developer, I want the criteria data embedded directly in the HTML page as a JavaScript data structure, so that the page works as a static file with no server-side processing or external data fetches.

#### Acceptance Criteria

1. THE Maturity_Criteria_Page SHALL embed all criteria data as a JavaScript array or object literal within a `<script>` block in the HTML file.
2. THE embedded data SHALL include all fields for each Criterion: architecture type (string: "business", "information", or "technical"), capability area (string), maturity level (number 1–5), and criteria description (string).
3. THE filtering and rendering logic SHALL be implemented as vanilla ES5-compatible JavaScript within the page's inline `<script>` block — no external libraries or frameworks.
4. IF the criteria data array for an architecture is empty or undefined, THEN THE Architecture_Panel SHALL display a fallback message rather than a blank section.

---

### Requirement 8: Companion Guide and Architecture Cross-Links

**User Story:** As a state agency assessor using the maturity criteria, I want prominent links back to the Companion Guide SS-A step and to the relevant architecture sections, so that I can move fluidly between the criteria reference and the process guidance.

#### Acceptance Criteria

1. THE Maturity_Criteria_Page SHALL include a contextual callout or banner that links to the Companion_Guide_SSA (`companion-guide.html#document-ssa`) with a label explaining that maturity criteria are used in Step 4 of the Companion Guide.
2. EACH Architecture_Panel SHALL include a link to the corresponding section on the Architecture_Page: Business Architecture panel links to `architectures.html#business-ref`, Information Architecture panel links to `architectures.html#information-ref`, and Technical Architecture panel links to `architectures.html#technical-ref`.
3. THE cross-link components SHALL use existing card or CTA CSS classes from `ia-page.css` (such as `.cta-panel-soft`, `.next-card`, or `.btn`).

---

### Requirement 9: Download Panel

**User Story:** As a state agency staff member, I want to download the MITA Maturity Criteria working document, so that I can work with the full dataset offline or share it with colleagues.

#### Acceptance Criteria

1. THE Maturity_Criteria_Page SHALL include a Download_Panel for the `MITA Maturity Criteria_working document.docx` file located in `assets/downloads/`.
2. THE download SHALL be triggered via a `<button>` element with `data-download` and `data-filename` attributes, consistent with the existing `app.js` download pattern.
3. THE Download_Panel SHALL use the `.download-panel`, `.download-item`, and `.download-link` CSS classes from `ia-page.css`.
4. WHEN the download button is clicked, THE app.js download handler SHALL fetch the file and trigger a browser download, displaying "Preparing download..." during the fetch and restoring the original button label on completion.
5. IF the download handler fails to trigger due to JavaScript errors or event binding issues, THE button click SHALL complete silently without displaying an error message to the user.

---

### Requirement 11: SS-A Value Communication for Medicaid Directors

**User Story:** As a Medicaid Director, I need to know how investing time and money into a MITA SS-A can provide value to my agency, so that I can make an informed decision about committing resources to the assessment process.

#### Acceptance Criteria

1. THE Maturity_Criteria_Page SHALL include a section or callout that articulates the business value of completing a MITA SS-A, including how maturity criteria drive prioritization, enhanced funding eligibility, and alignment with CMS outcomes.
2. THE value communication content SHALL be visible without scrolling past the hero (either in the hero subtitle, a callout banner, or an introductory section immediately following the hero).
3. THE content SHALL include a link to the Companion_Guide_SSA so directors can follow up with actionable process guidance.

---

### Requirement 12: Enterprise Architecture Orientation

**User Story:** As a Medicaid Enterprise Architect, I need to know how to model my state's enterprise to align business, IT, and data, so that I can use MITA as a framework for coherent enterprise architecture across all three domains.

#### Acceptance Criteria

1. THE Maturity_Criteria_Page SHALL make the three-architecture structure (Business, Information, Technical) visible and navigable so that enterprise architects can see how the domains interrelate.
2. EACH Architecture_Panel SHALL include a cross-link to the corresponding reference model section on `architectures.html` (Business → `#business-ref`, Information → `#information-ref`, Technical → `#technical-ref`) so architects can move from criteria to the reference model for that domain.
3. THE overview section SHALL describe all three architecture domains together, reinforcing that they form an integrated enterprise model rather than independent silos.

---

### Requirement 13: Capability Upgrade Path for SMA Leaders

**User Story:** As an SMA leader, I want to upgrade specific capabilities in my SMA, so that I can target investment and effort toward the capability areas that matter most to my agency's mission.

#### Acceptance Criteria

1. THE Capability_Area filter within each Architecture_Panel SHALL allow users to isolate criteria for a single capability area, displaying only the criteria relevant to that area across all maturity levels.
2. WHEN a single Capability_Area is selected, THE Architecture_Panel SHALL display criteria for all five levels for that area, giving leaders a full view of the progression path for that capability.
3. THE Criteria_Card for each level SHALL include sufficient descriptive text so that a leader can understand what "good" looks like at each level for the selected capability area without needing additional reference materials.

---

### Requirement 14: Target Maturity Navigation for State Medicaid, CIO, and CTO Roles

**User Story:** As a state Medicaid person, I need to know how to get my area of Medicaid to a certain maturity level (1 to 5), so that I can plan the work required to reach my target state. As a CIO, I need to know how to get my data capabilities to a certain maturity level. As a CTO, I need to know how to get my technical capabilities to a certain maturity level.

#### Acceptance Criteria

1. THE Maturity_Level filter within each Architecture_Panel SHALL allow users to display only the criteria for a specific target level (1–5), so that they can see exactly what is required to achieve or demonstrate that level.
2. WHEN both a Capability_Area and a Maturity_Level are selected simultaneously, THE Architecture_Panel SHALL display only the single criterion (or criteria) matching both, giving the user a focused, actionable target.
3. THE Maturity_Level badge on each Criteria_Card SHALL visually distinguish the five levels so that users scanning for a specific level can identify it at a glance.
4. THE page SHALL default to showing the Business Architecture tab on load regardless of any previous session state, ensuring that a state Medicaid person arriving at the page sees business capability criteria first; the Information Architecture tab serves CIO-oriented data capability needs; the Technical Architecture tab serves CTO-oriented technical capability needs.
5. THE hero section or introductory content SHALL include language that explicitly acknowledges all three audience roles (business, information/data, technical) so each visitor understands which tab is most relevant to their responsibilities.

---

### Requirement 10: Accessibility and Dark Mode

**User Story:** As a user with accessibility needs or a preference for dark mode, I want the Maturity Criteria page to be fully accessible and theme-aware, so that I can use it comfortably regardless of my settings or assistive technology.

**Note:** The accessibility baseline (WCAG 2.1 AA, 44px touch targets, skip link, ARIA labels, `prefers-reduced-motion`, dark mode via CSS tokens) is defined in the [tech steering file](.kiro/steering/tech.md) and applies to this page as it does to all pages. The acceptance criteria below cover only the maturity-criteria-specific accessibility behaviors beyond that baseline.

**Acceptance Criteria**

1. THE Architecture_Tabs SHALL have `aria-controls` attributes pointing to their corresponding Architecture_Panel `id` values, and each Architecture_Panel SHALL have `role="tabpanel"` and `aria-labelledby` pointing to its tab.
2. WHEN the Filter_Controls update the displayed criteria, THE Maturity_Criteria_Page SHALL update an `aria-live` region so that screen reader users are informed of the result count change.
3. ALL interactive elements (tab buttons, filter controls, download button) SHALL have a minimum touch target size of 44×44 CSS pixels.

