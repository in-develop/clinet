import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";

import { data } from "../../../model";
import { StepCard } from "../../StepCard";

const CareFlowDesktop: FC = () => {
  return (
    <section className="bg-bg-block mt-32 px-10 pt-16 pb-[84px]">
      <h3 className="text-5xl leading-[1.1] font-bold">
        Complete your care program
      </h3>

      <div className="mt-12 grid grid-cols-4">
        {data.map((item) => (
          <div key={item.id}>
            <h4 className="text-[20px] leading-[1.1] font-bold">
              {item.stepTitle}
            </h4>
            <p className={`${urbanist.className} mt-1 leading-[1.3]`}>
              {item.stepSubtitle}
            </p>
          </div>
        ))}
      </div>

      <div className="flex">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`border-eerie-black mt-5 h-[399px] flex-1 border-y border-l ${index === data.length - 1 ? "border-r" : ""} `}
          >
            <StepCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export { CareFlowDesktop };
