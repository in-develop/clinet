import { formatCurrency } from "@/shared/lib/currency";
import { cn } from "@/shared/lib/utils";

interface IProductPriceProps {
  price: number;
  discountPrice?: number;
  className?: string;
}

const ProductPrice = ({
  discountPrice,
  price,
  className,
}: IProductPriceProps) => {
  const hasDiscount = discountPrice && discountPrice < price;
  return (
    <div
      className={cn(
        "text-light-black flex items-end gap-2.5 font-bold",
        className,
      )}
    >
      {hasDiscount ? (
        <>
          <span className={"text-promotion text-xl"}>
            {formatCurrency(discountPrice!)}
          </span>
          <span>
            <s>{formatCurrency(price)}</s>
          </span>
        </>
      ) : (
        <span className="text-xl">{formatCurrency(price)}</span>
      )}
    </div>
  );
};

export { ProductPrice };
