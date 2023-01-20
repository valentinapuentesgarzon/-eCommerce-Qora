import React from 'react'
import IMG1 from '../../assets/img/Conoce-nuestro-huerto/Foto-1.jpg';
import IMG2 from '../../assets/img/Conoce-nuestro-huerto/Foto-2.jpg';
import IMG3 from '../../assets/img/Conoce-nuestro-huerto/Foto-3.jpg';
import IMG4 from '../../assets/img/Conoce-nuestro-huerto/Foto-4.jpg';
import IMG5 from '../../assets/img/Conoce-nuestro-huerto/Foto-5.jpg';
import IMG6 from '../../assets/img/Conoce-nuestro-huerto/Foto-6.jpg';
import IMG7 from '../../assets/img/Conoce-nuestro-huerto/Foto-7.jpg';
import IMG8 from '../../assets/img/Conoce-nuestro-huerto/Foto-8.jpg';
import IMG9 from '../../assets/img/Conoce-nuestro-huerto/Foto-9.jpg';
import IMG10 from '../../assets/img/Conoce-nuestro-huerto/Foto-10.jpg';
import IMG11 from '../../assets/img/Conoce-nuestro-huerto/Foto-11.jpg';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
  <div className="container">

    
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide><img src={IMG1} alt="Foto-1" /></SwiperSlide>
        <SwiperSlide><img src={IMG2} alt="Foto-2" /></SwiperSlide>
        <SwiperSlide><img src={IMG3} alt="Foto-3" /></SwiperSlide>
        <SwiperSlide><img src={IMG4} alt="Foto-4" /></SwiperSlide>
        <SwiperSlide><img src={IMG5} alt="Foto-5" /></SwiperSlide>
        <SwiperSlide><img src={IMG6} alt="Foto-6" /></SwiperSlide>
        <SwiperSlide><img src={IMG7} alt="Foto-7" /></SwiperSlide>
        <SwiperSlide><img src={IMG8} alt="Foto-8" /></SwiperSlide>
        <SwiperSlide><img src={IMG9} alt="Foto-9" /></SwiperSlide>
        <SwiperSlide><img src={IMG10} alt="Foto-10" /></SwiperSlide>
        <SwiperSlide><img src={IMG11} alt="Foto-11" /></SwiperSlide>
      ...
    </Swiper>
  </div>
  );
};