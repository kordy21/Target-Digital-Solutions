"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Bubbles from "@/assets/bubbles.png";
import News1Img from "@/assets/news1.png";
import News2Img from "@/assets/news2.png";
import News3Img from "@/assets/news3.png";

const newsItems = [
  { id: "item3", image: News3Img }, // Americana
  { id: "item2", image: News2Img }, // Helwan
  { id: "item1", image: News1Img }, // Misr Travel
];

export function NewsSection() {
  const t = useTranslations("home.news");

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12">
      {/* Side Bubbles */}
      <div className="absolute top-0 right-12 h-1/3 pointer-events-none hidden md:block z-0 opacity-80 dark:opacity-30">
        <Image 
          src={Bubbles} 
          alt="Bubbles Decoration" 
          className="h-full w-auto object-cover scale-x-[-1]" 
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

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Card Container */}
              <div className="w-full bg-white dark:bg-zinc-900 rounded-3xl p-4 md:p-6 shadow-sm border border-border mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-gray-50 dark:bg-zinc-800/50">
                  <Image 
                    src={item.image} 
                    alt={t(`items.${item.id}.title`)}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-cairo font-bold text-[18px] md:text-[20px] text-foreground px-4 leading-[1.6]">
                {t(`items.${item.id}.title`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
