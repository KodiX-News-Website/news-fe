import { Post } from "@/types";

export interface CurrentPostSliceState {
  post: Post | null;
  isLoading: boolean;
  error: string;
}
