"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Top1Img from "@/assets/top1.png";
import Top2Img from "@/assets/top2.png";
import Top3Img from "@/assets/top3.png";
import Top4Img from "@/assets/top4.png";
import Top5Img from "@/assets/top5.png";
import Top6Img from "@/assets/top6.png";

const features = [
  { id: "item1", image: Top1Img },
  { id: "item2", image: Top2Img },
  { id: "item3", image: Top3Img },
  { id: "item4", image: Top4Img },
  { id: "item5", image: Top5Img },
  { id: "item6", image: Top6Img },
];

export function FeaturesSection() {
  const t = useTranslations("home.features");

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 py-16">
      <div className="w-full max-w-7xl mx-auto bg-background rounded-3xl border border-border shadow-sm p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text Column */}
        <div className="w-full lg:w-1/3 flex flex-col text-center lg:text-start lg:border-e lg:border-border lg:pe-12 lg:py-8">
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-[28px] md:text-[36px] font-cairo font-extrabold text-foreground leading-[1.4]">
            {t("title")}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6 relative transition-transform hover:-translate-y-2">
                  <Image 
                    src={feature.image} 
                    alt={t(`items.${feature.id}.title`)} 
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-cairo font-bold text-[18px] md:text-[20px] text-foreground mb-3">
                  {t(`items.${feature.id}.title`)}
                </h3>
                <p className="font-cairo text-[14px] text-muted-foreground leading-[1.6]">
                  {t(`items.${feature.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
