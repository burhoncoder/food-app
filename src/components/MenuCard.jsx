import React from "react";

export const MenuCard = ({ title, description, icon, imageSrc }) => {
  return (
    <div className="speciality__wrapper">
      <article className="speciality__item">
        <img className="image" src={imageSrc} alt="img" />
        <div className="content">
          {icon}
          <h3 className="speciality__title">{title}</h3>
          <p className="speciality__descr">{description}</p>
        </div>
      </article>
    </div>
  );
};
