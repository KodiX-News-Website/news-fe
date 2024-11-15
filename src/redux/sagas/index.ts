import { all } from "redux-saga/effects";
import userWatcher from "@/redux/sagas/userSaga/userSaga";

export default function* rootSaga() {
  yield all([userWatcher()]);
}
