import { FC } from "react";

import { YouMayAlsoLikeCarousel } from "../YouMayAlsoLikeCarousel";

const YouMayAlsoLike: FC = () => {
  return (
    <section className="container mt-20 !pr-0 md:mt-32">
      <h3 className="text-[32px] leading-[1] font-bold md:text-5xl md:leading-[1.1]">
        You may also like
      </h3>

      <YouMayAlsoLikeCarousel />
    </section>
  );
};

export { YouMayAlsoLike };
