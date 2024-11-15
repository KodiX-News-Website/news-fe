import { call, put, takeLatest } from "redux-saga/effects";
import {
  createUserRequest,
  createUserSuccess,
} from "@/redux/slices/userSlice/userSlice";
import HttpService from "@/services/HttpService/HttpService";
import { AxiosResponse } from "axios";
import { CreateUser, User } from "@/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { Id, toast } from "react-toastify";

function* createUserSaga({
  payload,
}: PayloadAction<{ data: CreateUser; toastId: Id }>) {
  try {
    const { data }: AxiosResponse<{ access_token: string; user: User }> =
      yield call(HttpService.post, "/auth/register", payload.data);

    toast.update(payload.toastId, {
      render: "User created!",
      type: "success",
      isLoading: false,
      autoClose: 5000,
    });

    localStorage.setItem("token", data.access_token);

    yield put(createUserSuccess(data.user));
  } catch (error) {
    toast.update(payload.toastId, {
      render: "Failed to create user!",
      type: "error",
      isLoading: false,
      autoClose: 5000,
    });

    console.error(error);
  }
}

export default function* userSagaWatcher() {
  yield takeLatest(createUserRequest.type, createUserSaga);
}
