import React from "react";
import { Route } from "react-router-dom";

import { HomeP } from "./pages/HomeP";
import { AboutUsP } from "./pages/AboutUsP";
import { MenuP } from "./pages/MenuP";
import { ContactsP } from "./pages/ContactsP";
import { BasketP } from "./pages/BasketP";
import { FavoritesP } from "./pages/FavoritesP";

export const Routes = () => {
  return (
    <>
      <Route path="/" exact component={HomeP} />
      <Route path="/about-us" exact component={AboutUsP} />
      <Route path="/menu/:foodType" exact component={MenuP} />
      <Route path="/contacts" exact component={ContactsP} />
      <Route path="/client-services/basket" exact component={BasketP} />
      <Route path="/client-services/favorites" exact component={FavoritesP} />
    </>
  );
};
