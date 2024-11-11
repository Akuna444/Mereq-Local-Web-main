"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Reveal from "../UI/Animations/Reveal";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="w-max hidden md:block md:text-[60px] lg:text-[80px] mt-20 font-bold text-primary dark:text-secondary relative ">
        <img
          className="min-w-[100vw] md:scale-[1]"
          src="/assets/about/stat-path.png"
          alt="stats-path"
        />
        <div className="absolute top-[12%]  items-center left-[10%] flex flex-col">
          <div className="">
            {counterOn && <CountUp start={0} end={36} duration={4} delay={0} />}
            M+
          </div>
          <Reveal>
            <p className="dark:text-white text-black text-[10px] md:text-lg lg:text-xl">
              Users of out product
            </p>
          </Reveal>
        </div>
        <div className="absolute  flex flex-col items-center top-[30%] right-[50%]">
          <div className="">
            {" "}
            {counterOn && <CountUp start={0} end={24} duration={4} delay={0} />}
            +
          </div>{" "}
          <Reveal>
            <p className="dark:text-white text-black text-[10px] md:text-lg lg:text-xl">
              Clients
            </p>
          </Reveal>
        </div>
        <div className="absolute  flex flex-col items-center top-[75%] left-[55%]">
          <div className="">
            {" "}
            {counterOn && (
              <CountUp start={0} end={100} duration={4} delay={0} />
            )}
            +
          </div>{" "}
          <Reveal>
            <p className="dark:text-white text-black text-[10px] md:text-lg lg:text-xl">
              Project Developed
            </p>
          </Reveal>
        </div>
        <div className="absolute  flex flex-col top-[40%] left-[75%] items-center">
          <div className="">
            {" "}
            {counterOn && <CountUp start={0} end={36} duration={4} delay={0} />}
            M+{" "}
          </div>{" "}
          <Reveal>
            <p className="dark:text-white text-black text-[10px] md:text-lg lg:text-xl">
              Users of out product
            </p>
          </Reveal>
        </div>
      </div>
      <div className="w-full items-center gap-8 md:hidden section-padding flex flex-col ">
        <div className="bg-black py-10 w-[80%] font-bold text-secondary text-5xl rounded-xl  h-fit flex flex-col justify-center items-center">
          <div className="">
            {counterOn && <CountUp start={0} end={36} duration={4} delay={0} />}
            M+
          </div>
          <Reveal>
            <p className="dark:text-white text-black text-[14px]">
              Users of out product
            </p>
          </Reveal>
        </div>
        <div className="bg-black py-10 w-[80%] font-bold text-secondary text-5xl rounded-xl  h-fit flex flex-col justify-center items-center">
          <div className="">
            {counterOn && <CountUp start={0} end={24} duration={4} delay={0} />}
            +
          </div>
          <p className="dark:text-white text-black text-[14px]">Clients</p>
        </div>
        <div className="bg-black py-10 w-[80%] font-bold text-secondary text-5xl rounded-xl  h-fit flex flex-col justify-center items-center">
          <div className="">
            {counterOn && (
              <CountUp start={0} end={100} duration={4} delay={0} />
            )}
            +
          </div>
          <Reveal>
            <p className="dark:text-white text-black text-[14px]">
              Project Developed
            </p>
          </Reveal>
        </div>
        <div className="bg-black py-10 w-[80%] font-bold text-secondary text-5xl rounded-xl  h-fit flex flex-col justify-center items-center">
          <div className="">
            {counterOn && <CountUp start={0} end={36} duration={4} delay={0} />}
            M+
          </div>
          <Reveal>
            <p className="dark:text-white text-black text-[14px]">
              Users of out product
            </p>
          </Reveal>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
