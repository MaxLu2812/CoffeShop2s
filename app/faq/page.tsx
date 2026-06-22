import type { Metadata } from "next";
import { faqEntries } from "@/lib/data/faq";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/animations/scroll-reveal";
import Heading from "@/components/ui/heading";
import FaqAccordion from "@/components/sections/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about Coffeewerk — our coffee sourcing, opening hours, seating, and more.",
  openGraph: {
    title: "FAQ — Coffeewerk",
    description: "Everything you need to know about our shop, coffee, and space.",
  },
};

export default function FaqPage() {
  return (
    <Section background="light" aria-label="Frequently asked questions">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <Heading as="h1" variant="section">
              Frequently Asked Questions
            </Heading>
            <hr className="mx-auto mt-4 w-12 border-t-2 border-[var(--color-accent)]" />
            <p className="mt-4 font-[var(--font-body)] text-base text-[var(--color-text-secondary)] sm:text-lg">
              Everything you need to know about Coffeewerk
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-3xl">
          <FaqAccordion entries={faqEntries} />
        </div>
      </Container>
    </Section>
  );
}
