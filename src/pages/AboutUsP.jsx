import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { scrollToTop } from "../services/helpers/scrollToTop.js";
import { commentsRoute } from "../store/actions/apiActions.js";
import { AboutUs } from "../components/AboutUs";
import { UsAbout } from "../components/UsAbout";
import { Experts } from "../components/Experts";
import { CommentsContainer } from "../containers/CommentsContainer";

export const AboutUsP = () => {
  scrollToTop();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentsRoute.trigger("/comments.json"));
  }, []);

  return (
    <>
      <AboutUs />
      <UsAbout />
      <Experts />
      <section className="review">
        <div className="container">
          <p className="sub-heading">Отзывы потребителей</p>
          <h1 className="heading">Что говорят они</h1>
        </div>
        <CommentsContainer />
      </section>
    </>
  );
};
