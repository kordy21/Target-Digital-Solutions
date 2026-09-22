"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/animations";
import { InteractiveParticles } from "@/components/shared/interactive-particles";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import About1 from "@/assets/about1.png";
import About2 from "@/assets/about2.png";
import About3 from "@/assets/about3.png";
import About4 from "@/assets/about4.png";

export function ValuesSection() {
  const t = useTranslations("aboutPage.values");

  const values = [
    {
      id: "goal",
      title: t("goal.title"),
      text: t("goal.description"),
      image: About1,
    },
    {
      id: "vision",
      title: t("vision.title"),
      text: t("vision.description"),
      image: About2,
    },
    {
      id: "mission",
      title: t("mission.title"),
      text: t("mission.description"),
      image: About3,
    },
    {
      id: "message",
      title: t("message.title"),
      text: t("message.description"),
      image: About4,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20">
        <InteractiveParticles 
          mode="scatter-to-shape" 
          text="V" 
          particleCount={80} 
          interactionRadius={150}
          particleColor="var(--foreground)"
        />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        {/* Grid and routing wrapper */}

        <div className="flex flex-col relative z-10">
          {values.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.id}
                className="relative flex flex-col lg:flex-row items-center py-12 group"
              >
                {/* Desktop Snake Line Border Segment */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "calc(100% + 4px)", opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={cn(
                    "absolute top-0 hidden lg:block z-[-1] border-primary border-dashed",
                    // Odd indices (0, 2) -> Left side curve
                    // Even indices (1, 3) -> Right side curve
                    isEven 
                      ? "right-1/2 left-0 border-4 border-r-0 rounded-l-full" 
                      : "left-1/2 right-0 border-4 border-l-0 rounded-r-full"
                  )}
                />

                {/* Mobile Vertical Line Segment */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "100%", opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute left-1/2 top-0 w-0.5 border-l-4 border-dashed border-primary/40 -translate-x-1/2 lg:hidden z-[-1]" 
                />

                {/* Content Container (flex-row for even, flex-row-reverse for odd to match screenshot in RTL) */}
                <div className={cn(
                  "flex w-full flex-col lg:flex-row items-center gap-8 lg:gap-16 px-10",
                  !isEven ? "lg:flex-row-reverse" : ""
                )}>
                  {/* Image */}
                  <FadeIn 
                    direction={isEven ? "left" : "right"} 
                    className="w-full lg:w-1/2 flex justify-center"
                  >
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        sizes="(max-width: 768px) 192px, 256px"
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                  </FadeIn>

                  {/* Text */}
                  <FadeIn 
                    direction={isEven ? "right" : "left"} 
                    className="w-full flex flex-col text-center lg:text-start px-6"
                  >
                    <h3 className="text-[28px] md:text-[36px] font-cairo font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[16px] md:text-[18px] font-cairo text-muted-foreground leading-[1.8]">
                      {item.text}
                    </p>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>

        <Button 
          variant="outline" 
          className="flex justify-center mt-12 w-fit mx-auto rounded-full px-8 h-12 font-cairo text-[16px] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          {t("cta")}
        </Button>
      </div>
    </section>
  );
}
