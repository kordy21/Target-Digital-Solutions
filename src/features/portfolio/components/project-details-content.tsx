"use client";

import Bubbles from "@/assets/bubbles.png";
import { FadeIn, SlideIn, ZoomIn } from "@/components/shared/animations";
import { MagneticWrapper } from "@/components/shared/animations/magnetic-wrapper";
import { TiltCard } from "@/components/shared/animations/tilt-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ProjectData } from "./project-card";
import { useLocale } from "next-intl";

export function ProjectDetailsContent({ project }: { project: ProjectData }) {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="w-full relative py-12">
      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-10 right-10 h-40 md:h-64"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-10 left-10 h-32 md:h-48 rotate-180"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      {/* Container */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full bg-background rounded-[2.5rem] p-10 md:p-16 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-start items-center lg:items-start">
            <FadeIn direction="left" className="w-full flex flex-col items-center lg:items-start">
              
              <h2 className="text-3xl md:text-5xl font-cairo font-bold text-foreground mb-4">
                {project.title}
              </h2>

              {project.description && (
                <p className="text-base md:text-lg text-muted-foreground font-cairo leading-relaxed mb-10 max-w-lg text-center lg:text-start">
                  {project.description}
                </p>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mb-12 w-fit mx-auto lg:mx-0 place-items-start">
                {/* Visits */}
                <div className="flex items-center gap-4">
                  <ZoomIn delay={0.1}>
                    <Image src={project.stats.visits.icon} alt="Visits" width={80} height={80} className="object-contain w-16 h-16 md:w-20 md:h-20" />
                  </ZoomIn>
                  <div className="flex flex-col gap-1 items-start">
                    <FadeIn delay={0.2}>
                      <h3 className="text-lg md:text-xl font-cairo font-bold text-foreground">{project.stats.visits.label}</h3>
                    </FadeIn>
                    <SlideIn delay={0.3} direction="up">
                      <p className="text-primary font-cairo font-bold text-lg">{project.stats.visits.value}</p>
                    </SlideIn>
                  </div>
                </div>

                {/* Country */}
                <div className="flex items-center gap-4">
                  <ZoomIn delay={0.2}>
                    <Image src={project.stats.country.icon} alt="Country" width={80} height={80} className="object-contain w-16 h-16 md:w-20 md:h-20" />
                  </ZoomIn>
                  <div className="flex flex-col gap-1 items-start">
                    <FadeIn delay={0.3}>
                      <h3 className="text-lg md:text-xl font-cairo font-bold text-foreground">{project.stats.country.label}</h3>
                    </FadeIn>
                    <SlideIn delay={0.4} direction="up">
                      <p className="text-primary font-cairo font-bold text-lg">{project.stats.country.value}</p>
                    </SlideIn>
                  </div>
                </div>

                {/* Platform */}
                <div className="flex items-center gap-4">
                  <ZoomIn delay={0.3}>
                    <Image src={project.stats.platform.icon} alt="Platform" width={80} height={80} className="object-contain w-16 h-16 md:w-20 md:h-20" />
                  </ZoomIn>
                  <div className="flex flex-col gap-1 items-start">
                    <FadeIn delay={0.4}>
                      <h3 className="text-lg md:text-xl font-cairo font-bold text-foreground">{project.stats.platform.label}</h3>
                    </FadeIn>
                    <SlideIn delay={0.5} direction="up">
                      <p className="text-primary font-cairo font-bold text-base md:text-lg">{project.stats.platform.value}</p>
                    </SlideIn>
                  </div>
                </div>

                {/* Tech */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <Image src={project.stats.tech.iconMain} alt="Tech" width={80} height={80} className="object-contain w-16 h-16 md:w-20 md:h-20" />
                    <div className="flex flex-col gap-1 items-start">
                      <h3 className="text-lg md:text-xl font-cairo font-bold text-foreground">{project.stats.tech.label}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {project.stats.tech.icons.map((techIcon: string | StaticImageData, i: number) => (
                          <Image key={i} src={techIcon} alt="Tech Icon" width={20} height={20} className="object-contain w-5 h-5 md:w-6 md:h-6" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
                    {/* Visit Button */}
        <div className="mt-2 flex justify-center lg:justify-start w-full">
              <MagneticWrapper>
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.link, '_blank');
                  }}
                  variant="outline" className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group"
                >
                  <span>{project.stats.visitWebsite || "لزيارة الموقع"}</span>
                  {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                </Button>
              </MagneticWrapper>
        </div>
          </div>

          {/* Mockup Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative perspective-[1000px]">
            <FadeIn direction="right" className="w-full relative h-80 md:h-125 flex items-center justify-center">
              <TiltCard className="relative w-full h-full">
                <motion.div 
                  animate={{ rotate: [-2, 2, -2], y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image 
                    src={project.mockupImage || project.image} 
                    alt={project.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </TiltCard>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </div>
  );
}
