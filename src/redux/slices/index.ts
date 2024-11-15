import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "@/redux/slices/userSlice/userSlice";

const rootReducer = combineReducers({
  userSlice: userReducer,
});

export default rootReducer;
