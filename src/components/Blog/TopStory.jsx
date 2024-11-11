import Image from "next/image";
import { ChevronRight } from "lucide-react";

const TopStory = () => {
  return (
    <div className="section-padding">
      <div className="grid grid-cols-2 relative h-[90vh] rounded-[20px] overflow-hidden bg-secondary">
        <Image
          src="/assets/posts/1x/post-2.png"
          alt="post thumbnail"
          className="w-full h-full object-top object-cover"
          width={400}
          height={400}
        />
        <div className="w-full flex flex-col text-white  px-4">
          <div className="">
            <h1 className="text-[180px] [line-height:0.7] ">TOP</h1>
            <h1 className="text-[180px] text-[#DCEAE9]/90  font-bold">STORY</h1>
          </div>
          <div className="w-[90%]">
            <h2 className="">Lorem Ipsum Dolor Sit</h2>
            <p className="text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              libero explicabo culpa repellendus aliquam quis sequi temporibus
              nulla, veniam velit.
            </p>
          </div>
        </div>
        <ChevronRight size={120} className="absolute right-0 bottom-0" />
      </div>
    </div>
  );
};

export default TopStory;
