import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col items-start gap-4 p-8 bg-background border border-border rounded-[20px] hover:shadow-lg transition-shadow group cursor-pointer", className)}>
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-[24px] font-cairo font-bold text-foreground">
        {title}
      </h3>
      <p className="text-[16px] text-muted-foreground font-cairo leading-relaxed">
        {description}
      </p>
    </div>
  );
}
