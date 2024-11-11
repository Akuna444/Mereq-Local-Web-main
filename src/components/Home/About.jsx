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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod hic
              consequatur nisi nulla assumenda perferendis itaque fugiat
              aspernatur dignissimos repellendus maiores expedita.
            </p>{" "}
          </Reveal>
          <Reveal>
            <p className="dark:text-white text-dark text-center md:text-left">
              dolorum corrupti, sunt modi. Saepe asperiores quaerat laboriosam
              voluptate. Cumque et amet at doloribus pariatur aperiam a
              consequuntur.
            </p>{" "}
          </Reveal>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default About;
