import { clsx } from "clsx";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  variant?: "hero" | "white" | "muted";
  className?: string;
  narrow?: boolean;
}

export function SectionWrapper({
  id,
  children,
  variant = "white",
  className,
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-section={id}
      className={clsx(
        "relative",
        variant === "hero" && "bg-ink-950 text-white",
        variant === "white" && "bg-white",
        variant === "muted" && "bg-ink-50",
        className
      )}
    >
      <div
        className={clsx(
          "mx-auto px-6 py-16 md:py-24 lg:py-32",
          narrow ? "max-w-3xl" : "max-w-5xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
