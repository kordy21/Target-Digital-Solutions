import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  title: string;
  description?: string;
  primaryActionText: string;
  onPrimaryAction?: () => void;
  className?: string;
}

export function CtaBanner({ title, description, primaryActionText, onPrimaryAction, className }: CtaBannerProps) {
  return (
    <div className={cn("w-full bg-primary text-primary-foreground rounded-[30px] p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg", className)}>
      <div className="flex flex-col gap-4 max-w-2xl text-center md:text-start">
        <h2 className="text-[40px] font-cairo font-bold leading-tight">{title}</h2>
        {description && <p className="text-[20px] font-cairo opacity-90">{description}</p>}
      </div>
      <Button 
        onClick={onPrimaryAction} 
        variant="secondary"
        className="h-16.5 px-10 rounded-[33px] text-[20px] font-cairo shadow-md hover:shadow-lg transition-all"
      >
        {primaryActionText}
      </Button>
    </div>
  );
}
