import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";

const TopStory = () => {
  return (
    <div className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 relative h-[60vh] md:h-[80vh] rounded-[20px] overflow-hidden bg-secondary">
        <Image
          src="/assets/posts/1x/post-2.png"
          alt="post thumbnail"
          className="w-full md:h-full h-[200px] object-top object-cover"
          width={400}
          height={400}
        />
        <div className="w-full flex flex-col py-2 text-white  px-4">
          <div className="">
            <h1 className="md:text-[140px]  center-text text-[30px] [line-height:0.7] ">
              TOP
            </h1>
            <h1 className="text-[30px] center-text md:text-[140px] text-[#DCEAE9]/90  font-bold">
              STORY
            </h1>
          </div>
          <div className="w-[90%]">
            <h2 className="center-text">Lorem Ipsum Dolor Sit</h2>
            <p className="md:text-[20px] center-text max-sm:leading-3 text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              libero explicabo culpa repellendus aliquam quis sequi temporibus
              nulla, veniam velit.
            </p>
          </div>
        </div>
        <div className="w-full flex mb-10  md:hidden justify-center">
          <ChevronDown size={50} />
        </div>
        <ChevronRight
          size={120}
          className="absolute hidden md:block  right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default TopStory;
