import { Dispatch, FC, SetStateAction } from "react";

import { CosmeticsType } from "../model";

import { Button } from "@/shared/ui/Button/index";

type Props = {
  cosmeticType: string;
  setCosmeticType: Dispatch<SetStateAction<CosmeticsType>>;
};

const BestsellersHeader: FC<Props> = (props) => {
  const { cosmeticType, setCosmeticType } = props;

  return (
    <div className="flex w-full flex-col gap-10 pr-5 pb-5 sm:flex-row sm:items-center sm:justify-between sm:pt-5 sm:pb-9">
      <p className="text-3xl leading-[1] font-bold sm:text-5xl sm:leading-[110%]">
        Bestsellers
      </p>
      <div className="flex flex-row gap-3 sm:gap-6">
        <Button
          variant="tab"
          className={
            cosmeticType === "Piel Cosmetics Line"
              ? "bg-secondary-1 text-white"
              : "bg-transparent"
          }
          onClick={() => setCosmeticType("Piel Cosmetics Line")}
        >
          <p className="leading-[1] sm:leading-none">Piel Cosmetics Line</p>
        </Button>

        <Button
          variant="tab"
          className={
            cosmeticType === "Scincare"
              ? "bg-secondary-1 text-white"
              : "bg-transparent"
          }
          onClick={() => setCosmeticType("Scincare")}
        >
          <p className="leading-[1] sm:leading-none">Skincare</p>
        </Button>
      </div>
    </div>
  );
};

export { BestsellersHeader };
