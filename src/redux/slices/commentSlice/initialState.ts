import { CommentSliceState } from "@/types";

export const initialState: CommentSliceState = {
  comments: [],
  isLoading: false,
  error: "",
};
