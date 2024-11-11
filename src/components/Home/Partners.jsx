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
          height={1600}
          width={1400}
        />
      </div>
      <div
        className={`flex py-3 md:justify-between  ${
          padding ? "justify-center" : ""
        } w-full `}
      >
        <Reveal>
          <h3 className="text-tertiary ">Trusted By</h3>
        </Reveal>
      </div>
      <div>
        <div className="w-full items-end  flex-col rounded-xl p-5 gap-5 md:p-20 md:gap-20 flex bg-grayDark/50">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 3,
                reverseDirection: true,
              },
              768: {
                // width: 768,
                slidesPerView: 6,
              },
            }}
            loop={true}
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
                    <Image
                      width={100}
                      height={100}
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
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                // width: 768,
                spaceBetween: 50,
                slidesPerView: 6,
              },
            }}
            loop={true}
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
                  <div
                    className=" max-w-[100px] nax-h-[100px]"
                    key={partner.id}
                  >
                    <Image
                      width={100}
                      height={100}
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
