import { Filters, SortBySelect } from "@/widgets/filters";

const ShopPage = () => {
  return (
    <div
      className={
        "container my-96 flex w-full items-center justify-between gap-2"
      }
    >
      <Filters />
      <SortBySelect />
    </div>
  );
};

export default ShopPage;
