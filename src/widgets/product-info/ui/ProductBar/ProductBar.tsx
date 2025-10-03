"use client";

import Image from "next/image";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import { cn } from "@/shared/lib/utils";
import { AddToCartButton } from "@/widgets/product-info/ui/AddToCartButton";
import { ProductPrice } from "@/widgets/product-info/ui/ProductPrice";

import { IFullProduct } from "../../model";
import { ProductCapacity } from "../ProductCapacity";

interface IProductBarProps {
  product: IFullProduct;
  hidden: boolean;
}

const ProductBar = ({ product, hidden }: IProductBarProps) => {
  const [isNotMobile, isLaptop] = useMediaQuery([
    BREAKPOINTS["md"],
    BREAKPOINTS["2md"],
  ]);
  return (
    <div
      className={cn(
        "bg-bg-block border-light-black fixed inset-x-0 bottom-0 z-40 flex justify-center border-t pr-[var(--removed-body-scroll-bar-size)] transition-transform duration-300",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
    >
      <div className="flex w-full justify-between gap-4 px-5 py-2.5">
        <div className="flex min-w-0 items-center gap-3.5">
          {isNotMobile && (
            <div className="relative hidden aspect-square size-[70px] md:block">
              <Image
                src={product.images[0]}
                alt={`Image of ${product.name}`}
                fill
              />
            </div>
          )}
          <div className="flex min-w-0 flex-col gap-1.5">
            {isNotMobile && (
              <h2 className={"hidden truncate text-base font-bold md:block"}>
                {product.name}
              </h2>
            )}
            <ProductPrice
              price={product.price}
              discountPrice={product.discountPrice}
              className="flex-col-reverse items-start max-md:gap-0 md:flex-row [&>span]:text-base"
            />
          </div>
          {isNotMobile && (
            <ProductCapacity variant="select" data={product.capacityOptions} />
          )}
        </div>
        <div className="2md:max-w-[546px] flex w-full max-w-[212px] items-center justify-end">
          <AddToCartButton
            productId={product.id}
            stockQuantity={product.stockQuantity}
            withControls={isLaptop}
            className="max-2md:[&>button]:text-base h-full max-h-[62px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export { ProductBar };
