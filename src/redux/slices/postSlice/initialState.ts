import { PostSliceState } from "@/types/redux/slices/postSlice";

export const initialState: PostSliceState = {
  posts: [],
  isLoading: false,
  error: "",
};
