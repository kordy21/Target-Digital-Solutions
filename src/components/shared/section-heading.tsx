import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import { cn } from "@/lib/utils";



import { ParticleHeading } from "@/components/shared/particle-heading";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  disableParticles?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  align = "center",
  className,
  disableParticles = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "items-start text-start",
    center: "items-center text-center",
    right: "items-end text-end",
  };

  // Use the brand logo shape
  const shape = "logo";

  return (
    <div className={cn("flex flex-col w-full", alignmentClasses[align], className)}>
      {eyebrow && (
        <span className="text-primary font-cairo text-lg md:text-xl font-bold mb-4 w-full text-center md:text-start">
          {eyebrow}
        </span>
      )}
      
      <div className={cn("w-full flex flex-col", alignmentClasses[align], subtitle ? "mb-4" : "mb-10")}>
        {disableParticles ? (
          <h2 className="text-xl md:text-4.5xl lg:text-5xl text-center md:text-start font-cairo font-extrabold text-foreground leading-tight">
            <SplitTextReveal text={title} />
          </h2>
        ) : (
          <ParticleHeading shape={shape} canvasPadding={60}>
            <h2 className="text-xl md:text-4.5xl lg:text-5xl mb-6 text-center md:text-start font-cairo font-extrabold text-foreground leading-tight">
              <SplitTextReveal text={title} />
            </h2>
          </ParticleHeading>
        )}
      </div>

      {subtitle && (
        <h3 className="text-xl md:text-2xl font-cairo font-bold text-primary mb-4 w-full text-center md:text-start">
          {subtitle}
        </h3>
      )}

      {description && (
        <p className="text-base md:text-lg text-center md:text-start font-cairo text-muted-foreground leading-loose lg:max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

