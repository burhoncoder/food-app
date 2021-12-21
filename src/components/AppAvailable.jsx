import React from "react";

export const AppAvailable = () => {
  return (
    <section className="app section-padding bg--grey">
      <div className="container">
        <div className="grid app__grid">
          <img
            className="image"
            src={require("../assets/images/movil-app.png").default}
            alt="img"
          />
          <div className="content">
            <p className="sub-heading">Приложение</p>
            <h1 className="heading">Приложение доступно</h1>
            <p className="app__descr">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex porro
              deserunt aliquid, incidunt cum dolorum eum tempora, molestias odit
              voluptate sunt.
            </p>
            <div className="app__stores">
              <a href="https://play.google.com">
                <img
                  src={require("../assets/images/app1.png").default}
                  alt=""
                  className="app__store"
                />
              </a>
              <a href="https://www.apple.com">
                <img
                  src={require("../assets/images/app2.png").default}
                  alt=""
                  className="app__store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
