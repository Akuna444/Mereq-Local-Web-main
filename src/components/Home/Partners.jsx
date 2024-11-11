"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnersList } from "@/data/constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Reveal from "../UI/Animations/Reveal";
import Image from "next/image";

const Partners = ({ padding = true }) => {
  return (
    <div className={`${padding ? "section-padding" : ""} relative `}>
      <div className="  opacity-50 dark:opacity-100 absolute  right-[0] w-[800px] h-[1000px] top-[55%] z-[-1] ">
        <Image
          src="/assets/gradients/gradient-v-3.png"
          className="w-full h-full"
          alt="gradient"
          height={1000}
          width={800}
        />
      </div>
      <div className="flex py-3 justify-center md:justify-between w-full">
        <Reveal>
          <h3 className="text-tertiary text-center md:text-left">Trusted By</h3>
        </Reveal>
      </div>
      <div>
        <div className="w-full flex-col rounded-xl p-20 gap-20 flex bg-grayDark/50">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 6,
              },
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            className="w-full"
          >
            {partnersList.map((partner) => {
              return (
                <SwiperSlide key={partner.id}>
                  <div className=" w-[100px] h-[100px]" key={partner.id}>
                    <img
                      className="w-full h-full"
                      src={`/assets/partners/${partner.logo}.png`}
                      alt={partner.name}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 6,
              },
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            className="w-full"
          >
            {partnersList.map((partner) => {
              return (
                <SwiperSlide key={partner.id}>
                  <div className=" w-[100px] h-[100px]" key={partner.id}>
                    <img
                      className="w-full h-full"
                      src={`/assets/partners/${partner.logo}.png`}
                      alt={partner.name}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
