import {
  IFiltersData,
  ISortByOption,
  SortByValue,
  SortOrder,
  TFiltersSearchParams,
} from "@/widgets/filters/model";

export const SORT_BY_OPTIONS = [
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

export const PRODUCT_TYPE_OPTIONS = {
  NEW_RELEASES: "New Releases",
  SERUMS: "Serums",
  TONERS_AND_ESSENCES: "Toners & Essences",
  EXFOLIATORS: "Exfoliators",
  SETS_AND_COLLECTION: "Sets & Collection",
  FOUNDATION: "Foundation",
  SUNCARE: "Suncare",
};

export const FORMAT_OPTIONS = {
  SERUM: "Serum",
  LIQUID: "Liquid",
  POWDER: "Powder",
  SUSPENSION: "Suspension",
};

export const ACTIVE_INGREDIENTS_OPTIONS = {
  ANTIOXADANTS: "Antioxidants",
  DIRECT_ACIDS: "Direct Acids",
  SALICYLIC_ACID: "Salicylic Acid",
  SPF: "SPF",
};

export const PREFERENCES_OPTIONS = {
  NO_ALCOHOL: "Alcohol - Free",
  NO_CRUELTY: "Cruelty - Free",
  NO_CLUTEN: "Cluten - Free",
  NO_OIL: "Oil - Free",
  NO_SILICON: "Silicon - Free",
  VEGAN: "Vegan",
};

export const CONCERN_OPTIONS = {
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

export const REGIMENT_STEP_OPTIONS = {
  PREP: "Prep",
  TREAT: "Treat",
  SEAL: "Seal",
};

export const CATEGORY_OPTIONS = {
  GIFTS_AND_PACKAGING: "Gifts & Packaging",
};

export const FILTERS_DATA: IFiltersData = {
  productType: {
    label: "Product type",
    options: PRODUCT_TYPE_OPTIONS,
  },
  format: {
    label: "Format",
    options: FORMAT_OPTIONS,
  },
  activeIngredients: {
    label: "Active ingredients",
    options: ACTIVE_INGREDIENTS_OPTIONS,
  },
  preferences: {
    label: "Preferences",
    options: PREFERENCES_OPTIONS,
  },
  concern: {
    label: "Concern",
    options: CONCERN_OPTIONS,
  },
  regimenStep: {
    label: "Regimen step",
    options: REGIMENT_STEP_OPTIONS,
  },
  category: {
    label: "Category",
    options: CATEGORY_OPTIONS,
  },
};


export const DEFAULT_FILTERS: TFiltersSearchParams = {
  activeIngredients: [],
  category: [],
  concern: [],
  format: [],
  preferences: [],
  productType: [],
  regimenStep: [],
} as const;