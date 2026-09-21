import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
      
      {/* Visual Side (Mockups) */}
      <div className="w-full lg:w-1/2 relative h-100 sm:h-125">
        {/* Placeholder for the overlapping dashboards/images */}
        <div className="absolute top-0 right-0 sm:right-10 w-[80%] h-[70%] bg-muted/40 rounded-2xl border border-border shadow-2xl overflow-hidden flex items-center justify-center">
           <span className="font-cairo text-muted-foreground">Dashboard Image 1</span>
        </div>
        <div className="absolute bottom-0 left-0 sm:left-10 w-[70%] h-[60%] bg-muted/60 rounded-2xl border border-border shadow-2xl overflow-hidden flex items-center justify-center z-10 translate-y-10">
           <span className="font-cairo text-muted-foreground">Dashboard Image 2</span>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-start">
        <span className="text-primary font-cairo text-[20px] font-bold">من نحن</span>
        <h2 className="text-[40px] md:text-[50px] font-cairo font-extrabold text-foreground leading-[1.2]">
          اكتشف قصة نجاحنا معنا
        </h2>
        <p className="text-[18px] md:text-[20px] font-cairo text-muted-foreground leading-relaxed">
          نحن فريق من المبدعين الشغوفين ببناء حلول رقمية مبتكرة تلبي تطلعات عملائنا. من خلال خبرتنا الواسعة في تطوير الويب والتطبيقات، نضمن لك تقديم أفضل النتائج الممكنة.
        </p>
        <Button className="mt-4 h-13.75 px-8 rounded-full w-fit bg-foreground text-background hover:bg-foreground/90 font-cairo text-[18px]">
          اقرأ المزيد عنا
        </Button>
      </div>

    </section>
  );
}
