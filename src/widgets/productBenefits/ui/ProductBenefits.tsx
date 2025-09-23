import Image from "next/image";
import { FC } from "react";

import { urbanist } from "@/shared/lib/fonts";

import { IProductBenefits } from "..";

interface IProductBenefitsProps {
  items: IProductBenefits[];
}

const ProductBenefits: FC<IProductBenefitsProps> = (props) => {
  const { items } = props;

  return (
    <section className="container mt-20 sm:mt-32">
      <div>
        <p className="text-[32px] leading-[1] font-bold sm:text-5xl sm:leading-[1.1]">
          Why you&apos;ll love it
        </p>

        <div className="mt-14 flex flex-col sm:mt-9 sm:flex-row sm:flex-wrap">
          <div className="flex h-[600px] overflow-x-auto md:overflow-visible">
            {items.map((item) => (
              <div
                key={item.id}
                className="border-eerie-black group group relative flex min-w-[340px] flex-1 flex-shrink-0 cursor-pointer flex-col justify-between overflow-hidden border border-r-0 p-5 last:border-r"
              >
                <p className="text-[20px] leading-[1.1] font-bold">
                  {item.title}
                </p>
                <p
                  className={`${urbanist.className} leading-[1.3] text-pretty`}
                >
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
      </div>
    </section>
  );
};

export { ProductBenefits };
