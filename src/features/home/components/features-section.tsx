"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn, ZoomIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";

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
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
      <div className="w-full bg-background rounded-3xl border border-border shadow-sm p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text Column */}
        <FadeIn direction="right" className="w-full lg:w-1/3 flex flex-col text-center lg:text-start lg:border-e lg:border-border lg:pe-12 lg:py-8">
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-xl md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.4]">
            <SplitTextReveal text={t("title")} />
          </h2>
        </FadeIn>

        {/* Features Grid */}
        <div className="w-full lg:w-2/3">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
            {features.map((feature, index) => (
              <StaggerItem key={feature.id}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:bg-white/5 group border border-transparent hover:border-border cursor-default">
                  <ZoomIn delay={index * 0.1}>
                    <div className="w-24 h-24 mb-6 relative transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
                      <Image 
                        src={feature.image} 
                        alt={t(`items.${feature.id}.title`)} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </ZoomIn>
                  <FadeIn delay={index * 0.1 + 0.1}>
                    <h3 className="font-cairo font-bold text-[18px] md:text-[20px] text-foreground mb-3">
                      {t(`items.${feature.id}.title`)}
                    </h3>
                  </FadeIn>
                  <SlideIn delay={index * 0.1 + 0.2} direction="up">
                    <p className="font-cairo text-[14px] text-muted-foreground leading-[1.6]">
                      {t(`items.${feature.id}.description`)}
                    </p>
                  </SlideIn>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
      </div>
    </section>
  );
}
