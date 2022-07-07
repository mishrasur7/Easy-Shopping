import { createSlice } from "@reduxjs/toolkit";
import { ProductInCart } from "../types/productInCart";

const initialState : ProductInCart [] = []
const cartSlice = createSlice({
    name: 'cartReducer', 
    initialState: initialState, 
    reducers: {

    }, 
    extraReducers: (builder) => {

    }
})

export const cartReducer = cartSlice.reducer