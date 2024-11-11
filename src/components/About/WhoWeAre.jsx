"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { PauseIcon, PlayIcon } from "lucide-react";
import Reveal from "../UI/Animations/Reveal";

const WhoWeAre = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {" "}
        <div className="flex relative  h-[90vh] my-auto  w-full justify-center md:justify-end">
          <div className="absolute h-0 md:h-full w-full  top-[10%] -left-[20%]">
            <Image
              className="w-full md:block  hidden h-[80%]"
              src="/assets/about-page/yellow-texture.svg"
              alt="yellow-texture"
              width={600}
              height={600}
            />
          </div>
          <div className=" md:w-[60%] w-full md:h-full h-[75vh]  relative rounded-[20px] border-secondary border-2 bg-slate-400 ">
            {mounted ? (
              <div className="w-full h-full overflow-hidden rounded-[20px]">
                <ReactPlayer
                  ref={playerRef}
                  url="https://player.vimeo.com/video/840827473?h=1d9bd76005"
                  playing={isPlaying}
                  controls={false}
                  width="100%"
                  height="100%"
                />{" "}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <h2 className="m-auto inset-0">Loading...</h2>
              </div>
            )}

            <button className="absolute -bottom-10 blur-2xl left-[40%] p-8 bg-secondary z-[-1] rounded-full">
              <PlayIcon />
            </button>
            <button
              onClick={togglePlay}
              className="absolute -bottom-10 left-[40%] p-8 bg-secondary rounded-full"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>{" "}
        </div>
        <div className="flex flex-col md:justify-start justify-center py-20 gap-4">
          <Image
            className=""
            src="/assets/about-page/bulb-brain.svg"
            alt="bulb-brain"
            height={70}
            width={70}
          />
          <Reveal>
            <h1 className="dark:text-secondary py-3">Who We are</h1>
          </Reveal>
          <Reveal>
            <p>
              Based in Addis Ababa, Ethiopia, MereqTech is a multipurpose
              advertising and technology agency dedicated to overcoming
              challenges through the fusion of creativity and technology. As a
              leading marketing management firm in Addis Ababa, we specialize in
              digital marketing and social media management, driving business
              growth through meticulously orchestrated campaigns. Moreover, our
              expertise extends to the development of web and software systems,
              offering comprehensive solutions designed to diverse technological
              needs. With our blend of creative marketing and technical prowess,
              MereqTech serves as the ultimate destination for clients in search
              of ground-breaking strategies and brand-new technological
              solutions
            </p>
          </Reveal>
          <button className="bg-secondary rounded-[10px] md:mx-0 mx-auto  w-fit text-white px-6 py-2">
            <h4>Lorem Ipsum</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
