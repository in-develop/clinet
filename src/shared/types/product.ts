export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  stockQuantity: number;
  categoryId: number;
  productBundleId: number;
  imageUrl: string;

  rating: number;
  reviewCount: number;
}
