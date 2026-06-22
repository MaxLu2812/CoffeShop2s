import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/lib/data/gallery";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import ScrollReveal from "@/components/animations/scroll-reveal";

const display = galleryImages.slice(0, 4);

export default function GalleryPreview() {
  return (
    <ScrollReveal>
      <section aria-label="Coffee shop gallery" className="py-16 sm:py-20 lg:py-24">
        <Container variant="wide">
          <div className="text-center">
            <Heading as="h2" variant="section">
              Our Space
            </Heading>
            <div className="mx-auto mt-4 h-px w-12 bg-[var(--color-accent)]" />
          </div>

          <div className="mt-12 grid gap-1 sm:grid-cols-3">
            {/* Row 1: large + small */}
            <div className="overflow-hidden sm:col-span-2">
              <Image
                src={display[0].src}
                alt={display[0].alt}
                width={display[0].width}
                height={display[0].height}
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-96"
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src={display[1].src}
                alt={display[1].alt}
                width={display[1].width}
                height={display[1].height}
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-96"
              />
            </div>

            {/* Row 2: small + large */}
            <div className="overflow-hidden sm:col-span-1">
              <Image
                src={display[2].src}
                alt={display[2].alt}
                width={display[2].width}
                height={display[2].height}
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-96"
              />
            </div>
            <div className="overflow-hidden sm:col-span-2">
              <Image
                src={display[3].src}
                alt={display[3].alt}
                width={display[3].width}
                height={display[3].height}
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-96"
              />
            </div>
          </div>

          {/* Gold divider + subtle link */}
          <div className="mx-auto mt-12 flex max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-40" />
            <Link
              href="#"
              className="flex-shrink-0 font-[var(--font-body)] text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
            >
              View Gallery &rarr;
            </Link>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-40" />
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}
