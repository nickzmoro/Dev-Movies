/* eslint-disable react/prop-types */
import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card";

export function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={5}
        className="swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          995: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
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
