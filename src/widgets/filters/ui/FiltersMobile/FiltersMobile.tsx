import { useEffect, useState } from "react";

import { SortBySelect } from "../SortBySelect";

import { urbanist } from "@/shared/lib/fonts";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui";
import { useSortingQueryState } from "@/widgets/filters/hooks";
import { SortByValue, SortOrder } from "@/widgets/filters/model";
import { FiltersContent } from "@/widgets/filters/ui/FiltersContent";

const FiltersMobile = () => {
  const [savedSorting] = useSortingQueryState();
  const [unsavedSorting, setUnsavedSorting] = useState<{
    sortBy: SortByValue;
    sortOrder: SortOrder | null;
  }>({
    sortBy: savedSorting.sortBy || SortByValue.FEATURED,
    sortOrder: savedSorting.sortOrder || null,
  });

  const handleSortingChange = (
    sortBy: SortByValue,
    sortOrder: SortOrder | null,
  ) => {
    setUnsavedSorting({ sortBy, sortOrder });
  };


  useEffect(() => {
    setUnsavedSorting({
      sortBy: savedSorting.sortBy || SortByValue.FEATURED,
      sortOrder: savedSorting.sortOrder || null,
    });
  }, [savedSorting]);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={
            "bg-light-black hover:text-light-black w-full py-[18px] font-bold text-white normal-case hover:bg-transparent sm:hidden"
          }
          variant={"card"}
        >
          FILTERS and SORT
        </Button>
      </DrawerTrigger>
      <DrawerContent className="!max-h-[calc(100dvh-120px)]">
        <div
          className={
            "relative flex h-full flex-col gap-10 overflow-hidden px-10"
          }
        >
          <div className={"flex items-center justify-between pt-[30px]"}>
            <DrawerTitle
              className={`${urbanist.className} text-light-black w-full text-center font-bold`}
            >
              FILTERS and SORT
            </DrawerTitle>
          </div>
          <div className={"no-scrollbar space-y-10 overflow-y-auto"}>
            <SortBySelect
              isMobile
              unsavedSorting={unsavedSorting}
              onSortingChange={handleSortingChange}
            />
            <FiltersContent isMobile unsavedSorting={unsavedSorting} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { FiltersMobile };
