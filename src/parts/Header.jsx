import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const { favorites } = useSelector((state) => state.handleProducts);
  const { basket } = useSelector((state) => state.handleProducts);
  return (
    <header className="header">
      <div
        className={`overlay ${burgerVisible ? "overlay--active" : ""}`}
        onClick={() => setBurgerVisible(false)}
      ></div>

      <div className="container">
        <div className="header__body">
          <NavLink to={"/"} className="header__logo">
            <i className="fas fa-utensils"></i>resto.
          </NavLink>
          <nav className="nav">
            <NavLink
              exact
              to={"/"}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Главное
            </NavLink>
            <NavLink
              exact
              to={"/menu/burger"}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Меню
            </NavLink>
            <NavLink
              exact
              to={"/about-us"}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              О нас
            </NavLink>
            <NavLink
              exact
              to={"/contacts"}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Контакты
            </NavLink>
          </nav>
          <div className="header__icons">
            <NavLink to={"/client-services/favorites"} className="fas fa-heart">
              <span className="header__product-counter">
                {favorites.length}
              </span>
            </NavLink>
            <NavLink
              to={"/client-services/basket"}
              className="fas fa-shopping-cart"
            >
              <span className="header__product-counter">{basket.length}</span>
            </NavLink>
            <button
              className="fas fa-bars"
              onClick={() => setBurgerVisible((prev) => !prev)}
            ></button>
          </div>
        </div>
      </div>

      <div className={`burger ${burgerVisible ? "burger--active" : ""}`}>
        <div className="burger__heading">
          <NavLink to={"/"} className="header__logo">
            <i className="fas fa-utensils"></i>resto.
          </NavLink>
          <button
            className="burger__close"
            onClick={() => {
              setBurgerVisible(false);
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="nav">
          <NavLink
            exact
            to={"/"}
            activeClassName="nav__link--active"
            className="nav__link"
          >
            Главное
          </NavLink>
          <NavLink
            exact
            to={"/menu/burger"}
            activeClassName="nav__link--active"
            className="nav__link"
          >
            Меню
          </NavLink>
          <NavLink
            exact
            to={"/about-us"}
            activeClassName="nav__link--active"
            className="nav__link"
          >
            О нас
          </NavLink>
          <NavLink
            exact
            to={"/contacts"}
            activeClassName="nav__link--active"
            className="nav__link"
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
