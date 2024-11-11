"use client";
import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import PostsCard from "./PostsCard";
import Reveal from "../UI/Animations/Reveal";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const Posts = () => {
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
    <div className="section-padding relative  mb-10">
      <div className="  opacity-50 dark:opacity-100 absolute   right-[0] w-[1200px] h-[1300px] -top-[80%] z-[-1] ">
        <Image
          src="/assets/gradients/gradient-gv-1.png"
          className="w-full h-full"
          alt="gradient"
          height={700}
          width={900}
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
      >
        <div className="flex w-full justify-between">
          <Reveal>
            <h2 className="text-tertiary font-semibold">
              Recent News and Insights
            </h2>
          </Reveal>
          <Reveal>
            {" "}
            <button>
              <h5 className=" z-10 flex group text-secondary">
                More{" "}
                <ChevronRight
                  className="transition-all duration-300 group-hover:translate-x-3"
                  size={30}
                />{" "}
              </h5>
            </button>
          </Reveal>
        </div>
        <div className="grid py-10 gap-24 md:gap-10 grid-cols-1 md:grid-cols-3">
          <PostsCard />
          <PostsCard />
          <PostsCard />
        </div>
      </motion.div>
    </div>
  );
};

export default Posts;
