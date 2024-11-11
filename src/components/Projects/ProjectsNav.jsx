"use client";

import { projectsList, projectsNav } from "@/data/constants";
import { useState } from "react";
import Reveal from "../UI/Animations/Reveal";

const ProjectsNav = () => {
  const [activeNav, setActiveNav] = useState("All");
  const filteredProject = projectsList.filter(
    activeNav === "All" ? true : projectsList.category === activeNav
  );
  return (
    <div className="section-padding-top md:pl-12 px-6 ">
      <div className="flex justify-center  md:justify-end md:pr-20">
        <Reveal>
          {" "}
          <h1 className="text-secondary">Works</h1>
        </Reveal>
      </div>
      <Reveal>
        <div className="hidden md:flex max-sm:rounded-[20px] md:rounded-l-[20px] text-tertiary w-[100vw]  bg-grayDark px-6 py-6 divide-x-2">
          {projectsNav.map((nav) => (
            <button onClick={() => setActiveNav(nav.name)} key={nav.id}>
              {" "}
              <h5
                className={`${
                  activeNav === nav.name ? "font-bold " : ""
                } px-12`}
              >
                {nav.name}{" "}
              </h5>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="bg-grayDark rounded-[20px] px-1 py-6 text-tertiary gap-4 justify-center    flex md:hidden flex-wrap w-full h-full section-paddingx">
        {projectsNav.map((nav) => (
          <button onClick={() => setActiveNav(nav.id)} key={nav.id}>
            {" "}
            <div className={`${activeNav === nav.id ? "font-bold " : ""} `}>
              {nav.name}
            </div>{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsNav;
