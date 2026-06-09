# MITA 4.0 Static Site

This repository contains the static MITA 4.0 website published with GitLab Pages.

## GitLab Pages

The site lives in `public/`. The `.gitlab-ci.yml` pipeline publishes that folder from the default branch using the `pages` job.

After commits land on `main`, GitLab Pages should serve the site from the project's Pages URL.

## Run Locally

From the repository root:

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory public
```

Then open:

```text
http://127.0.0.1:8000/
```

The site is plain HTML, CSS, and JavaScript. No build step is required.
