# Design: Premium Coffee Shop

## Technical Approach

Server-first Next.js 15 static site: typed data files → server components → thin client animation leaves. All pages are server-rendered (static). Client JS is limited to Framer Motion wrappers, theme toggle, FAQ accordion, and mobile nav. Data layer uses i18n-ready interfaces for future CMS migration.

## Architecture Decisions

### Decision 1: Folder Organization — Role-based atomic

| Option | Tradeoffs | Decision |
|--------|-----------|----------|
| **Role-based** (`ui/`, `sections/`, `layout/`, `animations/`) | Clear boundaries, easy to find, scales better | **Chosen** |
| Page-based (`home/`, `menu/`, `contact/`) | Good for large apps, overkill here | Rejected |
| Flat (`components/*.tsx`) | Too few files, no grouping | Rejected |

**Rationale**: Small site but strong role separation. `ui/` primitives reused across sections, `animations/` isolates all client JS.

### Decision 2: Server/Client Boundary — Server by default

- **All pages, sections, layout shells** = server components
- **Only** animation wrappers, ThemeToggle, MobileNav, FAQAccordion = `'use client'`
- Client components are **thin leaves** — they receive data as props from server parents, never fetch

**Rationale**: Max static generation, minimal client JS bundle, clean migration path.

### Decision 3: Data Layer — Typed static files, i18n-ready

- `lib/data/*.ts` exports typed arrays/objects
- Text fields use `Record<string, string>` (e.g. `{ en: "Flat White" }`) — future locales add keys
- Components accept data as props — replace data source later without changing components

**Rationale**: Zero-cost, type-safe, version-controlled. CMS migration = swap `lib/data/` imports for API fetches.

### Decision 4: Theme — CSS variables + class-based toggle

| Aspect | Approach |
|--------|----------|
| Toggle mechanism | `.dark` class on `<html>` |
| Color values | CSS custom properties on `:root` / `.dark` |
| Tailwind v4 variant | `@custom-variant dark (&:where(.dark, .dark *))` |
| Persistence | `localStorage` — read on load, write on toggle |
| FOUC prevention | Inline `<script>` in `<head>` before render |

**Rationale**: No runtime JS framework overhead for theming. Tailwind v4 CSS-first. One class toggles the entire palette.

### Decision 5: Animation — Framer Motion behind server wrappers

- `ScrollReveal`, `StaggerContainer` are `'use client'` shells wrapping `motion.div`
- Section components (server) use them declaratively: `<ScrollReveal><Hero /></ScrollReveal>`
- Only `opacity` and `transform` animated. `whileInView` + `once: true` for performance
- `prefers-reduced-motion` respected via `MotionConfig` or CSS

**Rationale**: Sections stay as server components. Animation logic is isolated, testable, swappable.

### Decision 6: SEO — generateMetadata() per page + JSON-LD

- Each `page.tsx` exports `generateMetadata()` with title, description, OpenGraph
- Root layout sets template, shared OG image
- JSON-LD structured data (LocalBusiness) in root layout via `<script type="application/ld+json">`
- Static sitemap.ts + robots.ts

**Rationale**: Next.js metadata API is the canonical approach. JSON-LD for local search visibility.

### Decision 7: CMS Migration Path

- Current: import from `lib/data/*.ts`
- Future: replace with `async function getData()` that fetches from CMS API
- Interfaces unchanged — data shape is identical. Components require zero changes.
- Locale: `params.locale` from Next.js dynamic routing feeds into data layer

**Rationale**: Interface contract decouples data source from presentation.

## Component Tree

```
RootLayout (server)
├── ThemeScript (inline <script>, not a component)
├── Header (server)
│   ├── Container
│   │   ├── Logo (server, img)
│   │   ├── NavLink[] (server, map over nav data)
│   │   ├── ThemeToggle (client)
│   │   └── MobileNav (client) — hamburger + drawer
├── Page Content (server)
│   ├── HeroSection (server)
│   │   └── ScrollReveal (client wrapper)
│   ├── AboutSection (server)
│   │   └── ScrollReveal (client wrapper)
│   ├── MenuPreview (server)
│   │   └── StaggerContainer (client wrapper)
│   ├── TestimonialsSection (server)
│   │   └── ScrollReveal (client wrapper)
│   ├── GalleryPreview (server)
│   ├── FAQAccordion (client) — on /faq page only
│   └── ContactForm (server) — server action
└── Footer (server)
    ├── Container
    │   ├── ShopInfo
    │   ├── OpeningHours
    │   └── SocialLinks
```

## Data Flow

```
lib/data/*.ts  ──import──►  Server Components (sections, pages)
                                │
                                ▼ pass as props
                    Animation Wrappers (client, leaf)
                                │
                                ▼ render
                              DOM
```

Client components never fetch or transform data. They receive it via props from server parents.

## File Changes

All files are **Create** (greenfield). 45 files total.

### `app/` — Routes & Layout

| File | Description |
|------|-------------|
| `app/layout.tsx` | Root layout — fonts, metadata template, ThemeScript, Header, Footer |
| `app/page.tsx` | Home page — compose Hero, About, MenuPreview, Testimonials, GalleryPreview |
| `app/globals.css` | Tailwind v4 imports, `@custom-variant dark`, CSS variables for theme |
| `app/menu/page.tsx` | Full categorized menu page |
| `app/faq/page.tsx` | FAQ page — compose FAQAccordion with data |
| `app/contact/page.tsx` | Contact page — hours, form, location info |
| `app/not-found.tsx` | Custom 404 |
| `app/sitemap.ts` | Dynamic sitemap |
| `app/robots.ts` | Robots.txt config |

### `components/ui/` — Primitives

| File | Client? | Description |
|------|---------|-------------|
| `container.tsx` | No | Max-width wrapper, responsive padding |
| `section.tsx` | No | Section with id, background variant, padding |
| `heading.tsx` | No | Typography component with `as` and `variant` props |
| `button.tsx` | No | Link/button with variants (primary, secondary, outline) |
| `card.tsx` | No | Generic content card with optional hover |

### `components/sections/` — Page Sections

| File | Client? | Description |
|------|---------|-------------|
| `hero.tsx` | No | Full-viewport hero, headline, subtitle, CTA, bg image |
| `about.tsx` | No | Narrative + image layout |
| `menu-preview.tsx` | No | Featured items grid — links to `/menu` |
| `testimonials.tsx` | No | Review grid (animated via wrapper) |
| `gallery-preview.tsx` | No | Image grid preview — links to gallery (future) |
| `faq-accordion.tsx` | **Yes** | Expand/collapse, keyboard nav, `prefers-reduced-motion` |
| `contact-form.tsx` | No | Server Action form with validation |
| `opening-hours.tsx` | No | Structured hours display table |

### `components/layout/` — Shell

| File | Client? | Description |
|------|---------|-------------|
| `header.tsx` | No | Nav bar shell (logo, links, ThemeToggle slot) |
| `footer.tsx` | No | Site footer with info, hours, social |
| `nav-links.tsx` | No | Nav link data array (shared between header + mobile) |
| `mobile-nav.tsx` | **Yes** | Hamburger button + animated slide-in drawer |
| `theme-toggle.tsx` | **Yes** | Sun/moon toggle, localStorage persistence |

### `components/animations/` — Motion Wrappers

| File | Client? | Description |
|------|---------|-------------|
| `scroll-reveal.tsx` | **Yes** | `motion.div` with `whileInView` + `once: true` |
| `stagger-container.tsx` | **Yes** | Parent stagger container for list children |

### `lib/` — Data & Utilities

| File | Description |
|------|-------------|
| `lib/types.ts` | All TypeScript interfaces (data + UI props) |
| `lib/utils.ts` | `cn()` class merge, formatters |
| `lib/data/site.ts` | ShopInfo, OpeningHours, social links |
| `lib/data/menu.ts` | MenuItem[] by category |
| `lib/data/testimonials.ts` | Testimonial[] |
| `lib/data/faq.ts` | FaqEntry[] |
| `lib/data/gallery.ts` | GalleryImage[] |

### Root config

| File | Description |
|------|-------------|
| `next.config.ts` | Static export config, image domains |
| `package.json` | Dependencies + scripts |
| `tsconfig.json` | TypeScript config |
| `postcss.config.mjs` | Tailwind v4 PostCSS setup |

### `public/images/`

| Path | Description |
|------|-------------|
| `public/images/hero/` | Hero backgrounds (1-2 images) |
| `public/images/menu/` | Food/drink photos |
| `public/images/gallery/` | Interior, exterior, ambiance |
| `public/images/logo.svg` | Site logo |
| `public/favicon.ico` | Browser favicon |
| `public/og-image.jpg` | Default OpenGraph image |

## Interfaces / Contracts

```typescript
// lib/types.ts

// -- Data types (i18n ready) --
interface LocaleString {
  en: string;
}

interface MenuItem {
  id: string;
  name: LocaleString;
  description: LocaleString;
  price: number;
  category: 'espresso' | 'pour-over' | 'pastries' | 'signature';
  image?: string;
  featured?: boolean;
}

interface Testimonial {
  id: string;
  quote: LocaleString;
  author: string;
  role?: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

interface FaqEntry {
  id: string;
  question: LocaleString;
  answer: LocaleString;
}

interface OpeningHoursEntry {
  day: string;
  open: string;
  close: string;
  isClosed: boolean;
}

interface ShopInfo {
  name: string;
  tagline: LocaleString;
  description: LocaleString;
  address: { street: string; city: string; state: string; zip: string };
  phone: string;
  email: string;
  social: { instagram?: string; facebook?: string };
  hours: OpeningHoursEntry[];
}

interface GalleryImage {
  id: string;
  src: string;
  alt: LocaleString;
  width: number;
  height: number;
}

interface NavLinkItem {
  label: string;
  href: string;
}

// -- UI Component Props --
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

interface SectionProps extends ContainerProps {
  id?: string;
  background?: 'cream' | 'espresso' | 'milk' | 'transparent';
}

interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  variant?: 'hero' | 'section' | 'card' | 'subtitle';
  className?: string;
}

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
```

## Client/Server Boundary (CRITICAL)

### `'use client'` files — 6 total

| File | Why client |
|------|------------|
| `components/animations/scroll-reveal.tsx` | Framer Motion `motion.div` with `whileInView`, `useInView` |
| `components/animations/stagger-container.tsx` | Framer Motion `motion.div` with `variants`, `staggerChildren` |
| `components/layout/mobile-nav.tsx` | `useState` for open/close, click event handlers |
| `components/layout/theme-toggle.tsx` | `useState`, DOM class toggle, `localStorage` read/write |
| `components/sections/faq-accordion.tsx` | `useState` per item, keyboard event handlers, `AnimatePresence` |
| `components/sections/contact-form.tsx` | `useActionState` for form submission feedback |

### Pure server components — everything else (~30 files)

All data files, pages, layout shell, UI primitives, and section components (except FAQ accordion and contact form).

### Rule
> Client components are **thin leaves** at the bottom of the tree. They receive data as props from server parents. They never fetch, never import from server-only modules, and never contain business logic.

## Testing Strategy

Not applicable — no test runner (Strict TDD: false). Manual verification via Next.js dev server.

## Migration / Rollout

No migration required. Greenfield project. Initialize git, install deps, then implement per task plan.

## Open Questions

None — all architecture decisions resolved in exploration phase.
