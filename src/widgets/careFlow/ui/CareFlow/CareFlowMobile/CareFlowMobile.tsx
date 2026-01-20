import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { Button } from "@/shared/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/Carousel";
import { data } from "@/widgets/careFlow/model";

import { StepCard } from "../../StepCard";

const CareFlowMobile: FC = () => {
  return (
    <section className="bg-bg-block mt-20 py-5 pl-5">
      <h3 className="text-[32px] leading-[1] font-bold">
        Complete your care program
      </h3>

      <Carousel>
        <CarouselContent progressBar>
          {data.map((item, index) => (
            <CarouselItem
              key={item.id}
              className="flex max-w-[278px] basis-[75.14%] flex-col"
            >
              {/* Заголовки — без рамки */}
              <div className="mt-10 h-[47px] flex-col">
                <h4 className="text-[20px] leading-[1.1] font-bold">
                  {item.stepTitle}
                </h4>
                <p className={`${urbanist.className} mt-1 leading-[1.3]`}>
                  {item.stepSubtitle}
                </p>
              </div>

              <div
                className={`border-eerie-black mt-2.5 aspect-[278/399] h-[399px] flex-1 border-y border-l bg-white ${index === data.length - 1 ? "border-r" : ""} `}
              >
                <StepCard item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export { CareFlowMobile };
