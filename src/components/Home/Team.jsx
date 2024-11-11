import React from "react";
import TeamCard from "./TeamCard";
import Image from "next/image";

const Team = () => {
  return (
    <div className="section-padding relative">
      <div className="bg-grayDark/50 p-3 md:p-10 w-full rounded-xl">
        <div className="flex w-full justify-between">
          <h2 className="font-semibold w-full md:text-left text-center text-tertiary ">
            Meet the team
          </h2>
        </div>
        <div className="grid transition-all ease-in-out grid-cols-1 md:grid-cols-5 pt-24 pb-8 align-middle gap-5">
          <TeamCard i={0} />
          <TeamCard i={1} />
          <TeamCard i={2} />
          <TeamCard i={3} />
          <TeamCard i={4} />
        </div>
      </div>
    </div>
  );
};

export default Team;
