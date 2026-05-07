# Architecture Overview

This document describes the high-level architecture of the Radian Elok project.

## System Overview

PT. Radian Elok Distriversa is a catalog and marketing website for medical aesthetic devices. The application is built as a modern, high-performance web application using Next.js.

## Tech Stack

- **Frontend Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React, LineIcons
- **Animations**: AOS (Animate on Scroll)
- **Carousels**: Embla Carousel
- **Utilities**: clsx, tailwind-merge

## Component Patterns

### Layout & Sections
- **BodyWrapper**: A standard container used across pages to maintain consistent padding, max-width, and centering (`body-container-limit`).
- **(sections) Grouping**: Complex pages (like the homepage) break down content into a `(sections)` directory to keep the main `page.tsx` clean and modular.
- **Catalogue System**: A specialized set of components in `src/app/components/catalogue` used for product displays:
  - `HeroDevice`: Full-viewport hero sections with breadcrumbs and document download links.
  - `DeviceFilterList`: Combines filtering logic with a responsive grid of product cards.
  - `GridListDevice`: Displays features or treatments in a high-contrast grid (often used on black backgrounds).

## Client-Side Interactivity

- **AOS (Animate on Scroll)**: Used extensively for entry animations. Components use `data-aos` attributes (e.g., `fade-up`, `fade-left`) with standardized durations.
- **Before-After Sliders**: Implemented using `react-compare-slider` for clinical result demonstrations.
- **360 Viewer**: A custom interactive component for rotating product views.
- **Carousels**: Powered by `embla-carousel-react` with custom navigation controls.

## UI Architecture

- **Typography Classes**: Standardized classes like `h2-format`, `h3-format`, and `p-format` are defined in `globals.css` using Tailwind's `@apply` directive to ensure consistent font scaling across devices.
- **Theming**: Tailwind v4 configuration via `@theme` block in `globals.css` using `oklch` and CSS variables for brand colors (`brand-red`, `brand-peach`).

## Data Flow

Currently, the application follows a **Static Content Architecture**:
- Data is managed in `src/lib/data.ts` as constant objects.
- Components import this data directly to render navigation, product lists, and brand information.
- All rendering is performed server-side where possible, with client-side interactivity for dropdowns, carousels, and animations.

## Infrastructure & Deployment

- **Platform**: Targeted for Vercel/Next.js standard deployment.
- **Assets**: Images and fonts are served from the `public` directory.
- **Fonts**: Plus Jakarta Sans (local).

## Future Considerations

- **CMS Integration**: Transitioning static data to a headless CMS (e.g., Sanity, Contentful) or a database (Prisma + PostgreSQL) as the catalog grows.
- **Search Optimization**: Implementation of a more robust search index if the product count exceeds static search capabilities.
