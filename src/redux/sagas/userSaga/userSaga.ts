import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  createUserRequest,
  createUserSuccess,
  loginRequest,
} from "@/redux/slices/userSlice/userSlice";
import HttpService from "@/services/HttpService/HttpService";
import { AxiosResponse } from "axios";
import { CreateUser, LoginUser, User } from "@/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { Id, toast } from "react-toastify";
import { ROUTES } from "@/enums";

function* createUserSaga({
  payload,
}: PayloadAction<{ data: CreateUser; toastId: Id }>) {
  try {
    const { data }: AxiosResponse<{ access_token: string; user: User }> =
      yield call(HttpService.post, "/auth/register", payload.data);

    toast.update(payload.toastId, {
      render: "User registered!",
      type: "success",
      isLoading: false,
      autoClose: 5000,
    });

    localStorage.setItem("token", data.access_token);

    yield put(createUserSuccess(data.user));

    yield delay(2000);

    window.location.href = ROUTES.HOME;
  } catch (error) {
    toast.update(payload.toastId, {
      render: "Failed to register user!",
      type: "error",
      isLoading: false,
      autoClose: 5000,
    });

    console.error(error);
  }
}

function* loginSaga({
  payload,
}: PayloadAction<{ data: LoginUser; toastId: Id }>) {
  try {
    const { data }: AxiosResponse<{ access_token: string; user: User }> =
      yield call(HttpService.post, "/auth/login", payload.data);

    toast.update(payload.toastId, {
      render: "User authenticated!",
      type: "success",
      isLoading: false,
      autoClose: 5000,
    });

    localStorage.setItem("token", data.access_token);

    yield put(createUserSuccess(data.user));

    yield delay(2000);

    window.location.href = ROUTES.HOME;
  } catch (error) {
    toast.update(payload.toastId, {
      render: "Failed to authenticate a user!",
      type: "error",
      isLoading: false,
      autoClose: 5000,
    });

    console.error(error);
  }
}

export default function* userSagaWatcher() {
  yield takeLatest(createUserRequest.type, createUserSaga);
  yield takeLatest(loginRequest.type, loginSaga);
}
