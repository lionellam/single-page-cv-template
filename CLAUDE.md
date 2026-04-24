# CV Template — Claude Guidelines

## What this project is

A clean, minimal, single-page CV website template built with vanilla HTML, CSS, and JavaScript. It is published under the MIT license for anyone to use as a starting point for their own CV site.

## Architecture

| File | Role |
|------|------|
| `content.js` | **Single source of truth** — all CV data lives here. This is the only file end users need to edit. |
| `index.html` | HTML structure + JavaScript render logic. Reads `RESUME_DATA` from `content.js` and builds the DOM. |
| `css/base.css` | Layout, typography, and component styles. |
| `css/theme.css` | CSS custom properties for light and dark themes. |
| `img/` | Certification badge images and institution logos (not included in the template). |
| `files/` | CV PDF (not included in the template). |

## Design principles

- **No build step** — vanilla HTML/CSS/JS only. Runs directly in the browser.
- **Content/presentation separation** — editing `content.js` is sufficient to fully personalise the CV. The HTML and CSS are template infrastructure.
- **Sections are opt-in** — setting a section array to `[]` in `content.js` renders it empty. Sections can also be removed from `index.html` if not needed.
- **Responsive by default** — mobile-first, hamburger nav, back-to-top button on mobile.
- **Dark mode** — implemented via `data-theme="dark"` on `<html>`, toggled by JS, persisted in `localStorage`.

## Workflow

- Make changes locally and preview in a browser before committing
- Keep personal data out of this repo — this is a template, not a personal CV
- When adding new section types, follow the existing pattern: add the data shape to `content.js`, add the render logic to `index.html`, add CSS classes to `base.css`
