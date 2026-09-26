"use client";

import { FadeIn, SlideIn } from "@/components/shared/animations";
import Image from "next/image";
import { ProjectData } from "./project-card";
import { useTranslations } from "next-intl";
import Bubbles from "@/assets/bubbles.png";
import { motion } from "framer-motion";
import { SplitTextReveal } from "@/components/shared/animations";

export function ProjectMockups({ project }: { project: ProjectData }) {
  const t = useTranslations("portfolioPage.project");

  if (!project.screensImage) {
    return null;
  }

  return (
    <section className="w-full relative px-6 md:px-18">
      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-[10%] left-0 h-48 md:h-72 rotate-90"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-[20%] right-0 h-32 md:h-48 -rotate-90"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Texts */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <FadeIn direction="up">
            <h3 className="text-xl md:text-2xl font-cairo font-bold text-primary">
              {t('screensTitle')}
            </h3>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-cairo font-black text-foreground max-w-4xl leading-tight">
    <SplitTextReveal text={t('screensSubtitle')} />
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
