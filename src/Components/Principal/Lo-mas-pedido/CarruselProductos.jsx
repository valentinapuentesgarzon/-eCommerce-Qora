import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CarruselProductos.css";

// import required modules
import { Pagination } from "swiper";

import P1 from '../../../assets/img/Productos/Mix-asiaticas.png';
import P2 from '../../../assets/img/Productos/Zuchini-amarillo.png';
import P3 from '../../../assets/img/Productos/tudela.png';
import P4 from '../../../assets/img/Productos/Lechuga-roble-verde.png';
import P5 from '../../../assets/img/Productos/khale.png';
import P6 from '../../../assets/img/Productos/cogollo-morada.png';

export default function App() {
  return (
    <>
      <Swiper id="Deslizar"
        slidesPerView={5}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img id='Producto1'src={P1} alt="Mix-asiáticas" /><p>Mix asiáticas</p></SwiperSlide>
        <SwiperSlide ><img id='Producto'src={P2} alt="Zuchini-Amarillo" /><p>Zuchini amarillo</p></SwiperSlide>
        <SwiperSlide ><img id='Producto3' src={P3} alt="Tudela" /><p>Tudela</p></SwiperSlide>
        <SwiperSlide ><img id='Product4' src={P4} alt="Lechuga-roble-verde" /><p>Lechuga roble verde</p></SwiperSlide>
        <SwiperSlide ><img id='Producto' src={P5} alt="khale" /><p>Khale</p></SwiperSlide>
        <SwiperSlide >< img id='Producto6' src={P6} alt="Cogollo-morada" /> <p>Cogollo morada</p></SwiperSlide>
      </Swiper>
    </>
  );
}
