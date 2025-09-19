"use client";

import { memo } from "react";

import { useFiltersQueryState } from "../../hooks";
import { DEFAULT_FILTERS, FILTERS_DATA, TFiltersParamKey } from "../../model";

import { urbanist } from "@/shared/lib/fonts";
import { SvgIcon } from "@/shared/ui";

interface IActiveFiltersProps {
  onClean?: () => void;
  onRemove?: (_param: TFiltersParamKey, _value: string) => void;

  // false - is used outside of FiltersContent(outside of sheet/drawer), true - is used inside of FiltersContent(inside of sheet/drawer)
  isInner?: boolean;
}

const ActiveFilters = memo(
  ({ onClean, onRemove, isInner = true }: IActiveFiltersProps) => {
    // TODO: replace with real data
    const resultsFound = 7;
    const [filters, setFilters] = useFiltersQueryState();

    const handleClean = () => {
      onClean?.();
      setFilters(DEFAULT_FILTERS);
    };

    const handleRemove = (param: TFiltersParamKey, value: string) => {
      onRemove?.(param, value);

      setFilters((prev) => ({
        ...prev,
        [param]: prev[param].filter((v) => v !== value),
      }));
    };

    const activeFilters: { key: TFiltersParamKey; value: string[] }[] = (
      Object.entries(filters) as [TFiltersParamKey, string[]][]
    )
      .filter(([, value]) => value.length > 0)
      .map(([key, value]) => ({ key, value }));

    const hasActiveFilters = activeFilters.length > 0;

    if (isInner && !hasActiveFilters) {
      return null;
    }
    return (
      <div className={"flex flex-wrap items-center gap-2 min-h-[34px]"}>
        <p
          className={`${urbanist.className} font-sm text-dim-gray mr-2 font-semibold`}
        >
          ({resultsFound} Results)
        </p>

        {hasActiveFilters && (
          <>
            {activeFilters.map((filter) =>
              filter.value.map((el) => (
                <div
                  className={`border-silver relative flex items-center gap-1 rounded-full border py-[5px] pr-2.5 pl-[15px] ${urbanist.className} text-light-black text-sm font-semibold`}
                  key={`${filter.key}-${el}`}
                >
                  <span>{FILTERS_DATA[filter.key].options[el]}</span>
                  <button onClick={() => handleRemove(filter.key, el)}>
                    <SvgIcon
                      name={"x"}
                      className={"text-light-black size-3.5"}
                    />
                  </button>
                </div>
              )),
            )}
            <button
              className={`text-light-black px-[15px] py-[5px] text-sm font-semibold ${urbanist.className} underline`}
              onClick={handleClean}
            >
              <span>Clean filters</span>
            </button>
          </>
        )}
      </div>
    );
  },
);

ActiveFilters.displayName = "ActiveFilters";

export { ActiveFilters };
