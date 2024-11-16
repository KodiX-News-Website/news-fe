import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import type { Post } from "@/types";

export const currentPostSlice = createSlice({
  name: "currentPostSlice",
  initialState,
  reducers: {
    getPostByIdRequest: (state, _action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = "";
    },
    getPostByIdSuccess: (state, action: PayloadAction<Post>) => {
      state.isLoading = false;
      state.error = "";
      state.post = action.payload;
    },
    getPostByIdFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeCurrentPost: (state) => {
      state.post = null;
      state.isLoading = false;
      state.error = "";
    },
  },
});

export const {
  getPostByIdRequest,
  getPostByIdSuccess,
  getPostByIdFailure,
  removeCurrentPost,
} = currentPostSlice.actions;

export default currentPostSlice.reducer;
