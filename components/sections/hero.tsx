import { shopInfo } from "@/lib/data/site";
import Link from "next/link";
import ScrollReveal from "@/components/animations/scroll-reveal";
import Heading from "@/components/ui/heading";

export default function Hero() {
  return (
    <ScrollReveal>
      <section
        aria-label="Hero"
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[var(--color-espresso-900)] via-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]"
      >
        {/* Subtle SVG texture overlay — pure CSS, no image load */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4956a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial glow accent — off-center for cinematic depth */}
        <div className="pointer-events-none absolute -top-1/2 right-0 h-[120%] w-1/2 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(196,149,106,0.10)_0%,transparent_60%)]" />

        {/* Main content — asymmetric grid */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 sm:px-8 lg:grid-cols-12 lg:px-12">
          {/* Left column — text content */}
          <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-2">
            {/* Eyebrow label */}
            <Heading as="h5" variant="eyebrow" className="mb-4 text-[var(--color-accent)]">
              Est. 2023 — Specialty Coffee
            </Heading>

            {/* Main heading — Playfair Display, editorial size */}
            <h1 className="font-[var(--font-heading)] text-5xl leading-[1.1] tracking-wide text-[var(--color-text-primary)] sm:text-6xl md:text-7xl lg:text-8xl">
              {shopInfo.name}
            </h1>

            {/* Gold accent divider */}
            <div className="my-6 h-px w-16 bg-[var(--color-accent)] sm:my-8 sm:w-20" />

            {/* Tagline — generous tracking, refined weight */}
            <p className="max-w-lg font-[var(--font-body)] text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg lg:text-xl">
              {shopInfo.description}
            </p>

            {/* CTAs — horizontal group */}
            <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
              <Link
                href="/menu"
                className="inline-block rounded-sm bg-[var(--color-accent)] px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Discover Our Menu
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-sm border border-[var(--color-accent)] px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Visit Us
              </Link>
            </div>
          </div>

          {/* Right column — decorative gold "C" monogram (desktop only) */}
          <div className="hidden items-center justify-center lg:col-span-3 lg:flex">
            <div className="flex h-24 w-24 animate-pulse-slow items-center justify-center rounded-full border border-[var(--color-accent)]/40 md:h-28 md:w-28">
              <span className="font-[var(--font-heading)] text-5xl text-[var(--color-accent)]">C</span>
            </div>
          </div>
        </div>

        {/* Bottom fade — smooth transition to next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
      </section>
    </ScrollReveal>
  );
}
