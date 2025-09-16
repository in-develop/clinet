import { inferParserType } from "nuqs";

import { filtersSearchParams } from "@/widgets/filters/model/search-params";

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum SortByValue {
  PRICE = "price",
  DISCOUNT = "discount",
  FEATURED = "featured",
}

export interface ISortByOption {
  label: string;
  value: SortByValue;
  order: SortOrder | null;
}

export type TFiltersSearchParams = inferParserType<typeof filtersSearchParams>;

export type TFiltersParamKey = keyof TFiltersSearchParams;

export type IFiltersData = Record<
  TFiltersParamKey,
  {
    label: string;
    options: Record<string, string>;
  }
>;
