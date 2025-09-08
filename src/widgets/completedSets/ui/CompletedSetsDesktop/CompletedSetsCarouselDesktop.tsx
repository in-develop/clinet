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

import { ICompleteSetsItem } from "../../model";

interface ICompletedSetsCarouselDesktopProps {
  items: ICompleteSetsItem[];
}

const CompletedSetsCarouselDesktop: FC<ICompletedSetsCarouselDesktopProps> = (
  props,
) => {
  const { items } = props;

  return (
    <div className="relative h-full">
      <Carousel>
        <CarouselContent className="border-eerie-black">
          {items.map((item) => {
            const { id, image, items } = item;

            return (
              <CarouselItem
                key={id}
                className="border-eerie-black flex w-full flex-col border-t-0 border-r-0 border-b bg-white p-0"
              >
                <div className="flex">
                  <div className="flex basis-[52.64%] flex-col">
                    <div className="relative h-[50vw] max-h-[724px] w-full border-l-0 border-red-600">
                      <Image
                        src={image}
                        alt={`CompleteSets ${id}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="border-eerie-black flex flex-1 items-end border-x">
                      <Button
                        variant="card"
                        className="h-[68px] w-full items-center justify-center border-x-0 border-b-0 text-center font-extrabold sm:h-[70px]"
                      >
                        ADD TO BAG
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-wrap border-t-0">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="border-eerie-black flex basis-[50%] flex-col border border-t border-r border-b-0 border-l-0"
                      >
                        <div className="flex justify-between sm:px-3 sm:pt-8">
                          <p className="text-xs leading-[100%] font-bold sm:text-base">
                            {item.title}
                          </p>
                          <p className="text-xs leading-[100%] font-bold sm:text-base">
                            {item.price}
                          </p>
                        </div>

                        <p
                          className={`${urbanist.className} mt-1 text-xs leading-[100%] font-bold sm:mt-3 sm:px-3 sm:text-xs`}
                        >
                          {item.description}
                        </p>

                        <div className="relative mt-2 h-[120px] w-[90px] self-center sm:mt-9 sm:h-[182px] sm:w-[134px]">
                          <Image
                            src={item.image}
                            alt={`CompleteSets ${item.id}`}
                            fill
                            className="object-contain"
                          />
                        </div>

                        <div className="border-eerie-black flex flex-1 items-end sm:pt-6">
                          <Button
                            variant="card"
                            className="h-[50px] w-full items-center justify-center border-x-0 border-b-0 text-center font-extrabold sm:h-[70px] sm:text-base"
                          >
                            ADD TO BAG
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block" />
        <CarouselNext className="hidden sm:block" />
      </Carousel>
    </div>
  );
};

export { CompletedSetsCarouselDesktop };
