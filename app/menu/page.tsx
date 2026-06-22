import type { Metadata } from "next";
import { menuItems } from "@/lib/data/menu";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import ScrollReveal from "@/components/animations/scroll-reveal";
import Heading from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our carefully curated menu of single-origin coffees, handcrafted espresso drinks, and freshly baked pastries.",
  openGraph: {
    title: "Menu — Coffeewerk",
    description:
      "Specialty coffee, pour-over, pastries, and signature drinks. Every item crafted with care.",
  },
};

const categoryLabels: Record<string, string> = {
  espresso: "Espresso",
  "pour-over": "Pour Over",
  pastries: "Pastries",
  signature: "Signature",
};

const categoryOrder = ["espresso", "pour-over", "pastries", "signature"];

export default function MenuPage() {
  return (
    <Section background="light" aria-label="Full menu">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <Heading as="h1" variant="section">
              Our Menu
            </Heading>
            <hr className="mx-auto mt-4 w-12 border-t-2 border-[var(--color-accent)]" />
            <p className="mt-4 font-[var(--font-body)] text-base text-[var(--color-text-secondary)] sm:text-lg">
              Specialty coffee, carefully sourced
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {categoryOrder.map((cat) => {
            const items = menuItems.filter((i) => i.category === cat);
            return (
              <section key={cat} aria-label={categoryLabels[cat]}>
                <div className="mb-10 text-center font-[var(--font-heading)] text-lg font-semibold tracking-[0.2em] text-[var(--color-text-secondary)]">
                  <span className="mr-3 inline-block h-px w-6 align-middle bg-[var(--color-accent)]" />
                  {categoryLabels[cat]}
                  <span className="ml-3 inline-block h-px w-6 align-middle bg-[var(--color-accent)]" />
                </div>
                <div className="mx-auto max-w-2xl space-y-8">
                  {items.map((item) => (
                    <div key={item.id}>
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Heading as="h3" variant="card">
                            {item.name}
                          </Heading>
                          {item.featured && (
                            <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-wider text-white">
                              Featured
                            </span>
                          )}
                        </div>
                        <span className="shrink-0 font-[var(--font-body)] text-lg font-medium text-[var(--color-accent)]">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 font-[var(--font-body)] text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
