"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { InteractiveParticles } from "@/components/shared/interactive-particles";

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
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20">
        <InteractiveParticles 
          mode="scatter-to-shape" 
          text="T" 
          particleCount={80} 
          interactionRadius={150}
          particleColor="var(--foreground)"
        />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
      <div className="w-full bg-background rounded-3xl border border-border shadow-sm p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side (Content) */}
        <StaggerContainer className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start">
          
          <StaggerItem>
            <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4 block">
              {t("eyebrow")}
            </span>
          </StaggerItem>
          
          <StaggerItem>
            <h2 className="text-2xl md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3] mb-12">
              {t("title")}
            </h2>
          </StaggerItem>

          <div className="flex flex-col items-center lg:items-start w-full">
            <StaggerItem>
              <span className="bg-black dark:bg-white text-white dark:text-black px-8 py-2 rounded-full font-cairo font-semibold text-lg mb-10 inline-block">
                {t("categories.design")}
              </span>
            </StaggerItem>

            <div className="grid grid-cols-4 md:flex md:flex-wrap justify-center lg:justify-start gap-4 md:gap-12 w-full">
              {tools.map((tool) => (
                <StaggerItem key={tool.id} className="flex flex-col items-center gap-2 md:gap-4 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <Image 
                      src={tool.image} 
                      alt={t(`items.${tool.id}`)} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-cairo font-semibold text-foreground text-[10px] md:text-base leading-tight">
                    {t(`items.${tool.id}`)}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </div>
          
        </StaggerContainer>

        {/* Right Side (Image) */}
        <FadeIn direction="left" delay={0.2} className="w-full lg:w-1/2 flex items-center justify-center">
          <Image 
            src={ToolsImg} 
            alt="Tools and Technologies Illustration" 
            className="w-full max-w-70 md:max-w-md h-auto object-contain"
          />
        </FadeIn>
        
      </div>
      </div>
    </section>
  );
}
