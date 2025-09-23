import { FC } from "react";

import { data } from "../..";

import { ProductBenefitsItem } from "./ProductBenefitsItem";

const ProductBenefits: FC = () => {
  return (
    <section className="container mt-20 md:mt-32">
      <div>
        <p className="text-[32px] leading-[1] font-bold md:text-5xl md:leading-[1.1]">
          Why you&apos;ll love it
        </p>

        <ProductBenefitsItem items={data} />
      </div>
    </section>
  );
};

export { ProductBenefits };
