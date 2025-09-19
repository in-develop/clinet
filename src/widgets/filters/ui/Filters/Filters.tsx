"use client";
import { useMediaQuery, useMounted } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import { FiltersDesktop } from "@/widgets/filters/ui/FiltersDesktop";
import { FiltersMobile } from "@/widgets/filters/ui/FiltersMobile";

const Filters = () => {
  const [isMobile] = useMediaQuery(BREAKPOINTS["max-sm"]);
  const mounted = useMounted();

  return (
    <>
      {isMobile && <FiltersMobile />}
      {(!mounted || !isMobile) && <FiltersDesktop />}
    </>
  );
};

export { Filters };
