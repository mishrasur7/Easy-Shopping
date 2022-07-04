import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

const initialState: Product[] = [];
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteProductFromAPI = createAsyncThunk(
  "deleteProductFromAPI",
  async (productId: string) => {
    try {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      const result = await data.json();
      return productId;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      state.filter((product) => {
        if (product.id === action.payload.id) {
          product = {
            ...product,
            ...action.payload.update,
          };
        }
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action:PayloadAction<Product[]>) => {
        return action.payload.sort((a, b) => a.price - b.price)
      })
      .addCase(deleteProductFromAPI.fulfilled, (state, action:PayloadAction<string|undefined>) => {
        return state.filter((product) => product.id !== action.payload);
      });
  },
});

export const productReducer = productSlice.reducer;
export const { addProduct, updateProduct } = productSlice.actions;
