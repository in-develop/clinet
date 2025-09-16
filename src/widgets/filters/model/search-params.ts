import { parseAsArrayOf, parseAsString, parseAsStringEnum } from "nuqs";

import { SortByValue, SortOrder } from "@/widgets/filters/model/types";

const stringArrayParam = parseAsArrayOf(parseAsString)
  .withOptions({ clearOnDefault: true })
  .withDefault([]);

const enumParam = <T extends string>(values: T[], withDefault?: T) => {
  const parser = parseAsStringEnum<T>(values).withOptions({
    clearOnDefault: true,
  });
  return withDefault ? parser.withDefault(withDefault) : parser;
};

export const filtersSearchParams = {
  productType: stringArrayParam,
  format: stringArrayParam,
  activeIngredients: stringArrayParam,
  preferences: stringArrayParam,
  concern: stringArrayParam,
  regimenStep: stringArrayParam,
  category: stringArrayParam,
};

export const sortBySearchParams = {
  sortBy: enumParam(Object.values(SortByValue), SortByValue.FEATURED),
  sortOrder: enumParam(Object.values(SortOrder)),
};
