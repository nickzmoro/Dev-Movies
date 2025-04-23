/* eslint-disable react/prop-types */
import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card";

export function Slider({ info, title, slidesPerView }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
