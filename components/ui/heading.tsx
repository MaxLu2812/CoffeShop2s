import type { HeadingProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const variantMap: Record<string, string> = {
  hero: "text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] tracking-wide",
  section: "text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-wide",
  card: "text-xl sm:text-2xl font-normal leading-snug tracking-normal",
  subtitle: "text-lg sm:text-xl font-light leading-relaxed tracking-normal",
  eyebrow: "text-xs sm:text-sm font-medium uppercase tracking-[0.25em]",
};

const tagMap: Record<string, string> = {
  h1: variantMap.hero,
  h2: variantMap.section,
  h3: variantMap.card,
  h4: variantMap.subtitle,
  h5: variantMap.eyebrow,
};

export default function Heading({
  children,
  as: Tag = "h2",
  variant,
  className,
}: HeadingProps) {
  const variantClass = variant ? variantMap[variant] : tagMap[Tag] || "";

  return (
    <Tag
      className={cn(
        "font-[var(--font-heading)] text-[var(--color-text-primary)]",
        variantClass,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
