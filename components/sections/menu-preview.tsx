import Link from "next/link";
import { menuItems } from "@/lib/data/menu";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import ScrollReveal from "@/components/animations/scroll-reveal";
import StaggerContainer from "@/components/animations/stagger-container";
import RevealItem from "@/components/animations/reveal-item";

const featured = menuItems.filter((item) => item.featured).slice(0, 4);

export default function MenuPreview() {
  return (
    <ScrollReveal>
      <Section background="cream" aria-label="Featured menu items">
        <Container>
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl tracking-wide text-[var(--color-text-primary)] sm:text-4xl">
              From Our Menu
            </h2>
            <hr className="mx-auto mt-4 w-12 border-t-2 border-[var(--color-accent)]" />
            <p className="mt-4 font-[var(--font-body)] text-base text-[var(--color-text-secondary)] sm:text-lg">
              A selection of our favourites
            </p>
          </div>

          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <RevealItem key={item.id}>
                <Card>
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[var(--color-text-primary)]">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-[var(--font-body)] text-lg font-medium text-[var(--color-accent)]">
                    {item.price}
                  </p>
                  <p className="mt-2 line-clamp-2 font-[var(--font-body)] text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </Card>
              </RevealItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
            >
              View Full Menu
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </Section>
    </ScrollReveal>
  );
}
