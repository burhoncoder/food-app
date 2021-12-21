// HANDLE PRODUCT
export const basketAdd = "BASKET_ADD";
export const basketRemove = "BASKET_REMOVE";
export const favoritesAdd = "FAVORITES_ADD";
export const favoritesRemove = "FAVORITES_REMOVE";
export const incrementAmount = "INCREMENT_AMOUNT";
export const decrementAmount = "DECREMENT_AMOUNT";
export const clearBasket = "CLEAR_BASKET";
export const clearFavorites = "CLEAR_FAVORITES";

export const basketAddCreator = (payload) => {
  return {
    type: basketAdd,
    payload,
  };
};
export const favoritesAddCreator = (payload) => {
  return {
    type: favoritesAdd,
    payload,
  };
};

export const basketRemoveCreator = (payload) => {
  return {
    type: basketRemove,
    payload,
  };
};
export const favoritesRemoveCreator = (payload) => {
  return {
    type: favoritesRemove,
    payload,
  };
};
export const incrementAmountCreator = (payload) => {
  return {
    type: incrementAmount,
    payload,
  };
};
export const decrementAmountCreator = (payload) => {
  return {
    type: decrementAmount,
    payload,
  };
};
export const clearBasketCreator = () => {
  return {
    type: clearBasket,
    payload: null,
  };
};
export const clearFavoritesCreator = () => {
  return {
    type: clearFavorites,
    payload: null,
  };
};
