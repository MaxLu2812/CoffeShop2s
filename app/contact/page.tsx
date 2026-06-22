import type { Metadata } from "next";
import { shopInfo } from "@/lib/data/site";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/animations/scroll-reveal";
import Heading from "@/components/ui/heading";
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
            <Heading as="h1" variant="section">
              Get in Touch
            </Heading>
            <hr className="mx-auto mt-4 w-12 border-t-2 border-[var(--color-accent)]" />
            <p className="mt-4 font-[var(--font-body)] text-base text-[var(--color-text-secondary)] sm:text-lg">
              We would love to hear from you
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Heading as="h2" variant="card" className="mb-6">
              Send Us a Message
            </Heading>
            <ContactForm />
          </div>

          <div className="space-y-12">
            <OpeningHours />
            <div>
              <Heading as="h3" variant="card" className="mb-6">
                Visit Us
              </Heading>
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
