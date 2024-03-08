// import { useState } from "react";
import { clientArr } from "../../constant/carouselArr";
import Card from "../card/carouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function Testimonial() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="font-barlow animate mb-10">
        <div className="text-center">
          <p className="font-semibold text-[22px] text-[#fb503b]">
            Testimonial
          </p>
          <p className="text-[40px] font-semibold mb-5 dark:text-white">
            What Clients Say
          </p>
          <p className="font-poppins font-normal text-[#54545f] max-w-[700px] inline-block dark:text-[#aaaaba] text-[18px]">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[100%] mb-[80px]"
      >
        {clientArr.map((item, i) => (
          <SwiperSlide key={i} className=" bg-inherit">
            <div className="w-[100%] mb-20">
              <Card
                title={item.title}
                testimony={item.testimony}
                imgSrc={item.imgSrc}
                name={item.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
