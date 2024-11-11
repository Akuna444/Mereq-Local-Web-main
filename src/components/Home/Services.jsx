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
      <div className=" pt-20 md:px-40 px-10   relative w-fit">
        <div className="w-full flex  justify-center">
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
          className=" absolute home-service-container flex flex-col  top-[30%] group  "
        >
          <Image
            width={200}
            height={200}
            className=" hover:scale-[1.1] transition-all duration-300"
            alt="services background"
            src="/assets/services/branding.svg"
          />

          <h4 className="home-service-title ">Branding</h4>
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
          className=" absolute home-service-container left-[28%] top-[15%] group   "
        >
          <Image
            width={200}
            height={200}
            className=" hover:scale-[1.1] transition-all duration-300"
            alt="services background"
            src="/assets/services/digital-marketing.svg"
          />
          {/* <h4 className="home-service-title ">
              Branding
            </h4> */}
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
          className=" absolute home-service-container left-[38%]  top-[55%] group  "
        >
          <Image
            width={250}
            height={250}
            className=" hover:scale-[1.1] transition-all duration-300"
            alt="services background"
            src="/assets/services/tech-solutions.svg"
          />
          <h4 className="home-service-title  ">Tech Solutions</h4>
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
          className=" absolute home-service-container  left-[18%]  top-[75%] group  "
        >
          <Image
            width={150}
            height={150}
            className=" hover:scale-[1.1] transition-all duration-300"
            alt="services background"
            src="/assets/services/media-production.svg"
          />
          {/* <h4 className="home-service-title ">
              Branding
            </h4> */}
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
          className=" absolute home-service-container  left-[55%]  top-[25%] group  "
        >
          <Image
            width={150}
            height={150}
            className=" hover:scale-[1.1] transition-all duration-300"
            alt="services background"
            src="/assets/services/service-1.svg"
          />
          {/* <h4 className="home-service-title ">
              Branding
            </h4> */}
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
          className=" absolute  home-service-container  left-[68%]  top-[75%] group  "
        >
          <Image
            width={200}
            height={200}
            className=" hover:scale-[1.1] transition-all duration-300"
            alt="services background"
            src="/assets/services/infographics.svg"
          />
          <h4 className="home-service-title  ">Inforgraphics Animation</h4>
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
          className=" absolute md:max-w-full  max-w-[20%] flex flex-col items-center  left-[70%] w-fit  top-[20%]  group  "
        >
          <Image
            width={230}
            height={230}
            className=" hover:scale-[1.1] transition-all duration-300"
            alt="services icon"
            src="/assets/services/creative-graphics-design.svg"
          />
          <h4 className="home-service-title  ">Creative Design</h4>
        </motion.div>
      </div>
    </>
  );
};

export default Services;
