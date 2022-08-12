import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, ProductInCart } from "../types/cart";

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
      state.total += 1
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
