import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { Button } from "@/shared/ui/Button";

import { ICareFlow } from "../../model";

interface IStepCardProps {
  item: ICareFlow;
}

const StepCard: FC<IStepCardProps> = (props) => {
  const { item } = props;

  return (
    <div className="flex h-[397px] flex-col bg-white md:h-[397px]">
      <div className="mx-3 mt-6 flex-1">
        <div className="flex w-full flex-row justify-between">
          <h5 className="max-w-[47.34%] leading-[1] font-bold text-pretty">
            {item.title}
          </h5>

          <h5 className="leading-[1] font-bold">{item.price}</h5>
        </div>

        <p
          className={`${urbanist.className} mt-1 max-w-[48.61%] text-xs leading-[1] font-bold text-pretty`}
        >
          {item.description}
        </p>
      </div>
      <div className="relative mx-auto mb-6 aspect-[134/182] w-full max-w-[134px]">
        <Image
          src={item.image}
          alt={`Makeup ${item.id}`}
          fill
          className="object-cover"
        />
      </div>
      <Button
        variant="card"
        className="h-[70px] w-full items-center justify-center border-x-0 border-b-0 text-center"
      >
        <p className="leading-[1] font-extrabold">ADD TO BAG</p>
      </Button>
    </div>
  );
};

export { StepCard };
