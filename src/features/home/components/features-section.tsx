"use client";

import Image from "next/image";import Bubbles from "@/assets/bubbles.png";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";
import { FadeIn, ZoomIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { SectionHeading } from "@/components/shared/section-heading";

import Top1Img from "@/assets/top1.png";
import Top2Img from "@/assets/top2.png";
import Top3Img from "@/assets/top3.png";
import Top4Img from "@/assets/top4.png";
import Top5Img from "@/assets/top5.png";
import Top6Img from "@/assets/top6.png";

const features = [
  { id: "item1", image: Top1Img },
  { id: "item2", image: Top2Img },
  { id: "item3", image: Top3Img },
  { id: "item4", image: Top4Img },
  { id: "item5", image: Top5Img },
  { id: "item6", image: Top6Img },
];

export function FeaturesSection() {
  const t = useTranslations("home.features");

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative Animated Bubbles */}
      <motion.div animate={{ y: [0, 30, 0], x: [0, -30, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-10 right-20 h-24 md:h-40 rotate-45">
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div animate={{ y: [0, -40, 0], x: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-10 left-10 h-32 md:h-56 -rotate-90">
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
      <div className="w-full bg-background rounded-3xl border border-border p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 hover:shadow-md transition-shadow duration-300">
        
        {/* Text Column */}
        <FadeIn direction="right" className="w-full lg:w-[40%] flex flex-col lg:border-e lg:border-border lg:pe-6 lg:py-4">
          <SectionHeading 
            eyebrow={t("eyebrow")}
            title={t("title")}
            align="left"
            disableParticles={true}
            className="lg:items-start lg:text-start items-center text-center"
          />
        </FadeIn>

        {/* Features Grid */}
        <div className="w-full lg:w-2/3">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
            {features.map((feature, index) => (
              <StaggerItem key={feature.id}>
                <div className="flex flex-col p-6 rounded-2xl transition-all duration-300 hover:shadow-md hover:bg-white/5 group border border-transparent hover:border-border cursor-default">
                  <ZoomIn delay={index * 0.1}>
                    <div className="w-24 h-24 mx-auto mb-6 relative transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
                      <Image 
                        src={feature.image} 
                        alt={t(`items.${feature.id}.title`)} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </ZoomIn>
                  <FadeIn delay={index * 0.1 + 0.1}>
                    <h3 className="font-cairo font-bold text-lg md:text-xl text-foreground mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                      {t(`items.${feature.id}.title`)}
                    </h3>
                  </FadeIn>
                  <SlideIn delay={index * 0.1 + 0.2} direction="up">
                    <p className="font-cairo text-sm text-muted-foreground leading-relaxed group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                      {t(`items.${feature.id}.description`)}
                    </p>
                  </SlideIn>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
      </div>
    </section>
  );
}
