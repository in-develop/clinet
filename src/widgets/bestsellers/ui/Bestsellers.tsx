import { useState } from "react";

import { CosmeticsType } from "../model/types";
import { pielCosmeticsLineData, scincareData } from "../model";

import BestsellersCarousel from "./BestsellersCarousel";
import { BestsellersHeader } from "./BestsellersHeader";

export default function Bestsellers() {
  const [cosmeticType, setCosmeticType] = useState<CosmeticsType>(
    "Piel Cosmetics Line",
  );

  const getItems = () => {
    if (cosmeticType === "Piel Cosmetics Line") {
      return pielCosmeticsLineData;
    } else {
      return scincareData;
    }
  };

  return (
    <div className="sm:bg-bg-block mx-auto w-full bg-white">
      <BestsellersHeader
        cosmeticType={cosmeticType}
        setCosmeticType={setCosmeticType}
      />

      <BestsellersCarousel items={getItems()} />
    </div>
  );
}
