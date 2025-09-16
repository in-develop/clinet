"use client";
import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  SvgIcon,
} from "@/shared/ui";
import { FiltersContent } from "@/widgets/filters/ui/FiltersContent";

const Filters = () => {
  return (
    <Sheet modal={true}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className={
            "h-10 justify-between rounded-none !px-5 data-[state=open]:[&>svg]:-rotate-90"
          }
          size="sm"
        >
          <span>Filters</span>
          <SvgIcon
            name={"arrow-scroll-right"}
            className={"rotate-90 transition-transform"}
            width={16}
            height={16}
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        closeButton={false}
        side={"left"}
        className={"!max-w-[663px] p-0"}
      >
        <FiltersContent variant={"desktop"} />
      </SheetContent>
    </Sheet>
  );
};

export { Filters };
