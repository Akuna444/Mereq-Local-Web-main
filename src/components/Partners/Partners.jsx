"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnersList } from "@/data/constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Reveal from "../UI/Animations/Reveal";

const Partners = () => {
  return (
    <div className="section-padding relative ">
      <div className="bg-primaryLight  absolute opacity-50 dark:opacity-100  left-[0] h-[1000px] top-[-100px] z-[-1] w-[600px] blur-[90px] rounded-r-[30%] "></div>
      <div className="flex py-3 justify-center md:justify-between w-full">
        <Reveal>
          <h3 className="text-tertiary text-center md:text-left">Trusted By</h3>
        </Reveal>
      </div>
      <div>
        <div className="w-full rounded-xl p-20 gap-20 flex bg-gray-300">
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
          >
            {partnersList.map((partner) => {
              return (
                <SwiperSlide key={partner.id}>
                  <div className=" w-[150px] h-[150px]" key={partner.id}>
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
