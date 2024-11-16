import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { Post } from "@/types";

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    getPostsRequest: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    getPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getPostsRequest, getPostsSuccess, getPostsFailure } =
  postSlice.actions;

export default postSlice.reducer;
