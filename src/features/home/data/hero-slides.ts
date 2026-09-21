import HeroSlide1 from "@/assets/HeroSlide1.jpg";
import HeroSlide2 from "@/assets/HeroSlide2.png";
import HeroSlide3 from "@/assets/HeroSlide3.png";
import { StaticImageData } from "next/image";

export interface HeroSlide {
  id: number;
  image: StaticImageData;
  titleKey: string;
  subtitleKey: string;
  primaryActionKey: string;
  secondaryActionKey: string;
}

export const slidesData: HeroSlide[] = [
  {
    id: 0,
    image: HeroSlide1,
    titleKey: "slide1_title",
    subtitleKey: "slide1_subtitle",
    primaryActionKey: "slide1_primary",
    secondaryActionKey: "slide1_secondary"
  },
  {
    id: 1,
    image: HeroSlide2,
    titleKey: "slide2_title",
    subtitleKey: "slide2_subtitle",
    primaryActionKey: "slide2_primary",
    secondaryActionKey: "slide2_secondary"
  },
  {
    id: 2,
    image: HeroSlide3,
    titleKey: "slide3_title",
    subtitleKey: "slide3_subtitle",
    primaryActionKey: "slide3_primary",
    secondaryActionKey: "slide3_secondary"
  }
];
