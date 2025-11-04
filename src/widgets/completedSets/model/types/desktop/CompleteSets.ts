import { ICosmetic } from "../CosmeticType";

interface ICompleteSetsItem  {
  id: number;
  image: string;
  items: ICosmetic[];
};

export type { ICompleteSetsItem };
