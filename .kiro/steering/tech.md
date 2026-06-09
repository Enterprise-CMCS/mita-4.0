# Tech Stack

## Overview

Vanilla static site — no build system, no framework, no package manager. All files are plain HTML, CSS, and JavaScript served directly from the root.

## Languages & Files

- **HTML** — semantic, multi-page site (one `.html` file per page)
- **CSS** — split across multiple stylesheets (see below)
- **JavaScript** — single `app.js` file, vanilla ES5-compatible IIFE, no dependencies

## Stylesheets

| File | Purpose |
|---|---|
| `base.css` | Design tokens (CSS custom properties), reset, global typography, dark mode |
| `style.css` | Shared layout components: header, footer, nav, hero, buttons, containers |
| `ia-page.css` | Styles specific to Information Architecture pages |
| `sitemap-pages.css` | Styles for sitemap/architecture section pages |
| `process-page.css` | Styles for the implementation walkthrough page |

Each HTML page links `base.css` + `style.css` + one page-specific stylesheet.

## Fonts

Loaded from Fontshare CDN:
- **Cabinet Grotesk** — display/headings (`var(--font-display)`)
- **Satoshi** — body text (`var(--font-body)`)

```html
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@300,400,500,600,700&display=swap" rel="stylesheet">
```

## JavaScript (`app.js`)

Wrapped in an IIFE with `'use strict'`. Handles:
- Dark/light mode toggle (respects `prefers-color-scheme`)
- Mobile navigation (open/close/escape key)
- Header scroll state
- Role tabs and path selector tabs (ARIA-compliant)
- Scroll reveal animations (`.reveal` → `.visible`)
- File downloads via `data-download` / `data-filename` attributes
- Smooth scroll for anchor links

## Design Tokens

All tokens are CSS custom properties on `:root` in `base.css`:
- `--text-*` — fluid type scale using `clamp()`
- `--space-*` — 4px base spacing scale
- `--radius-*`, `--shadow-*`, `--transition-interactive`
- `--color-*` — full light and dark theme palettes
- `--content-narrow/default/wide/full` — max-width breakpoints

## Dark Mode

Implemented via `[data-theme="dark"]` attribute on `<html>`. Falls back to `prefers-color-scheme` media query. Toggle button uses `data-theme-toggle` attribute.

## Accessibility

- Skip link (`<a href="#main" class="skip-link">`)
- ARIA labels on nav, buttons, and interactive elements
- `aria-selected` on tab components
- `focus-visible` outline styles
- `prefers-reduced-motion` support in `base.css`
- Minimum 44px touch targets on interactive elements

## No Build Commands
 
There is no build, compile, or test step. Open any `.html` file directly in a browser or serve the root directory with any static file server, e.g.:

```bash
npx serve .
# or
python -m http.server
```
