"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/shared/animations";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getProcessSteps } from "../data/about-data";

export function ProcessSection() {
  const t = useTranslations("aboutPage.process");

  // We'll hardcode 3 steps and use state to handle the carousel
  const steps = getProcessSteps(t);

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const activeStep = steps[currentStep];

  return (
    <section className="relative w-full py-20 bg-secondary overflow-hidden">
      
      <div className="w-full max-w-5xl mx-auto px-6 md:px-20 relative z-10">
        <FadeIn direction="up">
          <div className="w-full bg-background rounded-[24px] border border-border/40 p-6 md:p-16 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
            
            {/* Header */}
            <div className="w-full mb-8">
              <div className={`flex flex-col w-full items-center text-center`}>
  <span className="text-primary font-cairo text-lg md:text-xl font-bold mb-4 w-full">
    {t("eyebrow")}
  </span>
  <div className={`w-full flex flex-col items-center text-center mb-10`}>
    <h2 className="mb-6 text-xl md:text-4xl lg:text-4.5xl font-cairo font-extrabold text-foreground leading-tight">
      {t("title")}
    </h2>
  </div>
</div>
            </div>

            {/* Step Content Area */}
            <div className="relative w-full flex items-center justify-between min-h-62.5">
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors shrink-0"
              >
                <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
              </button>

              {/* Active Step Info */}
              <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-20">
                <h3 className="text-foreground font-cairo font-bold text-xl md:text-2xl mb-6">
                  {activeStep.title}
                </h3>
                <p className="text-muted-foreground font-cairo text-xs md:text-base leading-relaxed max-w-5xl">
                  {activeStep.text}
                </p>
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors shrink-0"
              >
                <ChevronRight className="w-6 h-6 rtl:rotate-180" />
              </button>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
