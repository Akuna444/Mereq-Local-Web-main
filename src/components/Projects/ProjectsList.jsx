import { ArrowDown } from "lucide-react";
Link;
import Image from "next/image";
import Link from "next/link";

const ProjectsList = () => {
  return (
    <div className="section-padding">
      <div className="grid grid-cols-6 gap-10 w-full px-20 h-[150vh] grid-rows-8">
        <div className=" relative  overflow-visible   col-span-4   row-span-4 projects-container">
          <Link href="/projects/1">
            <Image
              className="projects-image   "
              src="/assets/banners/feres.png"
              alt="fere-banner"
              width={400}
              height={500}
            />
          </Link>
          <h4 className="projects-text">Feres</h4>
          <div className="absolute bottom-5 text-[14px] items-end flex flex-col w-[150px] gap-2 right-5 ">
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[60%]">
              Lorem
            </div>
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[80%]">
              Lorem
            </div>
          </div>
        </div>
        <div className=" col-span-2   row-span-6 projects-container">
          <Link href="/projects/1">
            <Image
              className="projects-image "
              src="/assets/banners/sunpic.png"
              alt="sunpic-banner"
              width={400}
              height={400}
            />{" "}
          </Link>
          <h4 className="projects-text">Sunpic</h4>
          <div className="absolute bottom-5 text-[14px] items-end flex flex-col w-[150px] gap-2 right-5 ">
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[60%]">
              Lorem
            </div>
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[80%]">
              Lorem
            </div>
          </div>
        </div>
        <div className=" col-span-2 row-span-2 projects-container ">
          <Link href="/projects/1">
            <Image
              className="projects-image "
              src="/assets/banners/efoy.png"
              alt="alt"
              width={400}
              height={400}
            />{" "}
          </Link>
          <h4 className="projects-text">Efoy</h4>
          <div className="absolute bottom-5 text-[14px] items-end flex flex-col w-[150px] gap-2 right-5 ">
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[60%]">
              Lorem
            </div>
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[80%]">
              Lorem
            </div>
          </div>
        </div>
        <div className="projects-container col-span-2 row-span-2 ">
          <Link href="/projects/1">
            <Image
              className="projects-image "
              src="/assets/banners/smile.png"
              alt="alt"
              width={400}
              height={400}
            />
          </Link>
          <h4 className="projects-text">Smile</h4>
          <div className="absolute bottom-5 text-[14px] items-end flex flex-col w-[150px] gap-2 right-5 ">
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[60%]">
              Lorem
            </div>
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[80%]">
              Lorem
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col p-4 justify-end w-full h-full overflow-hidden rounded-xl bg-secondary row-span-2">
          <button className="flex group justify-between w-full items-center h-fit">
            <h5>More</h5>
            <ArrowDown className="group-hover:translate-y-2" />
          </button>
        </div>
        <div className="col-span-5 projects-container row-span-2">
          <Image
            className="projects-image "
            src="/assets/banners/kacha.png"
            alt="alt"
            width={1000}
            height={400}
          />
          <h4 className="projects-text">Kacha</h4>
          <div className="absolute bottom-5 text-[14px] items-end flex flex-col w-[150px] gap-2 right-5 ">
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[60%]">
              Lorem
            </div>
            <div className=" pt-2 pl-4 bg-grayDark/80 rounded-2xl w-[80%]">
              Lorem
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
