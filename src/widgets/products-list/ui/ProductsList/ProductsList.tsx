"use client";
import { Button, SvgIcon } from "@/shared/ui";

import { mockProducts } from "../../model";
import { ProductCard } from "../ProductCard";

const SLICE_AMOUNT = 12;

const ProductsList = () => {
  // TODO: replace with actual logic for data fetching
  const data = mockProducts;

  const firstSlice = data.slice(0, SLICE_AMOUNT);
  const restSlice = data.slice(SLICE_AMOUNT);

  const handleFetchMore = () => {
    // TODO: implement fetch more logic
  };

  return (
    <div>
      <ul className="container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {firstSlice.map((product) => (
          <li key={product.id} className="contents">
            <ProductCard data={product} />
          </li>
        ))}
      </ul>
      <div className="my-32 h-[584px] w-full bg-red-500">
        {/* TODO: add promo slider here  */}
      </div>
      <ul className="container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {restSlice.map((product) => (
          <li key={product.id} className="contents">
            <ProductCard data={product} />
          </li>
        ))}
      </ul>
      {restSlice.length === SLICE_AMOUNT && (
        <div className="mt-12 flex justify-center">
          <Button
            variant={"secondary"}
            onClick={handleFetchMore}
            aria-label="Show more products"
          >
            <span>Show more</span>
            <SvgIcon
              name="arrow-scroll-right"
              width={16}
              height={16}
              decorative
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export { ProductsList };
