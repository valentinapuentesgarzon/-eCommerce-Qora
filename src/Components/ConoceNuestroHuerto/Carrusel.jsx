import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import IMG1 from '../../assets/img/Conoce-nuestro-huerto/Foto-1.jpg';
import IMG2 from '../../assets/img/Conoce-nuestro-huerto/Foto-2.jpg';
import IMG3 from '../../assets/img/Conoce-nuestro-huerto/Foto-3.jpg';
import IMG4 from '../../assets/img/Conoce-nuestro-huerto/Foto-4.jpg';
import IMG5 from '../../assets/img/Conoce-nuestro-huerto/Foto-5.jpg';
import IMG6 from '../../assets/img/Conoce-nuestro-huerto/Foto-6.jpg';
import IMG7 from '../../assets/img/Conoce-nuestro-huerto/Foto-7.jpg';
import IMG8 from '../../assets/img/Conoce-nuestro-huerto/Foto-8.jpg';
import IMG10 from '../../assets/img/Conoce-nuestro-huerto/Foto-10.jpg';
import IMG11 from '../../assets/img/Conoce-nuestro-huerto/Foto-11.jpg';
export default function Carrusel() {

  
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={IMG1} alt="Foto-1" /></SwiperSlide>
        <SwiperSlide><img src={IMG2} alt="Foto-2" /></SwiperSlide>
        <SwiperSlide><img src={IMG3} alt="Foto-3" /></SwiperSlide>
        <SwiperSlide><img src={IMG4} alt="Foto-4" /></SwiperSlide>
        <SwiperSlide><img src={IMG5} alt="Foto-5" /></SwiperSlide>
        <SwiperSlide>< img src={IMG6} alt="Foto-6" /></SwiperSlide>
        <SwiperSlide><img src={IMG7} alt="Foto-7" /></SwiperSlide>
        <SwiperSlide><img src={IMG8} alt="Foto-8" /></SwiperSlide>
        <SwiperSlide><img src={IMG10} alt="Foto-10" /></SwiperSlide>
        <SwiperSlide><img src={IMG11} alt="Foto-11" /></SwiperSlide>        
        
      </Swiper>

    
    </>
  );
}
