"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyboardEvent, MouseEvent } from "react";

import { useCartLocalStorage } from "@/shared/hooks";
import { formatCurrency } from "@/shared/lib/currency";
import { urbanist } from "@/shared/lib/fonts";
import { ROUTING } from "@/shared/lib/rounting";
import { IProduct } from "@/shared/types";
import { Button, Rating } from "@/shared/ui";

interface IProductCardProps {
  data: IProduct;
}

const ProductCard = ({ data }: IProductCardProps) => {
  const hasDiscount = data.discountPrice && data.discountPrice < data.price;
  const router = useRouter();

  const { addItem } = useCartLocalStorage();

  // TODO: replace with actual auth check
  const isAuthenticated = false;

  const handleNavigate = () => {
    router.push(ROUTING.product(data.id));
  };

  const handleAddItemToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isAuthenticated) {
      // TODO: call an api to add item to cart
      return;
    }

    addItem(data.id);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View product ${data.name}`}
      onKeyDown={handleKeyDown}
      onClick={handleNavigate}
      className="border-light-black focus-visible:outline-primary flex cursor-pointer flex-col border focus-visible:outline-2"
    >
      <div className="flex justify-between gap-4 px-2.5 pt-2.5 md:gap-8 md:px-5 md:pt-[31.5px]">
        <div className="flex max-w-[190px] flex-col">
          <h4 className="text-light-black mb-1 text-[clamp(14px,calc(14px+(20-14)*((100vw-390px)/(1440-390))),20px)] leading-[110%] font-bold">
            <Link
              href={ROUTING.product(data.id)}
              aria-label={`Open ${data.name} details`}
              tabIndex={-1}
              aria-hidden="true"
            >
              {data.name}
            </Link>
          </h4>
          <p className={`mb-2 text-xs ${urbanist.className}`}>
            {data.description}
          </p>
        </div>
        <div
          className="text-light-black flex flex-col gap-1"
        >
          {hasDiscount ? (
            <>
              <span className={"text-promotion text-sm font-bold md:text-base"}>
                {formatCurrency(data.discountPrice!)}
              </span>
              <span className={`${urbanist.className} text-xs`}>
                (<s>{formatCurrency(data.price)}</s>)
              </span>
            </>
          ) : (
            <span className="text-sm font-bold md:text-base">
              {formatCurrency(data.price)}
            </span>
          )}
        </div>
      </div>
      <Rating
        className="mt-2.5 mb-5 ml-2.5 md:ml-5"
        rating={data.rating}
        reviewCount={data.reviewCount}
      />
      <div className="relative mx-auto aspect-square w-[clamp(87px,calc(87px+(170-87)*((100vw-390px)/(1440-390))),170px)] flex-1">
        <Image
          src={data.imageUrl}
          alt={data.name}
          className="object-cover"
          fill
        />
      </div>
      <Button
        variant={"card"}
        className="laptop:text-base w-full justify-self-end border-x-0 border-b-0 py-[25.5px] text-xs"
        onClick={handleAddItemToCart}
        aria-label={`Add ${data.name} to bag`}
      >
        Add to bag
      </Button>
    </div>
  );
};

export { ProductCard };
