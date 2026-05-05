# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

**Stack**: Next.js 16 (App Router) · React 19.2 · TypeScript · Tailwind CSS 4

This is a product showcase website for PT. Radian Elok Distriversa, a medical aesthetic device distributor. All content is static — no database, no API layer. Product data lives in [src/lib/data.ts](src/lib/data.ts).

## Routing

Uses Next.js App Router with route groups (parenthesized directories) for organization without URL impact:

```
src/app/
├── (pages)/
│   ├── (homepage)/
│   │   ├── (sections)/        # about, brand, choose-us, credibility, hero,
│   │   │                      #   products, social-media, stat-counter, video
│   │   └── page.tsx
│   ├── about/
│   │   ├── (sections)/        # hero, video, what, who, work
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── devices/[category]/[brand]/[product]/
│       └── page.tsx           # 3-level product hierarchy
├── components/
├── globals.css
├── layout.tsx
└── providers/                 # (under src/providers/)
    └── aos-provider.tsx
```

## Data Layer

[src/lib/data.ts](src/lib/data.ts) is the single source of truth. It exports:

| Export | Shape | Purpose |
|---|---|---|
| `navMenus` | `{ name, slug, type, menu? }[]` | Top-level nav; `type` is `link`, `largeDropdown`, or `smallDropdown` |
| `deviceProductMenu` | 3-level nested array | Device categories → brands → products |
| `supportMenu` | `{ name, slug }[]` | Support section links |
| `brandList` | `{ src, link }[]` | Brand logos for marquee (12 brands) |

**Rule:** when adding pages or products, update `data.ts` first.

## Component Patterns

**UI primitives** ([src/app/components/ui/](src/app/components/ui/)) use [Radix UI](https://www.radix-ui.com/) + [class-variance-authority (CVA)](https://cva.style/) for variant-driven styling. Follow the existing CVA pattern when adding variants. Use `clsx` + `tailwind-merge` (via `cn()`) for conditional class composition.

**Page sections** are isolated components under a `(sections)/` route group within each page folder.

**Catalogue components** ([src/app/components/catalogue/](src/app/components/catalogue/)) handle product listing, filtering, before/after sliders, and media display.

**Navbar** ([src/app/components/navbar/](src/app/components/navbar/)) is split into:
- `navbar.tsx` — main client component; scroll-aware (toggles white bg after 100px), renders from `navMenus`, manages mobile sidebar
- `navbar-bg.tsx` — decorative gradient overlay (black → transparent, h-44) rendered behind the navbar on transparent-header pages
- `large-dropdown.tsx`, `small-dropdown.tsx`, `sidebar.tsx`, `sidebar-dropdown.tsx` — dropdown and mobile menu subcomponents

**`'use client'`** is used only where interactivity is required (navbar, dropdowns, AOSProvider, carousel). Keep server components as the default.

## Providers

**AOSProvider** lives at [src/providers/aos-provider.tsx](src/providers/aos-provider.tsx). It is a client component that calls `AOS.init({ once: false })` on mount and imports the AOS stylesheet. It renders nothing — it is placed at the top of `<body>` in [src/app/layout.tsx](src/app/layout.tsx) to enable scroll-triggered animations globally.

## Styling

Tailwind 4 configured via PostCSS (`@tailwindcss/postcss` — no `tailwind.config.ts`). Custom `@theme` block in [src/app/globals.css](src/app/globals.css):

- **Brand colors**: `brand-red`, `brand-red2`, `brand-pink`, `brand-peach` (OKLch color space)
- **Custom breakpoint**: `xs` (25rem)
- **Utility classes**: `body-container-limit`, `h2-format`, `h3-format`, `p-format`, `title-limiter`
- **Font**: Plus Jakarta Sans (local, weights 200–900)
- **Animation**: `tw-animate-css` dev dependency for additional Tailwind animation utilities

## Key Libraries

| Library | Use |
|---|---|
| Embla Carousel | Product/image carousels |
| AOS + `AOSProvider` | Scroll-triggered animations |
| React Fast Marquee | Brand scrolling marquees |
| React Compare Slider | Before/after image comparison |
| React Lite YouTube | Embedded video sections |
| Lucide React | Icons (primary) |
| LineIcons (`@lineiconshq/react-lineicons`) | Icons (secondary) |
| Radix UI | Accessible UI primitives |
| React Intersection Observer | Visibility-based triggers |
| CVA + clsx + tailwind-merge | Variant styling and class composition |

## Assets

Images live under `public/image/` organized by context:

| Folder | Contents |
|---|---|
| `360/` | 360-degree spin frames per product (`.webp`) |
| `about/` | About page hero and section images |
| `before-after/` | Before/after comparison pairs (`.webp`) |
| `device-card/` | Product card thumbnails |
| `thumbnails/` | General-purpose thumbnails |

## TypeScript

- Path alias `@/*` resolves to `src/*`
- Strict mode enabled
- Target: ES2017
