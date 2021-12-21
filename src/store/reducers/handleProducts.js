import {
  basketAdd,
  favoritesAdd,
  favoritesRemove,
  basketRemove,
  incrementAmount,
  decrementAmount,
  clearBasket,
  clearFavorites,
} from "../actions/productActions";
import { isInArray } from "../../services/helpers/isInArray";

const initState = {
  favorites: [],
  basket: [],
};

export const handleProducts = (state = initState, { type, payload }) => {
  switch (type) {
    case basketAdd:
      return { ...state, basket: isInArray(state.basket, payload) };
    case favoritesAdd:
      return { ...state, favorites: isInArray(state.favorites, payload) };
    case basketRemove:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== payload),
      };
    case favoritesRemove:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== payload),
      };
    case incrementAmount:
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === payload) item.amount++;
          return item;
        }),
      };
    case decrementAmount:
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === payload && item.amount > 1) item.amount--;
          return item;
        }),
      };
    case clearBasket:
      return {
        ...state,
        basket: [],
      };
    case clearFavorites:
      return {
        ...state,
        favorites: [],
      };
    default:
      return {
        ...state,
      };
  }
};
