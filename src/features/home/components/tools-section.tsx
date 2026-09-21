"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

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
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto bg-background rounded-3xl border border-border shadow-sm p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side (Content) */}
<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start">
          
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-[28px] md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3] mb-12">
            {t("title")}
          </h2>

          <div className="flex flex-col items-center lg:items-start w-full">
            <span className="bg-black dark:bg-white text-white dark:text-black px-8 py-2 rounded-full font-cairo font-semibold text-lg mb-10">
              {t("categories.design")}
            </span>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 w-full">
              {tools.map((tool) => (
                <div key={tool.id} className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center shadow-sm p-3 transition-transform hover:-translate-y-1">
                    <Image 
                      src={tool.image} 
                      alt={t(`items.${tool.id}`)} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-cairo font-semibold text-foreground">
                    {t(`items.${tool.id}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Side (Image) */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image 
            src={ToolsImg} 
            alt="Tools and Technologies Illustration" 
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
        
      </div>
    </section>
  );
}
