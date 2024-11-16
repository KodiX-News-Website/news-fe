import { call, put, takeLatest } from "redux-saga/effects";
import HttpService from "@/services/HttpService/HttpService";
import type { AxiosResponse } from "axios";
import type { Post } from "@/types";
import {
  getPostByIdRequest,
  getPostByIdSuccess,
} from "@/redux/slices/currentPostSlice/currentPostSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

function* getPostByIdSaga({ payload }: PayloadAction<string>) {
  try {
    const { data }: AxiosResponse<Post> = yield call(
      HttpService.get,
      `/posts/${payload}`
    );

    yield put(getPostByIdSuccess(data));
  } catch (error) {
    console.error(error);
  }
}

export default function* currentPostSagaWatcher() {
  yield takeLatest(getPostByIdRequest.type, getPostByIdSaga);
}
