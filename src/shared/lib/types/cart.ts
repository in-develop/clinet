export interface ICartItemLocalStorage {
  productId: number;
  amount: number;
  capacity?: number;
  key: string;
}

export interface IAddToCartPayload {
  productId: number;
  capacity?: number;
  amount?: number;
  stockQuantity?: number;
}
