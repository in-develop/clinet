import { useEffect, useState } from "react";

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

import { SortBySelect } from "../SortBySelect";

const OBSERVE_ROOT_MARGIN = "0px 0px -80px 0px";

const FiltersMobile = () => {
  const [savedSorting] = useSortingQueryState();
  const [hidden, setHidden] = useState(false);
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const endEl = document.getElementById("products-end-sentinel");
    const showMoreEl = document.querySelector("[data-role='show-more']");
    if (!endEl && !showMoreEl) return;

    const callback: IntersectionObserverCallback = (entries) => {
      const anyVisible = entries.some((e) => e.isIntersecting);
      setHidden(anyVisible);
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: OBSERVE_ROOT_MARGIN,
      threshold: 0,
    });

    if (endEl) observer.observe(endEl);
    if (showMoreEl) observer.observe(showMoreEl as Element);

    // eslint-disable-next-line
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Drawer>
      <div
        className={`sticky bottom-0 z-10 bg-transparent px-5 pb-6 transition-[transform,opacity] duration-200 sm:hidden ${hidden ? "pointer-events-none -translate-y-2 opacity-0" : "opacity-100"}`}
      >
        <DrawerTrigger asChild>
          <Button
            className={
              "bg-light-black hover:text-light-black w-full py-[18px] font-bold text-white normal-case hover:bg-white"
            }
            variant={"card"}
          >
            FILTERS and SORT
          </Button>
        </DrawerTrigger>
      </div>
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
