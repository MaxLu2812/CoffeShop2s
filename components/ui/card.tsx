import type { CardProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const variantStyles: Record<string, string> = {
  default:
    "rounded-xl bg-[var(--color-bg-primary)] p-6 shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg",
  glass:
    "rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md border-t-2 border-t-[var(--color-accent)] bg-white/60 backdrop-blur-md border border-white/30 dark:bg-[var(--color-surface-raised)]/80 dark:border-white/5",
};

export default function Card({ children, className, variant = "default" }: CardProps) {
  return (
    <div className={cn(variantStyles[variant], className)}>
      {children}
    </div>
  );
}
