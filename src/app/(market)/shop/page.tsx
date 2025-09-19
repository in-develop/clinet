import { Filters, SortBySelect } from "@/widgets/filters";
import { ActiveFilters } from "@/widgets/filters/ui/ActiveFilters";

const ShopPage = () => {
  return (
    <div className={"relative mt-96 flex min-h-screen flex-col gap-2.5"}>
      <div
        className={"container flex w-full items-center justify-between gap-2"}
      >
        <div className="hidden sm:block">
          <Filters />
        </div>
        <div className="hidden sm:block">
          <SortBySelect />
        </div>
      </div>
      <div className="container">
        <ActiveFilters isInner={false} />
      </div>
      <div className={"h-screen"}></div>
      <div className="sticky bottom-0 z-10 bg-transparent px-5 pb-6 sm:hidden">
        <Filters />
      </div>
    </div>
  );
};

export default ShopPage;
