import type { CardProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-[var(--color-bg-primary)] p-6 shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
