"use client";
import { useState } from "react";
import CountUp from "react-countup";
import Reveal from "../UI/Animations/Reveal";
import { gsap } from "gsap";
import TrigScroll from "react-scroll-trigger";
import {
  ScrollTrigger,
  DrawSVGPlugin,
  MotionPathPlugin,
  GSDevTools,
} from "gsap/all";

import { useEffect } from "react";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  gsap.registerPlugin(
    ScrollTrigger,
    DrawSVGPlugin,
    MotionPathPlugin,
    GSDevTools
  );
  useEffect(() => {
    gsap.defaults({ ease: "none" });
    const main = gsap.timeline({
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });

    const pulses = gsap
      .timeline({
        defaults: {
          opacity: 1,
          autoAlpha: 1,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".stat01", {}, 2.0)
      .to(".stat02", {}, 4.7)
      .to(".stat03", {}, 8.5)
      .to(".stat04", {}, 13.5);

    main
      .to(".ball01", { autoAlpha: 1, duration: 0.05 })
      .from(".theLine", { drawSVG: 0, duration: 4 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
          duration: 20,
        },
        0
      )
      .add(pulses, 0);
  }, []);
  return (
    <>
      <div className="w-full text-[24px] md:text-[60px] lg:text-[80px] mt-20 font-bold text-primary dark:text-secondary relative ">
        <svg
          className=" w-full  z-[200]   "
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 300"
        >
          <path
            class="theLine stroke-black dark:stroke-white"
            d="M 1 96 Q 152 -63 247 108 C 344 332 394 169 502 170 C 608 187 541 235 707 289"
            fill="none"
            stroke="white"
            stroke-width="1px"
            stroke-dasharray="10,5"
          />

          <circle class="ball ball01 absolute" r="10" cx="50" cy="100"></circle>
        </svg>
        <div className="absolute stat01 opacity-0 transition-all duration-300 top-[12%]  items-center left-[10%] flex flex-col">
          <div className="">
            <CountUp start={0} end={36} duration={4} delay={0} />
            M+
          </div>
          <div className="w-[80px] md:w-full">
            <Reveal>
              <p className="stat-title">Users of out product</p>
            </Reveal>
          </div>
        </div>
        <div className="absolute  stat02 opacity-0 transition-all duration-300  flex flex-col items-center top-[30%] right-[50%]">
          <circle
            class="ball ball02 bg-tertiary "
            r="10"
            cx="50"
            cy="100"
          ></circle>
          <div className="">
            {" "}
            <CountUp start={0} end={24} duration={4} delay={0} />+
          </div>{" "}
          <div className="w-[80px] md:w-full">
            {" "}
            <Reveal width="100%">
              <p className="stat-title">Clients</p>
            </Reveal>
          </div>
        </div>
        <div className="absolute stat03 opacity-0 transition-all duration-300  flex flex-col items-center top-[75%] left-[55%]">
          <div className="">
            {" "}
            <CountUp start={0} end={100} duration={4} delay={0} />+
          </div>{" "}
          <div className="w-[80px] md:w-full">
            {" "}
            <Reveal>
              <p className="stat-title">Project Developed</p>
            </Reveal>{" "}
          </div>
        </div>
        <div className="absolute stat04 opacity-0 transition-all duration-300  flex flex-col top-[40%] left-[75%] items-center">
          <div className="">
            <CountUp start={0} end={36} duration={4} delay={0} />
            M+{" "}
          </div>{" "}
          <div className="w-[80px] md:w-full">
            <Reveal>
              <p className="stat-title">Users of out product</p>
            </Reveal>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
