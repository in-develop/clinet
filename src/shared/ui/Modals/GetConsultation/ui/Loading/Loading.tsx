import { FC } from "react";

import { SvgIcon } from "@/shared/ui/SvgIcon";

const Loading: FC = () => {
  return (
    <>
      <SvgIcon
        name="loader"
        width={78}
        height={78}
        fill="transparent"
        className="animation-duration-[1.5s] animate-spin text-black sm:mt-51"
      />

      <h1 className="sm:text-5 font-bold sm:mt-16 sm:leading-[1.1]">
        Please wait while we process your request.
      </h1>
    </>
  );
};

export { Loading };
