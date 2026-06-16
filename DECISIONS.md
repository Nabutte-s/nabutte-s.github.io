# Cursor Portfolio Decisions

## Project Goal
- Build a portfolio for Christoffer Svensson that visually resembles the Cursor IDE.
- Keep content in Swedish and structure it as "openable files" in an editor-like interface.

## Confirmed Choices
- Stack: Vite + React + TypeScript + Tailwind CSS.
- Language: Swedish.
- Visual direction: Cursor-inspired dark interface, not a regular webpage layout.
- Data model: one central data file for all editable content.

## Single Source Of Truth
- Edit `src/data/portfolio.ts` for:
  - profile and intro
  - sections (about, education, experience, skills, languages, contact)
  - project list
  - chat prompt suggestions
  - status bar metadata
  - external links (GitHub, LinkedIn)

## Routing + File Mapping
- Routes are explicit in `src/App.tsx`.
- Main routes:
  - `/about`
  - `/education`
  - `/experience`
  - `/skills`
  - `/languages`
  - `/contact`
  - `/projects`
  - `/projects/:slug`
- Sidebar and command palette entries are generated from data and mapped to these routes.

## Cursor-Like UI Composition
- `src/components/layout/TitleBar.tsx`
- `src/components/layout/ActivityBar.tsx`
- `src/components/layout/Sidebar.tsx`
- `src/components/layout/EditorTabs.tsx`
- `src/components/layout/EditorPane.tsx`
- `src/components/layout/StatusBar.tsx`
- `src/components/AIChatPanel.tsx`
- `src/components/CommandPalette.tsx`

## AI Chat Panel Decision
- No backend or LLM integration.
- Chat is a deterministic, canned Q&A panel powered by prompts in `src/data/portfolio.ts`.
- Reason: keeps the portfolio static, fast, and easy to host.

## Project Content Decision
- CV did not include detailed software projects, so placeholders were added.
- Replace placeholders later in `projects` array in `src/data/portfolio.ts`.
- Recommended fields to keep:
  - `slug`
  - `title`
  - `period`
  - `summary`
  - `tech`
  - `challenge`
  - `solution`
  - `links`

## Confirmed External Links
- GitHub: [https://github.com/Nabutte-s](https://github.com/Nabutte-s)
- LinkedIn: [https://www.linkedin.com/in/christoffer-svensson-b09582230/](https://www.linkedin.com/in/christoffer-svensson-b09582230/)

## UI Direction (Updated)
- Match Cursor empty-workspace look: dark background, project file tree, centered Open File / New File empty state.
- Portfolio content lives under `src/cv/` and `src/projects/` in the explorer tree.
- Only CV/project markdown files are openable; config and source files are display-only in the explorer.
- Chat panel is hidden by default and toggled from the activity bar.
- Command palette opens with Ctrl/Cmd+P or the Open File button.

## Docker Decision
- Development: `docker compose up --build dev` uses `Dockerfile.dev` with bind mount and Vite on port `5173`.
- Production: `docker compose --profile prod up --build prod` uses multi-stage `Dockerfile` + nginx on port `8080`.
- Vite is configured with `host: true` and polling watch mode for reliable reload inside Docker on Windows.
- nginx uses SPA fallback (`try_files ... /index.html`) for react-router routes.

## Notes For Other Agents
- Start content edits in `src/data/portfolio.ts` before touching components.
- Preserve route slugs when possible to avoid breaking tabs/bookmarks.
- Keep ASCII text unless there is a strong reason to introduce Unicode.
- If adding new pages, add both:
  1) route in `src/App.tsx`
  2) corresponding file entry from data or derived mapping.
