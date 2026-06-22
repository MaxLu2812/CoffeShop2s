# Proposal: Premium Coffee Shop

## Intent

Build a portfolio-quality, performant website for a fictional specialty coffee shop inspired by Coffeewerk + Press, WatchHouse, and Café Kitsuné. The site must feel warm, premium, and cozy (not corporate), with dark/light themes, subtle Framer Motion animations, and a hybrid page structure (story-driven landing page + dedicated sub-pages). Greenfield project — all files are new.

## Scope

### In Scope
- Landing page: Hero, About/Story, MenuPreview, Testimonials, Gallery sections
- Separate Menu page (`/menu`) with categorized drink/food listings
- Separate FAQ page (`/faq`) with accessible accordion
- Separate Contact page (`/contact`) with presentational form, hours, location
- Reusable UI primitives: Container, Section, Heading, Button, Card
- Dark/light theme system (class-based toggle, CSS variables, FOUC prevention)
- Scroll-triggered animations via Framer Motion (subtle — only opacity/transform, no GSAP/Three.js)
- Static TypeScript data files for all content, typed with i18n-ready interfaces
- Semantic HTML, ARIA labels, keyboard navigation, focus management
- `next/image` optimization, `next/font` self-hosted fonts, Server Components by default
- Realistic placeholder/demo content (SVG + text)

### Out of Scope
- E-commerce / online store (architected for future addition)
- CMS integration (content stays in static TS files; structure prepared for migration)
- Multilingual/i18n implementation (data layer structured for future locale keys)
- Payment processing, user accounts, booking/reservation system
- Blog / events page
- Analytics, cookie consent

## Capabilities

### New Capabilities
- `hero-section`: Full-viewport hero with headline, subtitle, CTA, editorial typography
- `about-section`: Shop narrative with text + image editorial layout
- `menu-page`: Categorized drink/food listing with prices, descriptions, featured tags
- `testimonials-section`: Customer review grid with star ratings
- `faq-page`: Accordion-based Q&A with animated expand/collapse, ARIA keyboard nav
- `gallery-section`: Responsive image grid with next/image placeholders
- `contact-page`: Location info, opening hours, presentational contact form
- `opening-hours`: Structured hours data component (contact page + footer)
- `reusable-ui`: Container, Section, Heading, Button, Card Server Components
- `theme-system`: Dark/light class-based toggle, localStorage, FOUC prevention
- `scroll-animations`: Framer Motion scroll-reveal (whileInView, once:true), stagger
- `layout-shell`: Header (nav + ThemeToggle + hamburger), Footer, MobileNav (client)
- `static-content`: Typed TypeScript data files, i18n-ready interfaces
- `seo-metadata`: Per-page generateMetadata, OpenGraph, JSON-LD LocalBusiness

### Modified Capabilities
- None (greenfield)

## Approach

| Layer | Strategy |
|-------|----------|
| **Structure** | Hybrid: landing page (`app/page.tsx`) + separate `app/menu/`, `app/faq/`, `app/contact/` routes |
| **Components** | Role-based atomic: `ui/`, `sections/`, `layout/`, `animations/` — Server Components by default, Client Components only as thin animation leaves |
| **Styling** | Tailwind CSS v4 with `@custom-variant dark`, CSS custom properties, warm espresso + cream palette |
| **Theme** | Inline FOUC prevention script → class toggle on `<html>` → CSS variables swap |
| **Animation** | `motion.div` with `whileInView` + `viewport={{ once: true }}`; stagger containers for grids |
| **Data** | Typed `.ts` files in `lib/data/` — interfaces use `Record<string, string>` pattern for future locales |
| **CMS/multilingual readiness** | Data files use typed interfaces; migrating means replacing `import` with API call or locale-switching logic |
| **Accessibility** | Semantic HTML, `aria-label`, `aria-expanded/aria-controls` on accordion, keyboard nav, `prefers-reduced-motion` |
| **Performance** | Static Generation, `next/image` with WebP + lazy loading + `priority` on hero, `next/font` self-hosted |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Tailwind v4 CSS-first API changes | Medium | Pin exact version at `4.0.0`; use documented `@theme` + `@custom-variant` syntax |
| Framer Motion + Server Components | Low | Isolate all `'use client'` to animation leaf wrappers |
| Image sourcing for demo | Low | SVG placeholders replaceable with real images later |
| Scope creep | Medium | Clear out-of-scope list; static data makes additions visible |

## Rollback Plan

Greenfield project — rollback means resetting to `git init` state. If the project is git-tracked, `git checkout HEAD` reverts the last batch.

## Success Criteria

- [ ] Landing page renders Hero, About, Testimonials, Gallery sections with scroll animations
- [ ] Menu, FAQ, Contact pages render at their respective routes
- [ ] Dark/light theme toggle works without FOUC on reload
- [ ] All interactive elements keyboard-navigable
- [ ] No client-side JS errors in console
- [ ] Lighthouse scores 90+ on desktop and mobile
- [ ] All data renders from static TypeScript files
- [ ] Responsive layout at 320px, 768px, 1024px, 1440px
