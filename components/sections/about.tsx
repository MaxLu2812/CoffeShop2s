import { shopInfo } from "@/lib/data/site";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
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
      <Section id="about" background="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column: heading with divider */}
            <div>
              <h2 className="font-[var(--font-heading)] text-4xl tracking-wide text-[var(--color-text-primary)] sm:text-5xl">
                Our Story
              </h2>
              <hr className="mt-4 w-12 border-t-2 border-[var(--color-accent)]" />
              <p className="mt-6 font-[var(--font-body)] text-lg leading-relaxed text-[var(--color-text-secondary)]">
                Crafting exceptional coffee experiences since 2018.
              </p>
            </div>
            {/* Right column: narrative paragraphs */}
            <div className="space-y-6">
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
        </Container>
      </Section>
    </ScrollReveal>
  );
}
