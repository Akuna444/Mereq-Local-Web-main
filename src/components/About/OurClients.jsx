"use client";

import React from "react";
import Partners from "../Home/Partners";
import Reveal from "../UI/Animations/Reveal";

const OurClients = () => {
  return (
    <div className="section-padding-top">
      <Reveal width="100%">
        <div className=" flex justify-end">
          <div className="w-[50%] my-12 h-[2px] bg-secondary"></div>
        </div>
      </Reveal>
      <div className="w-full section-paddingx ">
        <Reveal>
          <h1 className=" text-secondary">Our Clients</h1>
        </Reveal>
        <Partners padding={false} />
      </div>
    </div>
  );
};

export default OurClients;
