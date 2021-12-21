import { combineReducers } from "redux";

import { handleApi } from "./handleApi";
import { handleProducts } from "./handleProducts";

export const rootReducer = combineReducers({
  handleApi,
  handleProducts,
});
