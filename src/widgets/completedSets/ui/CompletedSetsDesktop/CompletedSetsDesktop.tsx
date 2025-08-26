import { cosmeticData } from "../../model";

import CompletedSetsCarouselDesktop from "./CompletedSetsCarouselDesktop";
import { CompletedSetsHeaderDesktop } from "./CompletedSetsHeaderDesktop";

export default function CompletedSetsDesktop() {
  return (
    <div className="mx-auto w-full">
      <CompletedSetsHeaderDesktop />

      <CompletedSetsCarouselDesktop items={cosmeticData} />
    </div>
  );
}
