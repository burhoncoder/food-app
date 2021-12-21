import React from "react";
import { useDispatch } from "react-redux";

import { scrollToTop } from "../services/helpers/scrollToTop.js";
import { clearFavoritesCreator } from "../store/actions/productActions";
import { DishesContainer } from "../containers/DishesContainer";

export const FavoritesP = () => {
  scrollToTop();
  const dispatch = useDispatch();

  return (
    <section className="favorites">
      <div className="container">
        <div className="service-heading">
          <div className="service-heading__right">
            <i className="fas fa-heart"></i>
            <h1 className="heading">Избранные</h1>
          </div>
          <button
            onClick={() => dispatch(clearFavoritesCreator())}
            className="service-heading__btn"
            type="button"
          >
            <i className="fal fa-trash-alt"></i>
            <p className="service-heading__clean">Очистить</p>
          </button>
        </div>
        <DishesContainer
          stateName={"handleProducts"}
          productType={"favorites"}
          favorite={true}
        />
      </div>
    </section>
  );
};
