# Cursor-style Portfolio (React)

Portfolio for Christoffer Svensson with a Cursor-inspired interface.

## Stack
- Vite
- React
- TypeScript
- Tailwind CSS
- react-router-dom
- lucide-react

## Run locally
```bash
npm install
npm run dev
```

## Run with Docker
Development (hot reload):
```bash
docker compose up --build dev
```
Open [http://localhost:5173](http://localhost:5173)

Production build (nginx):
```bash
docker compose --profile prod up --build prod
```
Open [http://localhost:8080](http://localhost:8080)

Shortcut scripts:
```bash
npm run docker:dev
npm run docker:prod
```

## Build
```bash
npm run build
npm run preview
```

## Where to edit content
- Main content/data: `src/data/portfolio.ts`
- Important architectural decisions: `DECISIONS.md`

## Replace placeholder projects
In `src/data/portfolio.ts`, update the `projects` array with your real projects:
- set a unique `slug`
- update title/period/summary
- describe challenge/solution
- add links when available

## UI structure
- Cursor-like top bar, activity bar, explorer, tabs, editor pane, right chat panel, and status bar.
- Command palette is available with `Ctrl+P` / `Cmd+P`.
