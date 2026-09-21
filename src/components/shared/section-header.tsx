import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ title, eyebrow, description, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4", 
      align === "center" && "items-center text-center",
      align === "left" && "items-start text-start",
      align === "right" && "items-end text-end",
      className
    )}>
      {eyebrow && (
        <span className="text-primary font-cairo text-[20px] font-semibold uppercase tracking-wider">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[40px] md:text-[50px] font-cairo font-extrabold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[20px] text-muted-foreground font-cairo max-w-2xl mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
