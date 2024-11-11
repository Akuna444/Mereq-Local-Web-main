"use client";

import { projectsNav } from "@/data/constants";
import { useState } from "react";

const ProjectsNav = () => {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <div className="section-padding-top md:pl-12 pl-6 ">
      <div className="flex  justify-end pr-20">
        <h1 className="text-secondary">Works</h1>
      </div>
      <div className="flex rounded-l-[20px] text-tertiary  bg-grayDark px-6 py-6 divide-x-2">
        {projectsNav.map((nav) => (
          <button onClick={() => setActiveNav(nav.id)} key={nav.id}>
            {" "}
            <h5 className={`${activeNav === nav.id ? "font-bold " : ""} px-12`}>
              {nav.name}{" "}
            </h5>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsNav;
