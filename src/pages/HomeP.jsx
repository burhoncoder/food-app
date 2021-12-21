import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { scrollToTop } from "../services/helpers/scrollToTop.js";
import {
  sliderRoute,
  menuRoute,
  topRoute,
} from "../store/actions/apiActions.js";
import { SliderContainer } from "../containers/SliderContainer";
import { MenuContainer } from "../containers/MenuContainer";
import { DishesContainer } from "../containers/DishesContainer";
import { AboutUs } from "../components/AboutUs";
import { Services } from "../components/Services";
import { AppAvailable } from "../components/AppAvailable";

export const HomeP = () => {
  scrollToTop();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sliderRoute.trigger("/slider.json"));
    dispatch(topRoute.trigger("/top.json"));
    dispatch(menuRoute.trigger("/menu.json"));
  }, []);

  return (
    <>
      <section className="home">
        <SliderContainer />
      </section>
      <section className="speciality section-padding bg--grey">
        <div className="container">
          <p className="sub-heading">Каталог</p>
          <h1 className="heading"> Специальные Блюда </h1>
          <MenuContainer />
        </div>
      </section>
      <section className="dishes-p section-padding">
        <div className="container">
          <p className="sub-heading">наши блюда</p>
          <h1 className="heading">популярные блюда</h1>
          <DishesContainer stateName={"handleApi"} productType={"top"} />
        </div>
      </section>
      <AboutUs />
      <Services />
      <AppAvailable />
    </>
  );
};
