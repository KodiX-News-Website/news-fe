import { Comment } from "@/types";

export interface CommentSliceState {
  comments: Comment[];
  isLoading: boolean;
  error: string;
}
