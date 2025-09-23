import { ICartItemLocalStorage } from "../types";

import { useLocalStorage } from "./useLocalStorage";

export function useCartLocalStorage() {
  const [cartItems, setCartItems] = useLocalStorage<ICartItemLocalStorage[]>(
    "cart-items",
    [],
  );

  const addItem = (itemId: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === itemId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, amount: item.amount + 1 } : item,
        );
      }
      return [...prev, { id: itemId, amount: 1 }];
    });
  };

  const removeItem = (itemId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

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
