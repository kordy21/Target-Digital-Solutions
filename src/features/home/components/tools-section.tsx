"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FadeIn, ZoomIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { SectionHeading } from "@/components/shared/section-heading";

import ToolsImg from "@/assets/tools.png";
import FigmaImg from "@/assets/figma.png";
import PhotoshopImg from "@/assets/photoshop.png";
import IllustratorImg from "@/assets/illustrator.png";
import XDImg from "@/assets/xd.png";

const tools = [
  { id: "xd", image: XDImg },
  { id: "illustrator", image: IllustratorImg },
  { id: "photoshop", image: PhotoshopImg },
  { id: "figma", image: FigmaImg },
];

export function ToolsSection() {
  const t = useTranslations("home.tools");

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
      <div className="w-full bg-background rounded-3xl border border-border p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 hover:shadow-md transition-shadow duration-300">
        
        {/* Left Side (Content) */}
        <StaggerContainer className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start">
          <StaggerItem className="w-full">
            <SectionHeading 
              eyebrow={t("eyebrow")}
              title={t("title")}
              disableParticles={true}
              className="lg:items-start lg:text-start"
            />
          </StaggerItem>

          <div className="flex flex-col items-center lg:items-start w-full">
            <StaggerItem>
              <span className="bg-foreground text-background px-8 py-2 rounded-full font-cairo font-semibold text-lg mb-10 inline-block">
                {t("categories.design")}
              </span>
            </StaggerItem>

            <div className="grid grid-cols-4 md:flex md:flex-wrap justify-center lg:justify-start gap-4 md:gap-12 w-full">
              {tools.map((tool, index) => (
                <StaggerItem key={tool.id} className="flex flex-col items-center gap-2 md:gap-4 text-center">
                  <ZoomIn delay={index * 0.1}>
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform hover:scale-110"
                    >
                      <Image 
                        src={tool.image} 
                        alt={t(`items.${tool.id}`)} 
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </ZoomIn>
                  <SlideIn delay={index * 0.1 + 0.1} direction="up">
                    <span className="font-cairo font-semibold text-foreground text-xs md:text-base leading-tight">
                      {t(`items.${tool.id}`)}
                    </span>
                  </SlideIn>
                </StaggerItem>
              ))}
            </div>
          </div>
          
        </StaggerContainer>

        {/* Right Side (Image) */}
        <FadeIn direction="left" delay={0.2} className="w-full lg:w-1/2 flex items-center justify-center">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-70 md:max-w-md flex justify-center"
          >
            <Image 
              src={ToolsImg} 
              alt="Tools and Technologies Illustration" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </FadeIn>
        
      </div>
      </div>
    </section>
  );
}
