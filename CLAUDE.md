# CLAUDE.md

> **Pozor — tento soubor ještě popisuje strukturu jedné případovky.**
> Projekt je od 26. 8. 2026 rozcestník s více případovkami:
> `src/app/page.tsx` = rozcestník, `src/app/<slug>/page.tsx` = případovka,
> seznam případovek je v `src/lib/pripadovky.ts`, obrázky v `public/<slug>/`.
> Podrobnosti v `~/Desktop/pripadovky-zacileno-prestavba.md`.
> Kompletní přepis instrukcí a `KOMPONENTY.md` teprve čeká.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ VŽDY se orientuj podle komponent (POVINNÉ)

**Před jakoukoli tvorbou nebo úpravou sekce si NEJPRVE přečti `KOMPONENTY.md`** a řiď se jím.
Web je postavený z pojmenovaných komponent — každá má v `KOMPONENTY.md` svůj popis
(rozměry, clip-path, dekorace, responzivní chování). Nikdy nevymýšlej novou strukturu od nuly,
pokud existuje odpovídající komponenta; vždy vyjdi z komponenty podle `KOMPONENTY.md`.

Když uživatel řekne název komponenty (např. „hero sekce", „text na bílém pozadí") + obsah,
najdi tu komponentu v `KOMPONENTY.md`, postav ji přesně podle popisu a naplň dodaným obsahem.
Když přidáš nebo změníš komponentu, **aktualizuj `KOMPONENTY.md`**, ať zůstává zdrojem pravdy.

## Project overview

Case study pages for Zacíleno, a Czech marketing agency. The site uses a component-based approach where each section is a named "Komponenta" (documented in `KOMPONENTY.md`). The brand brief is at `../zacileno-brand-brief.md` — read it before writing any content.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Stack

- **Next.js 16** (App Router, `src/` directory) — check `node_modules/next/dist/docs/` for API changes
- **Tailwind CSS v4** via `@tailwindcss/postcss` — theme configured inline in `globals.css` using `@theme {}`, no `tailwind.config`
- **TypeScript** (strict mode)
- **Font:** Silka (local, loaded via `next/font/local` in `layout.tsx`, variable `--font-silka`)
- Path alias: `@/*` → `./src/*`

## Architecture

All page content lives in `src/app/page.tsx` as a single long page composed of named component sections (marked with `{/* Komponenta: NAME */}` comments). Reusable interactive components are in `src/components/`:

- `Header.tsx` — fixed red navbar (client component)
- `ImageCarousel.tsx` — before/after carousel with trapezoid white card
- `GalleryCarousel.tsx` — sliding two-photo gallery with angular nav button
- `VideoCard.tsx` — autoplay muted video card with fullscreen modal on click
- `GridVideo.tsx` — small autoplay video for masonry grids
- `TabCarousel.tsx` — tab switcher with sliding image and description
- `InteractiveChart.tsx` — bar chart with metric switching

See `KOMPONENTY.md` for the full component catalog with clip-path values, layout rules, and naming conventions.

## Brand rules (enforced)

- **Colors:** `zac-red` (#ED1E00), `zac-yellow` (#FFB000), `zac-dark-red` (#770B00), black, white — defined in `globals.css` `@theme`
- **Headings:** always `font-bold` (700), never italic. Lowercase comes from content, not `text-transform`
- **Body text:** `font-medium` (500)
- **Stat numbers:** `font-black italic`
- **Decorative SVGs** (in `public/graficke-prvky/`): always full opacity — never use `opacity-*` classes on them
- **On mobile:** decorative elements must not overlap text — reposition them to red background areas
- **White blocks** use `clip-path` polygon for angular edges (values in `KOMPONENTY.md`), never `border-radius`
- **All text must be live HTML** — never bake text into images (SEO requirement)
- **Videos:** autoplay muted loop via IntersectionObserver (threshold 0.3), click opens fullscreen modal with sound

## Assets

- `public/graficke-prvky/` — SVG decorations (blesk, cary, cikcak, elipsa, tvary, etc.) in 4 color variants each
- `public/foto.png` — placeholder photo (B&W with red lennon glasses)
- `public/video1.mp4`, `public/video2.mp4` — sample videos
- `public/logo+symbol.png` — white logo on transparent background (do NOT invert)
- `src/fonts/` — Silka woff2 files (weights 200–900)
