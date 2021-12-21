import React from "react";

export const UsAbout = () => {
  return (
    <section className="aboutus section-padding">
      <div className="container">
        <p className="sub-heading">О Нас</p>
        <h1 className="heading">Почему выбирают нас</h1>
        <div className="grid aboutus__grid">
          <div className="content">
            <h3 className="aboutus__title">лучшая еда в стране</h3>
            <p className="aboutus__descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              sequi corrupti corporis quaerat voluptatem ipsam neque labore modi
              autem, saepe numquam quod reprehenderit rem? Tempora aut soluta
              odio corporis nihil!
            </p>
            <p className="aboutus__descr">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.
            </p>
          </div>
          <div className="image">
            <img
              src={require("../assets/images/about-img.png").default}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
