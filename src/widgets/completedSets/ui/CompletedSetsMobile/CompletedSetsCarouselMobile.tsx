import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { Button } from "@/shared/ui/Button/index";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/Carousel";

import { ICosmetic } from "../../model";

interface ICompletedSetsCarouselMobileProps {
  items: ICosmetic[];
}

const CompletedSetsCarouselMobile: FC<ICompletedSetsCarouselMobileProps> = (
  props,
) => {
  const { items } = props;

  return (
    <div className="relative h-full">
      <Carousel>
        <CarouselContent progressBar className="border-eerie-black ml-5 first:border-l">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="border-eerie-black flex w-full basis-[75%] flex-col border-y border-r"
            >
              <div className="flex flex-1 flex-col">
                <div className="mt-6 flex w-full flex-row justify-between px-3">
                  <p className="text-xs leading-[100%] font-bold">
                    {item.title}
                  </p>
                  <p className="text-xs leading-[100%] font-bold sm:text-base">
                    {item.price}
                  </p>
                </div>

                <p
                  className={`${urbanist.className} mt-1 w-[70%] px-3 text-xs leading-[100%] font-bold`}
                >
                  {item.description}
                </p>

                <div className="relative mx-auto mt-15 h-[182px] w-[134px]">
                  <Image
                    src={item.image}
                    alt={`CompleteSets ${item.id}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mt-6 mb-0 flex flex-1 items-end">
                  <Button
                    variant="card"
                    className="h-[70px] w-full items-center justify-center border-x-0 border-b-0 text-center font-extrabold"
                  >
                    ADD TO BAG
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { CompletedSetsCarouselMobile };
