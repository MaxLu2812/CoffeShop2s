import type { SectionProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const backgroundMap: Record<string, string> = {
  light: "bg-[var(--color-bg-primary)]",
  dark: "bg-[var(--color-bg-secondary)]",
  cream: "bg-[var(--color-surface-raised)]",
  espresso: "bg-[var(--color-bg-primary)]",
};

export default function Section({
  children,
  className,
  id,
  background = "light",
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        backgroundMap[background],
        className,
      )}
    >
      {children}
    </section>
  );
}
