"use client";

import React from "react";
import Image from "next/image";
import Reveal from "../UI/Animations/Reveal";

const Banner = () => {
  return (
    <Reveal width="100%">
      <div className="mt-20 rounded-[20px] relative flex overflow-hidden justify-center items-center w-full h-[120px] md:h-[250px] bg-primary">
        <div className="">
          <h1 className="text-secondary font-bold text-[40px] md:text-[120px]">
            Mereqtech
          </h1>
          <p className="md:text-[35px] text-[14px] tracking-wide font-light">
            Your Creative Sauce
          </p>
        </div>
        <Image
          alt="bulb brain"
          className=" absolute top-4 right-[-98px]"
          height={200}
          width={200}
          src="/assets/about-page/bulb-brain.svg"
        />
        <div className="md:block hidden bg-secondary absolute top-4 left-[5%] w-[200px] h-[200px] rounded-full blur-[90px]"></div>
        <div className="bg-[#9422f1] absolute top-4 right-[2%] w-[200px] h-[200px] rounded-full blur-[90px]"></div>
        <Image
          alt="man sitting infront of computer"
          className="md:block hidden absolute top-4 left-[5%]"
          height={200}
          width={200}
          src="/assets/blog/SVG/man-sitting-computer.svg"
        />
      </div>
    </Reveal>
  );
};

export default Banner;
