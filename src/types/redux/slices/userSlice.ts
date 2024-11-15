import { User } from "@/types";

export interface UserSliceState {
  user: User | null;
  isLoading: boolean;
  error: string;
}
