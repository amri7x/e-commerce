# Repository Guidelines

## Project Structure & Module Organization

This is a React 19 single-page application built with Vite and TypeScript.

- `src/main.tsx` bootstraps React and imports global styles.
- `src/App.tsx` is the root application component.
- `src/index.css` contains global CSS.
- `public/` (when added) is for static assets served unchanged; import component-specific assets from `src/`.
- Root configuration includes `vite.config.ts`, `tsconfig*.json`, and `eslint.config.js`.
- Build output is generated in `dist/`; do not edit or commit it.

Keep application code under `src/`. As the app grows, group related UI, hooks, utilities, and styles by feature (for example, `src/features/cart/CartPanel.tsx`).

## Build, Test, and Development Commands

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the Vite development server with hot module replacement.
- `npm run build` type-checks with TypeScript and writes a production build to `dist/`.
- `npm run lint` runs ESLint across the repository.
- `npm run preview` serves the production build locally after `npm run build`.

Run `npm run lint` and `npm run build` before opening a pull request.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow the existing style: two-space indentation, single quotes, no semicolons, and trailing commas in multiline expressions. Use PascalCase for components and their files (`ProductCard.tsx`), camelCase for functions, variables, and hooks (`useCart`), and descriptive lowercase names for CSS classes.

ESLint enforces recommended JavaScript/TypeScript rules plus React Hooks and React Refresh rules. Address lint warnings rather than suppressing them unless a documented exception is necessary.

## Testing Guidelines

No automated test framework is configured. For changes, at minimum run linting and a production build, then verify the affected flow in `npm run dev`. If tests are introduced, place them beside the feature or in a matching `src/**/__tests__/` directory and use names such as `ProductCard.test.tsx`.

## Commit & Pull Request Guidelines

The repository currently has only an initial commit, so no established commit convention exists. Use concise imperative subjects, such as `Add product card layout` or `Fix cart total rounding`. Keep commits focused.

Pull requests should explain the user-visible change, note validation performed, link any relevant issue, and include screenshots or a short recording for UI changes. Call out new environment variables, dependencies, or follow-up work explicitly.

# MORA — Codex Development Rules

## Project Context
- Before starting, read docs/MORA_PROJECT_ROADMAP.md.
- Follow the latest verified project progress.
- Do not assume planned features are completed.
- Prioritize frontend development with React, TypeScript,
  React Router, Tailwind CSS, and Zod.

## Learning Protocol
- The developer is learning to code independently.
- Act as a mentor, not only a code generator.
- Explain syntax, parameters, return types, and execution flow.
- Prefer hints before complete solutions when learning.
- Explain why a solution was selected.
- Provide small independent coding exercises when useful.

## Development Rules
- Inspect existing code before making changes.
- Preserve existing functionality.
- Follow the current repository architecture.
- Do not modify unrelated files.
- Do not commit, push, or merge without approval.

## Verification
- Run relevant tests, lint, and build when available.
- Report actual results, including failures.
- Never claim a feature is complete without evidence.

## Roadmap Updates
- Update docs/MORA_PROJECT_ROADMAP.md after meaningful progress.
- Record the date, completed work, files changed, and next task.
- Record important syntax and concepts learned.
- Distinguish completed, ongoing, and planned work.
- Never invent test results or completed features.
