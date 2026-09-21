"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";

import MahmoudImg from "@/assets/mahmoud.png";
import MohamedImg from "@/assets/mohamed.png";
import TarekImg from "@/assets/tarek.png";

const testimonials = [
  { id: "mahmoud", image: MahmoudImg },
  { id: "mohamed", image: MohamedImg },
  { id: "tarek", image: TarekImg },
];

export function TestimonialsSection() {
  const t = useTranslations("home.testimonials");
  const [emblaRef] = useEmblaCarousel({ 
    loop: false,
    direction: "rtl", // Important for Arabic RTL
    align: "start",
  });
  


  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 py-16">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl border border-border shadow-sm p-8 md:p-12 lg:p-16 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-[28px] md:text-[36px] font-cairo font-extrabold text-foreground leading-[1.4]">
            {t("title")}
          </h2>
        </div>

        {/* Carousel */}
        <div className="w-full overflow-hidden" ref={emblaRef} dir="rtl">
          <div className="flex -ml-4 rtl:ml-0 rtl:-mr-4">
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 rtl:pl-0 rtl:pr-4"
              >
                {/* Card */}
                <div className="h-full bg-[#f8f9fc] border border-border rounded-[24px] p-8 flex flex-col items-center text-center">
                  <p className="font-cairo text-[14px] md:text-[15px] text-muted-foreground leading-[2.2] mb-12">
                    {t(`items.${item.id}.text`)}
                  </p>
                  
                  <div className="flex flex-col items-center mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-4 relative">
                      <Image 
                        src={item.image} 
                        alt={t(`items.${item.id}.name`)} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-cairo font-bold text-[18px] text-foreground mb-1">
                      {t(`items.${item.id}.name`)}
                    </h3>
                    <span className="font-cairo font-semibold text-[14px] text-foreground">
                      {t(`items.${item.id}.title`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
