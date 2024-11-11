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
      <div className="w-full  group hover-[1.1] md:hover:scale-[1.2] transition-all duration-300  h-[330px] relative text-white rounded-[20px] bg-secondary">
        <div className=" px-6 py-6 flex flex-col justify-between h-full">
          <Image
            width={200}
            height={150}
            className="rounded-full transition-all ease-in duration-200 group-hover:mt-[-50px] group-hover:shadow-2xl    group-hover:w-[200px] group-hover:h-[150px] group-hover:rounded-[20px]    object-cover w-[130px] h-[130px] "
            src="/assets/team/team-1.svg"
            alt="team-photo"
          />

          <div className=" ">
            <h4 className="text-primary  font-semibold ">
              <RevealViolet>Lorem ipsum </RevealViolet>
            </h4>

            <RevealViolet>
              <p className="text-[16px]">Lorem ipsum</p>
            </RevealViolet>
          </div>
          <div className="flex w-full flex-col">
            <div>
              <p className="text-[8px] hidden group-hover:block">Lorem ipsum</p>
            </div>
            <div className="gap-4 hidden group-hover:flex text-primary">
              <Instagram />
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
