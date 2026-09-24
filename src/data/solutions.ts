import EcommerceImg from "@/assets/ecommerce.png";
import FurnitureImg from "@/assets/furniture.png";
import PharmacyImg from "@/assets/pharmacy.png";
import GymImg from "@/assets/gym.png";
import FashionImg from "@/assets/fashion.png";
import { StaticImageData } from "next/image";

export type SolutionCategory = {
  id: string;
  nameAr: string;
  nameEn: string;
};

export type Solution = {
  id: string;
  categoryId: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  image: StaticImageData;
  featured?: boolean;
};

export const solutionCategories: SolutionCategory[] = [
  { id: "all", nameAr: "الكل", nameEn: "All" },
  { id: "ecommerce", nameAr: "تجارة إلكترونية", nameEn: "E-commerce" },
  { id: "companies", nameAr: "شركات", nameEn: "Companies" },
];

export const solutions: Solution[] = [
  {
    id: "1",
    categoryId: "ecommerce",
    titleAr: "أثـــــــاث",
    titleEn: "Furniture",
    subtitleAr: "تجارة إلكترونية",
    subtitleEn: "E-commerce",
    image: FurnitureImg,
  },
  {
    id: "2",
    categoryId: "ecommerce",
    titleAr: "متــــــاجر",
    titleEn: "Stores",
    subtitleAr: "تجارة إلكترونية",
    subtitleEn: "E-commerce",
    image: EcommerceImg,
    featured: true,
  },
  {
    id: "3",
    categoryId: "ecommerce",
    titleAr: "سوق ( ملابس )",
    titleEn: "Fashion Market",
    subtitleAr: "تجارة إلكترونية",
    subtitleEn: "E-commerce",
    image: FashionImg,
  },
  {
    id: "4",
    categoryId: "ecommerce",
    titleAr: "جيم ( لياقة بدنية )",
    titleEn: "Gym (Fitness)",
    subtitleAr: "تجارة إلكترونية",
    subtitleEn: "E-commerce",
    image: GymImg,
  },
  {
    id: "5",
    categoryId: "ecommerce",
    titleAr: "طب و صيدليات",
    titleEn: "Medicine & Pharmacies",
    subtitleAr: "تجارة إلكترونية",
    subtitleEn: "E-commerce",
    image: PharmacyImg,
  },
];
