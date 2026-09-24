"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { FadeIn } from "@/components/shared/animations";
import { SolutionCard } from "./solution-card";
import { solutionCategories, solutions } from "@/data/solutions";

export function SolutionList() {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [activeCategory, setActiveCategory] = useState("ecommerce"); // Set 'ecommerce' as default active like in the design

  const filteredSolutions = activeCategory === "all" 
    ? solutions 
    : solutions.filter(sol => sol.categoryId === activeCategory);

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 py-20">
      
      {/* Filters */}
      <div className="w-full flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16">
        {solutionCategories.map((cat, index) => {
          const isActive = activeCategory === cat.id;
          
          // Calculate actual count
          const count = cat.id === "all" 
            ? solutions.length 
            : solutions.filter(s => s.categoryId === cat.id).length;
            
          const paddedCount = count < 10 ? `0${count}` : `${count}`;

          return (
            <FadeIn key={cat.id} delay={index * 0.1} direction="down" className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setActiveCategory(cat.id)}
                className="group flex items-start gap-1 font-cairo transition-all"
              >
                <span className={`text-sm md:text-base font-bold transition-colors ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                  {isRTL ? cat.nameAr : cat.nameEn}
                </span>
                <span className={`text-[10px] md:text-xs font-bold leading-none mt-1 transition-colors ${isActive ? 'text-primary/70' : 'text-muted-foreground group-hover:text-primary/70'}`}>
                  {paddedCount}
                </span>
              </button>
              {/* Divider unless last item */}
              {index !== solutionCategories.length - 1 && (
                <span className="text-muted-foreground/40 text-xl font-light">/</span>
              )}
            </FadeIn>
          );
        })}
      </div>

      {/* Grid */}
      <div 
        key={activeCategory} // Force re-animation on filter change
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
      >
        {filteredSolutions.map((sol, index) => (
          <FadeIn 
            key={sol.id} 
            delay={index * 0.15} 
            direction="up"
            className={sol.featured ? "md:col-span-2" : "col-span-1"}
          >
            <SolutionCard solution={sol} />
          </FadeIn>
        ))}
        {filteredSolutions.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground font-cairo">
            {isRTL ? "لا توجد حلول متاحة في هذا القسم حالياً." : "No solutions available in this category currently."}
          </div>
        )}
      </div>

    </div>
  );
}
