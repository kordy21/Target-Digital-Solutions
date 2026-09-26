"use client";

import { FadeIn, SlideIn, ZoomIn } from "@/components/shared/animations";
import Image from "next/image";
import { ProjectData } from "./project-card";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Bubbles from "@/assets/bubbles.png";
import { motion } from "framer-motion";
import { SplitTextReveal } from "@/components/shared/animations";

export function ProjectTools({ project }: { project: ProjectData }) {
  const t = useTranslations("portfolioPage.project");
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!project.tools || project.tools.length === 0) return null;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full relative px-6 md:px-20">
      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-[20%] -left-5 h-32 md:h-48 rotate-90"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-[10%] right-10 h-40 md:h-56 -rotate-90"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 relative z-10">
          <FadeIn direction="up">
            <h3 className="text-lg md:text-xl font-cairo font-bold text-primary">
              {t("toolsTitle")}
            </h3>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-cairo font-black text-foreground">
    <SplitTextReveal text={t("toolsSubtitle")} />
</h2>
          </SlideIn>
        </div>

        {/* Tools Carousel */}
        <div className="w-full relative flex items-center group">
          
          <button 
            onClick={scrollLeft}
            className="absolute left-0 z-20 p-2 text-foreground/50 hover:text-foreground transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="w-full flex items-center justify-start md:justify-center gap-6 md:gap-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-8 px-4 md:px-12"
          >
            {project.tools.map((tool, index) => (
              <div 
                key={tool.id} 
                className="flex flex-col items-center gap-4 snap-center shrink-0"
              >
                <ZoomIn delay={0.1 * index}>
                  <div 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center relative overflow-hidden"
                  >
                    <Image 
                      src={tool.image} 
                      alt={tool.title} 
                      className={cn(
                        "w-full h-full object-cover relative z-10 drop-shadow-md"
                      )}
                    />
                  </div>
                </ZoomIn>
                <FadeIn direction="up" delay={0.15 * index}>
                  <h4 className="text-base md:text-lg font-cairo font-semibold text-muted-foreground">
                    {tool.title}
                  </h4>
                </FadeIn>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 z-20 p-2 text-foreground/50 hover:text-foreground transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
