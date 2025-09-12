import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { ROUTING } from "@/shared/lib/rounting";
import { AppLink, Button } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

const GetConsultation: FC = () => {
  return (
    <section className="bg-bg-block border-eerie-black relative flex flex-row items-center border sm:mx-10 sm:mt-32 sm:gap-48 sm:pt-16 sm:pr-[93px] sm:pb-[68px] sm:pl-20">
      <div className="relative w-full items-center sm:h-[48.37vw] sm:basis-[67.84%]">
        <Image
          src="/images/getConsultation/1.png"
          alt={"getConsultation 1"}
          fill
          className="object-cover"
        />

        <div className="border-eerie-black absolute top-1/2 left-1/2 z-50 flex aspect-[445/531] w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border bg-white sm:h-[min(531px,36.88vw)] sm:max-w-[30.91vw]">
          <p className="text-center font-bold sm:text-[48px] sm:leading-[1.1]">
            Online Cosmetics Selection
          </p>

          <p
            className={`${urbanist.className} text-center font-medium sm:mt-9 sm:px-[59px] sm:text-[20px] sm:leading-[1]`}
          >
            Choose Home Care Cosmetics from Piel Cosmetics
          </p>

          <AppLink variant={"link"} href="" className="sm:mt-[67px]">
            <span>Select</span>
            <SvgIcon name="arrow" width={16} height={16} />
          </AppLink>
        </div>
      </div>

      <div className="flex flex-col sm:basis-[32.2%]">
        <div className="border-eerie-black relative flex aspect-[320/364] w-full border sm:max-w-[30.91vw]">
          <Image
            src="/images/getConsultation/2.png"
            alt={"getConsultation 2"}
            fill
            className="object-contain"
          />
        </div>

        <p
          className={`${urbanist.className} text-center font-medium sm:mt-6 sm:text-[20px] sm:leading-[1]`}
        >
          Not sure what to choose? Book a consultation
        </p>

        <Button
          variant="tabIcon"
          className="mt-15 self-center sm:mt-8"
          //   onClick={() => {}}
        >
          GET A CONSULTATION
          <SvgIcon name="arrow-scroll" width={11} height={14} />
        </Button>
      </div>
    </section>
  );
};

export { GetConsultation };
