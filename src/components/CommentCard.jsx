import React from "react";

export const CommentCard = ({ name, description, avatarSrc, mark }) => {
  return (
    <article className=" review__slide">
      <i className="fas fa-quote-right"></i>
      <div className="review__client">
        <img src={avatarSrc} alt="" />
        <div className="review__info">
          <h3 className="review__name">{name}</h3>
          <div className="stars-outer">
            <div className="stars-inner" style={{ width: `${mark}%` }}></div>
          </div>
        </div>
      </div>
      <p className="review__descr">{description}</p>
    </article>
  );
};
