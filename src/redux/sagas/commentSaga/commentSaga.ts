import { call, put, takeLatest } from "redux-saga/effects";
import HttpService from "@/services/HttpService/HttpService";
import type { AxiosResponse } from "axios";
import type { Comment } from "@/types";
import { getPostByIdRequest } from "@/redux/slices/currentPostSlice/currentPostSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getCommentsByPostIdSuccess } from "@/redux/slices/commentSlice/commentSlice";

function* getCommentsByPostIdSaga({ payload }: PayloadAction<string>) {
  try {
    const { data }: AxiosResponse<Comment[]> = yield call(
      HttpService.get,
      `/comments/post/${payload}`
    );

    yield put(getCommentsByPostIdSuccess(data));
  } catch (error) {
    console.error(error);
  }
}

export default function* commentSagaWatcher() {
  yield takeLatest(getPostByIdRequest.type, getCommentsByPostIdSaga);
}
