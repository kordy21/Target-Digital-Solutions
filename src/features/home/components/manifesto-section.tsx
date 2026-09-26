"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { FadeIn, SlideIn, ZoomIn } from "@/components/shared/animations";
import { ParticleHeading } from "@/components/shared/particle-heading";
import Bubbles from "@/assets/bubbles.png";
import { SplitTextReveal } from "@/components/shared/animations";

const pillars = [
  { key: "speed",    icon: "⚡" },
  { key: "quality",  icon: "✦" },
  { key: "trust",    icon: "🤝" },
  { key: "innovation", icon: "🚀" },
];

export function ManifestoSection() {
  const t = useTranslations("home.manifesto");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden px-6 md:px-20 py-24">
      {/* Ambient Bubbles */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-10 -right-5 h-56 md:h-80"
      >
        <Image src={Bubbles} alt="" aria-hidden className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-10 -left-5 h-40 md:h-64 rotate-180"
      >
        <Image src={Bubbles} alt="" aria-hidden className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto relative z-10">
        {/* Card */}
        <div className="relative w-full bg-background border border-border rounded-[2.5rem] p-10 md:p-16 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col items-center gap-16">

          {/* Top glow accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
            <ZoomIn delay={0.1}>
              <span className="inline-flex items-center gap-2 text-primary font-cairo text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
                <Sparkles className="w-3.5 h-3.5" />
                {t("eyebrow")}
              </span>
            </ZoomIn>

            {/* The ParticleHeading — rings shape wraps the big manifesto headline */}
            <ParticleHeading shape="rings" canvasPadding={70} className="w-full">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-cairo font-extrabold text-foreground leading-tight">
    <SplitTextReveal text={t("title")} />
</h2>
            </ParticleHeading>

            <SlideIn direction="up" delay={0.3}>
              <p className="text-base md:text-lg font-cairo text-muted-foreground leading-loose max-w-2xl">
                {t("description")}
              </p>
            </SlideIn>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.key} delay={0.1 + i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-secondary/40 hover:bg-secondary/80 transition-colors duration-300 text-center group"
                >
                  <motion.span
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className="text-3xl"
                    aria-hidden
                  >
                    {pillar.icon}
                  </motion.span>
                  <span className="font-cairo font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                    {t(`pillars.${pillar.key}`)}
                  </span>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={0.5} direction="up">
            <MagneticButton>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="flex items-center gap-3 justify-center w-fit rounded-full px-10 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group"
                >
                  <span>{t("cta")}</span>
                  {isRTL
                    ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                </Button>
              </Link>
            </MagneticButton>
          </FadeIn>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
