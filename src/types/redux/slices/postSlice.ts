import type { Post } from "@/types";

export interface PostSliceState {
  posts: Post[];
  isLoading: boolean;
  error: string;
}
