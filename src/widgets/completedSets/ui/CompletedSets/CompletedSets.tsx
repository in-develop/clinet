"use client";

import { FC } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";

import { CompletedSetsDesktop } from "../CompletedSetsDesktop";
import { CompletedSetsMobile } from "../CompletedSetsMobile/CompletedSetsMobile";

const CompletedSets: FC = () => {
  const [isMobile] = useMediaQuery([BREAKPOINTS["max-2md"], BREAKPOINTS["md"]]);

  return <>{isMobile ? <CompletedSetsMobile /> : <CompletedSetsDesktop />}</>;
};

export { CompletedSets };
