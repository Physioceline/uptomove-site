import { cn } from "@/lib/utils";

type BadgeVariant = "navy" | "yellow" | "orange" | "teal" | "cream";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  navy: "bg-navy text-white",
  yellow: "bg-yellow text-navy",
  orange: "bg-orange text-white",
  teal: "bg-teal text-white",
  cream: "bg-cream text-navy border border-navy-100",
};

export function Badge({ children, variant = "navy", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
