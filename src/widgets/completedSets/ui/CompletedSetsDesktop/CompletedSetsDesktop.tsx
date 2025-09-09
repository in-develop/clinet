import { FC } from "react";

import { cosmeticData } from "../../model";

import { CompletedSetsCarouselDesktop, CompletedSetsHeaderDesktop } from ".";

const CompletedSetsDesktop: FC = () => {
  return (
    <div className="container mx-auto w-full">
      <CompletedSetsHeaderDesktop />

      <CompletedSetsCarouselDesktop items={cosmeticData} />
    </div>
  );
};

export { CompletedSetsDesktop };
