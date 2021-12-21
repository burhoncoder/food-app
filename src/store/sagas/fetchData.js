import { takeLatest, put, call } from "redux-saga/effects";

import { routineModifier } from "../../services/helpers/routineModifier";
import { request } from "../../services/api/axios";

import {
  burgerRoute,
  chickenRoute,
  comboRoute,
  commentsRoute,
  dessertRoute,
  drinkRoute,
  menuRoute,
  pizzaRoute,
  sliderRoute,
  topRoute,
} from "../actions/apiActions";

const routes = [
  burgerRoute,
  chickenRoute,
  comboRoute,
  commentsRoute,
  dessertRoute,
  drinkRoute,
  menuRoute,
  pizzaRoute,
  sliderRoute,
  topRoute,
];

function* apiWorker({ type, payload }) {
  try {
    const data = yield call(request, { url: payload });

    let [currentRoute] = routes.filter((item) => {
      return item.SUCCESS === routineModifier(type)[1];
    });

    yield put(currentRoute.success(data.data));
  } catch (error) {
    yield put({ type: routineModifier(type)[2], payload: error });
  }
}

export function* rootSaga() {
  yield takeLatest(topRoute.TRIGGER, apiWorker);
  yield takeLatest(burgerRoute.TRIGGER, apiWorker);
  yield takeLatest(chickenRoute.TRIGGER, apiWorker);
  yield takeLatest(comboRoute.TRIGGER, apiWorker);
  yield takeLatest(commentsRoute.TRIGGER, apiWorker);
  yield takeLatest(dessertRoute.TRIGGER, apiWorker);
  yield takeLatest(drinkRoute.TRIGGER, apiWorker);
  yield takeLatest(menuRoute.TRIGGER, apiWorker);
  yield takeLatest(pizzaRoute.TRIGGER, apiWorker);
  yield takeLatest(sliderRoute.TRIGGER, apiWorker);
}
