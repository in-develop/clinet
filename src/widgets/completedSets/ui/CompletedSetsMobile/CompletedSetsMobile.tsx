"use client";

import { useState } from "react";

import {
  CosmeticsType,
  pureSalvationeData,
  specialisteData,
} from "../../model";

import { CompletedSetsHeader } from "./CompletedSetsHeaderMobile";
import CompletedSetsCarousel from "./CompletedSetsCarouselMobile";

export default function CompletedSetsMobile() {
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
      <CompletedSetsHeader
        cosmeticType={cosmeticType}
        setCosmeticType={setCosmeticType}
      />

      <CompletedSetsCarousel items={getItems()} />
    </div>
  );
}
