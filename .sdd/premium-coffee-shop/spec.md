# Specification: Premium Coffee Shop

## 1. Hero Section Specification

### Requirement: Hero MUST display editorial full-viewport landing

The system MUST render a full-viewport hero (`min-h-screen`) with centered typography: the shop name in Playfair Display with generous tracking, a gold accent divider, a subtitle in Inter, and a primary CTA button linking to `/menu`.

#### Scenario: Happy path — hero renders with all elements
- GIVEN the homepage loads
- WHEN the user visits `/`
- THEN a full-viewport section is visible with the shop name, subtitle, divider, and "Discover Our Menu" button
- AND the CSS `animate-fade-in` class applies a subtle entrance on mount

#### Scenario: Edge case — prefers-reduced-motion
- GIVEN the user has `prefers-reduced-motion: reduce` set
- WHEN the homepage loads
- THEN the hero section renders fully visible without the fade-in animation

## 2. About Section Specification

### Requirement: About MUST display editorial story spread

The system MUST render a two-column layout (stacked on mobile) with "Our Story" heading, gold divider, and narrative description derived from `shopInfo.description` in `lib/data/site.ts`.

#### Scenario: Happy path — about renders with story
- GIVEN the homepage loads
- WHEN the user scrolls to the About section
- THEN a two-column layout is visible with heading and narrative text

#### Scenario: Edge case — mobile viewport
- GIVEN the viewport width is 375px
- WHEN the About section renders
- THEN the layout stacks vertically with proper spacing

## 3. Menu Page Specification

### Requirement: Menu MUST display categorized items

The system MUST render a `/menu` route showing all menu items grouped by category (espresso, pour-over, pastries, signature), each with name (Playfair Display), price (accent color), description (Inter), and optional `FEATURED` badge.

#### Scenario: Happy path — full menu renders
- GIVEN the user navigates to `/menu`
- WHEN the page loads
- THEN all 22 items are displayed grouped into 4 categories with prices and descriptions
- AND featured items show a `FEATURED` badge

#### Scenario: Edge case — empty category
- GIVEN a menu data file with no items in a "pastries" category
- WHEN the page renders
- THEN the category heading renders without items or the category is hidden

## 4. Testimonials Section Specification

### Requirement: Testimonials MUST display review grid

The system MUST render a responsive grid of customer testimonials with italic quotes, author names, and star ratings as Unicode characters (★☆).

#### Scenario: Happy path — testimonials grid renders
- GIVEN the homepage loads
- WHEN the user scrolls to the Testimonials section
- THEN 3–6 testimonials render in a responsive grid with stars and quotes

#### Scenario: Edge case — single testimonial
- GIVEN only one testimonial exists in data
- WHEN the section renders
- THEN the single testimonial displays centered without grid layout issues

## 5. FAQ Page Specification

### Requirement: FAQ MUST provide accessible accordion

The system MUST render a `/faq` route with an accordion component that supports single-open expand/collapse, keyboard navigation (Enter/Space to toggle, Tab between items), and ARIA attributes (`aria-expanded` on triggers, `aria-controls` linking to `role="region"` panels, `id` on panels).

#### Scenario: Happy path — accordion opens and closes
- GIVEN the user navigates to `/faq`
- WHEN the user clicks a question
- THEN the answer expands with animation
- AND the same click collapses it
- AND other answers remain unaffected

#### Scenario: Edge case — keyboard navigation
- GIVEN the user tabs to a FAQ trigger and presses Enter
- WHEN the keyboard event fires
- THEN the accordion toggles open/closed
- AND focus remains on the trigger button

## 6. Gallery Section Specification

### Requirement: Gallery MUST display image grid preview

The system MUST render a responsive grid of gallery images using `next/image` with SVG placeholders, linking to a future full gallery page.

#### Scenario: Happy path — gallery renders images
- GIVEN the homepage loads
- WHEN the user scrolls to the Gallery section
- THEN 3 images display in a responsive grid with alt text

#### Scenario: Edge case — broken image src
- GIVEN an image src is invalid
- WHEN `next/image` attempts to load it
- THEN the browser renders the SVG placeholder without layout shift

## 7. Contact Page Specification

### Requirement: Contact MUST display info and presentational form

The system MUST render a `/contact` route with two-column layout: opening hours display via `<dl>`/`<dt>`/`<dd>`, shop address/contact, and a presentational form (name, email, message fields with proper labels — no backend submission).

#### Scenario: Happy path — contact page renders
- GIVEN the user navigates to `/contact`
- WHEN the page loads
- THEN the user sees opening hours, address, phone, email, and form fields with labels

#### Scenario: Edge case — form submission
- GIVEN the user fills all form fields and clicks a non-functional submit
- WHEN no action handler exists
- THEN the page does not navigate, error, or send data anywhere (presentational only)

## 8. Opening Hours Specification

### Requirement: Opening hours MUST display structured data

The system MUST render a daily schedule showing days of the week with open/close times (formatted as e.g. "07:30–17:00") and "Closed" for closed days, using semantic `<dl>`/`<dt>`/`<dd>` markup.

#### Scenario: Happy path — all hours display
- GIVEN the opening hours data has 7 entries
- WHEN the component renders on the Contact page or Footer
- THEN each day shows its hours or "Closed" with proper formatting

#### Scenario: Edge case — closed day
- GIVEN `Sunday` has `closed: true`
- WHEN the hours component renders
- THEN Sunday displays as "Closed" instead of a time range

## 9. Reusable UI Specification

### Requirement: UI primitives MUST be pure Server Components

The system MUST provide Container (responsive max-width centered wrapper), Section (section with background variants), Heading (h1-h4 with Playfair Display), Button (link/button with primary/secondary/ghost variants), and Card (rounded shadow wrapper). All MUST be Server Components with typed props.

#### Scenario: Happy path — primitives render
- GIVEN any page uses Container, Section, Heading, Button, or Card
- WHEN the page renders
- THEN each primitive renders with correct Tailwind classes and semantic HTML element

#### Scenario: Edge case — no children
- GIVEN Container, Section, or Card receives no children
- WHEN the component renders
- THEN an empty wrapper renders without errors

## 10. Theme System Specification

### Requirement: Theme MUST toggle without FOUC

The system MUST provide a dark/light theme toggle using class-based approach: `localStorage` persistence, inline `<script>` in `<head>` to apply `.dark` class before first paint, sun/moon icon toggle with `aria-label="Toggle dark mode"`, and system preference fallback via `prefers-color-scheme`.

#### Scenario: Happy path — theme toggle persists on reload
- GIVEN the user clicks ThemeToggle to switch to dark mode
- WHEN the page reloads
- THEN the page renders in dark mode without flash of unstyled content

#### Scenario: Edge case — no localStorage
- GIVEN `localStorage` is unavailable (private browsing restrictions)
- WHEN the page loads
- THEN the theme falls back to system preference
- AND toggle still works for the session

## 11. Scroll Animations Specification

### Requirement: Animations MUST be subtle and performant

The system MUST use Framer Motion `whileInView` with `once: true` and `viewport={{ margin: '-80px' }}` for scroll-triggered reveals. Only `opacity` and `y` transforms MUST be animated. `prefers-reduced-motion` MUST disable all animations via `useReducedMotion()`.

#### Scenario: Happy path — section animates on scroll
- GIVEN the user scrolls down the page
- WHEN a section enters the viewport
- THEN it fades in and slides up over 0.5s

#### Scenario: Edge case — prefers-reduced-motion
- GIVEN `prefers-reduced-motion: reduce` is active
- WHEN any animated section scrolls into view
- THEN the section renders fully visible without animation

## 12. Layout Shell Specification

### Requirement: Layout MUST provide navigation shell

The system MUST render a sticky Header with logo, nav links (Home, Menu, FAQ, Contact), ThemeToggle, and hamburger button for mobile. Footer MUST render shop info, opening hours summary, social links, and copyright. Both MUST be Server Components.

#### Scenario: Happy path — header and footer render
- GIVEN any page loads
- WHEN the layout renders
- THEN Header shows at top with all nav links and toggle
- AND Footer shows at bottom with shop info and hours

#### Scenario: Edge case — mobile viewport
- GIVEN viewport width is 375px
- WHEN the Header renders
- THEN nav links are hidden behind a hamburger button
- AND the logo and ThemeToggle remain visible

## 13. Static Content Specification

### Requirement: Content MUST be in typed data files

The system MUST store all site content in `lib/data/*.ts` with TypeScript interfaces. Text fields MUST use i18n-ready patterns (strings in current implementation, structured for future locale splitting). Components MUST NOT hardcode content strings.

#### Scenario: Happy path — data imports correctly
- GIVEN any page or section imports from `lib/data/`
- WHEN the application builds
- THEN all data types resolve without errors

#### Scenario: Edge case — missing data field
- GIVEN a MenuItem lacks a `description`
- WHEN the menu renders
- THEN the item renders without description (no crash)

## 14. SEO Metadata Specification

### Requirement: SEO MUST provide rich metadata

The system MUST export `generateMetadata()` from each page route with title, description, and OpenGraph tags. Root layout MUST include JSON-LD `LocalBusiness` structured data. Static `sitemap.ts` and `robots.ts` MUST be generated.

#### Scenario: Happy path — OG tags present
- GIVEN any page is rendered
- WHEN checking the `<head>` element
- THEN OG title, description, and image meta tags are present

#### Scenario: Edge case — missing OG image
- GIVEN `og-image.jpg` does not exist in `public/`
- WHEN the root layout renders
- THEN the OG tag still renders with a fallback or placeholder URL
- AND the page does not crash
