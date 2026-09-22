"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { InteractiveParticles } from "@/components/shared/interactive-particles";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";

import Bubbles from "@/assets/bubbles.png";
import Story1Img from "@/assets/story1.png";
import Story2Img from "@/assets/story2.png";
import Story3Img from "@/assets/story3.png";

const stories = [
  { id: "story3", image: Story3Img },
  { id: "story2", image: Story2Img },
  { id: "story1", image: Story1Img },
];

export function StoriesSection() {
  const t = useTranslations("home.stories");

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20">
        <InteractiveParticles 
          mode="scatter-to-shape" 
          text="▶" 
          particleCount={80} 
          interactionRadius={150}
          particleColor="var(--foreground)"
        />
      </div>
      {/* Side Bubbles */}
      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-1/3 pointer-events-none hidden md:block z-0 opacity-80 dark:opacity-30"
      >
        <Image 
          src={Bubbles} 
          alt="Bubbles Decoration" 
          className="h-full w-auto object-cover" 
        />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-[28px] md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3]">
            <SplitTextReveal text={t("title")} />
          </h2>
        </FadeIn>

        {/* Stories Grid */}
        <StaggerContainer className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((item) => (
            <StaggerItem key={item.id} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-4/5 rounded-[32px] overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4">
                <Image 
                  src={item.image} 
                  alt={t(`items.${item.id}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-500">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-125 border border-border/10">
                    <Play className="w-6 h-6 text-foreground fill-foreground ml-1 group-hover:text-primary group-hover:fill-primary transition-colors" />
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-cairo font-semibold text-[18px] md:text-[20px] text-foreground px-4 leading-[1.6] group-hover:text-primary transition-colors">
                {t(`items.${item.id}.title`)}
              </h3>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
