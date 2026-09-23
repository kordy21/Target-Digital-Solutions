import S1_1 from "@/assets/s1-1.png";
import S1_2 from "@/assets/s1-2.png";
import S2_1 from "@/assets/s2-1.png";
import S2_2 from "@/assets/s2-2.png";
import S3_1 from "@/assets/s3-1.png";
import S3_2 from "@/assets/s3-2.png";
import S4_1 from "@/assets/s4-1.png";
import S4_2 from "@/assets/s4-2.png";
import S5_1 from "@/assets/s5-1.png";
import S5_2 from "@/assets/s5-2.png";
import S6_1 from "@/assets/s6-1.png";
import S6_2 from "@/assets/s6-2.png";

export const getServices = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("s1.title"),
    desc1: t("s1.desc1"),
    desc2: t("s1.desc2"),
    cards: [
      {
        image: S1_1,
        title: t("s1.c1_title"),
        desc: t("s1.c1_desc"),
      },
      {
        image: S1_2,
        title: t("s1.c2_title"),
        desc: t("s1.c2_desc"),
      },
    ],
  },
  {
    id: 2,
    title: t("s2.title"),
    desc1: t("s2.desc1"),
    desc2: t("s2.desc2"),
    cards: [
      {
        image: S2_1,
        title: t("s2.c1_title"),
        desc: t("s2.c1_desc"),
      },
      {
        image: S2_2,
        title: t("s2.c2_title"),
        desc: t("s2.c2_desc"),
      },
    ],
  },
  {
    id: 3,
    title: t("s3.title"),
    desc1: t("s3.desc1"),
    desc2: t("s3.desc2"),
    cards: [
      {
        image: S3_1,
        title: t("s3.c1_title"),
        desc: t("s3.c1_desc"),
      },
      {
        image: S3_2,
        title: t("s3.c2_title"),
        desc: t("s3.c2_desc"),
      },
    ],
  },
  {
    id: 4,
    title: t("s4.title"),
    desc1: t("s4.desc1"),
    desc2: t("s4.desc2"),
    cards: [
      {
        image: S4_1,
        title: t("s4.c1_title"),
        desc: t("s4.c1_desc"),
      },
      {
        image: S4_2,
        title: t("s4.c2_title"),
        desc: t("s4.c2_desc"),
      },
    ],
  },
  {
    id: 5,
    title: t("s5.title"),
    desc1: t("s5.desc1"),
    desc2: t("s5.desc2"),
    cards: [
      {
        image: S5_1,
        title: t("s5.c1_title"),
        desc: t("s5.c1_desc"),
      },
      {
        image: S5_2,
        title: t("s5.c2_title"),
        desc: t("s5.c2_desc"),
      },
    ],
  },
  {
    id: 6,
    title: t("s6.title"),
    desc1: t("s6.desc1"),
    desc2: t("s6.desc2"),
    cards: [
      {
        image: S6_1,
        title: t("s6.c1_title"),
        desc: t("s6.c1_desc"),
      },
      {
        image: S6_2,
        title: t("s6.c2_title"),
        desc: t("s6.c2_desc"),
      },
    ],
  },
];
