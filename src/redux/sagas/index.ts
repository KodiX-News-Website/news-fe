import { all } from "redux-saga/effects";
import userWatcher from "@/redux/sagas/userSaga/userSaga";
import postWatcher from "@/redux/sagas/postSaga/postSaga";

export default function* rootSaga() {
  yield all([userWatcher(), postWatcher()]);
}
