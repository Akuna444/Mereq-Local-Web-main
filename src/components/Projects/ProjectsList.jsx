"use client";
import Reveal from "../UI/Animations/Reveal";
import { ArrowDown } from "lucide-react";
Link;
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projectsList } from "@/data/constants";
import { projectsNav } from "@/data/constants";

const ProjectsList = () => {
  const [activeNav, setActiveNav] = useState("All");

  const filteredProject = projectsList.filter((project) =>
    activeNav === "All" ? true : project.category === activeNav
  );
  return (
    <>
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
            <button onClick={() => setActiveNav(nav.name)} key={nav.id}>
              {" "}
              <div className={`${activeNav === nav.name ? "font-bold " : ""} `}>
                {nav.name}
              </div>{" "}
            </button>
          ))}
        </div>
      </div>
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 w-full px-6 md:px-20  md:h-[150vh] grid-rows-1 md:grid-rows-8">
          {projectsList.map((project) => {
            let isInCategroy = false;
            filteredProject.map((filteredProject) => {
              if (project.id === filteredProject.id) {
                isInCategroy = true;
              }
            });
            if (project.id === 5) {
              return (
                <>
                  <div className="col-span-1 hidden md:flex flex-col p-4 justify-end w-full h-full overflow-hidden rounded-xl bg-secondary row-span-2">
                    <button className="flex group justify-between w-full items-center h-fit">
                      <h5>More</h5>
                      <ArrowDown className="group-hover:translate-y-2" />
                    </button>
                  </div>
                  <div
                    key={project.id}
                    className={`relative ${
                      isInCategroy
                        ? ""
                        : "blur-[5px] hidden pointer-events-none md:block opacity-30"
                    }   group ${project.col}   
                    ${project.row} projects-container`}
                  >
                    <Link href={`projects/${project.link}`}>
                      <Image
                        className="projects-image "
                        width={400}
                        height={400}
                        src={`/assets/banners/${project.imagePath}`}
                        alt={`${project.imagePath}-banner`}
                        
                      />
                    </Link>
                    <h4 className="projects-text">{project.name}</h4>
                    <div className="absolute bottom-5 text-[10px] md:text-[14px] items-end flex flex-col w-[150px] gap-2 right-5 ">
                      <div className=" projects-tag">Lorem</div>
                      <div className=" projects-tag">Lorem</div>
                    </div>
                  </div>
                </>
              );
            }
            return (
              <div
                key={project.id}
                className={`relative ${
                  isInCategroy
                    ? ""
                    : "blur-[5px] hidden md:block pointer-events-none opacity-30"
                }  group ${project.col}   
              ${project.row} projects-container`}
              >
                <Link href={`projects/${project.link}`}>
                  <Image
                    className="projects-image   "
                    src={`/assets/banners/${project.imagePath}.png `}
                    alt={`${project.imagePath}-banner`}
                    width={400}
                    height={400}
                  />
                </Link>
                <h4 className="projects-text">{project.name}</h4>
                <div className="absolute bottom-5 text-[10px] md:text-[14px] items-end flex flex-col w-[150px] gap-2 right-5 ">
                  <div className=" projects-tag">Lorem</div>
                  <div className=" projects-tag">Lorem</div>
                </div>
              </div>
            );
          })}

          <div className="col-span-1 flex md:hidden flex-col p-4 justify-end w-full h-full overflow-hidden rounded-xl bg-secondary row-span-2">
            <button className="flex group justify-between w-full items-center h-fit">
              <h5>More</h5>
              <ArrowDown className="group-hover:translate-y-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
