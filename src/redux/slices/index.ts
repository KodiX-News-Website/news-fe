import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "@/redux/slices/userSlice/userSlice";
import postReducer from "@/redux/slices/postSlice/postSlice";
import currentPostReducer from "@/redux/slices/currentPostSlice/currentPostSlice";

const rootReducer = combineReducers({
  userSlice: userReducer,
  postSlice: postReducer,
  currentPostSlice: currentPostReducer,
});

export default rootReducer;
