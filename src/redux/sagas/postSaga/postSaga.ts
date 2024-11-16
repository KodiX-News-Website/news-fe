import { call, put, takeLatest } from "redux-saga/effects";
import HttpService from "@/services/HttpService/HttpService";
import type { AxiosResponse } from "axios";
import type { Post } from "@/types";
import {
  getPostsRequest,
  getPostsSuccess,
} from "@/redux/slices/postSlice/postSlice";

function* getPostsSaga() {
  try {
    const { data }: AxiosResponse<Post[]> = yield call(
      HttpService.get,
      "/posts"
    );

    yield put(getPostsSuccess(data));
  } catch (error) {
    console.error(error);
  }
}

export default function* postSagaWatcher() {
  yield takeLatest(getPostsRequest.type, getPostsSaga);
}
