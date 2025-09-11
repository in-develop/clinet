import { FC } from "react";

import { Button } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

const Success: FC = () => {
  return (
    <>
      <SvgIcon
        name="tick"
        width={71}
        height={52}
        fill="eerie-black"
        className="sm:mt-[218px]"
      />

      <h1 className="sm:text-5 font-bold sm:mt-16 sm:leading-[1.1]">
        Thank you! We will contact you shortly to clarify the details.
      </h1>

      <Button variant="tabIcon" className="self-center sm:mt-16">
        GO TO MAIN PAGE
        <SvgIcon name="arrow-scroll" width={11} height={14} />
      </Button>
    </>
  );
};

export { Success };
