import { useEffect, useState } from "react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { useProductCapacityContext } from "@/widgets/product-info/providers";

interface IProductCapacityProps {
  variant: "select" | "radio";
  data: number[];
}

const ProductCapacity = ({ data, variant }: IProductCapacityProps) => {
  const [selected, setSelected] = useState(data[data.length - 1]);

  const { setCapacity } = useProductCapacityContext();

  const handleSelect = (capacity: number) => {
    setSelected(capacity);
    setCapacity(capacity);
  };

  useEffect(() => {
    setCapacity(data[data.length - 1]);
  }, [data]);

  if (variant === "select") {
    //   TODO: implement
    return null;
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
