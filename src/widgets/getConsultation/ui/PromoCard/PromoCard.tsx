import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { AppLink } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

const PromoCard: FC = () => {
  return (
    <div className="2md:basis-[56.87%] relative mt-[30px] aspect-[390/403] w-full">
      <Image
        src="/images/getConsultation/1.png"
        alt="getConsultation 1"
        fill
        className="object-cover"
      />

      {/* Белый блок поверх картинки */}
      <div
        className="2md:aspect-[445/531] 2md:w-[30.91vw] absolute top-1/2 left-1/2 z-10 flex aspect-[271/263] w-[69.5vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border bg-white transition duration-300"
        id="white-block"
      >
        <p className="mx-5 mt-8 text-center text-[20px] leading-[1.1] font-bold sm:text-4xl md:text-[48px]">
          Online Cosmetics Selection
        </p>
        <p
          className={`${urbanist.className} mx-5 mt-6 text-center text-base leading-[1.3] font-normal sm:text-4xl md:mt-9 md:px-[59px] md:text-[20px] md:leading-[1] md:font-medium`}
        >
          Choose Home Care Cosmetics from Piel Cosmetics
        </p>
        <AppLink variant={"link"} href="" className="mt-16 mb-8 md:mt-[67px]">
          <span>Select</span>
          <SvgIcon name="arrow" width={16} height={16} />
        </AppLink>
      </div>
    </div>
  );
};

export { PromoCard };
