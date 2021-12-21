import React from "react";
import { useDispatch } from "react-redux";

import { scrollToTop } from "../services/helpers/scrollToTop.js";
import { clearBasketCreator } from "../store/actions/productActions.js";
import { BasketContainer } from "../containers/BasketContainer";

export const BasketP = () => {
  scrollToTop();
  const dispatch = useDispatch();

  return (
    <section className="basket">
      <div className="container">
        <div className="service-heading">
          <div className="service-heading__right">
            <i className=" fas fa-shopping-cart"></i>
            <h1 className="heading">корзина</h1>
          </div>
          <button
            onClick={() => dispatch(clearBasketCreator())}
            className="service-heading__btn"
            type="button"
          >
            <i className="fal fa-trash-alt"></i>
            <p className="service-heading__clean">Очистить</p>
          </button>
        </div>
        <BasketContainer />
      </div>
    </section>
  );
};
