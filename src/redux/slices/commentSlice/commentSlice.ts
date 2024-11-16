import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { Comment } from "@/types";

export const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    getCommentsByPostIdRequest: (state, _action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = "";
    },
    getCommentsByPostIdSuccess: (state, action: PayloadAction<Comment[]>) => {
      state.isLoading = false;
      state.error = "";
      state.comments = action.payload;
    },
    getCommentsByPostIdFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeComments: (state) => {
      state.comments = [];
      state.isLoading = false;
      state.error = "";
    },
  },
});

export const {
  getCommentsByPostIdRequest,
  getCommentsByPostIdSuccess,
  getCommentsByPostIdFailure,
  removeComments,
} = commentSlice.actions;

export default commentSlice.reducer;
