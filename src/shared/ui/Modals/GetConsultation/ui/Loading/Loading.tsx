import { FC } from "react";

import { SvgIcon } from "@/shared/ui/SvgIcon";

const Loading: FC = () => {
  return (
    <>
      <SvgIcon
        name="loader"
        fill="transparent"
        className="animation-duration-[1.5s] mt-33 h-12 w-12 animate-spin text-black sm:mt-51 sm:h-[78px] sm:w-[78px]"
      />

      <h1 className="sm:text-5 mt-10 mb-60 px-8 text-center text-base leading-[1] font-bold sm:mt-16 sm:leading-[1.1]">
        Please wait while we process your request.
      </h1>
    </>
  );
};

export { Loading };
