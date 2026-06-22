import type { ContainerProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12", className)}
    >
      {children}
    </Component>
  );
}
