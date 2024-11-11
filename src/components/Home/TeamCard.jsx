"use client";
import Image from "next/image";
import { Instagram, SendIcon } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { RevealViolet } from "../UI/Animations/Reveal";

const TeamCard = ({ i }) => {
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
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0 + i / 5 }}
    >
      <div
        className={` w-full   group flex flex-col overflow-hidden md:hover:scale-[1] scale-[0.9] transition-all duration-300  h-[400px] relative text-white rounded-[20px] shadow-2xl bg-secondary`}
      >
        <Image
          width={200}
          height={150}
          className=" w-full overflow-hidden transition-all ease-in duration-200       object-cover  h-[400px] "
          src="/assets/team/1x/team-1.png"
          alt="team-photo"
        />

        <div className=" p-6 flex flex-col h-full justify-between">
          <div className=" ">
            <h5 className="text-primary  font-bold ">
              <RevealViolet>Lorem ipsum </RevealViolet>
            </h5>

            <RevealViolet>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                ex.
              </p>
            </RevealViolet>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
