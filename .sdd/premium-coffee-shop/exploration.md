# Exploration: Premium Coffee Shop Website

## Current State

Project is blank — no code, no git repo, no dependencies. An `.atl/` directory exists with skill registry artifacts. The stack (Next.js 15 App Router, TypeScript, Tailwind CSS v4, Framer Motion) has been chosen but nothing is installed.

## Affected Areas

No existing files to modify. All areas will be **created**:

| Area | What Will Be Created |
|------|---------------------|
| `app/` | Root layout, home page, sub-pages (menu, about, contact, gallery) |
| `app/globals.css` | Tailwind v4 CSS with `@theme`, CSS variables for dark/light, color scheme |
| `components/sections/` | Hero, About, Menu, Gallery, Location, Footer section components |
| `components/ui/` | Reusable primitives: Button, Card, SectionHeading, ThemeToggle |
| `components/layout/` | Header (nav), Footer, mobile navigation drawer |
| `components/animations/` | ScrollReveal, StaggerContainer, ParallaxImage wrappers |
| `lib/data/` | Static TypeScript data files (menu items, shop info, social links) |
| `lib/utils.ts` | Utility helpers (cn class merge, formatters) |
| `public/images/` | Image assets (hero, menu items, gallery, logo) |
| `app/fonts/` | Self-hosted font files via `next/font` |
| `next.config.ts` | Static export or Vercel-optimized config |
| `package.json` | Dependencies and scripts |

## Approaches

### 1. Project Structure

#### Option A: Single-page layout with section components on home page + dedicated sub-pages for depth

```
app/
├── layout.tsx              # Root layout (fonts, metadata, ThemeProvider)
├── page.tsx                # Home page (composed of sections)
├── menu/page.tsx           # Full menu page
├── about/page.tsx          # Story & values page
├── contact/page.tsx        # Location, hours, contact form
├── gallery/page.tsx        # Photo gallery page
└── globals.css             # Tailwind directives + CSS custom properties
```

- **Pros**: Clear separation of concerns; SEO-friendly with dedicated routes; sections on home act as previews linking to full pages; scales well if content grows
- **Cons**: Slightly more pages to navigate during build
- **Effort**: Low

#### Option B: Pure single-page scroll (Smooth Scroll + anchor navigation)

```
app/
├── layout.tsx
├── page.tsx                # Entire site on one page
└── globals.css
```

- **Pros**: Feels more like an app/experience; simpler routing; no page transition complexity
- **Cons**: Poor SEO for sub-sections; large initial bundle; harder to maintain as content grows; doesn't leverage Next.js route-based code splitting
- **Effort**: Low (initial) but higher maintenance

**Recommendation**: Option A — a hybrid: home page with preview sections linking to full sub-pages. Best of both worlds: the home page tells the story, sub-pages provide depth.

---

### 2. Color Strategy

Coffeewerk + Press philosophy: *two contrasting but perfectly harmonious colors*. For a small cozy coffee shop, the palette should feel warm, tactile, and inviting.

#### Option A: Warm Espresso + Cream (Traditional Premium)

| Role | Light Mode | Dark Mode |
|------|-----------|-----------|
| Primary bg | `#F5EDE3` (warm cream) | `#1A0F0A` (deep espresso) |
| Primary text | `#2C1810` (dark roast) | `#F5EDE3` (warm cream) |
| Accent (primary) | `#8B5E3C` (warm bronze) | `#C4956A` (golden tan) |
| Accent (secondary) | `#D4A574` (latte gold) | `#A67B5B` (warm caramel) |
| Surface/cards | `#FAF3ED` (milk foam) | `#2C1810` (dark roast) |

- **Pros**: Instantly reads "coffee"; warm and inviting; excellent contrast ratio; timeless
- **Cons**: Can feel expected/predictable; less distinctive from competitors
- **Effort**: Low

#### Option B: Deep Navy + Terracotta (Modern European)

| Role | Light Mode | Dark Mode |
|------|-----------|-----------|
| Primary bg | `#F7F3EE` (warm linen) | `#0F172A` (deep navy) |
| Primary text | `#1E293B` (slate) | `#F1F5F9` (light gray) |
| Accent (primary) | `#9C4221` (terracotta) | `#C2410C` (bright terracotta) |
| Accent (secondary) | `#B45309` (amber) | `#F59E0B` (warm gold) |
| Surface/cards | `#FEFCF5` (cream) | `#1E293B` (slate navy) |

- **Pros**: More distinctive; pairs beautifully with greenery/plants (coffee shop aesthetic); modern European feel
- **Cons**: Less "coffee" association at first glance; terracotta can be polarizing
- **Effort**: Low

**Recommendation**: **Option A (Warm Espresso + Cream)** — it aligns directly with the user's mention of Coffeewerk + Press color philosophy. The warm bronze / golden tan accents provide the premium touch. This palette is proven in luxury coffee branding worldwide. The dark mode inversion (dark background with warm metallic accents) will feel like walking into a dimly lit specialty coffee bar.

---

### 3. Component Architecture

#### Option A: Atomic-ish Design (shared UI primitives + composed sections)

```
components/
├── ui/           # Atoms & Molecules
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── section-heading.tsx
│   ├── theme-toggle.tsx
│   └── icon-wrapper.tsx
├── sections/     # Organisms (page sections)
│   ├── hero.tsx
│   ├── about-section.tsx
│   ├── menu-section.tsx
│   ├── gallery-section.tsx
│   ├── location-section.tsx
│   └── cta-section.tsx
├── layout/       # Shell components
│   ├── header.tsx
│   ├── mobile-nav.tsx
│   └── footer.tsx
└── animations/   # Motion wrappers
    ├── scroll-reveal.tsx
    ├── stagger-children.tsx
    └── parallax-image.tsx
```

- **Pros**: Highly reusable; consistent styling; easy to test individual components; scales well
- **Cons**: More files upfront; can feel heavy for a small site
- **Effort**: Medium

#### Option B: Flat per-page components (simple, pragmatic)

```
components/
├── hero.tsx
├── about-section.tsx
├── menu-section.tsx
├── gallery-section.tsx
├── contact-form.tsx
├── footer.tsx
├── header.tsx
└── theme-toggle.tsx
```

- **Pros**: Fewer files; faster to build initially; less abstraction overhead
- **Cons**: Duplication of styling patterns; harder to maintain consistency; no reusable primitives
- **Effort**: Low

**Recommendation**: **Option A** — a lightweight atomic-ish approach. For a small site, we don't need the full Brad Frost atomic design, but having `ui/` primitives (Button, Card, SectionHeading, ThemeToggle) and `animations/` wrappers prevents duplication and makes the site feel cohesive. The sections in `sections/` compose these primitives. The `layout/` components handle shell concerns.

---

### 4. Animation Strategy

#### Option A: Scroll-triggered reveals + isolated page transitions (recommended)

**Techniques**:
- **Scroll reveals**: `motion.div` with `whileInView` + `viewport={{ once: true }}` for section entrances
- **Stagger children**: Parent uses `staggerChildren: 0.1` for menu items / gallery grid
- **Hero parallax**: Subtle `useScroll` + `useTransform` on hero image
- **Page transitions**: `AnimatePresence` wrapping `<main>` with fade/slide between routes
- **Hover states**: `whileHover` on cards, buttons, menu items (scale/glow)
- **Theme toggle**: Smooth transition via CSS `transition: background-color 0.3s`

**Performance rules**:
- Only animate `opacity` and `transform` (never `width`, `height`, `top`, `left`)
- `once: true` on all scroll triggers (don't re-animate)
- `will-change: transform` on animated elements
- Client Components only where animations render (isolate in `animations/` wrappers)

- **Pros**: Premium feel without jank; familiar UX pattern; `whileInView` is performant (uses IntersectionObserver); staggered lists feel polished
- **Cons**: More motion imports; slightly more JS on the client; page transitions require `AnimatePresence` at layout level
- **Effort**: Medium

#### Option B: Minimal animation (micro-interactions only)

**Techniques**:
- Hover effects only
- No scroll reveals
- CSS transitions for theme toggle
- No page transitions

- **Pros**: Absolute minimal client JS; fastest load; simplest to maintain
- **Cons**: Feels flat; doesn't match "premium aesthetic" requirement; misses the emotional impact
- **Effort**: Low

**Recommendation**: **Option A**. The user specifically asked for "smooth animations" and "premium aesthetic." Framer Motion's `whileInView` with `once: true` is the sweet spot — it adds that tactile premium feel while keeping performance in check. The key is isolating motion components as leaf Client Components so the rest of the page remains a Server Component.

---

### 5. Typography

#### Option A: Playfair Display (headings) + Inter (body)

- **Headings**: Playfair Display — classic serif with high contrast; feels editorial and luxurious
- **Body**: Inter — clean, highly legible sans-serif; excellent for UI text and menus
- **Accent**: JetBrains Mono or monospace for prices, small details
- **Sizes**: h1: clamp(2.5rem, 5vw, 4rem); body: 1rem/1.125rem

- **Pros**: Playfair Display is the quintessential premium serif; Inter is a workhorse sans; both load well via `next/font`
- **Cons**: Very common pairing (some may find it predictable)
- **Effort**: Low

#### Option B: Cormorant Garamond (headings) + DM Sans (body)

- **Headings**: Cormorant Garamond — elegant, lighter serif; more European/editorial feel
- **Body**: DM Sans — geometric sans with character; warmer than Inter
- **Accent**: Same monospace option

- **Pros**: More distinctive pairing; Cormorant has gorgeous ligatures and italics; warmer feel for a cozy shop
- **Cons**: Cormorant has many font files (can be heavy if not subset properly)
- **Effort**: Low

**Recommendation**: **Option A (Playfair Display + Inter)** for this specific project. Playfair Display's gravitas matches the premium European aesthetic. Inter's neutrality keeps the body text clean and readable for menus and descriptions. Both are optimized by `next/font` (self-hosted, subset, no layout shift). If the user wants a warmer feel, we can adjust to Option B.

---

### 6. Performance Approach

**Strategy: Static Generation by default, minimal client JS.**

| Technique | How |
|-----------|-----|
| Output mode | `output: 'export'` for pure static site, or Vercel default (ISR) |
| Image optimization | `next/image` with WebP/AVIF, lazy loading, responsive `sizes` |
| Font loading | `next/font` (self-hosted, subset, `display: swap`) |
| Client JS | Only Framer Motion wrappers are Client Components; everything else is a Server Component |
| Bundle strategy | Dynamic imports for heavy sections (gallery), `next/dynamic` with `ssr: false` if needed |
| Metadata | `generateMetadata` for SEO-per-page |
| CSS | Tailwind v4 JIT — zero unused CSS in production |
| Preloading | Preload critical hero image via `priority` prop on `next/image` |

**Performance budget targets** (desktop 3G):
- FCP: < 1.5s
- LCP: < 2.0s
- TBT: < 100ms
- CLS: < 0.05

**Effort**: Medium (mostly just following Next.js conventions correctly)

---

### 7. Mobile-First Responsive Design

**Breakpoint strategy** (Tailwind v4 defaults):

| Breakpoint | Width | Layout behavior |
|------------|-------|-----------------|
| `sm` | 640px | Slightly larger padding, 2-column grid starts |
| `md` | 768px | Tablet — side-by-side text + image in sections |
| `lg` | 1024px | Desktop — full layout, multi-column menu |
| `xl` | 1280px | Wide — max-width container, generous whitespace |

**Mobile-first design decisions**:
- Single column on mobile (cozy, scrollable narrative)
- Full-width hero image on mobile (immersive), contained on desktop
- Bottom nav or hamburger menu on mobile
- Touch-friendly targets (min 44px)
- Sections stack vertically on mobile, alternate side-by-side on desktop
- Menu becomes accordion on mobile, full category grid on desktop
- Gallery: single column mobile → 2 cols tablet → 3 cols desktop

**Cozy feel tactics**:
- Generous padding (px-6 mobile, px-8 tablet, px-12 desktop)
- Max-width container: 1200px (not too wide — keeps intimate feel)
- Warm, generous line-height on body text (1.75)
- Card-based layout with soft shadows

**Effort**: Low (standard responsive approach)

---

### 8. Dark/Light Theme Implementation

Tailwind CSS v4 uses CSS-based configuration instead of `tailwind.config.js`. Dark mode is toggled via the `@custom-variant` directive.

#### Approach: Class-based dark mode with CSS variables

**Step 1: Define CSS variables in `globals.css`**

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  /* Light mode colors (default) */
  --color-cream: #F5EDE3;
  --color-espresso: #2C1810;
  --color-bronze: #8B5E3C;
  --color-latte: #D4A574;
  --color-milk: #FAF3ED;

  /* Semantic aliases */
  --color-bg-primary: var(--color-cream);
  --color-text-primary: var(--color-espresso);
  --color-accent: var(--color-bronze);
  --color-accent-secondary: var(--color-latte);
  --color-surface: var(--color-milk);
}

.dark {
  --color-bg-primary: #1A0F0A;
  --color-text-primary: #F5EDE3;
  --color-accent: #C4956A;
  --color-accent-secondary: #A67B5B;
  --color-surface: #2C1810;
}
```

Wait — Tailwind v4 doesn't use `@theme` for semantic color aliases the same way. Let me reconsider.

In Tailwind CSS v4, you define custom properties in `@theme` and they become utility classes. But for semantic theming you'd use CSS custom properties directly:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-cream: #F5EDE3;
  --color-espresso: #2C1810;
  --color-bronze: #8B5E3C;
  --color-latte: #D4A574;
  --color-milk: #FAF3ED;
  /* ... dark variants too */
}

/* But for semantic theming, we use CSS custom properties */
:root {
  --bg-primary: #F5EDE3;
  --text-primary: #2C1810;
  --accent: #8B5E3C;
  --accent-secondary: #D4A574;
  --surface: #FAF3ED;
}

.dark {
  --bg-primary: #1A0F0A;
  --text-primary: #F5EDE3;
  --accent: #C4956A;
  --accent-secondary: #A67B5B;
  --surface: #2C1810;
}
```

Then in Tailwind utility classes, use `var(--bg-primary)` via arbitrary values or extend the theme. Actually, let me think about this more carefully.

In Tailwind CSS v4, the recommended approach is:
1. Put your design tokens in `@theme` (they become utility classes)
2. Use `@custom-variant dark` for the dark mode selector
3. Override tokens within the dark variant

But the challenge is that `@theme` values need to be static for JIT to work. For dynamic theming (dark mode toggle), the idiomatic approach would be:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --color-bg-primary: #F5EDE3;
  --color-text-primary: #2C1810;
  --color-accent: #8B5E3C;
  --color-accent-secondary: #D4A574;
  --color-surface: #FAF3ED;
}

.dark {
  --color-bg-primary: #1A0F0A;
  --color-text-primary: #F5EDE3;
  --color-accent: #C4956A;
  --color-accent-secondary: #A67B5B;
  --color-surface: #2C1810;
}
```

Then in your TSX, use arbitrary values or register them as theme extensions:

```tsx
<div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
```

Or better, extend `@theme` to map these variables to semantic utility classes. Actually, you can use `@theme` with variable references in some versions.

Let me keep the exploration simple and practical — the exact Tailwind v4 syntax can be finalized during implementation. The key decisions (class-based dark mode, CSS variables for colors, inline script for FOUC prevention) are what matter here.

**FOUC (Flash of Unstyled Content) prevention**:
```html
<!-- Inline in <head> via layout.tsx -->
<script dangerouslySetInnerHTML={{
  __html: `
    try {
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (theme === 'dark' || (!theme && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  `
}} />
```

**Theme toggle**: A `ThemeToggle` Client Component that reads `localStorage`, sets/removes the `dark` class on `<html>`, and updates state. Use a sun/moon icon toggle.

- **Pros**: Tailwind v4 CSS-first approach is lean; CSS variables make theme switching a single class toggle; no runtime JS framework overhead for theming
- **Cons**: Requires FOUC prevention script; CSS variable syntax in utility classes is slightly verbose
- **Effort**: Medium

---

### 9. Content Management

#### Option A: Static TypeScript data files

```ts
// lib/data/menu.ts
export const menuItems = [
  { id: 1, name: 'Flat White', price: 4.50, category: 'espresso', description: '...', image: '...' },
  // ...
];

// lib/data/site.ts
export const siteConfig = {
  name: '...',
  address: '...',
  hours: { /* ... */ },
  social: { /* ... */ },
};
```

- **Pros**: Zero cost; type-safe; version-controlled; instant builds; no API calls
- **Cons**: Requires code change for content updates; non-technical staff can't edit
- **Effort**: Low

#### Option B: Sanity/Contentful headless CMS

- **Pros**: Non-technical users can edit content; rich editor experience; preview drafts
- **Cons**: Costs money; adds API latency; over-engineered for a small shop with ~20 menu items
- **Effort**: High (setup + integration + webhooks for rebuilds)

**Recommendation**: **Option A** — static data files. For a small local coffee shop with a handful of menu items and pages, a CMS is overkill. If the user needs content editing later, we can add a CMS incrementally (the component architecture already supports it). The menu data structure should be well-typed so the migration path to a CMS is clear.

---

### 10. Deployment

#### Option A: Vercel (Next.js native)

- **Pros**: One-command deploy; automatic static optimization; Edge/ISR if needed; preview deployments; analytics; free tier works
- **Cons**: Vendor lock-in (but for Next.js, that's the recommendation anyway)
- **Effort**: Low

#### Option B: Static export to Netlify/Cloudflare Pages

- **Pros**: Slightly more portable; CDN distribution
- **Cons**: No ISR; image optimization must be custom (loader); loses some Next.js benefits
- **Effort**: Medium

**Recommendation**: **Option A (Vercel)** — it's the native deployment target for Next.js. The free tier handles a brochure site with ease. If the user ever wants to add a CMS with webhook rebuilds, Vercel makes that trivial.

---

## Recommendation

| Decision | Recommended Approach |
|----------|---------------------|
| **Project structure** | Hybrid: home page with preview sections → dedicated sub-pages |
| **Color strategy** | Warm Espresso + Cream (Coffeewerk inspired) |
| **Component architecture** | Lightweight atomic: `ui/`, `sections/`, `layout/`, `animations/` |
| **Animation strategy** | Scroll-triggered reveals (`whileInView` + `once: true`) + stagger for menus |
| **Typography** | Playfair Display (headings) + Inter (body) via `next/font` |
| **Performance** | Static Generation, `next/image`, `next/font`, minimal Client Components |
| **Responsive** | Standard Tailwind v4 breakpoints, mobile-first |
| **Dark/Light theme** | CSS variables + class-based toggle with FOUC prevention |
| **Content management** | Static TypeScript data files |
| **Deployment** | Vercel |

The core philosophy: **Server-first, animate at the leaf.** Every page is a Server Component by default. Only the isolated animation wrappers (`ScrollReveal`, `StaggerContainer`, `ThemeToggle`) are Client Components. This gives us premium animations without sacrificing performance.

The color strategy mirrors Coffeewerk + Press: two colors (warm cream + deep espresso) that contrast but harmonize. The premium feel comes from the restraint — not from having many colors, but from using the right two.

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **Tailwind v4 breaking changes** | Medium | High | Pin exact version; test with the release candidate before v4 stable |
| **Framer Motion + React 19/Server Components** | Low | Medium | Keep motion components as isolated Client Components; use `'use client'` at leaf level only |
| **Dark mode FOUC** | Low | Medium | Inline script in `<head>` before any CSS loads |
| **Image-heavy gallery slowing LCP** | Low | Medium | Use `next/image` with proper `priority`, `sizes`, and lazy loading |
| **Scope creep (wanting more pages/features)** | Medium | Low | Static data approach makes it easy to add pages; architecture supports growth |
| **No git repo yet** | Low | Low | Initialize repo before first meaningful work |

## Ready for Proposal

**Yes.** This exploration has clarified every key architectural decision. The project is blank, so there are no existing constraints to navigate. All recommendations are grounded in the user's stated requirements (premium, mobile-first, dark/light themes, smooth animations, performance).

**What the orchestrator should tell the user**: The exploration is complete. All 10 areas have been investigated with pros/cons. The recommendation is a hybrid SPA-content approach: a story-driven home page with preview sections linking to detailed sub-pages, animated with Framer Motion scroll-reveals, styled with a warm espresso + cream palette and class-based dark mode via Tailwind v4 CSS variables. Ready to proceed to the Proposal phase.
