import { SectionHeader } from "./section-header";
import { useTranslations } from "next-intl";

export function TestimonialsCarousel() {
  const t = useTranslations("home.testimonials");

  const testimonials = [
    { id: 1, name: "Ahmed", role: "CEO", text: t("placeholder_text") },
    { id: 2, name: "Sarah", role: "Marketing Director", text: t("placeholder_text") },
    { id: 3, name: "Omar", role: "Founder", text: t("placeholder_text") }
  ];

  return (
    <section className="py-24 px-6 w-full flex flex-col items-center gap-16 bg-background">
      <SectionHeader 
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      
      {/* Static layout replacing actual carousel for scaffolding */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {testimonials.map((review) => (
          <div key={review.id} className="flex flex-col gap-8 bg-muted/10 border border-border rounded-[30px] p-10 text-center shadow-sm">
            <p className="text-[18px] font-cairo text-muted-foreground italic leading-relaxed">
              {review.text}
            </p>
            <div className="flex flex-col items-center gap-2 mt-auto">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-background shadow-md">
                <span className="font-cairo font-bold text-primary">{review.name.charAt(0)}</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-cairo font-bold text-foreground text-lg">{review.name}</h4>
                <span className="font-cairo text-muted-foreground text-sm">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
