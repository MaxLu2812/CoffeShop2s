import { shopInfo } from "@/lib/data/site";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Heading from "@/components/ui/heading";
import ScrollReveal from "@/components/animations/scroll-reveal";

function splitIntoParagraphs(text: string): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/);
  if (sentences.length <= 2) return [text];
  const mid = Math.ceil(sentences.length / 2);
  return [sentences.slice(0, mid).join(" "), sentences.slice(mid).join(" ")];
}

const paragraphs = splitIntoParagraphs(shopInfo.description);

export default function About() {
  return (
    <ScrollReveal>
      <Section id="about" background="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left column — editorial heading + pull-quote */}
            <div className="lg:col-span-5">
              <Heading as="h2" variant="section">
                Our Story
              </Heading>
              <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
              <blockquote className="mt-8 border-l-2 border-[var(--color-accent)] pl-6">
                <p className="font-[var(--font-heading)] text-xl italic leading-relaxed tracking-wide text-[var(--color-accent)] sm:text-2xl">
                  &ldquo;Coffee is a language, and every cup tells a story worth sharing.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Right column — narrative */}
            <div className="space-y-6 lg:col-span-6 lg:col-start-7">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-[var(--font-body)] text-base leading-relaxed text-[var(--color-text-primary)] sm:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Full-width gold accent divider */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
        </Container>
      </Section>
    </ScrollReveal>
  );
}
