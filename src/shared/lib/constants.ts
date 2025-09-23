const MENU_OPEN_DELAY_MS = 100;

const CATEGORIES = [
  {
    title: "Le Pèlerin Perfume",
    slug: "/le-pelerin-perfume",
    subTitles: [],
  },
  {
    title: "Piel Cosmetics Line",
    slug: "/piel-cosmetics-line",
    subTitles: [
      { subTitle: "Specialiste", slug: "/specialiste" },
      { subTitle: "Youth defence", slug: "/youth-defence" },
      { subTitle: "Safe care", slug: "/safe-care" },
      { subTitle: "Sun & Cold", slug: "/sun-cold" },
      { subTitle: "Sensitive", slug: "/sensitive" },
      { subTitle: "Magnifique", slug: "/magnifique" },
      { subTitle: "Rejuvenate", slug: "/rejuvenate" },
      { subTitle: "Pure salvation", slug: "/pure-salvation" },
      { subTitle: "Men", slug: "/men" },
      { subTitle: "Hair & Lash", slug: "/hair-lash" },
      { subTitle: "Body care", slug: "/body-care" },
      { subTitle: "Professional", slug: "/professional" },
    ],
  },
  {
    title: "Surgene Line",
    slug: "/surgene-line",
    subTitles: [],
  },
  {
    title: "Skincare",
    slug: "/skincare",
    subTitles: [],
  },
  {
    title: "By Skin Type",
    slug: "/by-skin-type",
    subTitles: [],
  },
  {
    title: "Men's Cosmetics",
    slug: "/mens-cosmetics",
    subTitles: [],
  },
  {
    title: "Body Care",
    slug: "/body-care",
    subTitles: [],
  },
  {
    title: "Hair Care",
    slug: "/hair-care",
    subTitles: [],
  },
  {
    title: "Professional Skincare",
    slug: "/professional-skincare",
    subTitles: [],
  },
  {
    title: "Gifts and Packaging",
    slug: "/gifts-packaging",
    subTitles: [],
  },
];

const BREAKPOINTS = {
  lg: "(min-width: 1440px)",
  "max-lg": "(max-width: 1439.98px)",
  "2md": "(min-width: 1100px)",
  "max-2md": "(max-width: 1099.98px)",
  md: "(min-width: 768px)",
  "max-md": "(max-width: 767.98px)",
  sm: "(min-width: 640px)",
  "max-sm": "(max-width: 639.98px)",
  xs: "(min-width: 440px)",
  "max-xs": "(max-width: 439.98px)",
};

export { BREAKPOINTS, MENU_OPEN_DELAY_MS, CATEGORIES };
