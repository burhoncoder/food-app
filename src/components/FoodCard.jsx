import React from "react";

export const FoodCard = ({
  id,
  name,
  rate,
  price,
  imageSrc,
  newFood,
  favorite,
  pushBasket,
  pushFavorites,
  popFavorites,
}) => {
  return (
    <div className="dishes-p__wrapper">
      <article className="dishes-p__item">
        <button
          className={`fas fa-heart ${favorite ? "fa-heart--active" : ""}`}
          type="button"
          onClick={() =>
            favorite
              ? popFavorites(id)
              : pushFavorites({ id, name, rate, price, imageSrc, newFood })
          }
        ></button>

        {newFood ? <span className="new-product">Новинка</span> : ""}

        <img src={imageSrc} alt="img" />
        <h3 className="dishes-p__title">{name}</h3>
        <div className="stars-outer">
          <div
            className="stars-inner"
            style={{ width: `${(rate / 5) * 100}%` }}
          ></div>
        </div>

        <span className="dishes-p__price">${price}</span>

        <button
          type="button"
          className="btn"
          onClick={() => {
            pushBasket({ id, name, price, amount: 1, imageSrc });
          }}
        >
          корзина
        </button>
      </article>
    </div>
  );
};
