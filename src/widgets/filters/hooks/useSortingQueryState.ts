import { useQueryStates } from "nuqs";

import { sortBySearchParams } from "@/widgets/filters/model";

export const useSortingQueryState = () => useQueryStates(sortBySearchParams);
