import React from "react";

export const Experts = () => {
  return (
    <section className="experts section-padding">
      <div className="container">
        <p className="sub-heading">Эксперты</p>
        <h1 className="heading">Наши Повара</h1>
        <div className="grid experts__grid">
          <div className="experts__wrapper">
            <article className="experts__item">
              <img
                className="image"
                src={require("../assets/images/pic-1.png").default}
                alt="img"
              />
              <p className="experts__name">Ален Дюкас</p>
            </article>
          </div>
          <div className="experts__wrapper">
            <article className="experts__item">
              <img
                className="image"
                src={require("../assets/images/pic-3.png").default}
                alt="img"
              />
              <p className="experts__name">Гордон Рамзи</p>
            </article>
          </div>
          <div className="experts__wrapper">
            <article className="experts__item">
              <img
                className="image"
                src={require("../assets/images/pic-1.png").default}
                alt="img"
              />
              <p className="experts__name">Константин Ивлев</p>
            </article>
          </div>
          <div className="experts__wrapper">
            <article className="experts__item">
              <img
                className="image"
                src={require("../assets/images/pic-3.png").default}
                alt="img"
              />
              <p className="experts__name">Хестон Блюменталь</p>
            </article>
          </div>
          <div className="experts__wrapper">
            <article className="experts__item">
              <img
                className="image"
                src={require("../assets/images/pic-3.png").default}
                alt="img"
              />
              <p className="experts__name">Джейми Оливер</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
