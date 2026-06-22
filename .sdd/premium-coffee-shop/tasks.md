# Tasks: Premium Coffee Shop

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 2500–3500 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Delivery strategy | ask-on-risk |
| Chain strategy | stacked-to-main |

```
Decision needed before apply: No (decided: 6 stacked PRs to main)
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High
```

### Work Units (Stacked PRs)

| Unit | Goal | PR |
|------|------|----|
| 1 | Foundation — scaffold, types, theme, UI primitives, layout shell | PR 1 |
| 2 | Data Layer — all typed data files with placeholder content | PR 2 |
| 3a | Hero + About sections (editorial, typography-first) | PR 3a |
| 3b | MenuPreview, Testimonials, GalleryPreview sections | PR 3b |
| 4 | Motion & Reveal — ScrollReveal, StaggerContainer wrappers | PR 4 |
| 5 | Menu, FAQ, Contact pages | PR 5 |
| 6 | SEO, accessibility, performance polish | PR 6 |

## Phase 1: Foundation — PR 1

- [x] 1.1 Scaffold Next.js 15 with TypeScript, App Router, Tailwind v4; install framer-motion, clsx
- [x] 1.2 Config: next.config.ts (remotePatterns), postcss.config.mjs
- [x] 1.3 lib/types.ts — all TypeScript interfaces (12 exported types)
- [x] 1.4 app/globals.css — Tailwind v4 `@custom-variant dark`, Espresso + Cream palette, CSS variables
- [x] 1.5 lib/utils.ts — cn() class merge with clsx
- [x] 1.6 UI primitives (5 Server Components): Container, Section, Heading, Button, Card
- [x] 1.7 components/layout/theme-toggle.tsx — client, localStorage, sun/moon icons
- [x] 1.8 FOUC prevention: inline `<script>` in app/layout.tsx `<head>`
- [x] 1.9 app/layout.tsx — Playfair Display + Inter via next/font, metadata, Header + Footer shell
- [x] 1.10 components/layout/header.tsx — Server Component: logo, nav links, ThemeToggle, hamburger
- [x] 1.11 components/layout/footer.tsx — Server Component: shop info, hours, social, copyright
- [x] 1.12 lib/data/site.ts — navLinks array + shopInfo object

## Phase 2: Data Layer — PR 2

- [x] 2.1 lib/data/site.ts — add openingHours (7 days), expand shopInfo.description
- [x] 2.2 lib/data/menu.ts — 22 items across 4 categories, 3 featured
- [x] 2.3 lib/data/testimonials.ts — 6 reviews with ratings
- [x] 2.4 lib/data/faq.ts — 8 FAQ entries
- [x] 2.5 lib/data/gallery.ts — 8 gallery entries + SVG placeholders in public/images/gallery/

## Phase 3a: Hero & About — PR 3a

- [x] 3.1 components/sections/hero.tsx — editorial full-viewport, typography-first, CSS fade-in
- [x] 3.2 components/sections/about.tsx — two-column editorial spread with story text
- [x] 3.3 app/page.tsx — compose Hero + About

## Phase 3b: Content Sections — PR 3b

- [x] 3.4 components/sections/menu-preview.tsx — featured items grid with Card + price + link to /menu
- [x] 3.5 components/sections/testimonials.tsx — review grid, star ratings (Unicode), static grid
- [x] 3.6 components/sections/gallery-preview.tsx — 3 images via next/image, responsive grid
- [x] 3.7 app/page.tsx — add MenuPreview, Testimonials, GalleryPreview to home page

## Phase 4: Motion & Animations — PR 4

- [x] 4.1 lib/animations.ts — shared variants (fadeSlideUp, fadeIn)
- [x] 4.2 components/animations/scroll-reveal.tsx — client, whileInView + once:true, reduced-motion
- [x] 4.3 components/animations/stagger-container.tsx — client, staggerChildren 0.05s
- [x] 4.4 components/animations/reveal-item.tsx — client, fadeSlideUp variant wrapper
- [x] 4.5 hero.tsx — wrap in ScrollReveal
- [x] 4.6 about.tsx — wrap in ScrollReveal
- [x] 4.7 menu-preview.tsx — ScrollReveal + StaggerContainer + RevealItem
- [x] 4.8 testimonials.tsx — ScrollReveal + StaggerContainer + RevealItem
- [x] 4.9 gallery-preview.tsx — ScrollReveal + StaggerContainer + RevealItem

## Phase 5: Menu, FAQ, Contact — PR 5

- [x] 5.1 app/menu/page.tsx — categorized menu grid, editorial layout, generateMetadata
- [x] 5.2 components/sections/faq-accordion.tsx — client, aria-expanded/controls, AnimatePresence, keyboard nav
- [x] 5.3 app/faq/page.tsx — Server Component composing FaqAccordion with data
- [x] 5.4 components/sections/contact-form.tsx — presentational form (no backend)
- [x] 5.5 components/sections/opening-hours.tsx — structured hours via dl/dt/dd
- [x] 5.6 app/contact/page.tsx — two-column grid: form + hours + address, generateMetadata
- [x] 5.7 Nav links verified in site.ts (all 4 routes present)

## Phase 6: SEO, Accessibility, Performance — PR 6

- [x] 6.1 OpenGraph metadata — root + all pages with OG title/description/image
- [x] 6.2 JSON-LD LocalBusiness schema — script tag in root layout body
- [x] 6.3 app/sitemap.ts — static sitemap (4 routes)
- [x] 6.4 app/robots.ts — allow all, disallow /api/, sitemap URL
- [x] 6.5 app/not-found.tsx — custom 404 with "Back to Home" CTA
- [x] 6.6 app/loading.tsx — spinner with "Brewing..."
- [x] 6.7 Favicon — public/favicon.svg + metadata in layout
- [x] 6.8 Accessibility — add aria-labels, verify ARIA, heading hierarchy, keyboard nav
- [x] 6.9 Reduced motion — CSS @media prefers-reduced-motion: reduce in globals.css

## Summary

| Phase | Tasks | PR | Line Count |
|-------|-------|-----|------------|
| Phase 1: Foundation | 12 | PR 1 | ~390 |
| Phase 2: Data Layer | 5 | PR 2 | ~380 |
| Phase 3a: Hero & About | 3 | PR 3a | 125 |
| Phase 3b: Content Sections | 4 | PR 3b | 150 |
| Phase 4: Motion & Animations | 9 | PR 4 | 131 |
| Phase 5: Menu, FAQ, Contact | 7 | PR 5 | 290 |
| Phase 6: SEO, a11y, performance | 9 | PR 6 | 128 |
| **Total** | **49** | **7 PRs** | **~1594** |
