"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import HandsImg from "@/assets/hands.png";

export function StatsSection() {
  const t = useTranslations("home.stats");

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
        
        {/* Left Side (Image & Badge) */}
        <div className="relative w-full lg:w-5/12 rounded-2xl flex justify-center lg:justify-start">
          <div className="relative w-full max-w-100 aspect-4/5 rounded-2xl overflow-hidden">
            <Image 
              src={HandsImg} 
              alt="Team Hands" 
              fill
              className="object-cover"
            />
          </div>

          {/* Satisfaction Badge */}
          <div className="absolute -bottom-12 left-20 w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-xl flex flex-col items-center justify-center z-10">
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ transform: 'rotate(-70deg)' }}>
              {/* Background track */}
              <circle cx="50" cy="50" r="38" fill="none" stroke="#cbd5e1" strokeWidth="16" />
              {/* Progress track (97%) */}
              <circle 
                cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="16"
                className="text-primary"
                strokeDasharray="238.76"
                strokeDashoffset={238.76 - (238.76 * 97) / 100}
              />
            </svg>
            <div className="flex flex-col items-center justify-center relative z-10 pt-2">
              <span className="font-cairo font-bold text-[32px] md:text-[40px] text-foreground leading-none mb-1 flex items-center justify-center gap-1" dir="ltr">
                <span>{t("satisfaction.value").replace('%', '')}</span>
                <span className="text-primary">%</span>
              </span>
              <span className="font-cairo font-bold text-[15px] md:text-[18px] text-foreground text-center leading-tight">
                {t("satisfaction.label")}
              </span>
            </div>
            {/* The white pointer notch */}
            <div className="absolute -top-3 right-8 w-10 h-10 md:w-12 md:h-12 bg-white rounded-md -z-50" style={{ transform: 'rotate(20deg)' }}></div>
          </div>
        </div>

        {/* Right Side (Content) */}
        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-start pt-12 lg:pt-0">
          
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-[28px] md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3] mb-6">
            {t("title")}
          </h2>
          <p className="font-cairo text-[16px] md:text-[18px] text-muted-foreground leading-[1.8] mb-16 lg:max-w-2xl">
            {t("description")}
          </p>

          {/* Stats Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {["clients", "projects", "team", "data"].map((key) => {
              const value = t(`items.${key}.value`);
              const numMatch = value.match(/(\d+(?:\.\d+)?(?:TB)?)/);
              const numberPart = numMatch ? numMatch[1] : value.replace("+", "");
              const hasPlus = value.includes("+");

              return (
                <div key={key} className="flex flex-col items-center text-center">
                  <div className="w-full h-px bg-muted-foreground/30 mb-6"></div>
                  <div className="font-cairo font-bold text-[28px] md:text-[32px] text-foreground mb-2 flex items-center justify-center" dir="ltr">
                    {numberPart}
                    {hasPlus && <span className="text-primary ml-1">+</span>}
                  </div>
                  <span className="font-cairo font-semibold text-[14px] md:text-[16px] text-muted-foreground">
                    {t(`items.${key}.label`)}
                  </span>
                </div>
              );
            })}
          </div>
          
        </div>

      </div>
    </section>
  );
}
