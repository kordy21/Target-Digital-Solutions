"use client";

import { useTranslations } from "next-intl";
import { getCategories } from "@/features/portfolio/data/portfolio-data";
import { cn } from "@/lib/utils";

interface PortfolioFilterProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

export function PortfolioFilter({ activeCategory, onSelect }: PortfolioFilterProps) {
  const t = useTranslations("portfolioPage");
  const categories = getCategories(t);

  return (
    <div className="w-full flex justify-center mb-16">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-5xl mx-auto">
        {categories.map((category, index) => {
          const isActive = activeCategory === category.id;
          return (
            <div key={category.id} className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => onSelect(category.id)}
                className={cn(
                  "font-cairo text-[14px] md:text-[18px] font-bold transition-colors flex items-center gap-2",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span>{category.label}</span>
                <span className={cn(
                  "text-[12px] md:text-[14px]",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}>
                  {category.count.toString().padStart(2, '0')}
                </span>
              </button>
              
              {/* Divider except for last item */}
              {index < categories.length - 1 && (
                <span className="text-muted-foreground/30 font-light text-[18px]">/</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
