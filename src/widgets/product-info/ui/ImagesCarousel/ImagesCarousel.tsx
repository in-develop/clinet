"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import { cn } from "@/shared/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/shared/ui";

interface IImagesCarouselProps {
  images: string[];
  productName: string;
}

const ImagesCarousel = ({ images, productName }: IImagesCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [isMobile, isDesktop] = useMediaQuery([
    BREAKPOINTS["max-md"],
    BREAKPOINTS["md"],
  ]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={"relative overflow-y-hidden md:aspect-square"}>
      {isDesktop && (
        <div
          className={
            "no-scrollbar absolute top-1/2 left-3 z-10 hidden max-h-80 -translate-y-1/2 flex-col overflow-y-auto md:flex"
          }
        >
          {images.map((image, index) => (
            <button key={index} onClick={() => api?.scrollTo(index)}>
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className={"aspect-square object-cover"}
                width={60}
                height={60}
              />
            </button>
          ))}
        </div>
      )}

      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className={"relative aspect-square"}>
              <Image
                src={image}
                alt={`${productName} image ${index + 1}`}
                className={"object-cover"}
                fill
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {isMobile && (
        <div className="z-10 mt-2 flex w-full justify-center gap-1">
          {Array.from({ length: images.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-0.5 w-6 transition-all duration-200",
                current === index + 1
                  ? "bg-light-black w-[50px]"
                  : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { ImagesCarousel };
