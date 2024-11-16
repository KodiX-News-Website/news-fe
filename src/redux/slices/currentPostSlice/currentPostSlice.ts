import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const currentPostSlice = createSlice({
  name: "currentPostSlice",
  initialState,
  reducers: {},
});

export const {} = currentPostSlice.actions;

export default currentPostSlice.reducer;
