import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchProductsParams, Product } from "../types/product";

const initialState: Product[] = [];
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async ({ offset, limit }: FetchProductsParams) => {
    try {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      );
      const result = await data.json();
      return result;
    } catch (error) {}
  }
);

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
    sortByCategory: (state, action: PayloadAction<string>) => {
      state.filter((product) => {
        return product.category.name === action.payload;
      });
    },
    sortByPriceAsc: (state, action) => {
      state.sort((a, b) => {
        return a.price - b.price;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          return action.payload.sort((a, b) => a.price - b.price);
        }
      )
      .addCase(
        deleteProductFromAPI.fulfilled,
        (state, action: PayloadAction<string | number | undefined>) => {
          return state.filter((product) => product.id !== action.payload);
        }
      );
  },
});

export const productReducer = productSlice.reducer;
export const { addProduct, updateProduct, sortByCategory, sortByPriceAsc } = productSlice.actions;
