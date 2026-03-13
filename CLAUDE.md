# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

No build step is required. Serve the repo root as a static site:

```bash
python3 -m http.server 8000
```

Then visit:
- `http://localhost:8000/` — main portfolio
- `http://localhost:8000/thefitprint/` — FitPrint subsite

## Architecture

This is a **static HTML/CSS portfolio site** with no framework, package manager, or build pipeline for the main site.

### CSS layering
Three CSS files are loaded in order on the main page:
1. `fanta.css` — base design system (CSS variables, typography, resets, component primitives). Defines all `--color-*`, `--background-*`, `--border-*`, and `--border-radius-*` custom properties used across the project.
2. `styles.css` — page-specific layout (header, sections, project cards, responsive grid).
3. `hover.css` — single-purpose: toggles the Arabic greeting in `<h1>` between `.original-text` and `.hover-text` on hover.

### Subsite: `thefitprint/`
A pre-built React (Vite) app stored as compiled static assets. **There is no source code for this in the repo** — only the build output (`thefitprint/index.html` + `thefitprint/assets/`). Do not modify the bundled JS/CSS files directly.

### Routing (`_redirects`)
Netlify-style redirect rules: root serves `index.html` (200), and all `/thefitprint/*` paths serve `thefitprint/index.html` (200) to support client-side routing in the React app.

## Coding Conventions
- 2-space indentation in HTML, CSS, and inline JS
- `kebab-case` CSS classes; `camelCase` JS variables and verb-based function names
- Headings/buttons use the `"Grenze"` serif font; body text uses `"Eczar"` — both loaded via Google Fonts in `fanta.css`
- New project cards follow the existing `.project-card` pattern in `index.html`

## Reviewing Changes
Before committing, exclude the compiled subsite assets from diffs:

```bash
git diff -- . ':!thefitprint/assets/*'
```
