"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

import UsImage from "@/assets/us.png";

export function AboutUsSection() {
  const t = useTranslations("home.about");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full py-24 bg-[#F4F6FC] dark:bg-slate-900 overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Image Section (Visual Left in RTL) */}
        <div className="order-2 flex flex-col items-center gap-8">
          <div className="relative w-full aspect-4/3 md:aspect-16/10 lg:aspect-auto lg:h-125">
            <Image 
              src={UsImage} 
              alt="About Us" 
              fill 
              className="object-contain" 
            />
          </div>
          
          {/* Carousel Indicator Placeholder */}
          <div className="flex items-center gap-4 text-sm font-semibold font-cairo text-gray-800 dark:text-gray-200">
            <span>3</span>
            <div className="w-12 h-px bg-gray-400 dark:bg-gray-600"></div>
            <span>1</span>
          </div>
        </div>

        {/* Text Content (Visual Right in RTL) */}
        <div className="order-1 flex flex-col text-start">
          <span className="text-gray-500 dark:text-gray-400 font-cairo text-[18px] md:text-[20px] font-medium mb-4">
            {t("eyebrow")}
          </span>
          
          <h2 className="text-[32px] md:text-[45px] lg:text-[55px] font-cairo font-extrabold text-[#111827] dark:text-white leading-[1.2] mb-8">
            {t("title")}
          </h2>
          
          <h3 className="text-[22px] md:text-[26px] font-cairo font-bold text-[#3b5bdb] dark:text-blue-400 mb-4">
            {t("subtitle")}
          </h3>
          
          <p className="text-[16px] md:text-[18px] font-cairo text-gray-600 dark:text-gray-300 leading-[1.8] mb-10">
            {t("description")}
          </p>
          
          <div>
            <button className="flex items-center justify-center gap-3 h-12 px-8 rounded-full border border-black dark:border-white text-black dark:text-white font-cairo font-semibold text-[16px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              {t("cta")}
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
