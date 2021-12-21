import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { scrollToTop } from "../services/helpers/scrollToTop.js";
import { NavContainer } from "../containers/NavContainer";
import { DishesContainer } from "../containers/DishesContainer";
import { listIdentifier } from "../services/helpers/listIdentifier";
import {
  burgerRoute,
  pizzaRoute,
  chickenRoute,
  drinkRoute,
  dessertRoute,
  comboRoute,
} from "../store/actions/apiActions.js";

export const MenuP = () => {
  scrollToTop();

  const dispatch = useDispatch();
  const { foodType } = useParams();

  const currenFoodAction = listIdentifier(foodType, [
    burgerRoute,
    pizzaRoute,
    chickenRoute,
    drinkRoute,
    dessertRoute,
    comboRoute,
  ]);
  useEffect(() => {
    dispatch(currenFoodAction.trigger(`/${foodType}.json`));
  }, [foodType]);

  return (
    <>
      <section className="dishes-p">
        <div className="container">
          <NavContainer />
          <DishesContainer
            stateName={"handleApi"}
            productType={"currentFood"}
          />
        </div>
      </section>
    </>
  );
};
