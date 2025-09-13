import { parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";

import { SortByValue, SortOrder } from "@/widgets/filters/model";

const stringParam = parseAsString.withOptions({ clearOnDefault: true });

const enumParam = <T extends string>(values: T[], withDefault?: T) => {
  const parser = parseAsStringEnum<T>(values).withOptions({
    clearOnDefault: true,
  });
  return withDefault ? parser.withDefault(withDefault) : parser;
};

const searchParams = {
  sortBy: enumParam(Object.values(SortByValue), SortByValue.FEATURED),
  sortOrder: enumParam(Object.values(SortOrder)),
  productType: stringParam,
  format: stringParam,
  activeIngredients: stringParam,
  preferences: stringParam,
  concern: stringParam,
  regimenStep: stringParam,
  category: stringParam,
};

export const useFilters = () => useQueryStates(searchParams);
