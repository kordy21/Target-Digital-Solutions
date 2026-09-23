"use client";

import { getProjects } from "@/features/portfolio/data/portfolio-data";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PortfolioFilter } from "./portfolio-filter";
import { FadeIn } from "@/components/shared/animations";
import { ProjectCard } from "./project-card";

export function PortfolioList() {
  const t = useTranslations("portfolioPage");
  const [activeCategory, setActiveCategory] = useState("all");
  const projects = getProjects(t);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.categoryId === activeCategory);

  return (
    <div className="w-full relative py-16 overflow-hidden">
      
      {/* Background Particles (applied broadly to the list area) */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-5 dark:opacity-10">
      </div>

      <div className="w-full mx-auto px-6 md:px-20 relative z-10">
        {/* Filter */}
        <PortfolioFilter activeCategory={activeCategory} onSelect={setActiveCategory} />

        {/* List of Projects */}
        <div className="flex flex-col w-full relative">
          
          {/* Map Projects */}
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}><ProjectCard project={project} index={index} /></FadeIn>
          ))}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="w-full py-20 flex justify-center items-center text-muted-foreground font-cairo">
              لا توجد مشاريع في هذا التصنيف حالياً.
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
