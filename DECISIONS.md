# Architectural Decisions

This file documents the technical decisions made during the development of Radian Elok.

## ADR-001: Tech Stack Selection

**Date:** 2026-05-07
**Status:** Accepted

**Context:**
The project requires a high-performance, SEO-friendly marketing site with interactive product displays (360 views, carousels).

**Options considered:**
1. **Next.js (App Router)**: Modern, built-in SEO, excellent performance, React-based.
2. **Nuxt.js**: Excellent Vue-based alternative, but the team expertise leans towards React.
3. **Astro**: Great for static sites, but may be more complex for highly interactive 360-viewers and complex stateful components.

**Decision:**
Next.js 16 with App Router was chosen for its mature ecosystem, TypeScript support, and built-in optimization for images and fonts.

**Consequences:**
- Fast initial load times and great SEO.
- TypeScript ensures type safety across the catalog data.
- Standardized component structure using shadcn/ui.

## ADR-002: Tailwind CSS v4

**Date:** 2026-05-07
**Status:** Accepted

**Context:**
Styling needs to be maintainable and fast to develop.

**Decision:**
Use Tailwind CSS v4 for utility-first styling.

**Consequences:**
- Reduced CSS bundle size.
- Faster development cycle with JIT compilation.
- Seamless integration with shadcn/ui.

## ADR-003: Static Data Strategy

**Date:** 2026-05-07
**Status:** Accepted

**Context:**
The initial product catalog is small enough to manage locally without a database.

**Decision:**
Store product and menu data as TypeScript constants in `src/lib/data.ts`.

**Consequences:**
- Zero database overhead/latency.
- Version-controlled data changes.
- Easy to refactor into a CMS or database later.
