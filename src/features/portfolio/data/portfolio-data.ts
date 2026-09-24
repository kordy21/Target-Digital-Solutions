import Proj1 from "@/assets/proj1.png";
import Proj1Mockup from "@/assets/trsmockup.png";
import Proj2 from "@/assets/proj2.png";
import LaptopProject from "@/assets/laptopproject.png";
import ProjectMockups from "@/assets/projectMockups.png";
import Mock1 from "@/assets/mock1.png";
import Mock2 from "@/assets/mock2.png";
import Mock3 from "@/assets/mock3.png";
import Mock4 from "@/assets/mock4.png";
import VisitsIcon from "@/assets/s1-1.png"; 
import CountryIcon from "@/assets/s1-2.png";
import PlatformIcon from "@/assets/s2-1.png";
import TechIcon from "@/assets/s2-2.png";
import Serv1 from "@/assets/serv1.png";
import Serv2 from "@/assets/serv2.png";
import Serv3 from "@/assets/serv3.png";
import Serv4 from "@/assets/serv4.png";

// Tech logos
import FigmaIcon from "@/assets/figma.png";
import PsIcon from "@/assets/photoshop.png";
import AiIcon from "@/assets/illustrator.png";
import WordPressIcon from "@/assets/wordpress.png";
import XdIcon from "@/assets/xd.png";

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
    description: t('projects.ters.description'),
    image: Proj1,
    mockupImage: Proj1Mockup,
    stats: {
      visits: { label: t('project.visits'), value: "500K", icon: VisitsIcon },
      country: { label: t('project.country'), value: t('projects.ters.country'), icon: CountryIcon, valueColor: "text-primary" },
      platform: { label: t('project.platforms'), value: t('projects.ters.platform'), icon: PlatformIcon, valueColor: "text-primary" },
      tech: { label: t('project.technologies'), icons: [AiIcon, PsIcon, FigmaIcon], iconMain: TechIcon }
    },
    extendedStats: {
      launchYear: "2024",
      rating: "4.8"
    },
    bannerImage: LaptopProject,
    screensImage: ProjectMockups,
    steps: [
      { id: 1, description: t('projects.ters.steps.1'), image: Mock1 },
      { id: 2, description: t('projects.ters.steps.2'), image: Mock2 },
      { id: 3, description: t('projects.ters.steps.3'), image: Mock3 },
      { id: 4, description: t('projects.ters.steps.4'), image: Mock4 },
    ],
    features: [
      { id: 4, title: t('projects.ters.features.4'), image: Serv4 },
      { id: 3, title: t('projects.ters.features.3'), image: Serv3 },
      { id: 2, title: t('projects.ters.features.2'), image: Serv2 },
      { id: 1, title: t('projects.ters.features.1'), image: Serv1 },
    ],
    tools: [
      { id: 1, title: t('projects.ters.tools.1'), image: FigmaIcon, bgColor: "#1e1e1e" },
      { id: 2, title: t('projects.ters.tools.2'), image: PsIcon, bgColor: "#001d26" },
      { id: 3, title: t('projects.ters.tools.3'), image: AiIcon, bgColor: "#330000" },
      { id: 4, title: t('projects.ters.tools.4'), image: WordPressIcon, bgColor: "#ffffff" },
      { id: 5, title: t('projects.ters.tools.5'), image: XdIcon, bgColor: "#470137" },
    ],
    link: "https://ters.com"
  },
  {
    id: 2,
    categoryId: 'websites', 
    title: t('projects.lemonary.title'),
    description: t('projects.lemonary.description'),
    image: Proj2,
    stats: {
      visits: { label: t('project.visits'), value: "500K", icon: VisitsIcon },
      country: { label: t('project.country'), value: t('projects.lemonary.country'), icon: CountryIcon, valueColor: "text-primary" },
      platform: { label: t('project.platforms'), value: t('projects.lemonary.platform'), icon: PlatformIcon, valueColor: "text-primary" },
      tech: { label: t('project.technologies'), icons: [AiIcon, PsIcon, FigmaIcon], iconMain: TechIcon }
    },
    extendedStats: {
      launchYear: "2023",
      rating: "4.9"
    },
    bannerImage: LaptopProject,
    screensImage: ProjectMockups,
    steps: [
      { id: 1, description: t('projects.lemonary.steps.1'), image: Mock1 },
      { id: 2, description: t('projects.lemonary.steps.2'), image: Mock2 },
      { id: 3, description: t('projects.lemonary.steps.3'), image: Mock3 },
      { id: 4, description: t('projects.lemonary.steps.4'), image: Mock4 },
    ],
    features: [
      { id: 4, title: t('projects.lemonary.features.4'), image: Serv4 },
      { id: 3, title: t('projects.lemonary.features.3'), image: Serv3 },
      { id: 2, title: t('projects.lemonary.features.2'), image: Serv2 },
      { id: 1, title: t('projects.lemonary.features.1'), image: Serv1 },
    ],
    tools: [
      { id: 1, title: t('projects.lemonary.tools.1'), image: FigmaIcon, bgColor: "#1e1e1e" },
      { id: 2, title: t('projects.lemonary.tools.2'), image: PsIcon, bgColor: "#001d26" },
      { id: 3, title: t('projects.lemonary.tools.3'), image: AiIcon, bgColor: "#330000" },
      { id: 4, title: t('projects.lemonary.tools.4'), image: WordPressIcon, bgColor: "#ffffff" },
      { id: 5, title: t('projects.lemonary.tools.5'), image: XdIcon, bgColor: "#470137" },
    ],
    link: "https://lemonary.com"
  }
];
