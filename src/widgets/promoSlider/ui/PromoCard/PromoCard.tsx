import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { Button } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

const PromoCard: FC = () => {
  return (
    <div className="relative flex-1 basis-1/2">
      <div className="2md:aspect-[680/383] border-eerie-black relative w-full border">
        <Image
          src="/images/promoCard/2.png"
          alt="Promo card 1"
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-9 text-xl leading-[1.1] font-bold">
        Build your perfect skincare set.
      </p>

      <span className={`${urbanist.className} mt-4 leading-[1.3]`}>
        Pair 2 or more eligible facial care products and
      </span>
      <span className="leading-[1] font-bold"> enjoy 20% off.</span>

      <Button variant="tabIcon" className="mt-10">
        SELECT
        <SvgIcon name="arrow-scroll" width={11} height={14} />
      </Button>
    </div>
  );
};

export { PromoCard };
