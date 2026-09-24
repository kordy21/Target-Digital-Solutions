import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "items-start text-start",
    center: "items-center text-center",
    right: "items-end text-end",
  };

  return (
    <div className={cn("flex flex-col w-full", alignmentClasses[align], className)}>
      {eyebrow && (
        <span className="text-primary font-cairo text-lg md:text-xl font-bold mb-4 block">
          {eyebrow}
        </span>
      )}
      
      <div className={cn("mb-6", subtitle ? "mb-4" : "mb-10")}>
        <h2 className="text-4xl md:text-4.5xl lg:text-5xl font-cairo font-extrabold text-foreground leading-tight">
          <SplitTextReveal text={title} />
        </h2>
      </div>

      {subtitle && (
        <h3 className="text-xl md:text-2xl font-cairo font-bold text-primary mb-4">
          {subtitle}
        </h3>
      )}

      {description && (
        <p className="text-base md:text-lg font-cairo text-muted-foreground leading-loose lg:max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
