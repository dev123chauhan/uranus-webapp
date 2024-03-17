import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./imageswiper.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import your images
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import image4 from "../images/4.png"
import image5 from "../images/5.png"
import image6 from "../images/6.png"
import image7 from "../images/7.png"
import image8 from "../images/8.png"
import image9 from "../images/9.png"
import image10 from "../images/10.png"
import image11 from "../images/11.png"
import { Container } from 'react-bootstrap';

export default function ImageSwiper() {
  return (
    <Container className='mb-5'>
      <Swiper
        slidesPerView={3} // Display 3 slides at a time
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Wrap each image inside a SwiperSlide */}
        <SwiperSlide>
          <div className="card">
            <img src={image1} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image2} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image3} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image4} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image5} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image6} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image7} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image8} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image9} alt=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image10} alt=''/>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </Container>
  )
}





