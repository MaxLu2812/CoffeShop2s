import Link from "next/link";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section>
      <Container className="py-24 text-center">
        <h1 className="font-heading text-6xl tracking-wider text-accent md:text-8xl">
          404
        </h1>
        <p className="font-body mx-auto mb-8 max-w-md text-lg text-text-secondary">
          This page seems to have wandered off. Perhaps you&apos;d like a coffee
          while you wait?
        </p>
        <Button href="/">Back to Home</Button>
      </Container>
    </Section>
  );
}
