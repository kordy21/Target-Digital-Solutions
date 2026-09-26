"use client";

import { FadeIn, SlideIn, ZoomIn } from "@/components/shared/animations";

import Bubbles from "@/assets/bubbles.png";
import { MagneticWrapper } from "@/components/shared/animations/magnetic-wrapper";
import { TiltCard } from "@/components/shared/animations/tilt-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";

export interface ProjectData {
  title: string;
  description?: string;
  image: string | StaticImageData;
  mockupImage?: string | StaticImageData;
  link: string;
  stats: {
    visits: { label: string; value: string; icon: string | StaticImageData };
    country: { label: string; value: string; icon: string | StaticImageData };
    platform: { label: string; value: string; icon: string | StaticImageData };
    tech: { label: string; icons: (string | StaticImageData)[]; iconMain: string | StaticImageData };
    visitWebsite?: string;
  };
  extendedStats?: {
    launchYear: string;
    rating: string;
  };
  bannerImage?: string | StaticImageData;
  screensImage?: string | StaticImageData;
  steps?: {
    id: number;
    description: string;
    image: string | StaticImageData;
  }[];
  features?: {
    id: number;
    title: string;
    image: string | StaticImageData;
  }[];
  tools?: {
    id: number;
    title: string;
    image: string | StaticImageData;
    bgColor?: string;
  }[];
}

export function ProjectCard({ project, index }: { project: ProjectData, index: number }) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const isEven = index % 2 === 0;

  const bubble1Styles = [
    "top-[-40px] right-[-30px] h-32 md:h-48",
    "top-10 left-[-40px] h-24 md:h-32 rotate-90",
    "top-1/4 right-[-20px] h-40 md:h-56 -rotate-90",
    "top-10 left-[-10px] h-32 md:h-48 rotate-180",
    "top-1/3 right-[-30px] h-24 md:h-32",
    "top-[-20px] left-[-40px] h-40 md:h-64 rotate-90",
  ];

  const bubble2Styles = [
    "bottom-[-40px] left-[-30px] h-40 md:h-64",
    "bottom-20 right-[-40px] h-32 md:h-48 rotate-180",
    "bottom-1/4 left-[-20px] h-24 md:h-40 rotate-90",
    "bottom-10 right-[-10px] h-40 md:h-56 -rotate-90",
    "bottom-1/3 left-[-30px] h-32 md:h-48 rotate-180",
    "bottom-[-20px] right-[-40px] h-24 md:h-32",
  ];

  const currentBubble1 = bubble1Styles[index % bubble1Styles.length];
  const currentBubble2 = bubble2Styles[index % bubble2Styles.length];

  return (
    <div className="relative w-full">
      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "          absolute pointer-events-none z-0 opacity-40 dark:opacity-20 hidden md:block",
          currentBubble1
        )}
      >
        <Image src={Bubbles} alt="Bubbles Decoration" className="h-full w-auto object-contain" style={{ width: 'auto', height: 'auto' }} />
      </motion.div>

      <motion.div 
        animate={{ y: [], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={cn(
          "absolute pointer-events-none z-0 hidden md:block",
          currentBubble2
        )}
      >
        <Image src={Bubbles} alt="Bubbles Decoration" className="h-full w-auto object-contain" style={{ width: 'auto', height: 'auto' }} />
      </motion.div>

      <div className="bg-background relative z-10 rounded-3xl border border-border p-8 md:p-12 lg:p-16 mb-8 hover:shadow-md transition-all duration-300">
        <div className={cn(
          "flex flex-col gap-6 items-center w-full",
          isEven ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
        
        {/* Mockup Image Side */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative perspective-[1000px]">
          <FadeIn direction={isEven ? "right" : "left"} className="w-full relative h-75 md:h-100 flex items-center justify-center">
            <TiltCard className="relative w-full h-full">
              <motion.div 
                animate={{ rotate: [-2, 2, -2], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full group overflow-hidden rounded-3xl"
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Reflection Effect on Hover (Top-Left to Bottom-Right) */}
                <div className="absolute inset-0 translate-x-[-150%] translate-y-[-150%] group-hover:translate-x-[150%] group-hover:translate-y-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-br from-transparent via-white/40 dark:via-white/10 to-transparent z-10 transform-gpu will-change-transform" />
              </motion.div>
            </TiltCard>
          </FadeIn>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <FadeIn direction={!isEven ? "right" : "left"} className="w-full flex flex-col">
            <h2 className="text-2xl md:text-3xl font-cairo font-bold text-foreground mb-8">
              {project.title}
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
              {/* Visits */}
              <div className="flex items-center gap-4">
                <ZoomIn delay={index * 0.1 + 0.1}>
                  <Image src={project.stats.visits.icon} alt="Visits" width={80} height={80} className="object-contain" />
                </ZoomIn>
                <div className="flex flex-col gap-2">
                  <FadeIn delay={index * 0.1 + 0.2}>
                    <h3 className="text-xl font-cairo font-bold text-foreground">{project.stats.visits.label}</h3>
                  </FadeIn>
                  <SlideIn delay={index * 0.1 + 0.3} direction="up">
                    <p className="text-primary font-cairo font-bold text-lg">{project.stats.visits.value}</p>
                  </SlideIn>
                </div>
              </div>

              {/* Country */}
              <div className="flex items-center gap-4">
                <ZoomIn delay={index * 0.1 + 0.1}>
                  <Image src={project.stats.country.icon} alt="Country" width={80} height={80} className="object-contain" />
                </ZoomIn>
                <div className="flex flex-col gap-2">
                  <FadeIn delay={index * 0.1 + 0.2}>
                    <h3 className="text-xl font-cairo font-bold text-foreground">{project.stats.country.label}</h3>
                  </FadeIn>
                  <SlideIn delay={index * 0.1 + 0.3} direction="up">
                    <p className="text-primary font-cairo font-bold text-lg">{project.stats.country.value}</p>
                  </SlideIn>
                </div>
              </div>

              {/* Platform */}
              <div className="flex items-center gap-4">
                <ZoomIn delay={index * 0.1 + 0.1}>
                  <Image src={project.stats.platform.icon} alt="Platform" width={80} height={80} className="object-contain" />
                </ZoomIn>
                <div className="flex flex-col gap-2">
                  <FadeIn delay={index * 0.1 + 0.2}>
                    <h3 className="text-xl font-cairo font-bold text-foreground">{project.stats.platform.label}</h3>
                  </FadeIn>
                  <SlideIn delay={index * 0.1 + 0.3} direction="up">
                    <p className="text-primary font-cairo font-bold text-base">{project.stats.platform.value}</p>
                  </SlideIn>
                </div>
              </div>

              {/* Tech */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Image src={project.stats.tech.iconMain} alt="Tech" width={80} height={80} className="object-contain" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-cairo font-bold text-foreground">{project.stats.tech.label}</h3>
                    <div className="flex items-center gap-2">
                      {project.stats.tech.icons.map((techIcon: string | StaticImageData, i: number) => (
                        <Image key={i} src={techIcon} alt="Tech Icon" width={20} height={20} className="object-contain" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Button */}
            <div className="mt-4">
              <MagneticWrapper>
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.link, '_blank');
                  }}
                  variant="outline" className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group
bg-transparent"
                >
                  <span>{project.stats.visitWebsite || "لزيارة الموقع"}</span>
                  {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                </Button>
              </MagneticWrapper>
            </div>
          </FadeIn>
        </div>
        </div>
      </div>
    </div>
  );
}

