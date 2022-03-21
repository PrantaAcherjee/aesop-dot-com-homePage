import React, {useState } from "react";
import './Carosel.css';
import one from '../../../images/c-1.jpg';
import two from '../../../images/c-2.jpg';
import three from '../../../images/c-3.jpg';
import four from '../../../images/c-4.jpg';
import five from '../../../images/c-5.jpg';
import six from '../../../images/c-6.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';

  // install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const Carosel = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
          <div className="bg-white carosel-style">
           
           <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={50} navigation={true} className="mySwiper">
           <h2>Others also considered</h2>
  <SwiperSlide><img src={six} alt=""/></SwiperSlide>
  <SwiperSlide><img src={two} alt=""/> </SwiperSlide>
  <SwiperSlide><img src={three} alt=""/></SwiperSlide>
  <SwiperSlide><img src={four} alt=""/></SwiperSlide>
  <SwiperSlide><img src={five} alt=""/></SwiperSlide>
  <SwiperSlide><img src={six} alt=""/></SwiperSlide>
  </Swiper> 
  </div>

    );
};

export default Carosel;