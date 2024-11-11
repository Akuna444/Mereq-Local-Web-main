"use client";
import { gsap } from "gsap";
import {
  ScrollTrigger,
  MotionPathPlugin,
  GSDevTools,
  DrawSVGPlugin,
} from "gsap/all";

import Image from "next/image";
import { useEffect } from "react";
import Reveal from "../UI/Animations/Reveal";

const OurServices = () => {
  gsap.registerPlugin(
    ScrollTrigger,
    DrawSVGPlugin,
    MotionPathPlugin,
    GSDevTools
  );
  useEffect(() => {
    gsap.defaults({ ease: "none" });

    const pulses = gsap
      .timeline({
        defaults: {
          opacity: 1,
          autoAlpha: 1,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".service01", {}, 1.5)
      .to(".service02", {}, 3.7)
      .to(".service03", {}, 6.5)
      .to(".service04", {}, 10.72)
      .to(".service05", {}, 14.22)
      .to(".service06", {}, 18.22);

    const main = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .to(".ball01", { autoAlpha: 1, duration: 0.05 })
      .from(".theLine", { drawSVG: 0, duration: 20 }, 0)
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
    <div className="section-padding h-[490vh]  justify-center  w-full  relative">
      <div className="h-full w-full  relative ">
        <h1 className="text-secondary  -z-10 text-center my-5">Our Services</h1>

        <svg
          className="    overflow-visible  z-[200]   "
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 1200"
        >
          <path
            className="theLine stroke-black dark:stroke-white"
            d="M 295 -8 C 186 -31 123 87 121 81 C 15 303 287 173 303 287 C 289 412 103 341 97 521 C 119 660 481 488 506 687 C 487 848 36 769 77 992 C 189 1153 304 843 506 1262"
            fill="none"
            stroke-width="1px"
            stroke-dasharray="10,5"
          />

          <circle class="ball ball01" r="10" cx="50" cy="100"></circle>
        </svg>

        {/* <path
        d="M 1 96 Q 29 67 45 110 C 57 125 65 108 75 107 C 90 107 97 124 111 126"
        fill="none"
        stroke="white"
        stroke-width="1px"
        stroke-dasharray="10,5"
      /> */}
        {/* <Image
        width={400}
        height={400}
        className="top-0 absolute left-[24%]"
        src="/assets/services/SVG/top-to-branding.svg"
        alt="alt"
      /> */}
        <div className="top-[9%] service01 service-container   w-[70%] h-[300px]  left-[3%]">
          <Image
            width={300}
            height={300}
            className="max-sm:w-[30%]"
            src="/assets/services/SVG/branding.svg"
            alt="alt"
          />
          <div className="flex w-full h-full  flex-col justify-center gap-3">
            <h2 className="text-tertiary">Branding</h2>
            <Reveal>
              <p className="md:text-[20px] text-[15px]">
                Stand out in today&apos;s competitive market with our branding
                service. We help your business make a lasting impression by
                creating a strong brand identity. From designing your logo to
                crafting your message, we&apos;ll tell your unique story and
                connect with your audience. Let&apos;s build a brand that
                resonates and drives success together.
              </p>{" "}
            </Reveal>
          </div>
        </div>
        {/* <Image
        width={300}
        height={300}
        className="top-[17%] absolute left-[25%]"
        src="/assets/services/SVG/branding-to-graphics.svg"
        alt="alt"
      />{" "} */}
        <div className="">
          <div className="top-[20%] service02 h-[400px] service-container  w-[70%] left-[41%]">
            <Image
              width={400}
              height={400}
              className="max-sm:w-[30%]"
              src="/assets/services/SVG/graphics.svg"
              alt="alt"
            />
            <div className="flex w-full h-full flex-col justify-center gap-3">
              <h2 className="text-tertiary">Creative & Graphics Design</h2>
              <Reveal>
                <p className="md:text-[20px] text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  consequuntur atque odio eligendi delectus quasi fugit id dolor
                  molestias ipsa.
                </p>{" "}
              </Reveal>
            </div>
          </div>
        </div>

        {/* <Image
        width={200}
        height={200}
        className="top-[25%] absolute left-[31%]"
        src="/assets/services/SVG/graphics-to-digital.svg"
        alt="alt"
      /> */}
        <div className="top-[36%] service03  service-container w-[70%] h-[350px] left-[8%]">
          <Image
            width={350}
            height={350}
            className="max-sm:w-[30%]"
            src="/assets/services/SVG/digital.svg"
            alt="alt"
          />
          <div className="flex w-full h-full flex-col justify-center gap-3">
            <h2 className="text-tertiary">Digital Marketing</h2>
            <Reveal>
              <p className="md:text-[20px] text-[15px]">
                Lift up your online presence with our digital marketing service.
                We&apos;ll help you reach your audience effectively through
                various digital platform. Our goal is to boost your visibility,
                engage with your audience, and drive growth to your business.
              </p>{" "}
            </Reveal>
          </div>
        </div>
        {/* <Image
        width={600}
        height={600}
        className="top-[41%] absolute left-[31%]"
        src="/assets/services/SVG/digital-to-media.svg"
        alt="alt"
      /> */}
        <div className="top-[51%]  h-[350px]  service04 service-container   w-[60%] left-[36%]">
          <div className="flex w-full h-full flex-col justify-center gap-3">
            <h2 className="text-tertiary">Media Production</h2>
            <Reveal>
              <p className="md:text-[20px] text-[15px]">
                Bring your vision to life with our media production service.
                From attractive videos to stunning photography, we&apos;ll
                create content that showcases your brand in the best light. Let
                us help you tell your story and leave a lasting impression on
                your audience.
              </p>{" "}
            </Reveal>
          </div>
          <Image
            width={350}
            height={350}
            className="max-sm:w-[30%]"
            src="/assets/services/SVG/media.svg"
            alt="alt"
          />
        </div>
        {/* <Image
        width={600}
        height={600}
        className="top-[55%] absolute left-[31%]"
        src="/assets/services/SVG/media-to-tech.svg"
        alt="alt"
      /> */}
        <div className="top-[65%] service05  service-container  w-[70%] h-[350px] left-[10%]">
          <Image
            width={350}
            height={350}
            className="max-sm:w-[30%]"
            src="/assets/services/SVG/tech.svg"
            alt="alt"
          />
          <div className="flex w-full h-full flex-col justify-center gap-3">
            <h2 className="text-tertiary">Tech Solution</h2>
            <Reveal>
              <p className="md:text-[20px] text-[15px]">
                MereqTech will build a user-friendly, visually appealing website
                that reflects your brand and engages your audience. Let us
                handle the technical aspects while you focus on growing your
                business.
              </p>{" "}
            </Reveal>
          </div>
        </div>
        {/* <Image
        width={600}
        height={600}
        className="top-[74%] absolute left-[33%]"
        src="/assets/services/SVG/tech-to-info.svg"
        alt="alt"
      /> */}
        <div className="top-[84%] h-[350px] service-container service06 w-[60%]  left-[37%]">
          <div className="flex w-full h-full flex-col justify-center gap-3">
            <h2 className="text-tertiary">Infographics /Animation</h2>
            <Reveal>
              <p className="md:text-[20px] text-[15px]">
                Make complex information easy to understand with our
                infographics and animations service. We&apos;ll turn your data
                into visually engaging graphics and animations that captivate
                your audience and convey your message effectively.
              </p>{" "}
            </Reveal>
          </div>
          <Image
            width={350}
            height={350}
            className="max-sm:w-[30%]"
            src="/assets/services/SVG/info.svg"
            alt="alt"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
