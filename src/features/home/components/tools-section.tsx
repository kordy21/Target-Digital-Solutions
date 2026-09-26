"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import FigmaImg from "@/assets/figma.png";
import IllustratorImg from "@/assets/illustrator.png";
import PhotoshopImg from "@/assets/photoshop.png";
import ToolsImg from "@/assets/tools.png";
import XDImg from "@/assets/xd.png";

const tools = [
  { id: "figma", image: FigmaImg },
  { id: "photoshop", image: PhotoshopImg },
  { id: "illustrator", image: IllustratorImg },
  { id: "xd", image: XDImg },
];


export function ToolsSection() {
  const t = useTranslations("home.tools");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [emblaRef] = useEmblaCarousel(
    { loop: false, direction: isRTL ? "rtl" : "ltr", align: "start", slidesToScroll: 1 }, 
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
      <div className="w-full bg-background rounded-3xl border border-border p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 hover:shadow-md transition-shadow duration-300">
        
        {/* Left Side (Content) */}
        <StaggerContainer className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start">
          <StaggerItem className="w-full">
            <div className={`flex flex-col w-full items-center text-center lg:items-start lg:text-start`}>
              <span className="text-primary font-cairo text-lg md:text-xl font-bold mb-4 w-full">
                {t("eyebrow")}
              </span>
              <div className={`w-full flex flex-col mb-2 md:mb-10`}>
                <h2 className="mb-6 text-xl md:text-4xl lg:text-4.5xl font-cairo font-extrabold text-foreground leading-tight">
                  {t("title")}
                </h2>
              </div>
            </div>      
          </StaggerItem>

          <div className="flex flex-col items-center lg:items-start w-full">
            <StaggerItem>
              <span className="bg-foreground text-background px-8 rounded-full font-cairo font-semibold text-lg mb-10 inline-block">
                {t("categories.design")}
              </span>
            </StaggerItem>

            <div className="w-full overflow-hidden py-4" ref={emblaRef} dir={isRTL ? "rtl" : "ltr"}>
              <div className="flex -mx-2">
                {tools.map((tool, index) => (
                  <div key={`${tool.id}-${index}`} className="flex-[0_0_25%] sm:flex-[0_0_20%] min-w-0 px-2 cursor-grab active:cursor-grabbing">
                    <div className="flex flex-col items-center gap-2 md:gap-4 text-center group">
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
                      <span className="font-cairo font-semibold text-foreground text-xs md:text-base leading-tight group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300 inline-block">
                        {t(`items.${tool.id}`)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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
