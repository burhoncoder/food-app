import React from "react";

export const SliderItem = ({ subtitle, title, description, imageSrc }) => {
  return (
    <article className="home__slide">
      <div className="content">
        <span className="home__subtitle">{subtitle}</span>
        <h3 className="home__title">{title}</h3>
        <p className="home__descr">{description}</p>
      </div>
      <div className="image">
        <img src={imageSrc} alt="img" />
      </div>
    </article>
  );
};
