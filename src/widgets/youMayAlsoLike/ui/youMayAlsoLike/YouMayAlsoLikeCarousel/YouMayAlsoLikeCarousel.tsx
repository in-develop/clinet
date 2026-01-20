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
import { SvgIcon } from "@/shared/ui/SvgIcon";
import { data } from "@/widgets/youMayAlsoLike/model";

const YouMayAlsoLikeCarousel: FC = () => {
  const [isMobile] = useMediaQuery([BREAKPOINTS["max-2md"]]);

  return (
    <Carousel className="mt-10 md:mt-9">
      <CarouselContent
        progressBar
        className="border-eerie-black first:border-l"
      >
        {data.map((item) => (
          <CarouselItem
            key={item.id}
            className="border-eerie-black flex basis-[47.58%] flex-col border-y border-r bg-white sm:basis-[35%] md:max-w-[340px] md:basis-[75.14%]"
          >
            <div className="flex h-full flex-col">
              <div className="mb-5 flex flex-1 flex-col justify-between md:mb-8">
                <div className="mx-2.5 mt-2.5 md:mx-5 md:mt-8">
                  <div className="flex w-full flex-row justify-between">
                    <h5 className="max-w-[56.8%] text-[14px] leading-[1] font-semibold text-pretty md:max-w-[51.79%] md:text-xl md:leading-[1.1] md:font-bold">
                      {item.title}
                    </h5>

                    <div>
                      <h5
                        className={`${urbanist.className} text-[14px] leading-[1] font-semibold md:text-base md:font-bold ${
                          item.oldPrice ? "text-promotion" : "text-eerie-black"
                        }`}
                      >
                        {item.price}
                      </h5>

                      {item.oldPrice && (
                        <span className="text-eerie-black text-xs line-through">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <p
                    className={`${urbanist.className} ${item.oldPrice ? "mt-[1px]" : "mt-1"} max-w-[56.8%] text-xs leading-[1] text-pretty md:max-w-[51.79%]`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-2.5 flex flex-row gap-1.5 md:mt-2">
                    <SvgIcon name="star" />

                    <p className={`${urbanist.className} text-xs leading-[1]`}>
                      {item.rating}
                    </p>
                  </div>
                </div>
                <div className="relative mx-auto aspect-[87/64] min-w-[87px] sm:aspect-[140/140] sm:w-[140px] md:aspect-[170/170] md:w-[170px]">
                  <Image
                    src={item.image}
                    alt={`Makeup ${item.id}`}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 389px) 87px, (max-width: 767px) 140px, (max-width: 1024px) 170px,170px"
                    priority
                  />
                </div>
              </div>
              <Button
                variant="card"
                className="flex h-[70px] w-full items-center justify-center self-end border-x-0 border-b-0 text-center"
              >
                <p className="leading-[1] font-extrabold">ADD TO BAG</p>
              </Button>
            </div>
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
  );
};

export { YouMayAlsoLikeCarousel };
