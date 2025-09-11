"use client";

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import React, {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  KeyboardEvent,
  FC,
} from "react";

import { cn } from "@/shared/lib/utils";

import { Button } from "../Button";
import { ArrowScroll } from "../Icons";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (_api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

type CarouselContentProps = {
  progressBar?: boolean;
};

const CarouselContext = createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
};

const Carousel: FC<ComponentProps<"div"> & CarouselProps> = (compProps) => {
  const {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  } = compProps;

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    // eslint-disable-next-line consistent-return
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

const CarouselContent: FC<ComponentProps<"div"> & CarouselContentProps> = (
  compProps,
) => {
  const { progressBar, className, ...props } = compProps;

  const { carouselRef, orientation, api } = useCarousel();

  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    const progress = Math.max(0, Math.min(1, api.scrollProgress()));

    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!api) {
      return undefined;
    }

    onScroll(api);
    api.on("reInit", onScroll);
    api.on("scroll", onScroll);
    api.on("slideFocus", onScroll);

    return () => {
      api.off("reInit", onScroll);
      api.off("scroll", onScroll);
      api.off("slideFocus", onScroll);
    };
  }, [api, onScroll]);

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "ml-0" : "mt-4 flex-col",
          className,
        )}
        {...props}
      />

      {progressBar && (
        <div className="embla__progress bg-silver mt-5 h-2 w-full sm:mt-3.5 sm:mb-5">
          <div
            className="embla__progress__bar bg-eerie-black h-1 transition-[width]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
    </div>
  );
};

const CarouselItem: FC<ComponentProps<"div">> = (compProps) => {
  const { className, ...props } = compProps;

  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-0" : "pt-4",
        className,
      )}
      {...props}
    />
  );
};

const CarouselPrevious: FC<ComponentProps<typeof Button>> = (compProps) => {
  const {
    className,
    variant = "borderIcon",
    size = "icon",
    ...props
  } = compProps;

  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "text-eerie-black absolute flex items-center justify-center bg-white hover:text-white",
        orientation === "horizontal"
          ? "top-1/2 left-3 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowScroll direction="left" className="ml-1" />
    </Button>
  );
};

const CarouselNext: FC<ComponentProps<typeof Button>> = (compProps) => {
  const {
    className,
    variant = "borderIcon",
    size = "icon",
    ...props
  } = compProps;

  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "text-eerie-black absolute flex items-center justify-center bg-white hover:text-white",
        orientation === "horizontal"
          ? "top-1/2 right-3 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowScroll direction="right" className="m-auto" />
    </Button>
  );
};

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
