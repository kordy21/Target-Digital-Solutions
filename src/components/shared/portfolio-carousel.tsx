import { SectionHeader } from "./section-header";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function PortfolioCarousel() {
  const t = useTranslations("home.portfolio");

  return (
    <section className="py-24 px-6 w-full flex flex-col items-center gap-16 bg-background">
      <SectionHeader 
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      
      {/* Static layout replacing actual carousel for scaffolding */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center gap-6">
            <div className="w-full aspect-4/3 bg-muted/30 border border-border rounded-xl shadow-lg flex items-center justify-center p-4">
               {/* Laptop Mockup Placeholder */}
               <div className="w-full h-full bg-background border-8 border-zinc-800 rounded-lg flex items-center justify-center shadow-inner">
                  <span className="text-muted-foreground font-cairo">Project Image {item}</span>
               </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-xl font-cairo font-bold text-foreground">Project Name {item}</h3>
              <p className="text-muted-foreground font-cairo text-sm text-center">Web Application</p>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="h-12 px-8 rounded-full font-cairo text-[18px]">
        {t("view_all")}
      </Button>
    </section>
  );
}
