import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  basketRemoveCreator,
  incrementAmountCreator,
  decrementAmountCreator,
} from "../store/actions/productActions.js";
import { BasketCard } from "../components/BasketCard";

export const BasketContainer = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.handleProducts);

  let totalPrice = basket.reduce((currentTotal, item) => {
    return currentTotal + item.amount * item.price;
  }, 0);

  const incrementAmount = (payload) => {
    dispatch(incrementAmountCreator(payload));
  };
  const decrementAmount = (payload) => {
    dispatch(decrementAmountCreator(payload));
  };
  const popBasket = (payload) => {
    dispatch(basketRemoveCreator(payload));
  };

  return (
    <>
      {basket.length === 0 ? (
        <img
          src={require("../assets/images/emptyImg.jpg").default}
          alt="img"
          className="basket__empty"
        />
      ) : (
        basket.map(({ id, name, price, imageSrc, amount }) => {
          return (
            <BasketCard
              key={id}
              id={id}
              name={name}
              price={price}
              imageSrc={imageSrc}
              amount={amount}
              incrementAmount={incrementAmount}
              decrementAmount={decrementAmount}
              popBasket={popBasket}
            />
          );
        })
      )}
      {basket.length > 0 && (
        <div key={55} className="basket__total-price">
          <p className="basket__total">
            Сумма заказа: <span>${totalPrice}</span>
          </p>
          <button className="basket__pay">Оплатить сейчас</button>
        </div>
      )}
    </>
  );
};
