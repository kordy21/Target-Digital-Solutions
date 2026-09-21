"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Bubbles from "@/assets/bubbles.png";
import EngAmrImg from "@/assets/engamr.png";
import BlogHoverImg from "@/assets/bloghover.png";

const blogItems = [
  { id: "item3" },
  { id: "item2" },
  { id: "item1" },
];

export function BlogSection() {
  const t = useTranslations("home.blog");

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

        {/* Blog Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogItems.map((item) => {
            const tags: string[] = t.raw(`items.${item.id}.tags`);

            return (
              <div 
                key={item.id} 
                className="relative group w-full h-112.5 md:h-125 rounded-[24px] overflow-hidden border border-border bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Hover Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                  <Image 
                    src={BlogHoverImg} 
                    alt="Blog Post Background" 
                    fill 
                    className="object-cover" 
                  />
                  {/* Dark Overlay for better text readability on hover */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between rtl:text-right ltr:text-left">
                  
                  {/* Top section: Author */}
                  <div className="flex items-center gap-3 self-start rtl:self-end">
                    <div className="flex flex-col items-end rtl:items-start ltr:items-end">
                      <span className="text-[12px] md:text-[13px] text-muted-foreground group-hover:text-white/80 transition-colors font-cairo">
                        {t("publishedBy")}
                      </span>
                      <span className="text-[14px] md:text-[16px] font-bold text-foreground group-hover:text-white transition-colors font-cairo">
                        {t("author")}
                      </span>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border-2 border-transparent group-hover:border-primary transition-colors">
                      <Image src={EngAmrImg} alt={t("author")} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Bottom section: Title & Tags */}
                  <div className="flex flex-col items-start w-full">
                    <h3 className="text-[20px] md:text-[24px] font-bold font-cairo text-foreground group-hover:text-white transition-colors leading-normal mb-6">
                      {t(`items.${item.id}.title`)}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag: string, idx: number) => (
                        <span 
                          key={idx} 
                          className="px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-semibold font-cairo bg-gray-100 dark:bg-zinc-800 text-foreground group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-md transition-colors border border-transparent group-hover:border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
