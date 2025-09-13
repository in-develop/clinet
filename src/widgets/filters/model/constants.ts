import { ISortByOption, SortByValue, SortOrder } from "@/widgets/filters/model";

export const sortByOptions = [
  {
    label: "From low to high price",
    value: SortByValue.PRICE,
    order: SortOrder.ASC,
  },
  {
    label: "From high to low price",
    value: SortByValue.PRICE,
    order: SortOrder.DESC,
  },
  {
    label: "By discount",
    value: SortByValue.DISCOUNT,
    order: null,
  },
  {
    label: "By featured",
    value: SortByValue.FEATURED,
    order: null,
  },
] satisfies ISortByOption[];

export const productTypeOptions = {
  NEW_RELEASES: "New Releases",
  SERUMS: "Serums",
  TONERS_AND_ESSENCES: "Toners & Essences",
  EXFOLIATORS: "Exfoliators",
  SETS_AND_COLLECTION: "Sets & Collection",
  FOUNDATION: "Foundation",
  SUNCARE: "Suncare",
};

export const formatOptions = {
  SERUM: "Serum",
  LIQUID: "Liquid",
  POWDER: "Powder",
  SUSPENSION: "Suspension",
};

export const activeIngredientsOptions = {
  ANTIOXADANTS: "Antioxidants",
  DIRECT_ACIDS: "Direct Acids",
  SALICYLIC_ACID: "Salicylic Acid",
  SPF: "SPF",
};

export const preferencesOptions = {
  NO_ALCOHOL: "Alcohol - Free",
  NO_CRUELTY: "Cruelty - Free",
  NO_CLUTEN: "Cluten - Free",
  NO_OIL: "Oil - Free",
  NO_SILICON: "Silicon - Free",
  VEGAN: "Vegan",
};

export const concernOptions = {
  SIGNS_OF_AGING: "Signs Of Aging",
  UNEVEN_SKIN_TONE: "Uneven Skin Tone",
  TEXTURAL_IRREGULARITIES: "Textural Irregularities",
  DRYNESS: "Dryness",
  DULLNESS: "Dullness",
  LOOK_OF_REDNESS: "Look Of Redness",
  VISIBLE_SHINE: "Visible Shine",
  ANTIOXIDANT_SUPPORT: "Antioxidant Support",
  UX_PROTECTION: "UX Protection",
  COVERAGE: "Coverage",
  ADVANCED_SIGNS_OF_AGING: "Advanced Signs Of Aging",
};

export const regimenStepOptions = {
  PREP: "Prep",
  TREAT: "Treat",
  SEAL: "Seal",
};

export const categoryOptions = {
  GIFTS_AND_PACKAGING: "Gifts & Packaging",
};
