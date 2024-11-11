"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Reveal from "../UI/Animations/Reveal";

const Portfolio = () => {
  return (
    <div className="section-padding relative">
      <div className="  opacity-50 dark:opacity-100 absolute   left-[0] w-[900px] h-[1600px] top-[-10%] z-[-1] ">
        <Image
          src="/assets/gradients/gradient-v-4.png"
          className="w-full h-full"
          alt="gradient"
          height={1600}
          width={900}
        />
      </div>
      <div className="flex py-3  justify-between w-full">
        <Reveal>
          <h3 className="text-tertiary">Portfolio</h3>
        </Reveal>
        <button>
          <Reveal>
            <h5 className=" flex group text-secondary">
              More{" "}
              <ChevronRight
                className="transition-all duration-300 group-hover:translate-x-3"
                size={30}
              />{" "}
            </h5>
          </Reveal>
        </button>
      </div>
      <div className="grid gap-20 md:gap-5 grid-cols-1 md:grid-cols-3">
        <div
          id="portfolio"
          className="w-full relative rounded-xl bg-gradient-to-b from-white to-black bg-opacity-20 overflow-hidden h-[200px] md:h-[400px] md:col-span-2"
        >
          <Image
            width={400}
            height={400}
            alt="website-portfolio"
            className=" mix-blend-multiply w-full transition-all duration-500 hover:scale-[1.2]  h-full object-cover "
            src="/assets/portfolio/website.jpg"
          />
          <div className="absolute bottom-4  items-center px-5">
            <Reveal>
              <div className="portfolio-title">Website</div>
            </Reveal>
            <Reveal>
              <p className="portfolio-subtitle ">Lorem ipsum</p>
            </Reveal>
          </div>
        </div>

        <div
          id="portfolio"
          className="w-full relative bg-gradient-to-b from-white to-black bg-opacity-20 rounded-xl overflow-hidden h-[200px] md:h-[400px] "
        >
          <Image
            width={1900}
            height={3100}
            alt="branding-portfolio"
            className="w-full object-cover transition-all duration-500 hover:scale-[1.2] h-full mix-blend-multiply "
            src="/assets/portfolio/branding.jpg"
          />
          <div className="absolute bottom-4  items-center px-5">
            <Reveal>
              <div className="portfolio-title">Branding</div>
            </Reveal>
            <Reveal>
              <p className="portfolio-subtitle ">Lorem ipsum</p>
            </Reveal>
          </div>
        </div>
        <div
          id="portfolio"
          className="w-full relative overflow-hidden bg-gradient-to-b from-white to-black bg-opacity-20 rounded-xl  h-[200px] md:h-[400px] "
        >
          <Image
            width={400}
            height={400}
            alt="website-portfolio"
            className=" w-full h-full mix-blend-multiply transition-all duration-500 hover:scale-[1.2] object-cover "
            src="/assets/portfolio/marketing.jpg"
          />

          <div className="absolute bottom-4  items-center px-5">
            <Reveal>
              <div className="portfolio-title">Marketing</div>
            </Reveal>
            <Reveal>
              <p className="portfolio-subtitle ">Lorem ipsum</p>
            </Reveal>
          </div>
        </div>

        <div
          id="portfolio"
          className="w-full relative bg-gradient-to-b from-white to-black bg-opacity-20 rounded-xl overflow-hidden h-[200px] md:h-[400px] md:col-span-2"
        >
          <Image
            width={400}
            height={400}
            alt="system-development-portfolio"
            className="w-full object-cover transition-all duration-500 hover:scale-[1.2] mix-blend-multiply h-full "
            src="/assets/portfolio/system-development.jpg"
          />
          <div className="absolute bottom-4  items-center px-5">
            <Reveal>
              <div className="portfolio-title">System Development</div>
            </Reveal>
            <Reveal>
              <p className="portfolio-subtitle ">Lorem ipsum</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
