import Proj1 from "@/assets/proj1.png";
import Proj2 from "@/assets/proj2.png";
import VisitsIcon from "@/assets/s1-1.png"; 
import CountryIcon from "@/assets/s1-2.png";
import PlatformIcon from "@/assets/s2-1.png";
import TechIcon from "@/assets/s2-2.png";

// Tech logos
import FigmaIcon from "@/assets/figma.png";
import PsIcon from "@/assets/photoshop.png";
import AiIcon from "@/assets/illustrator.png";

export const getCategories = (t: (key: string) => string) => [
  { id: 'all', label: t('categories.all'), count: 50 },
  { id: 'programming', label: t('categories.programming'), count: 15 },
  { id: 'mobile', label: t('categories.mobile'), count: 6 },
  { id: 'websites', label: t('categories.websites'), count: 9 },
  { id: 'delivery', label: t('categories.delivery'), count: 2 },
  { id: 'ecommerce', label: t('categories.ecommerce'), count: 3 },
];

export const getProjects = (t: (key: string) => string) => [
  {
    id: 1,
    categoryId: 'programming', 
    title: t('projects.ters.title'),
    image: Proj1,
    stats: {
      visits: { label: t('project.visits'), value: "500K", icon: VisitsIcon },
      country: { label: t('project.country'), value: t('projects.ters.country'), icon: CountryIcon, valueColor: "text-primary" },
      platform: { label: t('project.platforms'), value: t('projects.ters.platform'), icon: PlatformIcon, valueColor: "text-primary" },
      tech: { label: t('project.technologies'), icons: [AiIcon, PsIcon, FigmaIcon], iconMain: TechIcon }
    },
    link: "https://ters.com"
  },
  {
    id: 2,
    categoryId: 'websites', 
    title: t('projects.lemonary.title'),
    image: Proj2,
    stats: {
      visits: { label: t('project.visits'), value: "500K", icon: VisitsIcon },
      country: { label: t('project.country'), value: t('projects.lemonary.country'), icon: CountryIcon, valueColor: "text-primary" },
      platform: { label: t('project.platforms'), value: t('projects.lemonary.platform'), icon: PlatformIcon, valueColor: "text-primary" },
      tech: { label: t('project.technologies'), icons: [AiIcon, PsIcon, FigmaIcon], iconMain: TechIcon }
    },
    link: "https://lemonary.com"
  }
];
