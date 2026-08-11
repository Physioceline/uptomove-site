import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "yellow" | "orange" | "teal" | "none";
  hover?: boolean;
}

export function Card({ children, className, accent = "none", hover = false }: CardProps) {
  const accentBorder: Record<string, string> = {
    yellow: "border-t-4 border-t-yellow",
    orange: "border-t-4 border-t-orange",
    teal: "border-t-4 border-t-teal",
    none: "",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-[1.25rem] p-6 shadow-[var(--shadow-card)]",
        accentBorder[accent],
        hover && "transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
