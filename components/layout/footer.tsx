import Container from "@/components/ui/container";
import { shopInfo } from "@/lib/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-primary)] text-[var(--color-cream-100)]">
      {/* Gold top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Shop info */}
          <div>
            <h3 className="font-[var(--font-heading)] text-lg tracking-wide text-[var(--color-cream-100)]">
              {shopInfo.name}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-cream-200)]">
              {shopInfo.tagline}
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-[var(--color-cream-300)]">
              {shopInfo.address}
              <br />
              {shopInfo.phone}
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-[var(--font-heading)] text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-accent)]">
              Opening Hours
            </h4>
            <dl className="mt-4 space-y-2 text-sm text-[var(--color-cream-200)]">
              <div className="flex justify-between">
                <dt>Mon – Fri</dt>
                <dd>7:00 – 18:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd>8:00 – 17:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday</dt>
                <dd>9:00 – 15:00</dd>
              </div>
            </dl>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[var(--font-heading)] text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-accent)]">
              Follow Us
            </h4>
            <div className="mt-4 flex gap-4">
              {shopInfo.social.instagram && (
                <a
                  href={shopInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[var(--color-cream-300)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[var(--color-cream-100)]/10 pt-6 text-center text-xs text-[var(--color-cream-300)]">
          &copy; {year} {shopInfo.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
