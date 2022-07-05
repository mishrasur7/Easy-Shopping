import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

const initialState: {
  user: User | undefined;
} = {
  user: undefined,
};

const userSlice = createSlice({
  name: "userReducer",
  initialState: initialState,
  reducers: {
    login: (state, action) => {

    }
  },
  extraReducers: (builder) => {},
});

const userReducer = userSlice.reducer
export default userReducer
export const {login} = userSlice.actions