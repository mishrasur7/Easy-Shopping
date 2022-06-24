import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state = [...action.payload]
      return state
    });
  },
});

export const productReducer = productSlice.reducer;