import { useTranslations } from "next-intl";
import { StatCounter } from "./stat-counter";

export function StatsSection() {
  const t = useTranslations("home.stats");

  return (
    <section className="py-24 px-6 w-full flex items-center justify-center bg-background">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Image of hands stacked */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-125 aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl bg-muted">
            <div className="absolute inset-0 flex items-center justify-center font-cairo text-muted-foreground bg-cover bg-center" style={{ backgroundImage: "url('/hands-placeholder.png')" }}>
               Image Placeholder
            </div>
            
            {/* Overlay badge on image */}
            <div className="absolute bottom-8 left-8 w-32 h-32 bg-primary text-primary-foreground rounded-full flex flex-col items-center justify-center border-4 border-background shadow-lg p-4 text-center">
              <span className="font-cairo font-bold text-sm">Target Digital Solutions</span>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Counters */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center lg:text-start">
            <span className="text-primary font-cairo text-[20px] font-bold">{t("eyebrow")}</span>
            <h2 className="text-[40px] md:text-[50px] font-cairo font-extrabold text-foreground leading-[1.2]">
              {t("title")}
            </h2>
            <p className="text-[18px] font-cairo text-muted-foreground leading-relaxed mt-4">
              {t("description")}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            <StatCounter value="10+" label={t("years_experience")} />
            <StatCounter value="100+" label={t("projects")} />
            <StatCounter value="50+" label={t("clients")} />
            <StatCounter value="24/7" label={t("support")} />
          </div>
        </div>

      </div>
    </section>
  );
}
