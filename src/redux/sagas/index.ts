import { all } from "redux-saga/effects";
import userWatcher from "@/redux/sagas/userSaga/userSaga";
import postWatcher from "@/redux/sagas/postSaga/postSaga";
import currentPostWatcher from "@/redux/sagas/currentPostSaga/currentPostSaga";
import commentWatcher from "@/redux/sagas/commentSaga/commentSaga";

export default function* rootSaga() {
  yield all([
    userWatcher(),
    postWatcher(),
    currentPostWatcher(),
    commentWatcher(),
  ]);
}
