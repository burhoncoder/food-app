import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as BurgerIcon } from "../assets/images/burgerIcon.svg";
import { ReactComponent as PizzaIcon } from "../assets/images/pizzaIcon.svg";
import { ReactComponent as ChickenIcon } from "../assets/images/chickenIcon.svg";
import { ReactComponent as DrinkIcon } from "../assets/images/drinkIcon.svg";
import { ReactComponent as DessertIcon } from "../assets/images/dessertIcon.svg";
import { ReactComponent as ComboIcon } from "../assets/images/comboIcon.svg";

export const NavContainer = () => {
  return (
    <div className="grid nav-dishes">
      <div className="nav-dishes__wrapper">
        <NavLink
          exact
          activeClassName="nav-dishes__item--active"
          to={"/menu/burger"}
          className="nav-dishes__item"
        >
          <BurgerIcon />
        </NavLink>
      </div>
      <div className="nav-dishes__wrapper">
        <NavLink
          exact
          activeClassName="nav-dishes__item--active"
          to={"/menu/pizza"}
          className="nav-dishes__item"
        >
          <PizzaIcon />
        </NavLink>
      </div>
      <div className="nav-dishes__wrapper">
        <NavLink
          exact
          activeClassName="nav-dishes__item--active"
          to={"/menu/chicken"}
          className="nav-dishes__item"
        >
          <ChickenIcon />
        </NavLink>
      </div>
      <div className="nav-dishes__wrapper">
        <NavLink
          exact
          activeClassName="nav-dishes__item--active"
          to={"/menu/drink"}
          className="nav-dishes__item"
        >
          <DrinkIcon />
        </NavLink>
      </div>
      <div className="nav-dishes__wrapper">
        <NavLink
          exact
          activeClassName="nav-dishes__item--active"
          to={"/menu/dessert"}
          className="nav-dishes__item"
        >
          <DessertIcon />
        </NavLink>
      </div>
      <div className="nav-dishes__wrapper">
        <NavLink
          exact
          activeClassName="nav-dishes__item--active"
          to={"/menu/combo"}
          className="nav-dishes__item"
        >
          <ComboIcon />
        </NavLink>
      </div>
    </div>
  );
};
