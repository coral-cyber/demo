import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Local CSS
import "./Carousel.css";

// Swiper module
import { EffectCards } from "swiper/modules";

// Load ALL images from src/Assets folder
const images = import.meta.glob("/src/Assets/*", { eager: true });

function getAllImages() {
  return Object.values(images).map((img) => img.default);
}

export default function Carousel() {
  const slides = getAllImages();

  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`slide-${index}`} className="carousel-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
