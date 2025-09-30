import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { Button } from "@/shared/ui/Button/index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/Carousel";

import { ICosmetic } from "../model";

interface IBestsellersCarouselProps {
  items: ICosmetic[];
}

const BestsellersCarousel: FC<IBestsellersCarouselProps> = (props) => {
  const { items } = props;

  return (
    <div className="relative h-full">
      <Carousel>
        <CarouselContent
          progressBar
          className="border-eerie-black first:border-l"
        >
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="border-eerie-black flex h-[397px] basis-[75%] flex-col border-y border-r bg-white p-0 pt-6 sm:h-[562px] sm:basis-[33%] sm:pt-8"
            >
              <div className="flex-1">
                <div className="flex w-full flex-row justify-between gap-10 px-3">
                  <p className="text-base leading-[1] font-bold sm:text-xl sm:leading-[1.1]">
                    {item.title}
                  </p>
                  <p className="leading-[1] font-bold sm:leading-none">
                    {item.price}
                  </p>
                </div>
                <p
                  className={`${urbanist.className} px-3 pt-1 text-xs leading-[1] font-bold sm:pt-3 sm:text-base sm:leading-[1.3] sm:font-normal`}
                >
                  {item.description}
                </p>

                <div className="relative mx-auto mt-15 h-[182px] w-auto sm:mt-8 sm:h-[326px]">
                  <Image
                    src={item.image}
                    alt={`Makeup ${item.id}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <Button
                variant="card"
                className="mt-6 h-[68px] w-full items-center justify-center border-x-0 border-b-0 text-center sm:h-[84px]"
              >
                <p className="leading-[1] font-extrabold">ADD TO BAG</p>
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export { BestsellersCarousel };
