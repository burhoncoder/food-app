import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

import { SliderItem } from "../components/SliderItem";

SwiperCore.use([Autoplay]);
export const SliderContainer = () => {
  const { slider } = useSelector((state) => state.handleApi);

  return (
    <Swiper
      direction={"horizontal"}
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {slider.map(({ id, subtitle, title, description, imageSrc }) => {
        return (
          <SwiperSlide key={id}>
            <SliderItem
              subtitle={subtitle}
              title={title}
              description={description}
              imageSrc={imageSrc}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
