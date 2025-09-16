"use client";

import { useState } from "react";

import { useFiltersQueryState } from "@/widgets/filters/hooks";
import { FILTERS_DATA, TFiltersParamKey, TFiltersSearchParams, } from "@/widgets/filters/model";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
  DrawerTitle,
  SheetClose,
  SheetTitle,
  SvgIcon,
} from "@/shared/ui";
import { urbanist } from "@/shared/lib/fonts";

interface IFiltersContentProps {
  variant: "desktop" | "mobile";
}

const defaultFilters: TFiltersSearchParams = {
  activeIngredients: [],
  category: [],
  concern: [],
  format: [],
  preferences: [],
  productType: [],
  regimenStep: [],
};

const FiltersContent = ({ variant }: IFiltersContentProps) => {
  // TODO: replace with real data
  const resultsFound = 7;
  const [savedFilters, setSavedFilters] = useFiltersQueryState();

  const [unsavedFilters, setUnsavedFilters] =
    useState<TFiltersSearchParams>(savedFilters);

  const handleApply = () => {
    setSavedFilters(unsavedFilters);
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

  const handleRemove = (param: TFiltersParamKey, value: string) => {
    setUnsavedFilters((prev) => ({
      ...prev,
      [param]: prev[param].filter((v) => v !== value),
    }));
    setSavedFilters((prev) => ({
      ...prev,
      [param]: prev[param].filter((v) => v !== value),
    }));
  };

  const handleClean = () => {
    setUnsavedFilters(defaultFilters);
    setSavedFilters(defaultFilters);
  };

  const activeFilters: { key: TFiltersParamKey; value: string[] }[] = (
    Object.entries(savedFilters) as [TFiltersParamKey, string[]][]
  )
    .filter(([, value]) => value.length > 0)
    .map(([key, value]) => ({ key, value }));

  const hasActiveFilters = activeFilters.length > 0;

  return (
    <div className={"relative flex h-full flex-col px-10"}>
      <div className={"flex items-center justify-between py-[30px]"}>
        {variant === "desktop" ? (
          <SheetTitle>Filters</SheetTitle>
        ) : (
          <DrawerTitle>Filters</DrawerTitle>
        )}
        {variant === "desktop" && (
          <SheetClose
            className={
              "border-light-black flex size-[18px] cursor-pointer items-center justify-center border"
            }
          >
            <SvgIcon name={"x"} className={"text-light-black size-3.5"} />
            <span className="sr-only">Close</span>
          </SheetClose>
        )}
      </div>
      <div className={"no-scrollbar h-full overflow-y-auto"}>
        {hasActiveFilters && (
          <div className={"flex flex-wrap items-center gap-2"}>
            <p
              className={`${urbanist.className} font-sm text-dim-gray mr-2 font-semibold`}
            >
              ({resultsFound} Results)
            </p>
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
          </div>
        )}
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
          Apply
        </Button>
      </div>
    </div>
  );
};

export { FiltersContent };
