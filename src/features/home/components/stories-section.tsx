"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";

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
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12">
      {/* Side Bubbles */}
      <div className="absolute top-0 left-0 h-1/3 pointer-events-none hidden md:block z-0 opacity-80 dark:opacity-30">
        <Image 
          src={Bubbles} 
          alt="Bubbles Decoration" 
          className="h-full w-auto object-cover" 
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-[28px] md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3]">
            {t("title")}
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-4/5 rounded-[32px] overflow-hidden mb-6 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <Image 
                  src={item.image} 
                  alt={t(`items.${item.id}.title`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 border border-transparent dark:border-white/10">
                    <Play className="w-6 h-6 text-black dark:text-white fill-black dark:fill-white ml-1 group-hover:text-primary group-hover:fill-primary dark:group-hover:text-primary dark:group-hover:fill-primary transition-colors" />
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-cairo font-semibold text-[18px] md:text-[20px] text-foreground px-4 leading-[1.6]">
                {t(`items.${item.id}.title`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
