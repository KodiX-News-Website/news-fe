import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "@/redux/slices/userSlice/userSlice";
import postReducer from "@/redux/slices/postSlice/postSlice";
import currentPostReducer from "@/redux/slices/currentPostSlice/currentPostSlice";
import commentReducer from "@/redux/slices/commentSlice/commentSlice";

const rootReducer = combineReducers({
  userSlice: userReducer,
  postSlice: postReducer,
  currentPostSlice: currentPostReducer,
  commentSlice: commentReducer,
});

export default rootReducer;
