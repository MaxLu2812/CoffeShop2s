import Link from "next/link";
import type { ButtonProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border-transparent",
  secondary:
    "bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:text-[var(--color-accent)] border-transparent",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-block rounded-lg px-6 py-3 text-center font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
