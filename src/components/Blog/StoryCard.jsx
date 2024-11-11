import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const StoryCard = () => {
  return (
    <div className="section-padding grid gap-10 grid-cols-2">
      <Image
        width={400}
        height={400}
        className="w-full h-[350px] object-cover rounded-[20px]"
        src="/assets/posts/1x/post-2.png"
        alt="post thumb"
      />
      <div className="flex flex-col gap-10 justify-center h-full">
        <div>
          <h2 className="text-tertiary font-bold">in vonaputate</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi
            quas architecto eum optio illum nesciunt, odit velit harum nulla
            nisi minima, facilis reprehenderit. Sunt magni quo fugiat architecto
            ex aperiam itaque? Nesciunt laudantium tempore, repellat tempora
            voluptatum illum delectus?
          </p>
        </div>

        <Link href="/blog/1">
          <button className="flex justify-between  w-72 text-3xl  px-2 h-fit items-center rounded-[20px] bg-tertiary">
            Read More <ChevronRight size={50} />
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;
