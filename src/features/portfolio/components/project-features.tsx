"use client";

import { FadeIn, SlideIn, ZoomIn } from "@/components/shared/animations";
import Image from "next/image";
import { ProjectData } from "./project-card";
import { useTranslations } from "next-intl";

export function ProjectFeatures({ project }: { project: ProjectData }) {
  const t = useTranslations("portfolioPage.project");

  if (!project.features || project.features.length === 0) return null;

  return (
    <section className="w-full relative px-6 md:px-20 py-16">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center border border-border rounded-[2.5rem] bg-background p-10 md:p-16 shadow-sm relative overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 relative z-10">
          <FadeIn direction="up">
            <h3 className="text-lg md:text-xl font-cairo font-bold text-primary">
              {t("featuresTitle")}
            </h3>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-cairo font-black text-foreground">
              {t("featuresSubtitle")}
            </h2>
          </SlideIn>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full relative z-10">
          {project.features.map((feature, index) => (
            <div key={feature.id} className="flex flex-col items-center text-center gap-6">
              <ZoomIn delay={0.1 * index} className="w-32 h-32 flex items-center justify-center">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-contain"
                />
              </ZoomIn>
              <FadeIn direction="up" delay={0.15 * index}>
                <h4 className="text-base md:text-lg font-cairo font-bold text-foreground">
                  {feature.title}
                </h4>
              </FadeIn>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
