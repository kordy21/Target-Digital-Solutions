import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function ContactCtaBanner() {
  const t = useTranslations("home.contact_cta");

  return (
    <section className="relative w-full h-100 flex items-center justify-center bg-[url('/contact-bg-placeholder.png')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center gap-8 text-center">
        <h2 className="text-[40px] md:text-[50px] font-cairo font-extrabold text-white leading-tight drop-shadow-lg">
          {t("title")}
        </h2>
        
        <div className="flex gap-4">
          <Button className="h-15 px-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-[20px] font-cairo transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            {t("primary_action")}
          </Button>
          <Button className="h-15 px-12 rounded-full bg-transparent text-white border border-white hover:bg-white/10 text-[20px] font-cairo transition-all">
            {t("secondary_action")}
          </Button>
        </div>
      </div>
    </section>
  );
}
