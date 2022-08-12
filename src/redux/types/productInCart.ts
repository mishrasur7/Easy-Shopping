import { Product } from "./product";

export interface ProductInCart extends Product {
    quantity: number
}

export interface Cart {
    products: ProductInCart[]
    total: number
}