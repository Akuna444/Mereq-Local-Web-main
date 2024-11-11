/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import ContactButton from "../UI/Buttons/ContactButton";
import Reveal from "../UI/Animations/Reveal";

const Hero = () => {
  return (
    <div className=" section-padding  relative">
      <div className="  opacity-50 dark:opacity-100 absolute   left-[0] w-[900px] h-[700px] top-[-20%] z-[-1] ">
        <Image
          src="/assets/gradients/gradient-v-1.png"
          className="w-full h-full"
          alt="gradient"
          height={700}
          width={900}
        />
      </div>
      <div className="  opacity-50 dark:opacity-100 absolute   right-[0] w-[900px] h-[700px] top-[35%] z-[-1] ">
        <Image
          src="/assets/gradients/gradient-v-2.png"
          className="w-full h-full"
          alt="gradient"
          height={700}
          width={900}
        />
      </div>

      <div className="grid grid-cols-1  gap-12 md:grid-cols-2 ">
        <div className="flex flex-col gap-6 md:gap-16 h-full justify-center">
          <div className="flex flex-col  items-center md:items-start gap-2">
            <Reveal>
              <h1 className="font-bold text-black dark:text-white text-center md:text-left">
                The special soup
              </h1>
            </Reveal>
            <Reveal>
              <h1 className="font-bold z-100 text-black dark:text-white text-center md:text-left">
                That bring together
              </h1>
            </Reveal>
            <Reveal>
              <h1 className="font-bold   text-center md:text-left text-secondary">
                {" "}
                Essential falvour
              </h1>
            </Reveal>
          </div>
          <div className="flex justify-center w-full md:justify-between">
            <Reveal>
              <ContactButton />
            </Reveal>
          </div>
        </div>
        <div className="w-fit relative">
          <Image
            width={650}
            height={650}
            src="/assets/hero/cloud.png"
            className=" animate-floating z-[5] max-sm:w-full max-w-[650px]"
            alt="hero-image"
          />
          <Image
            width={650}
            height={650}
            src="/assets/hero/girl-with-cloud.png"
            className=" animate-floating animation-delay-300 max-sm:w-full max-w-[650px] absolute inset-0 z-20 "
            alt="hero-image"
          />

          <Image
            width={150}
            height={150}
            className="animate-floatingfast max-w-[100px]  md:max-w-[150px] absolute left-[10%] animation-delay-500 top-[10%] z-30 "
            src="/assets/hero/salt.png"
            alt="salt"
          />

          <Image
            width={150}
            height={150}
            className="animate-bowl max-w-[100px]  md:max-w-[150px] absolute  "
            src="/assets/hero/bowl.png"
            alt="bowl"
          />
          <Image
            width={150}
            height={150}
            className="animate-garlic ease-in  max-w-[100px]  md:max-w-[150px] absolute "
            src="/assets/hero/garlic.png"
            alt="garlic"
          />
          <Image
            height={150}
            width={150}
            className="animate-pepper max-w-[100px]  md:max-w-[150px] absolute   "
            src="/assets/hero/pepper.png"
            alt="pepper"
          />
          <Image
            height={150}
            width={150}
            className="animate-tomato max-w-[100px]  md:max-w-[150px] absolute "
            src="/assets/hero/tomato.png"
            alt="tomato"
          />
          <Image
            width={150}
            height={150}
            className="animate-zuccuni max-w-[100px]  md:max-w-[150px] absolute   "
            src="/assets/hero/zuccuni.png"
            alt="zuccuni"
          />

          <Image
            width={150}
            height={150}
            className="animate-sliced max-w-[100px]  md:max-w-[150px] absolute "
            src="/assets/hero/sliced-tomato.png"
            alt="pan"
          />

          <Image
            width={150}
            height={150}
            className="animate-pan max-w-[100px]  md:max-w-[150px] absolute "
            src="/assets/hero/pan.png"
            alt="pan"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
