"use client";

import { FC, useState } from "react";

import {
  CosmeticsType,
  pureSalvationeData,
  specialisteData,
} from "../../model";

import { CompletedSetsHeaderMobile, CompletedSetsCarouselMobile } from ".";

const CompletedSetsMobile: FC = () => {
  const [cosmeticType, setCosmeticType] =
    useState<CosmeticsType>("Pure salvation");

  const getItems = () => {
    if (cosmeticType === "Pure salvation") {
      return pureSalvationeData;
    } else {
      return specialisteData;
    }
  };

  return (
    <div className="mx-auto w-full">
      <CompletedSetsHeaderMobile
        cosmeticType={cosmeticType}
        setCosmeticType={setCosmeticType}
      />

      <CompletedSetsCarouselMobile items={getItems()} />
    </div>
  );
};

export { CompletedSetsMobile };
