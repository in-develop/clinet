import { FC } from "react";
import Image from "next/image";

import { IData } from "../types/IData";

interface IMarqueeProps {
  data: IData[];
  className?: string;
}

const Marquee: FC<IMarqueeProps> = ({ data, className }) => (
  <div
    className={`${className} border-eerie-black relative w-full overflow-hidden border border-r-0 border-l-0`}
  >
    <div className="animate-marquee text-md 2md:text-4xl 2md:font-semibold flex font-bold whitespace-nowrap xl:text-5xl xl:font-normal">
      {data.map((item) => (
        <MarqueeItem key={item.id} item={item} />
      ))}
      {data.map((item) => (
        <MarqueeItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const MarqueeItem = ({ item }: { item: IData }) => (
  <div
    key={item.id}
    className="2md:mx-8 2md:gap-9 2md:py-6 mx-10 flex items-center gap-3.5 py-2.5 xl:mx-12.5 xl:gap-12 xl:p-9"
  >
    {item.image && (
      <Image
        className="2md:h-11.5 2md:w-11.5 h-9 w-9 xl:h-15 xl:w-15"
        src={item.image?.src}
        width={60}
        height={60}
        alt={item.image?.alt}
      />
    )}
    <span>{item.text}</span>
  </div>
);

export { Marquee };
