# Security Policy

## Overview

This repository contains the **MITA 4.0 static website** — plain HTML, CSS, and
JavaScript published with GitLab Pages. There is no server-side code, database,
or user authentication. The published site is read-only static content served
over HTTPS.

## Supported Versions

Only the site currently deployed from the `main` branch is supported. Older
commits and branches do not receive security fixes.

| Version            | Supported |
| ------------------ | --------- |
| `main` (deployed)  | ✅        |
| Any other branch   | ❌        |

## Reporting a Vulnerability

If you discover a security issue — for example, exposed sensitive data, a
cross-site scripting (XSS) vector in the client-side JavaScript, a malicious or
tampered download in `assets/downloads/`, or a misconfigured deployment —
please report it privately rather than opening a public issue.

- **Preferred:** Open a *confidential* issue in the GitLab project, or contact
  the repository maintainers directly.
- Include:
  - A description of the issue and its potential impact.
  - Steps to reproduce (affected URL/page, browser, and actions taken).
  - Any relevant screenshots, console output, or proof-of-concept.

Please do **not** disclose the issue publicly until it has been investigated and
resolved.

### Response Expectations

- We aim to acknowledge a report within **5 business days**.
- We will provide an assessment and remediation plan once the report has been
  triaged.
- We will let you know when a fix has been deployed.

## Scope

In scope:

- Content and code served from this repository (HTML/CSS/JS in `public/` and the
  repository root).
- Downloadable artifacts in `assets/downloads/`.
- The GitLab CI/CD pipeline configuration (`.gitlab-ci.yml`) and Pages
  deployment.

Out of scope:

- The GitLab platform itself (report platform issues to GitLab).
- Denial-of-service testing against the hosted site.
- Issues that require physical access to a maintainer's device or account.

## Security Practices for Contributors

Because this is a static site, the main risks come from the content itself.
When contributing:

- **Do not commit secrets.** No API keys, credentials, tokens, or personal data
  belong in this repository — it is fully public.
- **Sanitize injected content.** Any JavaScript that writes user- or
  URL-derived values into the DOM must avoid `innerHTML` with untrusted input to
  prevent XSS. Prefer `textContent` or properly escaped output.
- **Vet downloadable files.** Only add documents to `assets/downloads/` from
  trusted sources, and confirm they are free of macros or embedded scripts where
  applicable.
- **Use HTTPS links.** Reference external resources over `https://` and pin or
  review any third-party scripts before including them.
- **Keep dependencies minimal.** This project intentionally has no build step
  or package dependencies; avoid introducing them without review.
