"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { useAnimation, motion, useInView } from "framer-motion";
/* eslint-disable @next/next/no-img-element */
const Services = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <>
      <div className=" pt-20 px-40 hidden md:block relative w-fit">
        <div className="w-full flex justify-center">
          <Image
            width={1000}
            height={1000}
            alt="services background"
            src="/assets/services/services.svg"
            className="w-[100vw]"
          />
        </div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
          className=" absolute  top-[30%] group h-48 w-48 [perspective:1000px] "
        >
          <div className="relative h-full w-full rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full object-cover "
                alt="services background"
                src="/assets/services/branding.svg"
              />

              <h4 className="services-title  transition-all duration-500 ease-in-out ">
                Branding
              </h4>
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
          className=" absolute  left-[28%] top-[15%] group h-48 w-48 [perspective:1000px] "
        >
          <div className="relative h-full w-full rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/digital-marketing.svg"
              />
              {/* <h4 className="services-title  transition-all duration-500 ease-in-out ">
              Branding
            </h4> */}
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
          className=" absolute  left-[38%]  top-[55%] group h-[250px] w-[250px] perspective:1000px] "
        >
          <div className="relative h-full w-full rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full gap-5 h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/tech-solutions.svg"
              />
              <h4 className="services-title   transition-all duration-500 ease-in-out ">
                Tech Solutions
              </h4>
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
          className=" absolute  left-[18%]  top-[75%] group h-32 w-32 [perspective:1000px] "
        >
          <div className="relative h-full w-full rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/media-production.svg"
              />
              {/* <h4 className="services-title  transition-all duration-500 ease-in-out ">
              Branding
            </h4> */}
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
          className=" absolute  left-[55%]  top-[25%] group h-32 w-32 [perspective:1000px] "
        >
          <div className="relative h-full w-full rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/service-1.svg"
              />
              {/* <h4 className="services-title  transition-all duration-500 ease-in-out ">
              Branding
            </h4> */}
            </div>
            <div className="absoulte  flex items-center -mt-10   inset-0 h-full w-full rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
          className=" absolute  left-[68%]  top-[75%] group h-40 w-40 [perspective:1000px] "
        >
          <div className="relative h-full w-full rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/infographics.svg"
              />
              <h4 className="services-title   transition-all duration-500 ease-in-out ">
                Inforgraphics Animation
              </h4>
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
          className=" absolute  left-[70%]  top-[20%]  group h-72 w-72 [perspective:1000px] "
        >
          <div className="relative h-full w-full rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/creative-graphics-design.svg"
              />
              <h4 className="services-title  transition-all duration-500 ease-in-out ">
                Creative Design
              </h4>
            </div>
            <div className="absoulte flex items-center  rounded-xl  -mt-10  inset-0 h-full w-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </motion.div>
      </div>
      {/* MOBILE START */}
      {/* MOBILE START */}
      {/* MOBILE START */}
      <div className=" section-padding flex flex-col items-center  md:hidden  w-full">
        <div className="  group w-full  flex justify-center  [perspective:1000px] ">
          <div className="relative h-80 w-fit rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <img
                width={1000}
                height={1000}
                className="w-full object-cover "
                alt="services background"
                src="/assets/services/branding.svg"
              />
              <h4 className="services-title  transition-all duration-500 ease-in-out ">
                Branding
              </h4>
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </div>

        <div className="  group w-full flex justify-center [perspective:1000px] ">
          <div className="relative h-80 w-fit rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/digital-marketing.svg"
              />
              {/* <h4 className="services-title  transition-all duration-500 ease-in-out ">
              Branding
            </h4> */}
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </div>

        <div className="  flex justify-center group w-full perspective:1000px] ">
          <div className="relative h-80 w-fit rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full gap-5 h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/tech-solutions.svg"
              />
              <h4 className="services-title   transition-all duration-500 ease-in-out ">
                Tech Solutions
              </h4>
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </div>

        <div className="  flex justify-center  group w-full [perspective:1000px] ">
          <div className="relative h-80 w-fit rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/media-production.svg"
              />
              {/* <h4 className="services-title  transition-all duration-500 ease-in-out ">
              Branding
            </h4> */}
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </div>

        <div className="  flex justify-center group w-full [perspective:1000px] ">
          <div className="relative h-80 w-fit rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/service-1.svg"
              />
              {/* <h4 className="services-title  transition-all duration-500 ease-in-out ">
              Branding
            </h4> */}
            </div>
            <div className="absoulte  flex items-center -mt-10   inset-0 h-full w-full rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </div>

        <div className="  flex justify-center group w-full [perspective:1000px] ">
          <div className="relative h-80 w-fit rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/infographics.svg"
              />
              <h4 className="services-title   transition-all duration-500 ease-in-out ">
                Inforgraphics Animation
              </h4>
            </div>
            <div className="absoulte flex items-center -mt-10  inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </div>

        <div className="  flex justify-center group w-full [perspective:1000px] ">
          <div className="relative h-80 w-fit rounded-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:scale-[1.1] ">
            <div className="absolute w-full h-full flex flex-col justify-center">
              <Image
                width={200}
                height={200}
                className="w-full "
                alt="services background"
                src="/assets/services/creative-graphics-design.svg"
              />
              <h4 className="services-title  transition-all duration-500 ease-in-out ">
                Creative Design
              </h4>
            </div>
            <div className="absoulte flex items-center  rounded-xl  -mt-10  inset-0 h-full w-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <h5 className="-mt-10">Lorem Ipsum</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
