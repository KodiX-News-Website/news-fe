import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import type { CreateUser, LoginUser, User } from "@/types";
import type { Id } from "react-toastify";

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    createUserRequest: (
      state,
      _action: PayloadAction<{ data: CreateUser; toastId: Id }>
    ) => {
      state.isLoading = true;
      state.error = "";
    },
    createUserSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
    },
    createUserFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    loginRequest: (state, _action: PayloadAction<{ data: LoginUser; toastId: Id }>) => {
      state.isLoading = true;
      state.error = "";
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = "";

      localStorage.removeItem("token");
    },
  },
});

export const {
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
