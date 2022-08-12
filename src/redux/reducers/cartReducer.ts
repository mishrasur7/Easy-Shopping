import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, ProductInCart } from "../types/productInCart";

const initialState: Cart = {
  products: [],
  total: 0,
};
const cartSlice = createSlice({
  name: "cartReducer",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      state.products.push(action.payload);
      state.total += 1;
    },
    increaseProductInCart : (state, action) => {

    }
  }
});

export const cartReducer = cartSlice.reducer;
