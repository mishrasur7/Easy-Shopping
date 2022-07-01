import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
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
    addProduct: (state, action) => {
      state.push(action.payload)
    }, 
    updateProduct: (state, action) => {
      state.filter(product => {
        if(product.id === action.payload.id) {
          product = {
            ...product,
            ...action.payload.update
          }
        }
      })
    }, 
    deleteProduct: (state, action) => {
      state = state.filter(product => product.id !== action.payload)
      return state
    }

  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state = [...action.payload]
      console.log('state', state)
      return state
    });
  },
});

export const productReducer = productSlice.reducer;
export const { addProduct } = productSlice.actions
