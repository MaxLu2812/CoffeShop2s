import { testimonials } from "@/lib/data/testimonials";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import ScrollReveal from "@/components/animations/scroll-reveal";
import StaggerContainer from "@/components/animations/stagger-container";
import RevealItem from "@/components/animations/reveal-item";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-[var(--color-accent)]" aria-label={`${rating} out of 5 stars`}>
      {"\u2605".repeat(rating)}
      {"\u2606".repeat(5 - rating)}
    </span>
  );
}

const display = testimonials.slice(0, 3);

export default function Testimonials() {
  return (
    <ScrollReveal>
      <Section aria-label="Customer testimonials">
        <Container>
          <div className="text-center">
            <Heading as="h2" variant="section">
              What Our Guests Say
            </Heading>
            <hr className="mx-auto mt-4 w-12 border-t-2 border-[var(--color-accent)]" />
          </div>

          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {display.map((t) => (
              <RevealItem key={t.id}>
                <Card variant="glass">
                  <StarRating rating={t.rating} />
                  <span
                    className="block font-[var(--font-heading)] text-4xl leading-none text-[var(--color-accent)] opacity-40"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="mt-2 font-[var(--font-body)] text-base italic leading-relaxed text-[var(--color-text-secondary)]">
                    {t.quote}
                  </p>
                  <p className="mt-4 font-[var(--font-heading)] text-sm font-semibold text-[var(--color-text-primary)]">
                    &mdash; {t.name}
                  </p>
                </Card>
              </RevealItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </ScrollReveal>
  );
}
