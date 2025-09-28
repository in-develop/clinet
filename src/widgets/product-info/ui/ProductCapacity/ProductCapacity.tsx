import { Button } from "@/shared/ui";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";

interface IProductCapacityProps {
  variant: "select" | "radio";
  data: number[];

  onSelect: (capacity: number) => void;
}

const ProductCapacity = ({
  data,
  variant,
  onSelect,
}: IProductCapacityProps) => {
  const [selected, setSelected] = useState(data[data.length - 1]);

  const handleSelect = (capacity: number) => {
    onSelect(capacity);

    setSelected(capacity);
  };

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
            onClick={() => setSelected(capacity)}
          >
            {capacity} ml
          </Button>
        ))}
      </div>
    </div>
  );
};

export { ProductCapacity };
