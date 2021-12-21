import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

import { CommentCard } from "../components/CommentCard";

SwiperCore.use([Autoplay]);
export const CommentsContainer = () => {
  const { comments } = useSelector((state) => state.handleApi);

  return (
    <Swiper
      direction={"horizontal"}
      slidesPerView={3}
      spaceBetween={50}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
    >
      {comments.map(({ id, name, description, avatarSrc, mark }) => {
        return (
          <SwiperSlide key={id}>
            <CommentCard
              name={name}
              description={description}
              avatarSrc={avatarSrc}
              mark={mark}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
