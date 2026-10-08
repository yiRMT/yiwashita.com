# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic portfolio + blog (`yiwashita.com`, v2). Next.js 16 (App Router) + React 19 + TypeScript, internationalized with **`next-international`**, styled mainly with **SCSS** (`sass`) with Tailwind CSS v3 also wired up. Deployed on Vercel. The package manager in use is **pnpm** (`pnpm-lock.yaml`, version pinned via `packageManager`; settings such as `overrides`, `allowBuilds`, and `minimumReleaseAge` live in `pnpm-workspace.yaml`).

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Dev server with Turbopack at http://localhost:3000
pnpm build       # Production build
pnpm start       # Serve the production build
pnpm lint        # eslint . (eslint-config-next)
pnpm prettier --write "{src,pages,__tests__}/**/*.{ts,tsx,js,jsx}"   # Format (same glob CI uses)
```

No test suite exists. Requires Node >= 22.13 (ESLint 10).

### CI (`.github/workflows/ci.yml`)

Runs **on pull requests to `main`** (not on push):

- **prettier** job: runs Prettier with `--write` over `{src,pages,__tests__}/**/*.{ts,tsx,js,jsx}` and auto-commits the formatting changes back to the PR branch (`git-auto-commit-action`). So formatting is fixed for you on PRs, but match Prettier style locally to avoid noise.
- **eslint** job: runs ESLint via `reviewdog/action-eslint`, reporting as `github-pr-review` comments.

### Environment variables (`.env.local`, not committed)

- `NEXT_PUBLIC_GA_ID` — Google Analytics (`src/app/[locale]/layout.tsx`).

## Architecture

### Internationalization (`next-international`) — the backbone

Every page lives under `src/app/[locale]/`, where `locale` is `en` (default) or `ja`.

- `src/proxy.ts` — a hand-written locale proxy (not `createI18nMiddleware`), exported as `proxy` (Next.js 16's middleware/proxy convention). Routing is URL-driven only (no Accept-Language detection): prefix-less paths are rewritten to `/en/...`, `/ja/...` is served as-is, and `/en/...` redirects to the prefix-less URL. It sets the `X-Next-Locale` header that next-international's server helpers read. The matcher excludes `api`, `static`, `_next`, and any path containing a dot, so the `[locale]` param is **not** guaranteed to be valid — `src/app/[locale]/layout.tsx` and `src/libs/contents.ts` reject anything other than `ja`/`en` with `notFound()`.
- `src/locales/ja.ts`, `src/locales/en.ts` — flat `key: value` dictionaries (`as const`). **Keep both in sync** when adding keys.
- `src/locales/server.ts` — `createI18nServer`; exports `getI18n` for **server components**: `const t = await getI18n()` then `t('key')`.
- `src/locales/client.ts` — `createI18nClient`; exports `I18nProviderClient` plus client hooks (`useI18n`, `useChangeLocale`, etc.) for **client components**.
- Pages read `locale` via `const { locale } = await props.params`.

### Layouts

- `src/app/layout.tsx` — minimal pass-through root (`return children`).
- `src/app/[locale]/layout.tsx` — the real shell: `<html lang={locale}>`, wraps children in `I18nProviderClient`, renders `Header`/`Footer`, mounts `NextTopLoader` (nav progress bar) and `GoogleAnalytics` (`@next/third-parties/google`, gated on `NEXT_PUBLIC_GA_ID`), and imports the global stylesheet `@/styles/globals.scss`.

### Routes (under `src/app/[locale]/`)

- `/` — home: CV-style page rendered from `contents/home/home.<locale>.md` via `getPageData` (the markdown body contains raw HTML for layout).
- `/publications` — built from BibTeX files by `src/libs/publications.ts`. Each `.bib` file (one entry per file) goes in `public/bib/<category>/`, where category is `journal`, `international`, `misc`, or `domestic`; files directly under `public/bib/` are ignored. Custom fields: `equalcontrib` (comma-separated surnames), `note = {査読なし}`, `url`.
- `/posts`, `/posts/[id]` — blog index and post detail. `[id]` uses `generateStaticParams` + `dynamicParams = false`.
- `/projects` — project portfolio cards.
- `/privacy-policy` — rendered from `contents/pages/privacy-policy.<locale>.md` via `getPageData`.
- `[...rest]` catch-all calls `notFound()` so unmatched paths render `src/app/[locale]/not-found.tsx` inside the locale layout; `src/app/not-found.tsx` is the bare fallback.

### Content system — local markdown

`src/libs/contents.ts` reads files from the top-level `contents/` directory (`contents/posts/`, `contents/projects/`, plus standalone pages in `contents/home/` and `contents/pages/`). The `posts`, `posts/[id]`, and `projects` pages use `getSortedContentsData` / `getContentData` / `getAllContentIds`; standalone pages use `getPageData`.

- File naming: `[<YYYY-MM-DD>-]<id>.<locale>.md`. The date prefix (if present) becomes the post date and is stripped from the `id`; the `.<locale>.md` suffix selects the language. So one logical post = two files (`.ja.md` + `.en.md`).
- Frontmatter (parsed by `gray-matter`): `title`/`name`, `description`, `tags` (comma-separated string), `image` (e.g. `{path: "/projects/x.png", height, width}`, served from `public/`), `links` (e.g. `links.website`, `links.github`, `links.media`).
- Markdown → HTML via `markdown-it` (`html: true`) + `markdown-it-footnote` + `@vscode/markdown-it-katex` (`$...$` / `$$...$$`), with `highlight.js` for code blocks. Output is injected with `dangerouslySetInnerHTML` — fine because all content is first-party. The site's own `katex` is passed to the KaTeX plugin so rendered class names match the imported `katex.min.css`; keep those versions aligned.
- `draft-*.md` files are works in progress: gitignored (never deployed) and also skipped by `contents.ts` when `NODE_ENV=production`, but visible in `pnpm dev`.

### Conventions

- `@/` is the path alias for `src/` (`tsconfig.json`).
- Prettier (`.prettierrc.json`): **no semicolons**, **single quotes**, 2-space indent.
- Styling is primarily SCSS in `src/styles/globals.scss`; Tailwind v3 (`tailwind.config.ts`, `postcss.config.mjs`) is also configured. Match the approach of the file you're editing — most existing components use SCSS class names, not Tailwind utilities.
- Shared helpers go in `src/libs/`, types in `src/types/`, components in `src/components/` (lowercase filenames, e.g. `header.tsx`, `footer.tsx`).
- License note: code is MIT, but blog posts in `./contents` and images in `./public` are excluded from it.
