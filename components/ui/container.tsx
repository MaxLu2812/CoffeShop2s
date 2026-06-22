import type { ContainerProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const widthMap: Record<string, string> = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

export default function Container({
  children,
  className,
  as: Component = "div",
  variant = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        widthMap[variant],
        className,
      )}
    >
      {children}
    </Component>
  );
}
