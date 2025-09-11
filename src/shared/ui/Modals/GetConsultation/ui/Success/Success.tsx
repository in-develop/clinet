import { FC } from "react";

import { Button } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

const Success: FC = () => {
  return (
    <>
      <SvgIcon
        name="tick"
        fill="eerie-black"
        className="mt-35 h-[32px] w-[43px] sm:mt-[218px] sm:h-[52px] sm:w-[71px]"
      />

      <h1 className="sm:text-5 mt-14 px-8 text-center text-base leading-[1] font-bold sm:mt-16 sm:leading-[1.1]">
        Thank you! We will contact you shortly to clarify the details.
      </h1>

      <Button variant="tabIcon" className="mt-40 self-center sm:mt-16">
        GO TO MAIN PAGE
        <SvgIcon name="arrow-scroll" width={11} height={14} />
      </Button>
    </>
  );
};

export { Success };
