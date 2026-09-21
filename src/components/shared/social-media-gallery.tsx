import { SectionHeader } from "./section-header";
import { useTranslations } from "next-intl";

export function SocialMediaGallery() {
  const t = useTranslations("home.social");

  return (
    <section className="py-24 px-6 w-full flex flex-col items-center gap-16 bg-muted/5">
      <SectionHeader 
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[1, 2, 3].map((item) => (
          <div key={item} className="relative w-full aspect-square bg-muted overflow-hidden rounded-[20px] shadow-sm cursor-pointer group">
            {/* Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
              <span className="text-zinc-500 font-cairo">Instagram {item}</span>
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                {/* Play Icon */}
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-primary border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
