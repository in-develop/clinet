"use client";

import { useCallback, useMemo, useState } from "react";

import { ActiveFilters } from "../ActiveFilters";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
} from "@/shared/ui";
import {
  useFiltersQueryState,
  useSortingQueryState,
} from "@/widgets/filters/hooks";
import {
  DEFAULT_FILTERS,
  FILTERS_DATA,
  SortByValue,
  SortOrder,
  TFiltersParamKey,
  TFiltersSearchParams,
} from "@/widgets/filters/model";

interface IFiltersContentProps {
  isMobile?: boolean;
  unsavedSorting?: { sortBy: SortByValue; sortOrder: SortOrder | null };
}

const FiltersContent = ({
  isMobile = false,
  unsavedSorting,
}: IFiltersContentProps ) => {
  const [savedFilters, setSavedFilters] = useFiltersQueryState();
  const [savedSorting, setSavedSorting] = useSortingQueryState();

  const [unsavedFilters, setUnsavedFilters] =
    useState<TFiltersSearchParams>(savedFilters);

  const newFiltersCount = useMemo(() => {
    let count = 0;
    (Object.keys(FILTERS_DATA) as TFiltersParamKey[]).forEach((param) => {
      const savedSet = new Set(savedFilters[param]);
      const unsavedSet = new Set(unsavedFilters[param]);

      savedSet.forEach((v) => {
        if (!unsavedSet.has(v)) count += 1;
      });

      unsavedSet.forEach((v) => {
        if (!savedSet.has(v)) count += 1;
      });
    });

    if (isMobile && unsavedSorting) {
      if (
        unsavedSorting.sortBy !== savedSorting.sortBy ||
        unsavedSorting.sortOrder !== savedSorting.sortOrder
      ) {
        count += 1;
      }
    }

    return count;
  }, [savedFilters, unsavedFilters, isMobile, unsavedSorting, savedSorting]);

  const handleApply = () => {
    setSavedFilters(unsavedFilters);

    if (isMobile && unsavedSorting) {
      setSavedSorting(unsavedSorting);
    }
  };

  const handleChange = (
    param: TFiltersParamKey,
    value: string,
    added: boolean,
  ) => {
    setUnsavedFilters((prev) => ({
      ...prev,
      [param]: added
        ? [...prev[param], value]
        : prev[param].filter((v) => v !== value),
    }));
  };

  const handleRemove = useCallback((param: TFiltersParamKey, value: string) => {
    setUnsavedFilters((prev) => ({
      ...prev,
      [param]: prev[param].filter((v) => v !== value),
    }));
  }, []);

  const handleClean = useCallback(() => {
    setUnsavedFilters(DEFAULT_FILTERS);
  }, []);

  return (
    <>
      <div className={"no-scrollbar h-full overflow-y-auto"}>
        <ActiveFilters onClean={handleClean} onRemove={handleRemove} />

        <div className={"mt-6 pb-32"}>
          <Accordion type={"multiple"} className={"border-none"}>
            {(Object.keys(FILTERS_DATA) as TFiltersParamKey[]).map((param) => {
              const { label, options } = FILTERS_DATA[param];
              return (
                <AccordionItem
                  value={param}
                  className={
                    "border-none p-0 not-first:[&>h3>button]:border-t-0"
                  }
                  key={param}
                >
                  <AccordionTrigger
                    indicator={"chevron"}
                    className={
                      "data-[state=open]:bg-bg-block border-y-silver hover:bg-bg-block border-y px-10 py-5 transition-colors"
                    }
                  >
                    {label}
                  </AccordionTrigger>
                  <AccordionContent className={"flex flex-col p-0"}>
                    {Object.entries(options).map(([value, optionLabel]) => (
                      <div
                        className={
                          "border-t-silver last:border-b-silver flex items-center gap-2 border-t px-10 py-5 first:border-t-0 last:border-b"
                        }
                        key={value}
                      >
                        <Checkbox
                          id={value}
                          defaultChecked={savedFilters[param].includes(value)}
                          checked={unsavedFilters[param].includes(value)}
                          onCheckedChange={(checked) =>
                            handleChange(param, value, checked as boolean)
                          }
                        />
                        <label htmlFor={value}>{optionLabel}</label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div className={"absolute bottom-0 left-0 mt-auto w-full bg-white p-10"}>
        <Button
          variant={"card"}
          className={
            "bg-light-black hover:text-light-black w-full py-[18px] font-extrabold text-white hover:bg-transparent"
          }
          onClick={handleApply}
        >
          Apply {newFiltersCount > 0 && `(${newFiltersCount})`}
        </Button>
      </div>
    </>
  );
};

export { FiltersContent };
