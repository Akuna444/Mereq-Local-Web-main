import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="section-padding relative">
      <div className="bg-secondary absolute  right-[0] max-w-full h-[1200px] top-[-100px] z-[-1] w-[600px] rounded-l-[40%] blur-[90px]"></div>
      <div className="from-[#412c4b] to-[#33c58d] bg-gradient-to-br p-3 md:p-10 w-full rounded-xl">
        <div className="flex w-full justify-between">
          <h2 className="font-semibold w-full md:text-left text-center text-tertiary ">
            Meet the team
          </h2>
        </div>
        <div className="grid transition-all ease-in-out grid-cols-1 md:grid-cols-4 pt-24 pb-8 align-middle gap-20 md:gap-10">
          <TeamCard i={0} />
          <TeamCard i={1} />
          <TeamCard i={2} />
          <TeamCard i={3} />
        </div>
      </div>
    </div>
  );
};

export default Team;
