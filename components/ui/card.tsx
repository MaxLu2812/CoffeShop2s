import type { CardProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const variantStyles: Record<string, string> = {
  default:
    "rounded-xl bg-[var(--color-bg-primary)] p-6 shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg",
  glass:
    "rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-[var(--color-cream-100)]/10 border-t-2 border-t-[var(--color-accent)] bg-[var(--color-surface-overlay)] backdrop-blur-md",
};

export default function Card({ children, className, variant = "default" }: CardProps) {
  return (
    <div className={cn(variantStyles[variant], className)}>
      {children}
    </div>
  );
}
