import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { Button } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

const PromoCard: FC = () => {
  return (
    <div className="relative md:flex-[0_0_50%]">
      <div className="border-eerie-black relative aspect-[357/197] w-full md:aspect-[680/383] md:border md:border-r-0">
        <Image
          src="/images/promoCard/2.png"
          alt="Promo card 1"
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-5 mb-3.5 text-xl leading-[1.1] font-bold md:mt-9 md:mb-4">
        Build your perfect skincare set.
      </p>

      <span className={`${urbanist.className} leading-[1.3]`}>
        Pair 2 or more eligible facial care products and
      </span>
      <span className="leading-[1] font-bold"> enjoy 20% off.</span>

      <Button variant="tabIcon" className="mt-10">
        SELECT
        <SvgIcon name="arrow-scroll-right" width={11} height={14} />
      </Button>
    </div>
  );
};

export { PromoCard };
