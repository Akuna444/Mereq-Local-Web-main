"use client";

import Stats from "./Stats";
import Reveal from "../UI/Animations/Reveal";

const About = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className=" section-padding  grid grid-cols-1 md:grid-cols-5">
        <div className="flex w-full justify-center md:justify-between">
          <Reveal>
            {" "}
            <h4 className="dark:text-tertiary  w-full text-primary text-center md:text-left">
              About Us
            </h4>
          </Reveal>
        </div>
        <div className="col-span-4">
          <Reveal>
            <p className="dark:text-white text-dark text-center md:text-left">
              Based in Addis Ababa, Ethiopia, MereqTech is an advertising and
              technology agency. Specializing in digital marketing, social media
              management, and software development, we offer comprehensive
              solutions to meet diverse needs.
            </p>{" "}
          </Reveal>
          <Reveal>
            <p className="dark:text-white text-dark text-center md:text-left">
              Our unique blend of creativity and technical expertise makes us
              the top choice for clients seeking innovative strategies and
              technological solutions.
            </p>{" "}
          </Reveal>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default About;
