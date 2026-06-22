import type { Metadata } from "next";
import { shopInfo } from "@/lib/data/site";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/animations/scroll-reveal";
import ContactForm from "@/components/sections/contact-form";
import OpeningHours from "@/components/sections/opening-hours";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Coffeewerk. Find our location, opening hours, and send us a message.",
  openGraph: {
    title: "Contact — Coffeewerk",
    description: "Visit us at 42 Grind Lane, London, or drop us a line.",
  },
};

export default function ContactPage() {
  return (
    <Section background="light" aria-label="Contact information">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <h1 className="font-[var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
              Get in Touch
            </h1>
            <hr className="mx-auto mt-4 w-12 border-t-2 border-[var(--color-accent)]" />
            <p className="mt-4 font-[var(--font-body)] text-base text-[var(--color-text-secondary)] sm:text-lg">
              We would love to hear from you
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text-primary)]">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-12">
            <OpeningHours />
            <div>
              <h3 className="mb-6 font-[var(--font-heading)] text-lg font-semibold text-[var(--color-text-primary)]">
                Visit Us
              </h3>
              <address className="space-y-2 not-italic text-sm text-[var(--color-text-secondary)]">
                <p>{shopInfo.address}</p>
                <p><a href={`tel:${shopInfo.phone}`} className="transition-colors hover:text-[var(--color-accent)]">{shopInfo.phone}</a></p>
                <p><a href={`mailto:${shopInfo.email}`} className="transition-colors hover:text-[var(--color-accent)]">{shopInfo.email}</a></p>
              </address>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
