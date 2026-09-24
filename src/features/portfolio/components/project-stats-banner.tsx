"use client";

import { FadeIn, SlideIn } from "@/components/shared/animations";
import Image from "next/image";
import { ProjectData } from "./project-card";
import { useTranslations } from "next-intl";

export function ProjectStatsBanner({ project }: { project: ProjectData }) {
  const t = useTranslations("portfolioPage.project");

  if (!project.extendedStats || !project.bannerImage) {
    return null;
  }

  return (
    <div className="w-full relative px-6 md:px-20 py-10 z-20">
      <FadeIn direction="up" className="w-full max-w-screen-2xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl h-80 md:h-125">
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
                  <h3 className="text-3xl font-cairo font-bold">{project.extendedStats.launchYear}</h3>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <p className="text-sm md:text-lg font-cairo text-white/80">{t('launchYear')}</p>
                </FadeIn>
              </div>

              {/* Visits */}
              <div className="flex flex-col items-center gap-2">
                <SlideIn delay={0.2} direction="up">
                  <h3 className="text-3xl font-cairo font-bold">{project.stats.visits.value}</h3>
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
                  <h3 className="text-3xl font-cairo font-bold">{project.extendedStats.rating}</h3>
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
