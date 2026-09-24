"use client";

import { FadeIn } from "@/components/shared/animations";
import { jobCategories, jobs } from "@/data/careers";
import { useLocale } from "next-intl";
import { useState } from "react";
import Bubbles from "@/assets/bubbles.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { JobCard } from "./job-card";

export function JobList() {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredJobs = activeCategory === "all" 
    ? jobs 
    : jobs.filter(job => job.categoryId === activeCategory);

  return (
    <section className="w-full relative px-6 md:px-20 py-24 bg-background">
      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none z-0 opacity-40 dark:opacity-20 hidden md:block top-10 -left-5 h-40 md:h-64 rotate-180"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute pointer-events-none z-0 opacity-30 dark:opacity-10 hidden md:block bottom-1/4 right-0 h-32 md:h-48 -rotate-90"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col bg-background rounded-[2.5rem] p-10 md:p-16 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10 overflow-hidden">
      
      {/* Filters */}
      <div className="w-full flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16">
        {jobCategories.map((cat, index) => {
          const isActive = activeCategory === cat.id;
          
          // Calculate actual count
          const count = cat.id === "all" 
            ? jobs.length 
            : jobs.filter(j => j.categoryId === cat.id).length;
            
          const paddedCount = count < 10 ? `0${count}` : `${count}`;

          return (
            <FadeIn key={cat.id} delay={index * 0.1} direction="down" className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setActiveCategory(cat.id)}
                className="group flex items-start gap-1 font-cairo transition-all"
              >
                <span className={`text-sm md:text-base transition-colors ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                  {isRTL ? cat.nameAr : cat.nameEn}
                </span>
                <span className={`text-[10px] md:text-xs font-bold leading-none mt-1 transition-colors ${isActive ? 'text-primary/70' : 'text-muted-foreground group-hover:text-primary/70'}`}>
                  {paddedCount}
                </span>
              </button>
              {/* Divider unless last item */}
              {index !== jobCategories.length - 1 && (
                <span className="text-muted-foreground/40 text-xl font-light">/</span>
              )}
            </FadeIn>
          );
        })}
      </div>

      {/* Grid */}
      <div 
        key={activeCategory} // Force re-animation on filter change
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {filteredJobs.map((job, index) => (
          <FadeIn key={job.id} delay={index * 0.15} direction="up">
            <JobCard job={job} />
          </FadeIn>
        ))}
        {filteredJobs.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground font-cairo">
            {isRTL ? "لا توجد وظائف متاحة في هذا القسم حالياً." : "No jobs available in this category currently."}
          </div>
        )}
      </div>

      </div>
    </section>
  );
}
