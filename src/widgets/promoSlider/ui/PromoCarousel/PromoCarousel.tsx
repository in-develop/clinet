"use client";

import Image from "next/image";
import { FC } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import { urbanist } from "@/shared/lib/fonts";
import { Button } from "@/shared/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/Carousel";

import { ICosmetic } from "../PromoSlider/model";

interface IPromoCarouselProps {
  items: ICosmetic[];
}

const PromoCarousel: FC<IPromoCarouselProps> = (props) => {
  const { items } = props;

  const [isMobile] = useMediaQuery([BREAKPOINTS["max-2md"], BREAKPOINTS["md"]]);

  return (
    <div className="flex-[0_0_50%]">
      <Carousel>
        <CarouselContent progressBar className="border-eerie-black border-l">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="border-eerie-black flex basis-[73%] flex-col border-y border-r bg-white md:aspect-[460/562] md:basis-[67.77%]"
            >
              <div className="flex-1 pt-6 md:pt-8">
                <div className="flex w-full flex-row justify-between px-3 md:px-7">
                  <p className="text-base leading-[1] font-bold md:text-xl md:leading-[1.1]">
                    {item.title}
                  </p>
                  <p className="leading-[1] font-bold md:leading-none">
                    {item.price}
                  </p>
                </div>
                <p
                  className={`${urbanist.className} px-3 pt-1 text-xs leading-[1] font-bold md:px-7 md:pt-3 md:text-base md:leading-[1.2] md:font-normal`}
                >
                  {item.description}
                </p>
              </div>
              <div className="relative mx-auto mb-6 aspect-[134/182] w-[34.37vw] md:mb-8 md:aspect-[186/326] md:w-[12.92vw]">
                <Image
                  src={item.image}
                  alt={`Makeup ${item.id}`}
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                variant="card"
                className="h-[68px] w-full items-center justify-center border-x-0 border-b-0 text-center md:h-[84px]"
              >
                <p className="leading-[1] font-extrabold">ADD TO BAG</p>
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {!isMobile && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export { PromoCarousel };
