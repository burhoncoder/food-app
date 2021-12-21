import { createRoutine } from "redux-saga-routines";

// API
export const topRoute = createRoutine("TOP_PRODUCT", {
  success: (payload) => ({ data: payload, dataField: "top" }),
});
export const burgerRoute = createRoutine("BURGER_LIST", {
  success: (payload) => ({ data: payload, dataField: "currentFood" }),
});
export const chickenRoute = createRoutine("CHICKEN_LIST", {
  success: (payload) => ({ data: payload, dataField: "currentFood" }),
});
export const comboRoute = createRoutine("COMBO_LIST", {
  success: (payload) => ({ data: payload, dataField: "currentFood" }),
});
export const dessertRoute = createRoutine("DESSERT_LIST", {
  success: (payload) => ({ data: payload, dataField: "currentFood" }),
});
export const drinkRoute = createRoutine("DRINK_LIST", {
  success: (payload) => ({ data: payload, dataField: "currentFood" }),
});
export const pizzaRoute = createRoutine("PIZZA_LIST", {
  success: (payload) => ({ data: payload, dataField: "currentFood" }),
});
export const commentsRoute = createRoutine("COMMENT_INF", {
  success: (payload) => ({ data: payload, dataField: "comments" }),
});
export const menuRoute = createRoutine("MENU_INF", {
  success: (payload) => ({ data: payload, dataField: "menu" }),
});
export const sliderRoute = createRoutine("SLIDER_INF", {
  success: (payload) => ({ data: payload, dataField: "slider" }),
});
