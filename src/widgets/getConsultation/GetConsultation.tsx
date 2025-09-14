"use client";

import Image from "next/image";
import { FC } from "react";

import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { BREAKPOINTS } from "@/shared/lib/constants";
import { urbanist } from "@/shared/lib/fonts";
import { AppLink, Button } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

const GetConsultation: FC = () => {
  const [isMobile] = useMediaQuery([BREAKPOINTS["max-2md"]]);

  return (
    <section className="bg-bg-block 2md:border-eerie-black 2md:mt-32 2md:flex-row 2md:border 2md:pt-16 2md:pr-[93px] 2md:pb-[68px] 2md:pl-20 relative mt-20 flex flex-col items-center justify-between gap-10 pb-[30px]">
      {/* Левый блок с картинкой и белым абсолютным блоком */}
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

      {/* Правый блок с изображением и текстом */}
      <div className="2md:max-w-[22.36vw] 2md:basis-[26.96%] relative mx-[35px] flex flex-col">
        {isMobile ? (
          <>
            <p
              className={`${urbanist.className} text-center text-[20px] leading-[1] font-medium`}
            >
              Not sure what to choose? Book a consultation
            </p>
            <div className="border-eerie-black relative mt-5 flex aspect-[320/364] h-full w-full">
              <Image
                src="/images/getConsultation/2.png"
                alt="getConsultation 2"
                fill
                className="object-contain"
              />
            </div>
          </>
        ) : (
          <>
            <div className="border-eerie-black relative aspect-[320/359] border">
              <Image
                src="/images/getConsultation/2.png"
                alt="getConsultation 2"
                fill
                className="object-contain"
              />
            </div>
            <p
              className={`${urbanist.className} mt-6 text-center text-[20px] leading-[1] font-medium`}
            >
              Not sure what to choose? Book a consultation
            </p>
          </>
        )}

        {/* Кнопка с hover overlay */}
        <div className="group relative mt-8 max-w-[273px] self-center">
          {/* overlay на весь экран, появится по hover на кнопку */}
          <div className="pointer-events-none fixed inset-0 z-40 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <Button variant="tabIcon" className="relative z-50">
            GET A CONSULTATION
            <SvgIcon name="arrow-scroll" width={11} height={14} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { GetConsultation };
