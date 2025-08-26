import Image from "next/image";

import { Button } from "@/shared/ui/Button/index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";

export default function CosmeticsCarousel() {
  return (
    <Carousel>
      <CarouselContent className="border-eerie-black divide-eerie-black basis-[75%] divide-x first:border-l">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-[75%] border-t bg-white p-0 pt-6 sm:pt-8 lg:basis-[33%]"
          >
            <div className="last:border-r">
              <div className="flex w-full flex-row justify-between px-3 text-lg font-bold sm:text-base">
                <p>C-Intense Serum</p>
                <p>$23.00</p>
              </div>
              <p className="px-3 pt-1 text-base font-bold sm:pt-3 sm:text-xs">
                Serum with 5% Vitamin C
              </p>
              {/* <Image
                  src="/makeup/1.png"
                  alt="Makeup 1"
                  width={134}
                  height={182}
                  className="mx-auto mt-15 h-[182px] w-[134px]"
                /> */}
              <div className="relative mx-auto h-[182px] w-[134px] pt-15 sm:h-[326px] sm:w-[250px] sm:pt-8">
                <Image
                  src="/makeup/1.png"
                  alt="Makeup 1"
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                variant="card"
                className="mt-6 h-17 w-full border-x-0 border-b-0 text-center font-extrabold sm:mt-8 sm:h-21"
              >
                ADD TO BAG
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block" />
      <CarouselNext className="hidden sm:block" />
    </Carousel>
  );
}
