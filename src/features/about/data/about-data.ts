import Team1 from "@/assets/team1.png";
import Team2 from "@/assets/team2.png";
import Team3 from "@/assets/team3.png";

import About1 from "@/assets/about1.png";
import About2 from "@/assets/about2.png";
import About3 from "@/assets/about3.png";
import About4 from "@/assets/about4.png";

export const getProcessSteps = (t: any) => [
  {
    id: 1,
    title: t("steps.step1.title"),
    text: t("steps.step1.description"),
  },
  {
    id: 2,
    title: t("steps.step2.title"),
    text: t("steps.step2.description"),
  },
  {
    id: 3,
    title: t("steps.step3.title"),
    text: t("steps.step3.description"),
  },
];

export const getTeamMembers = (t: any) => [
  {
    id: "ali",
    name: t("members.ali.name"),
    role: t("members.ali.role"),
    image: Team3,
  },
  {
    id: "amr",
    name: t("members.amr.name"),
    role: t("members.amr.role"),
    image: Team2,
  },
  {
    id: "hussein",
    name: t("members.hussein.name"),
    role: t("members.hussein.role"),
    image: Team1,
  },
];

export const getValues = (t: any) => [
  {
    id: "goal",
    title: t("goal.title"),
    text: t("goal.description"),
    image: About1,
  },
  {
    id: "vision",
    title: t("vision.title"),
    text: t("vision.description"),
    image: About2,
  },
  {
    id: "mission",
    title: t("mission.title"),
    text: t("mission.description"),
    image: About3,
  },
  {
    id: "message",
    title: t("message.title"),
    text: t("message.description"),
    image: About4,
  },
];
