# Repository Guidelines

## Project Structure & Module Organization
This repository is a static portfolio site.

- `index.html`: primary portfolio page and small inline JavaScript interactions.
- `styles.css`, `fanta.css`, `hover.css`: global and component-level styling.
- `public/`: static images and icons referenced by the portfolio page.
- `thefitprint/`: deployed build output for the FitPrint subsite (`index.html` + `assets/` bundle).
- `_redirects`: route rewrites for root and `/thefitprint/*` hosting behavior.

There is no separate `src/` or test directory in this repo.

## Build, Test, and Development Commands
- `python3 -m http.server 8000`: run a local static server from repo root.
- Open `http://localhost:8000/` and `http://localhost:8000/thefitprint/` to verify both sites.
- `git status` and `git diff -- . ':!thefitprint/assets/*'`: review changes before commit.

Build pipeline note: this repo stores static artifacts directly; there is no local package-based build command checked in.

## Coding Style & Naming Conventions
- Use 2-space indentation in HTML, CSS, and inline JavaScript.
- Prefer semantic HTML (`header`, `main`, `section`, `footer`) and readable markup.
- Use `kebab-case` for CSS classes (for example, `intro-header`, `project-card`).
- Keep JavaScript minimal and clear: `camelCase` variables, verb-based function names (`playGame`, `resetColor`).
- Keep filenames lowercase and descriptive; use existing patterns in `public/` and root files.

## Testing Guidelines
No automated test framework is currently configured. Run manual checks for every UI change:

- Smoke test `/` and `/thefitprint/`.
- Verify images, external links, and icon fonts load correctly.
- Confirm interactive behavior (for example, the color picker game) and check browser console for errors.
- If `thefitprint/assets/*` changes, ensure filenames match references in `thefitprint/index.html`.

## Commit & Pull Request Guidelines
- Follow concise, imperative commit subjects (examples from history: `Change job title...`, `Revise intro...`, `bugfix: fitprint redirect`).
- Keep commits focused to one logical change.
- PRs should include:
  - short summary of user-visible impact,
  - linked issue/context when applicable,
  - before/after screenshots for UI updates,
  - manual verification steps and tested routes.
