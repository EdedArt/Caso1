export interface FeaturePillar {
  id: string;
  label: string;
  iconName: "clock" | "flame" | "chef" | "timer" | "truck" | "heart";
}

export const featurePillars: FeaturePillar[] = [
  { id: "fresh-dough", label: "FRESH DOUGH", iconName: "clock" },
  { id: "scratch-sauce", label: "SCRATCH SAUCE", iconName: "flame" },
  { id: "premium-cheese", label: "PREMIUM CHEESE", iconName: "chef" },
  { id: "family-recipe", label: "FAMILY RECIPE", iconName: "timer" },
  { id: "hot-crispy", label: "HOT & CRISPY", iconName: "truck" },
  { id: "local-quality", label: "LOCAL QUALITY", iconName: "heart" },
];

export interface DarkCardItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  iconType: "award" | "kids";
}

export const darkCards: DarkCardItem[] = [
  {
    id: "award-winning",
    title: "AWARD-WINNING PIZZA & SERVICE",
    description:
      "Voted best thin crust pizza in Texas with hospitality that makes every guest feel like family.",
    ctaText: "LEARN MORE",
    ctaHref: "#about",
    iconType: "award",
  },
  {
    id: "kids-eat-free",
    title: "KIDS EAT FREE TUESDAYS!",
    description:
      "Every Tuesday dine-in guests receive complimentary kids meals with each adult entrée purchase.",
    ctaText: "VIEW KIDS MENU",
    ctaHref: "#menu",
    iconType: "kids",
  },
];
