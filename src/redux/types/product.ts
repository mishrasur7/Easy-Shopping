import { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface FetchProductsParams {
  offset: number, 
  limit: number
}

export interface UpdateActionType {
  id: number,
  update: Partial<Product>
}
