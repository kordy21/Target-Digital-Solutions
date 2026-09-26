"use client";

import { FadeIn, SlideIn } from "@/components/shared/animations";
import Image from "next/image";
import { ProjectData } from "./project-card";
import { useTranslations } from "next-intl";
import Bubbles from "@/assets/bubbles.png";
import { motion } from "framer-motion";
import { Counter } from "@/components/shared/counter";

export function ProjectStatsBanner({ project }: { project: ProjectData }) {
  const t = useTranslations("portfolioPage.project");

  if (!project.extendedStats || !project.bannerImage) {
    return null;
  }

  return (
    <div className="w-full relative px-6 md:px-18 z-20 overflow-hidden">
      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block -top-2.5 left-20 h-40 md:h-56 rotate-45 will-change-transform"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <FadeIn direction="up" className="w-full max-w-screen-2xl mx-auto relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-80 md:h-125 z-10 border border-border">
        {/* Background Image */}
        <Image
          src={project.bannerImage} 
          alt={project.title} 
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Glassmorphism Stats Card */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="bg-white/20 dark:bg-black/30 backdrop-blur-md border border-white/20 w-full max-w-5xl rounded-3xl p-6 md:px-12 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center text-white">
              
              {/* Launch Year */}
              <div className="flex flex-col items-center gap-2">
                <SlideIn delay={0.1} direction="up">
                  <h3 className="text-3xl font-cairo font-bold">
                    <Counter 
                      value={parseInt(project.extendedStats.launchYear) || 2024} 
                      delay={0.1} 
                      formatter={(v) => Math.round(v).toString()} 
                    />
                  </h3>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-sm md:text-lg font-cairo text-white/80">{t('launchYear')}</p>
                </FadeIn>
              </div>

              {/* Visits */}
              <div className="flex flex-col items-center gap-2">
                <SlideIn delay={0.2} direction="up">
                  <h3 className="text-3xl font-cairo font-bold">
                    <Counter 
                      value={parseInt(project.stats.visits.value.replace(/[^0-9]/g, '')) || 500} 
                      delay={0.2} 
                      formatter={(v) => Math.round(v).toString() + project.stats.visits.value.replace(/[0-9.]/g, '')} 
                    />
                  </h3>
                </SlideIn>
                <FadeIn delay={0.3}>
                  <p className="text-sm md:text-lg font-cairo text-white/80">{t('visits')}</p>
                </FadeIn>
              </div>

              {/* Country */}
              <div className="flex flex-col items-center gap-2">
                <SlideIn delay={0.3} direction="up">
                  <h3 className="text-3xl font-cairo font-bold">{project.stats.country.value}</h3>
                </SlideIn>
                <FadeIn delay={0.4}>
                  <p className="text-sm md:text-lg font-cairo text-white/80">{t('country')}</p>
                </FadeIn>
              </div>

              {/* Rating */}
              <div className="flex flex-col items-center gap-2">
                <SlideIn delay={0.4} direction="up">
                  <h3 className="text-3xl font-cairo font-bold">
                    <Counter 
                      value={parseFloat(project.extendedStats.rating) || 4.8} 
                      delay={0.4} 
                      formatter={(v) => v.toFixed(1)} 
                    />
                  </h3>
                </SlideIn>
                <FadeIn delay={0.5}>
                  <p className="text-sm md:text-lg font-cairo text-white/80">{t('rating')}</p>
                </FadeIn>
              </div>

            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
