import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
const store = configureStore({
    reducer: {
        productReducer, 
        userReducer, 
        cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
