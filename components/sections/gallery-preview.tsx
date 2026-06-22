import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/lib/data/gallery";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import ScrollReveal from "@/components/animations/scroll-reveal";
import StaggerContainer from "@/components/animations/stagger-container";
import RevealItem from "@/components/animations/reveal-item";

const display = galleryImages.slice(0, 3);

export default function GalleryPreview() {
  return (
    <ScrollReveal>
      <Section background="cream" aria-label="Coffee shop gallery">
        <Container>
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl tracking-wide text-[var(--color-text-primary)] sm:text-4xl">
              Our Space
            </h2>
            <hr className="mx-auto mt-4 w-12 border-t-2 border-[var(--color-accent)]" />
          </div>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {display.map((img) => (
              <RevealItem key={img.id}>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </RevealItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
            >
              View Gallery
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </Section>
    </ScrollReveal>
  );
}
