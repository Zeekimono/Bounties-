import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            slidesPerView={1}
            spaceBetween={30}
          >
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 1</p>
                <p>Internal Slide 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 1</p>
                <p>Internal Slide 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 1</p>
                <p>Internal Slide 3</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            // direction={"horizontal"}
            spaceBetween={30}
          >
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 2</p>
                <p>Internal Slide 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 2</p>
                <p>Internal Slide 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 2</p>
                <p>Internal Slide 3</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 2</p>
                <p>Internal Slide 4</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 2</p>
                <p>Internal Slide 5</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 2</p>
                <p>Internal Slide 6</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            slidesPerView={1}
            spaceBetween={30}
          >
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 3</p>
                <p>Internal Slide 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 3</p>
                <p>Internal Slide 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p>Horizontal Slide 3</p>
                <p>Internal Slide 3</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
