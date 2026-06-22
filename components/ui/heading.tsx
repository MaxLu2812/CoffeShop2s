import type { HeadingProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const sizeMap: Record<string, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight",
  h2: "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
  h3: "text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug",
  h4: "text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug",
};

export default function Heading({
  children,
  as: Tag = "h2",
  className,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-[var(--font-heading)] tracking-tight text-[var(--color-text-primary)]",
        sizeMap[Tag],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
