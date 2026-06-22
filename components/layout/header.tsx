import Link from "next/link";
import Container from "@/components/ui/container";
import ThemeToggle from "@/components/layout/theme-toggle";
import { navLinks, shopInfo } from "@/lib/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-cream-200)] bg-[var(--color-bg-primary)]/95 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
        >
          {shopInfo.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile hamburger (button only — mobile nav in Phase 5) */}
          <button
            aria-label="Open menu"
            className="rounded-full p-2 text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-secondary)] md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
