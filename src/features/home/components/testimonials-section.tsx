"use client";

import { FadeIn } from "@/components/shared/animations";
import { SectionHeading } from "@/components/shared/section-heading";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
      <div className="relative z-10 w-full bg-background rounded-3xl border border-border p-8 md:p-12 lg:p-16 flex flex-col items-center hover:shadow-md transition-shadow duration-300">
        
        {/* Section Header */}
        <FadeIn direction="up" className="w-full mb-0 md:mb-12">
          <SectionHeading 
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={0.2} direction="up" className="w-full overflow-hidden" >
          <div className="w-full overflow-hidden" ref={emblaRef} dir="rtl">
            <div className="flex -ml-4 rtl:ml-0 rtl:-mr-4">
              {testimonials.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 rtl:pl-0 rtl:pr-4 py-4"
                >
                  {/* Card */}
                  <div className="h-full bg-secondary border border-border rounded-[24px] p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-md cursor-grab active:cursor-grabbing">
                  <p className="font-cairo text-sm md:text-[15px] text-muted-foreground leading-loose mb-12">
                    {t(`items.${item.id}.text`)}
                  </p>
                  
                  <div className="flex flex-col items-center mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-4 relative">
                      <Image 
                        src={item.image} 
                        alt={t(`items.${item.id}.name`)} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-cairo font-bold text-lg text-foreground mb-1">
                      {t(`items.${item.id}.name`)}
                    </h3>
                    <span className="font-cairo font-semibold text-sm text-foreground">
                      {t(`items.${item.id}.title`)}
                    </span>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      </div>
    </section>
  );
}

