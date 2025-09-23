import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";

import { IProductBenefits } from "../..";

interface IProductBenefitsItemProps {
  items: IProductBenefits[];
}

const ProductBenefitsItem: FC<IProductBenefitsItemProps> = (props) => {
  const { items } = props;

  return (
    <div className="mt-14 flex overflow-x-hidden md:mt-9">
      <div className="flex h-[600px] overflow-x-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="border-eerie-black group relative flex min-w-[340px] cursor-pointer flex-col justify-between overflow-hidden border border-r-0 p-5 last:border-r"
          >
            <p className="text-[20px] leading-[1.1] font-bold">{item.title}</p>
            <p className={`${urbanist.className} leading-[1.3] text-pretty`}>
              {item.description}
            </p>

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductBenefitsItem };
