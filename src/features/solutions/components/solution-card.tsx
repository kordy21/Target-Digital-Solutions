import { useLocale } from "next-intl";
import Image from "next/image";
import { Solution } from "@/data/solutions";
import { StaggerContainer, StaggerItem } from "@/components/shared/animations";

export function SolutionCard({ solution }: { solution: Solution }) {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <StaggerContainer 
      delayChildren={0.1}
      staggerChildren={0.1}
      className="flex flex-col gap-4 group cursor-pointer h-115"
    >
      {/* Image Container */}
      <StaggerItem className="relative w-full flex-1 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <Image 
          src={solution.image}
          alt={isRTL ? solution.titleAr : solution.titleEn}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </StaggerItem>

      {/* Text Content */}
      <div className="flex flex-col items-start justify-start text-start px-2 mt-2">
        <StaggerItem>
          <h3 className="font-cairo font-bold text-xl md:text-2xl text-foreground mb-1 group-hover:text-primary transition-all duration-300 transform group-hover:rtl:-translate-x-1 group-hover:ltr:translate-x-1">
            {isRTL ? solution.titleAr : solution.titleEn}
          </h3>
        </StaggerItem>
        <StaggerItem>
          <span className="font-cairo text-sm text-muted-foreground/80 font-medium transition-all duration-300 transform group-hover:rtl:-translate-x-1 group-hover:ltr:translate-x-1 inline-block">
            {isRTL ? solution.subtitleAr : solution.subtitleEn}
          </span>
        </StaggerItem>
      </div>
    </StaggerContainer>
  );
}
