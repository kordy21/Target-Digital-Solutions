"use client";

import { FadeIn, SlideIn } from "@/components/shared/animations";
import Image from "next/image";
import { ProjectData } from "./project-card";
import { useTranslations, useLocale } from "next-intl";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Bubbles from "@/assets/bubbles.png";

export function ProjectSteps({ project }: { project: ProjectData }) {
  const t = useTranslations("portfolioPage.project");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  if (!project.steps || project.steps.length === 0) return null;

  // Oval/elliptical snake — smooth S-curves in the CENTER of the container
  const snakePath = [
    "M 500 0",
    "C 800 0, 800 250, 500 250",
    "C 200 250, 200 500, 500 500",
    "C 800 500, 800 750, 500 750",
    "C 200 750, 200 1000, 500 1000",
  ].join(" ");

  // Which visual side should each step appear on?
  // RTL: step 1 → visual right (CSS right:0); LTR: step 1 → visual left (CSS left:0)
  const getSide = (index: number): "left" | "right" =>
    isRTL ? (index % 2 === 0 ? "right" : "left")
          : (index % 2 === 0 ? "left"  : "right");

  // Dots are centered vertically in each step's quarter
  const dotTops = ["12.5%", "37.5%", "62.5%", "87.5%"];

  return (
    <section
      className="w-full relative px-6 md:px-20"
      ref={containerRef}
    >
      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-20 -left-5 h-40 md:h-64 rotate-180"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-1/4 right-0 h-32 md:h-48 -rotate-90"
      >
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center relative z-10 overflow-hidden">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <FadeIn direction="up">
            <h3 className="text-xl md:text-2xl font-cairo font-bold text-primary">
              {t("stepsTitle")}
            </h3>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-cairo font-black text-foreground">
              {t("stepsSubtitle")}
            </h2>
          </SlideIn>
        </div>

        {/* ── DESKTOP ── */}
        <div
          className="relative w-full hidden md:block"
          style={{ height: "1100px" }}
        >
          {/* Snake SVG — mirrored for RTL */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center pointer-events-none z-0",
              isRTL ? "scale-x-[-1]" : ""
            )}
          >
            <svg
              className="h-full w-auto"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id="steps-mask">
                  <motion.path
                    d={snakePath}
                    stroke="white"
                    strokeWidth="30"
                    fill="transparent"
                    style={{ pathLength }}
                  />
                </mask>
              </defs>
              {/* faint ghost */}
              <path
                d={snakePath}
                stroke="currentColor"
                strokeWidth="5"
                strokeDasharray="18 22"
                strokeLinecap="round"
                className="text-primary "
              />
              {/* animated fill */}
              <path
                d={snakePath}
                stroke="currentColor"
                strokeWidth="5"
                strokeDasharray="18 22"
                strokeLinecap="round"
                className="text-primary"
                mask="url(#steps-mask)"
              />
            </svg>
          </div>

          {/* Content blocks — in the left/right thirds */}
          {project.steps.map((step, index) => {
            const side = getSide(index);
            const topPct = (index / project.steps!.length) * 100;
            return (
              <div
                key={step.id}
                className={cn(
                  "absolute w-[38%] flex flex-col items-center",
                  side === "right" ? "right-0 items-center" : "left-0 items-center"
                )}
                style={{ top: `${topPct + 2}%` }}
              >
                <FadeIn
                  direction={side === "right" ? "left" : "right"}
                  delay={0.15}
                  className="flex flex-col items-center gap-5 w-full max-w-sm"
                >
                  <Image
                    src={step.image}
                    alt={`Step ${step.id}`}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                  <p
                    className={cn(
                      "text-base md:text-lg text-muted-foreground font-cairo leading-relaxed",
                      isRTL ? "text-center" : "text-center"
                    )}
                  >
                    {step.description}
                  </p>
                </FadeIn>
              </div>
            );
          })}

          {/* Numbered dots — always at horizontal center */}
          {project.steps.map((step, index) => (
            <div
              key={`dot-${step.id}`}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-20 shadow-[0_0_24px_rgba(37,99,235,0.45)]"
              style={{ top: dotTops[index] }}
            >
              {step.id}
            </div>
          ))}
        </div>

        {/* ── MOBILE ── */}
        <div className="md:hidden w-full relative">
          {/* Vertical dashed line — on the START edge (right in RTL, left in LTR) */}
          <div
            className="absolute top-0 bottom-0 z-0 ltr:left-5.5 rtl:right-5.5 ltr:border-l-4 rtl:border-r-4 border-dashed border-primary/20"
          />
          <motion.div
            className="absolute top-0 z-0 origin-top ltr:left-5.5 rtl:right-5.5 ltr:border-l-4 rtl:border-r-4 border-dashed border-primary"
            style={{ scaleY: pathLength, height: "100%" }}
          />

          <div className="flex flex-col gap-14">
            {project.steps.map((step) => (
              <div
                key={step.id}
                className="flex items-start gap-5 relative flex-row"
              >
                {/* Dot */}
                <div className="w-11 h-11 shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-20 shadow-[0_0_20px_rgba(37,99,235,0.4)] relative">
                  {step.id}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 flex-1 items-start text-start">
                  <Image
                    src={step.image}
                    alt={`Step ${step.id}`}
                    className="w-full max-w-xs h-auto object-contain drop-shadow-2xl"
                  />
                  <p className="text-base text-muted-foreground font-cairo leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
