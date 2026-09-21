import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function FooterCta() {
  const t = useTranslations("home.footer_cta");

  return (
    <section className="py-24 px-6 w-full flex items-center justify-center bg-background">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 bg-white dark:bg-zinc-900 rounded-[40px] p-12 shadow-sm border border-border relative overflow-hidden">
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('/pattern-placeholder.png')] bg-repeat"></div>

        {/* Mascot / Visual */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10">
           <div className="w-75 h-75 bg-primary/10 rounded-[30px] border border-primary/20 flex items-center justify-center">
             <span className="text-primary font-cairo font-bold text-center">Pharaoh Mascot<br/>Placeholder</span>
           </div>
        </div>

        {/* Text & Button */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8 text-center lg:text-start relative z-10">
          <span className="text-primary font-cairo text-[20px] font-bold">{t("eyebrow")}</span>
          <h2 className="text-[40px] font-cairo font-extrabold text-foreground leading-[1.2]">
            {t("title")}
          </h2>
          <Button className="h-15 px-12 rounded-full bg-foreground text-background hover:bg-foreground/90 text-[20px] font-cairo transition-all shadow-md">
            {t("primary_action")}
          </Button>
        </div>

      </div>
    </section>
  );
}
