import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FoodCard } from "../components/FoodCard";
import {
  basketAddCreator,
  favoritesAddCreator,
  favoritesRemoveCreator,
} from "../store/actions/productActions.js";

export const DishesContainer = ({ stateName, productType }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state);
  const { favorites } = useSelector((state) => state.handleProducts);

  const pushBasket = (payload) => {
    dispatch(basketAddCreator(payload));
  };
  const pushFavorites = (payload) => {
    dispatch(favoritesAddCreator(payload));
  };
  const popFavorites = (payload) => {
    dispatch(favoritesRemoveCreator(payload));
  };

  return (
    <div className="grid dishes-p__grid">
      {productType === "favorites" ? (
        productList[stateName][productType].length === 0 ? (
          <img
            src={require("../assets/images/emptyImg.jpg").default}
            alt="img"
            className="basket__empty"
          />
        ) : (
          productList[stateName][productType].map(
            ({ id, name, rate, price, imageSrc, newFood }) => {
              return (
                <FoodCard
                  key={id}
                  id={id}
                  name={name}
                  rate={rate}
                  price={price}
                  imageSrc={imageSrc}
                  newFood={newFood}
                  favorite={true}
                  pushBasket={pushBasket}
                  popFavorites={popFavorites}
                />
              );
            }
          )
        )
      ) : (
        productList[stateName][productType].map(
          ({ id, name, rate, price, imageSrc, newFood }) => {
            let isFavorite = favorites.filter((item) => item.id === id);
            return (
              <FoodCard
                key={id}
                id={id}
                name={name}
                rate={rate}
                price={price}
                imageSrc={imageSrc}
                newFood={newFood}
                favorite={isFavorite.length > 0}
                popFavorites={popFavorites}
                pushBasket={pushBasket}
                pushFavorites={pushFavorites}
              />
            );
          }
        )
      )}
    </div>
  );
};
