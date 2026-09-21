import { useTranslations } from "next-intl";
import { SectionHeader } from "./section-header";

export function CertificatesSection() {
  const t = useTranslations("home.certificates");

  return (
    <section className="py-24 px-6 w-full flex flex-col items-center gap-16 bg-muted/5">
      <SectionHeader 
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center gap-4">
            <div className="w-full aspect-4/3 bg-background border border-border rounded-[20px] shadow-md flex items-center justify-center overflow-hidden p-2">
               {/* Certificate Image Placeholder */}
               <div className="w-full h-full bg-muted/20 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-cairo text-sm">Certificate {item}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
