import { IProduct } from "@/shared/lib/types";

export interface IUsageInstruction {
  description: string;
  instruction: string;
}

export interface IFullProduct
  extends Omit<IProduct, "description" | "imageUrl"> {
  images: string[];
  tags: string[];
  capacityOptions: number[];
  benefits: string[];
  activeIngredients: string[];
  usageInstructions: IUsageInstruction[];
}
