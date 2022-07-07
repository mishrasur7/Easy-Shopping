import { Product } from "./product";

export interface ProductInCart extends Product {
    quantity: number
}