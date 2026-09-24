"use client";

import { FadeIn, SlideIn } from "@/components/shared/animations";
import Image from "next/image";
import { ProjectData } from "./project-card";
import { useTranslations } from "next-intl";

export function ProjectMockups({ project }: { project: ProjectData }) {
  const t = useTranslations("portfolioPage.project");

  if (!project.screensImage) {
    return null;
  }

  return (
    <section className="w-full relative px-6 md:px-20 py-12 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
        
        {/* Header Texts */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <FadeIn direction="up">
            <h3 className="text-xl md:text-2xl font-cairo font-bold text-primary">
              {t('screensTitle')}
            </h3>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-cairo font-black text-foreground max-w-4xl leading-tight">
              {t('screensSubtitle')}
            </h2>
          </SlideIn>
        </div>

        {/* Mockups Image */}
        <FadeIn direction="up" delay={0.4} className="w-full relative flex justify-center">
          <div className="w-full relative perspective-[2000px]">
            <Image 
              src={project.screensImage}
              alt={t('screensTitle')}
              className="w-full h-auto object-contain drop-shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
