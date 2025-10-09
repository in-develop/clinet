"use client";

import { cva } from "class-variance-authority";
import { FC } from "react";

import { ConsultationCard } from "../ConsultationCard";
import { PromoCard } from "../PromoCard";

type GetConsultationProps = {
  size: "small" | "full";
  title?: "NOT SURE WHAT'S RIGHT FOR YOU?";
  description:
    | "Chat with one of our specialists to discover which of our services might address your individual needs and concerns."
    | "Not sure what to choose? Book a consultation";
};

const getConsultationVariants = cva(
  "bg-bg-block relative flex items-center justify-between",
  {
    variants: {
      size: {
        small:
          "flex-col gap-10 pb-[30px] 2md:flex-row 2md:border 2md:border-eerie-black 2md:pt-16 2md:pr-[93px] 2md:pb-[68px] 2md:pl-20 2md:mt-32 mx-0 2md:mx-10 mt-20",
        full: "flex-row px-5 py-6 2md:px-[191px] 2md:py-20 mt-20",
      },
    },
    defaultVariants: { size: "small" },
  },
);

const GetConsultation: FC<GetConsultationProps> = ({
  size = "small",
  title = "",
  description = "Not sure what to choose? Book a consultation",
}) => {
  return (
    <section className={getConsultationVariants({ size })}>
      {size === "small" && <PromoCard />}
      <ConsultationCard size={size} title={title} description={description} />
    </section>
  );
};

export { GetConsultation };
