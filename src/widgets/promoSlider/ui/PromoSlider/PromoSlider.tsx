import { FC } from "react";

import { PromoCard } from "../PromoCard";
import { PromoCarousel } from "../PromoCarousel";

const PromoSlider: FC = () => {
  return (
    <section className="2md:mt-32 container flex">
      <PromoCard />
      <PromoCarousel />
    </section>
  );
};

export { PromoSlider };
