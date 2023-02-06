import React from "react";
import Sliderbody from './Sliderbody'
import { Swiper, SwiperSlide } from "swiper/react";
import "../components/css/Offer.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper";
import "../components/css/Offer.css";



const Offer = () => {
  return (
    
    <div className="offer">
       <h1>Best Flight Booking Offer</h1> 
       <div>
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[ Navigation]}
        classN
      >
        <SwiperSlide><div className="opacity" ><Sliderbody image="./images/offer2.png" /> </div></SwiperSlide>
        <SwiperSlide><Sliderbody image="./images/offer3.png" /></SwiperSlide>
        <SwiperSlide><Sliderbody image="./images/offer1.png" /></SwiperSlide>
        <SwiperSlide><Sliderbody  image="./images/offer2.png" /></SwiperSlide>
 <SwiperSlide><div className="opacity" > <Sliderbody  image="./images/offer1.png" /> </div> </SwiperSlide>
        <SwiperSlide><Sliderbody image="./images/offer3.png" /></SwiperSlide>
        <SwiperSlide><Sliderbody image="./images/offer1.png" /></SwiperSlide>
        <SwiperSlide><Sliderbody image="./images/offer2.png" /></SwiperSlide>
        <SwiperSlide><div className="opacity" ><Sliderbody image="./images/offer3.png" /> </div></SwiperSlide>
        
      </Swiper>
    
  </div>
  </div>
  )
 
}

export default Offer