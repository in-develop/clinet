import { useQueryStates } from "nuqs";

import { filtersSearchParams } from "@/widgets/filters/model";

export const useFiltersQueryState = () => useQueryStates(filtersSearchParams);
