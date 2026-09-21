import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative w-full min-h-200 bg-[#07132F] overflow-hidden flex items-center pt-24 pb-16">
      {/* 
        This acts as the dark blue background seen in the design.
        In reality, it's an image bg, but a dark color works for scaffolding.
      */}
      <div className="absolute inset-0 bg-[url('/hero-bg-placeholder.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text & CTA (Visually Right in RTL) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-start">
          <div className="flex flex-col gap-4">
            <h1 className="text-[50px] md:text-[70px] font-cairo font-extrabold text-white leading-[1.2] drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="text-[20px] md:text-[26px] font-cairo text-white/90 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full md:w-auto justify-center lg:justify-start">
            <Button className="h-15 px-10 rounded-full text-[18px] font-cairo bg-foreground text-background hover:bg-foreground/90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] w-full sm:w-auto">
              {t("cta_primary")}
            </Button>
            <Button className="h-15 px-10 rounded-full text-[18px] font-cairo bg-transparent border border-white/20 text-white hover:bg-white/5 transition-all w-full sm:w-auto">
              {t("cta_secondary")}
            </Button>
          </div>
        </div>

        {/* Visual / Illustration Side */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-12 lg:mt-0">
           <div className="relative w-125 h-125 max-w-125 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
             <span className="text-white/50 font-cairo text-sm">3D Illustration Placeholder</span>
           </div>
        </div>

      </div>
    </section>
  );
}
