"use client";

import { FC } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";

import { CareFlowDesktop } from "../CareFlowDesktop";
import { CareFlowMobile } from "../CareFlowMobile";

const CareFlow: FC = () => {
  const [isMobile] = useMediaQuery([BREAKPOINTS["max-2md"], BREAKPOINTS["md"]]);

  return <>{isMobile ? <CareFlowMobile /> : <CareFlowDesktop />}</>;
};

export { CareFlow };
