export type JobCategory = {
  id: string;
  nameAr: string;
  nameEn: string;
};

export type Job = {
  id: string;
  categoryId: string;
  categoryNameAr: string;
  categoryNameEn: string;
  locationAr: string;
  locationEn: string;
  experienceAr: string;
  experienceEn: string;
  educationAr: string;
  educationEn: string;
  titleAr: string;
  titleEn: string;
};

export const jobCategories: JobCategory[] = [
  { id: "all", nameAr: "الكل", nameEn: "All" },
  { id: "ui-ux", nameAr: "Ux Ui Designer", nameEn: "UX/UI Designer" },
  { id: "wordpress", nameAr: "Wordpress Developer", nameEn: "Wordpress Developer" },
  { id: "frontend", nameAr: "Front End Developer", nameEn: "Front End Developer" },
  { id: "backend", nameAr: "Back End Developer", nameEn: "Back End Developer" },
];

export const jobs: Job[] = [
  {
    id: "1",
    categoryId: "ui-ux",
    categoryNameAr: "Ux Ui Designer",
    categoryNameEn: "UX/UI Designer",
    locationAr: "القاهرة",
    locationEn: "Cairo",
    experienceAr: "1-2 سنة",
    experienceEn: "1-2 Years",
    educationAr: "درجة البكالوريوس",
    educationEn: "Bachelor's Degree",
    titleAr: "نحن نقوم بتوظيف مصمم Ui Ux لينضم الى فريقنا",
    titleEn: "We are hiring a UI/UX Designer to join our team",
  },
  {
    id: "2",
    categoryId: "ui-ux",
    categoryNameAr: "Ux Ui Designer",
    categoryNameEn: "UX/UI Designer",
    locationAr: "القاهرة",
    locationEn: "Cairo",
    experienceAr: "1-2 سنة",
    experienceEn: "1-2 Years",
    educationAr: "درجة البكالوريوس",
    educationEn: "Bachelor's Degree",
    titleAr: "نحن نقوم بتوظيف مصمم Ui Ux لينضم الى فريقنا",
    titleEn: "We are hiring a UI/UX Designer to join our team",
  },
  {
    id: "3",
    categoryId: "ui-ux",
    categoryNameAr: "Ux Ui Designer",
    categoryNameEn: "UX/UI Designer",
    locationAr: "القاهرة",
    locationEn: "Cairo",
    experienceAr: "1-2 سنة",
    experienceEn: "1-2 Years",
    educationAr: "درجة البكالوريوس",
    educationEn: "Bachelor's Degree",
    titleAr: "نحن نقوم بتوظيف مصمم Ui Ux لينضم الى فريقنا",
    titleEn: "We are hiring a UI/UX Designer to join our team",
  },
  {
    id: "4",
    categoryId: "frontend",
    categoryNameAr: "Front End Developer",
    categoryNameEn: "Front End Developer",
    locationAr: "عن بعد",
    locationEn: "Remote",
    experienceAr: "3-5 سنوات",
    experienceEn: "3-5 Years",
    educationAr: "درجة البكالوريوس",
    educationEn: "Bachelor's Degree",
    titleAr: "مطلوب مطور واجهات أمامية بخبرة في React و Next.js",
    titleEn: "Front End Developer required with experience in React and Next.js",
  },
  {
    id: "5",
    categoryId: "backend",
    categoryNameAr: "Back End Developer",
    categoryNameEn: "Back End Developer",
    locationAr: "الرياض",
    locationEn: "Riyadh",
    experienceAr: "2-4 سنوات",
    experienceEn: "2-4 Years",
    educationAr: "درجة البكالوريوس",
    educationEn: "Bachelor's Degree",
    titleAr: "نحن نبحث عن مطور خلفية قوي لبناء أنظمة قابلة للتوسع",
    titleEn: "We are looking for a strong Backend Developer to build scalable systems",
  },
  {
    id: "6",
    categoryId: "wordpress",
    categoryNameAr: "Wordpress Developer",
    categoryNameEn: "Wordpress Developer",
    locationAr: "القاهرة",
    locationEn: "Cairo",
    experienceAr: "1-3 سنوات",
    experienceEn: "1-3 Years",
    educationAr: "درجة البكالوريوس",
    educationEn: "Bachelor's Degree",
    titleAr: "مطور ووردبريس محترف لإنشاء وتطوير قوالب مخصصة",
    titleEn: "Professional WordPress Developer to create and develop custom themes",
  },
];
