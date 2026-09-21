"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowLeft, Play } from "lucide-react";

import PeopleImg from "@/assets/people.png";
import PersonVector from "@/assets/personvector.png";
import PeopleVector from "@/assets/peoplevector.png";

export function ExperienceSection() {
  const t = useTranslations("home.experience");

  return (
    <section className="w-full flex flex-col lg:flex-row bg-[#f9f9fb] overflow-hidden">
      
      {/* Right Side / Image Area (First in DOM so it's right in RTL) */}
      <div className="w-full lg:w-1/2 relative h-125 lg:h-auto min-h-125 lg:min-h-175">
        <Image 
          src={PeopleImg} 
          alt="Team Working" 
          fill
          className="object-cover"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pb-20">
          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 group">
            <Play className="w-8 h-8 text-black fill-black ml-1 group-hover:text-primary group-hover:fill-primary transition-colors" />
          </button>
        </div>

        {/* Stats Box Overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-140 h-auto flex rounded-t-3xl overflow-hidden shadow-2xl z-20">
          
          {/* Black Stat */}
          <div className="w-1/2 bg-[#0a0a0a] p-6 md:p-8 flex items-center justify-between">
            <div className="w-24 h-24 hidden sm:block">
              <Image src={PeopleVector} alt="Employees" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-cairo font-bold text-[32px] md:text-[40px] leading-none mb-2" dir="ltr">
                {t("stats.employees.value")}
              </span>
              <span className="font-cairo font-semibold text-[14px] text-white/90">
                {t("stats.employees.label")}
              </span>
            </div>
          </div>

          {/* Blue Stat */}
          <div className="w-1/2 bg-[#002df2] p-6 md:p-8 flex items-center justify-between">
            <div className="w-24 h-24 hidden sm:block">
              <Image src={PersonVector} alt="Years" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-cairo font-bold text-[32px] md:text-[40px] leading-none mb-2" dir="ltr">
                {t("stats.years.value")}
              </span>
              <span className="font-cairo font-semibold text-[14px] text-white/90">
                {t("stats.years.label")}
              </span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Left Side / Content Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 py-16 md:p-16 lg:p-24 bg-white lg:bg-transparent">
        <div className="max-w-xl flex flex-col items-start text-start w-full">
          <span className="font-cairo text-gray-500 text-[16px] md:text-[18px] font-semibold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-[32px] md:text-[48px] font-cairo font-extrabold text-foreground leading-[1.3] mb-6">
            {t("title")}
          </h2>
          <h3 className="text-primary font-cairo text-[22px] md:text-[28px] font-semibold mb-6">
            {t("subtitle")}
          </h3>
          <p className="font-cairo text-[16px] md:text-[18px] text-gray-600 leading-[1.8] mb-12">
            {t("description")}
          </p>
          <button className="flex items-center gap-4 px-8 py-3 rounded-full border border-gray-300 text-foreground hover:bg-gray-50 transition-colors font-cairo font-semibold text-[16px]">
            <ArrowLeft className="w-5 h-5" />
            <span>{t("button")}</span>
          </button>
        </div>
      </div>

    </section>
  );
}
