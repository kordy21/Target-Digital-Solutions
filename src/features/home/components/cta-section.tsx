"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Bubbles from "@/assets/bubbles.png";
import LionImg from "@/assets/lion.png";

export function CtaSection() {
  const t = useTranslations("home.cta");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12">
      <div className="relative w-full max-w-7xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch min-h-100">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
          {/* We can use the bubbles pattern tiled, or just stretched */}
          <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: `url(${Bubbles.src})`, 
              backgroundSize: '200px', 
              backgroundRepeat: 'repeat' 
            }}
          />
        </div>

        {/* Content Side (Right in visual, but we rely on flex-row which respects RTL) */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-start text-start p-10 md:p-16 lg:p-20 order-2 lg:order-0">
          <span className="text-primary font-cairo text-[16px] md:text-[18px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          
          <h2 className="text-[28px] md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3] mb-6">
            {t("title")}
          </h2>
          
          <p className="font-cairo text-[15px] md:text-[16px] text-muted-foreground leading-[1.8] mb-10 max-w-md">
            {t("description")}
          </p>
          
          <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-foreground hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors font-cairo font-semibold text-[16px]">
            <span>{t("button")}</span>
            {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>
        </div>

        {/* Image Side (Left in visual) */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-end justify-center pt-10 px-10 order-1 lg:order-0 bg-[#f8f9fc]/50 dark:bg-transparent lg:bg-transparent">
          <div className="relative w-full max-w-100 aspect-square">
            <Image 
              src={LionImg} 
              alt="CTA Mascot" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
