import { useEffect } from "react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/Select";
import { useProductCapacityContext } from "@/widgets/product-info/providers";

interface IProductCapacityProps {
  variant: "select" | "radio";
  data: number[];
}

const ProductCapacity = ({ data, variant }: IProductCapacityProps) => {
  const { setCapacity, capacity: selected } = useProductCapacityContext();

  const handleSelect = (capacity: number) => {
    setCapacity(capacity);
  };

  useEffect(() => {
    setCapacity(data[data.length - 1]);
  }, [data, setCapacity]);

  if (variant === "select") {
    return (
      <Select
        defaultValue={selected?.toString() || data[data.length - 1].toString()}
        value={selected?.toString()}
        onValueChange={(value) => handleSelect(parseInt(value))}
      >
        <SelectTrigger className="border-light-black w-min! min-w-[120px] justify-between gap-1 border bg-white py-2.5! pr-4 pl-5! font-bold text-nowrap">
          <SelectValue />
        </SelectTrigger>
        <SelectContent sideOffset={8} className="border-light-black border">
          {data.map((capacity) => (
            <SelectItem key={capacity} value={capacity.toString()}>
              {capacity} ml
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <div className={"flex items-center gap-4"}>
      <span>Capacity:</span>
      <div className={"flex gap-1"}>
        {data.map((capacity) => (
          <Button
            key={capacity}
            variant={"secondary"}
            className={cn(
              "border-none p-3 normal-case",
              selected === capacity && "bg-secondary-1 text-white",
            )}
            onClick={() => handleSelect(capacity)}
          >
            {capacity} ml
          </Button>
        ))}
      </div>
    </div>
  );
};

export { ProductCapacity };
