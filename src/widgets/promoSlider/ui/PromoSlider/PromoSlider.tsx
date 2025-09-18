import { FC } from "react";

import { PromoCard } from "../PromoCard";
import { PromoCarousel } from "../PromoCarousel";

import { cosmeticsData } from "./model";

const PromoSlider: FC = () => {
  return (
    <section className="mt-20 mr-[13px] ml-5 flex flex-wrap md:mx-10 md:mt-32">
      <div className="flex w-full flex-col md:w-1/2">
        <PromoCard />
      </div>

      <div className="mt-12 w-full md:mt-0 md:w-1/2">
        <PromoCarousel items={cosmeticsData} />
      </div>
    </section>
  );
};

export { PromoSlider };
