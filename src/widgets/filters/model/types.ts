export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum SortByValue {
  PRICE = "price",
  DISCOUNT = "discount",
  FEATURED = "featured",
}

export interface ISortByOption {
  label: string;
  value: SortByValue;
  order: SortOrder | null;
}
