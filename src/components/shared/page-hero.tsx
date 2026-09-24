"use client";

import Image, { StaticImageData } from "next/image";
import { FadeIn } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string | StaticImageData;
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-start overflow-hidden mt-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Gradient Overlay for text readability (adapts to LTR/RTL) */}
        <div className="absolute inset-0 bg-black/40 md:bg-linear-to-r md:from-black/20 md:to-transparent rtl:md:bg-linear-to-l rtl:md:from-black/10 rtl:md:to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full mx-auto px-6 md:px-18 flex flex-col justify-center">
        <div className="max-w-2xl text-white pt-12">
          <h1 className="text-4xl md:text-6xl font-cairo font-extrabold mb-4 leading-tight">
            <SplitTextReveal text={title} />
          </h1>
          {subtitle && (
            <FadeIn delay={0.2} direction="up">
              <p className="text-base md:text-xl font-cairo text-white/90 leading-relaxed font-medium">
                {subtitle}
              </p>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
