import { useCallback } from "react";

import { IAddToCartPayload, ICartItemLocalStorage } from "../lib/types";

import { useLocalStorage } from "./useLocalStorage";

export function useCartLocalStorage() {
  const [cartItems, setCartItems] = useLocalStorage<ICartItemLocalStorage[]>(
    "cart-items",
    [],
  );

  const generateKey = useCallback((productId: number, capacity?: number) => {
    if (capacity) return `product-${productId}-capacity-${capacity}`;

    return `product-${productId}`;
  }, []);

  const addItem = useCallback(
    ({ productId, amount = 1, capacity, stockQuantity }: IAddToCartPayload) => {
      const key = generateKey(productId, capacity);
      const amt = Math.max(1, amount);
      setCartItems((prev) => {
        const cap =
          stockQuantity && stockQuantity > 0 ? stockQuantity : undefined;

        if (!cap) {
          const existingNoCap = prev.find((el) => el.key === key);
          if (existingNoCap) {
            return prev.map((item) =>
              item.key === key ? { ...item, amount: item.amount + amt } : item,
            );
          }
          return [...prev, { key, productId, capacity, amount: amt }];
        }

        const existingItem = prev.find((el) => el.key === key);
        const totalForProduct = prev
          .filter((el) => el.productId === productId)
          .reduce((sum, el) => sum + el.amount, 0);

        const remainingGlobal = Math.max(0, cap - totalForProduct);

        if (existingItem) {
          const increase = Math.min(amt, remainingGlobal);
          if (increase <= 0) return prev;
          const nextAmount = existingItem.amount + increase;
          return prev.map((item) =>
            item.key === key ? { ...item, amount: nextAmount } : item,
          );
        }

        const toAdd = Math.min(amt, remainingGlobal);
        if (toAdd <= 0) return prev;
        return [...prev, { key, productId, capacity, amount: toAdd }];
      });
    },
    [generateKey, setCartItems],
  );

  const removeItem = useCallback(
    (key: string) => {
      setCartItems((prev) => {
        const existingItem = prev.find((el) => el.key === key);

        if (!existingItem) return prev;

        if (existingItem?.amount <= 1) {
          return prev.filter((el) => el.key !== key);
        }

        return prev.map((el) => {
          if (el.key === key) {
            return { ...el, amount: el.amount - 1 };
          }
          return el;
        });
      });
    },
    [setCartItems],
  );

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addItem,
    removeItem,
    clearCart,
  };
}
