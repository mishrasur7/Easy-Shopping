import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Login, User, UserReducerState } from "../types/user";

const initialState: UserReducerState = {
  userlist: [],
  currentUser: undefined,
};

export const fetchAllUsers = createAsyncThunk(
  "fetchUsers",
  async (user: User) => {
    if (user.role === "admin") {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        const result = await response.json();
        return result;
      } catch (err) {
        console.log(err);
      }
    } else {
      return [];
    }
  }
);

export const login = createAsyncThunk("login", async (userLogin: Login) => {
  const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userLogin),
  });
  const authorizationToken = await response.json();
  if (authorizationToken.access_token) {
    localStorage.setItem(
      "token",
      JSON.stringify(authorizationToken.access_token)
    );
    const sessionUser = await fetch(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const resultUser = await sessionUser.json();
    return resultUser;
  } else {
    return undefined;
  }
});

export const loginByToken = createAsyncThunk(
  'loginByToken', 
  async(token: string) => {
    const sessionUser = await fetch(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const resultUser = await sessionUser.json();
    return resultUser;
  }
)

const userSlice = createSlice({
  name: "userReducer",
  initialState: initialState,
  reducers: {
    adduser(state, action) {
      state.userlist.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.userlist = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(loginByToken.fulfilled, (state, action) => {
        state.currentUser = action.payload
      })
  },
});

export const userReducer = userSlice.reducer;
export const { adduser } = userSlice.actions; 