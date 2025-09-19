import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SvgIcon,
} from "@/shared/ui";
import { FiltersContent } from "@/widgets/filters/ui/FiltersContent";

const FiltersDesktop = () => {
  return (
    <Sheet modal={true}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className={
            "hidden h-10 justify-between rounded-none !px-5 sm:flex data-[state=open]:[&>svg]:-rotate-90"
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
        <div className={"relative flex h-full flex-col overflow-hidden px-10"}>
          <div className={"flex items-center justify-between py-[30px]"}>
            <SheetTitle className={"text-xl font-bold"}>Filters</SheetTitle>

            <SheetClose
              className={
                "border-light-black flex size-[18px] cursor-pointer items-center justify-center border"
              }
            >
              <SvgIcon name={"x"} className={"text-light-black size-3.5"} />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
          <FiltersContent />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { FiltersDesktop };
