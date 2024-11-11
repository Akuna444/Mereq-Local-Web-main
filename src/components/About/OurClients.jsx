import React from "react";
import Partners from "../Home/Partners";

const OurClients = () => {
  return (
    <div className="section-padding-top">
      <div className=" flex justify-end">
        <div className="w-[50%] my-12 h-[2px] bg-secondary"></div>
      </div>
      <div className="w-full section-paddingx ">
        <h1 className="text-center text-secondary">Our Clients</h1>
        <Partners padding={false} />
      </div>
    </div>
  );
};

export default OurClients;
