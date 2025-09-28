import { urbanist } from "@/shared/lib/fonts";
import { cn } from "@/shared/lib/utils";

interface IProductTagsProps {
  data: string[];
  className?: string;
}

const ProductTags = ({ data, className }: IProductTagsProps) => {
  return (
    <ul
      className={cn(
        "grid max-w-xs grid-cols-2 justify-between gap-y-4",
        className,
      )}
    >
      {data.map((tag) => (
        <li
          className={`before:bg-silver relative pl-[18px] before:absolute before:top-[5.4px] before:left-0 before:size-2.5 before:rounded-full ${urbanist.className} leading-[130%]`}
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export { ProductTags };
