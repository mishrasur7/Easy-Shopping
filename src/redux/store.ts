import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
const store = configureStore({
    reducer: {
        productReducer, 
        userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
