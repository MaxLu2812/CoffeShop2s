import { shopInfo } from "@/lib/data/site";
import Button from "@/components/ui/button";
import ScrollReveal from "@/components/animations/scroll-reveal";

export default function Hero() {
  return (
    <ScrollReveal>
      <section aria-label="Hero" className="flex min-h-screen items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h1 className="animate-fade-in font-[var(--font-heading)] text-5xl tracking-[0.15em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
            {shopInfo.name.toUpperCase()}
          </h1>
          <hr className="mx-auto mt-6 w-16 border-t-2 border-[var(--color-accent)] sm:mt-8" />
          <p className="mx-auto mt-6 max-w-xl font-[var(--font-body)] text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl">
            Where every cup tells a story
          </p>
          <div className="mt-10">
            <Button href="/menu">Discover Our Menu</Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
