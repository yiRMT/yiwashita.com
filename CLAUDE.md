# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic portfolio + blog (`yiwashita.com`, v2). Next.js 16 (App Router) + React 19 + TypeScript, internationalized with **`next-international`**, styled mainly with **SCSS** (`sass`) with Tailwind CSS v3 also wired up. Deployed on Vercel. The package manager in use is **yarn** (`yarn.lock`, CI uses yarn).

## Commands

```bash
yarn install     # Install dependencies
yarn dev         # Dev server with Turbopack at http://localhost:3000
yarn build       # Production build
yarn start       # Serve the production build
yarn lint        # eslint . (eslint-config-next)
yarn prettier --write "{src,pages,__tests__}/**/*.{ts,tsx,js,jsx}"   # Format (same glob CI uses)
```

No test suite exists. Requires Node >= 22.

### CI (`.github/workflows/ci.yml`)

Runs **on pull requests to `main`** (not on push):

- **prettier** job: runs Prettier with `--write` over `{src,pages,__tests__}/**/*.{ts,tsx,js,jsx}` and auto-commits the formatting changes back to the PR branch (`git-auto-commit-action`). So formatting is fixed for you on PRs, but match Prettier style locally to avoid noise.
- **eslint** job: runs ESLint via `reviewdog/action-eslint`, reporting as `github-pr-review` comments.

### Environment variables (`.env.local`, not committed)

- `NEXT_PUBLIC_GA_ID` — Google Analytics (`src/app/[locale]/layout.tsx`).

## Architecture

### Internationalization (`next-international`) — the backbone

Every page lives under `src/app/[locale]/`, where `locale` is `ja` (default) or `en`.

- `src/proxy.ts` — the locale middleware. Uses `createI18nMiddleware` with `locales: ['ja','en']`, `defaultLocale: 'ja'`, `urlMappingStrategy: 'rewriteDefault'` (the default locale `ja` is **not** shown in the URL; `en` is served under `/en`). Exported as `proxy` (Next.js 16's middleware/proxy convention). The matcher excludes `api`, `static`, `_next`, files with extensions, etc.
- `src/locales/ja.ts`, `src/locales/en.ts` — flat `key: value` dictionaries (`as const`). **Keep both in sync** when adding keys.
- `src/locales/server.ts` — `createI18nServer`; exports `getI18n`, `getScopedI18n`, `getCurrentLocale`, `getStaticParams` for **server components**: `const t = await getI18n()` then `t('key')`.
- `src/locales/client.ts` — `createI18nClient`; exports `I18nProviderClient` plus client hooks (`useI18n`, `useChangeLocale`, etc.) for **client components**.
- Pages read `locale` via `const { locale } = await props.params`. Locale-specific external URLs are chosen inline with `locale === 'ja' ? ... : ...` (see `src/app/[locale]/page.tsx`), not stored in dictionaries.

### Layouts

- `src/app/layout.tsx` — minimal pass-through root (`return children`).
- `src/app/[locale]/layout.tsx` — the real shell: `<html lang={locale}>`, wraps children in `I18nProviderClient`, renders `Header`/`Footer`, mounts `NextTopLoader` (nav progress bar) and `GoogleAnalytics` (`@next/third-parties/google`, gated on `NEXT_PUBLIC_GA_ID`), and imports the global stylesheet `@/styles/globals.scss`.

### Routes (under `src/app/[locale]/`)

- `/` — home: CV-style page (bio, education, work experience, publications with BibTeX/PDF links, research projects, links). Contact is shown as plain text email, not a form. BibTeX files live in `public/bib/`.
- `/posts`, `/posts/[id]` — blog index and post detail.
- `/projects` — project portfolio cards.
- `/privacy-policy`.

### Content system — local markdown

`src/libs/contents.ts` reads files from the top-level `contents/` directory (`contents/posts/`, `contents/projects/`). The `posts`, `posts/[id]`, and `projects` pages all use `getSortedContentsData` / `getContentData` / `getAllContentIds` from here.

- File naming: `[<YYYY-MM-DD>-]<id>.<locale>.md`. The date prefix (if present) becomes the post date and is stripped from the `id`; the `.<locale>.md` suffix selects the language. So one logical post = two files (`.ja.md` + `.en.md`).
- Frontmatter (parsed by `gray-matter`): `title`/`name`, `description`, `tags` (comma-separated string), `image` (e.g. `{path: "/projects/x.png", height, width}`, served from `public/`), `links` (e.g. `links.website`, `links.github`, `links.media`).
- Markdown → HTML via `markdown-it` (`html: true`) + `markdown-it-footnote`, with `highlight.js` for code blocks. Output is injected with `dangerouslySetInnerHTML`.
- `draft-*.ja.md` files in `contents/posts/` are works in progress.
### Conventions

- `@/` is the path alias for `src/` (`tsconfig.json`).
- Prettier (`.prettierrc.json`): **no semicolons**, **single quotes**, 2-space indent.
- Styling is primarily SCSS in `src/styles/globals.scss`; Tailwind v3 (`tailwind.config.ts`, `postcss.config.mjs`) is also configured. Match the approach of the file you're editing — most existing components use SCSS class names, not Tailwind utilities.
- Shared helpers go in `src/libs/`, types in `src/types/`, components in `src/components/` (lowercase filenames, e.g. `header.tsx`, `footer.tsx`).
- License note: code is MIT, but blog posts in `./contents` and images in `./public` are excluded from it.
