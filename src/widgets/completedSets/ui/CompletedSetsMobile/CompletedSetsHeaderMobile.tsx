import { Dispatch, FC, SetStateAction } from "react";

import { CosmeticsType } from "../../model";

import { Button } from "@/shared/ui/Button/index";

type Props = {
  cosmeticType: string;
  setCosmeticType: Dispatch<SetStateAction<CosmeticsType>>;
};

const CompletedSetsHeader: FC<Props> = (props) => {
  const { cosmeticType, setCosmeticType } = props;

  return (
    <div className="flex w-full flex-col gap-10 pb-5">
      <p className="text-3xl leading-[110%] font-bold">Completed sets</p>
      <div className="flex flex-row gap-3 text-base">
        <Button
          variant="tab"
          className={
            cosmeticType === "Pure salvation"
              ? "bg-secondary-1 text-white"
              : "bg-transparent"
          }
          onClick={() => setCosmeticType("Pure salvation")}
        >
          Pure salvation
        </Button>

        <Button
          variant="tab"
          className={
            cosmeticType === "Specialiste"
              ? "bg-secondary-1 text-white"
              : "bg-transparent"
          }
          onClick={() => setCosmeticType("Specialiste")}
        >
          Specialiste
        </Button>
      </div>
    </div>
  );
};

export { CompletedSetsHeader };
