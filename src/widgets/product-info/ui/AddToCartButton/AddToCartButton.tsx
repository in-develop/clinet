import { ChangeEventHandler, useState } from "react";
import { toast } from "sonner";

import { useCartLocalStorage } from "@/shared/hooks";
import { Button, SvgIcon } from "@/shared/ui";
import { useProductCapacityContext } from "@/widgets/product-info/providers";

interface IAddToCartButtonProps {
  productId: number;
  stockQuantity: number;
}

const AddToCartButton = ({
  productId,
  stockQuantity,
}: IAddToCartButtonProps) => {
  const { addItem, cartItems } = useCartLocalStorage();
  const { capacity } = useProductCapacityContext();

  const [inputValue, setInputValue] = useState("1");

  const parseQty = (value: string) => {
    const n = parseInt(value, 10);
    return Number.isNaN(n) ? 0 : n;
  };

  const clamp = (n: number) => {
    const max = Math.max(1, stockQuantity);
    return Math.min(Math.max(1, n), max);
  };

  const normalizeToBounds = (value: string) => {
    return String(clamp(parseQty(value)));
  };

  const handleAddToCart = () => {
    const desired = clamp(parseQty(inputValue));

    const totalForProduct = cartItems
      .filter((i) => i.productId === productId)
      .reduce((sum, i) => sum + i.amount, 0);

    const remaining = Math.max(0, Math.max(1, stockQuantity) - totalForProduct);

    if (remaining <= 0) {
      toast.info("You already added all available items to your bag");
      return;
    }

    if (desired > remaining) {
      addItem({ productId, capacity, amount: remaining, stockQuantity });
      setInputValue("1");
      toast.warning(`Only ${remaining} added due to stock limit`);
      return;
    }

    addItem({ productId, capacity, amount: desired, stockQuantity });

    setInputValue("1");

    toast.success("Product added to cart");
  };

  const handlePlus = () => {
    const current = parseQty(inputValue);
    if (current >= stockQuantity) {
      toast.warning("Maximum available quantity reached");
      setInputValue(String(clamp(current)));
      return;
    }
    const next = clamp(current + 1);
    setInputValue(String(next));
  };

  const handleMinus = () => {
    const current = parseQty(inputValue) || 1;
    const next = clamp(current - 1);
    setInputValue(String(next));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    if (digitsOnly === "") {
      setInputValue("");
      return;
    }
    const n = parseQty(digitsOnly);
    const capped = Math.min(n, Math.max(1, stockQuantity));
    if (n > stockQuantity) {
      toast.warning("Maximum available quantity reached");
    }
    setInputValue(String(capped));
  };

  const handleBlur = () => {
    setInputValue((v) => (v === "" ? "1" : normalizeToBounds(v)));
  };

  return (
    <div className={"border-light-black flex border"}>
      <Button
        variant={"card"}
        className={"relative border-none px-5 py-[30px]"}
        onClick={handlePlus}
      >
        <SvgIcon name={"plus"} width={14} height={14} />
      </Button>
      <div
        className={
          "border-light-black flex w-[84px] items-center justify-center border-x"
        }
      >
        <input
          aria-label="Quantity"
          inputMode="numeric"
          pattern="[0-9]*"
          className={
            "w-full appearance-none border-none bg-transparent p-0 text-center text-xl font-bold outline-none"
          }
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <Button
        variant={"card"}
        className={"border-none px-5 py-[30px]"}
        onClick={handleMinus}
      >
        <SvgIcon name={"minus"} width={14} height={14} />
      </Button>
      <Button
        className={
          "border-light-black flex-1 border-l font-extrabold uppercase"
        }
        onClick={handleAddToCart}
      >
        Add to bag
      </Button>
    </div>
  );
};

export { AddToCartButton };
