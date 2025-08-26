import { FC } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/shared/ui/Button/index";

const CompletedSetsHeaderDesktop: FC = () => {
  return (
    <div className="flex w-full flex-col gap-10 px-5 pb-5 sm:flex-row sm:items-center sm:justify-between sm:px-0 sm:pt-5 sm:pb-9">
      <p className="text-3xl leading-[110%] font-bold sm:text-5xl">
        Completed sets
      </p>
      <div className="flex flex-row gap-3 text-base sm:gap-6">
        <Button variant="tab" className="" onClick={() => null}>
          Shop all
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export { CompletedSetsHeaderDesktop };
