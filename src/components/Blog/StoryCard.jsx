"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Reveal from "../UI/Animations/Reveal";

const StoryCard = ({ title, author, date, content, featuredImage, id }) => {
  return (
    <Reveal width="100%">
      <div className="section-paddingx w-full grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2">
        <Image
          width={400}
          height={400}
          className="w-full h-[200px] md:h-[350px] object-cover rounded-[20px]"
          src={`http://209.250.233.239:1337${featuredImage?.url}`}
          alt="post thumb"
        />
        <div className="flex flex-col gap-5 justify-center h-full">
          <div>
            <h2 className="text-tertiary  font-bold">{title}</h2>
            <div className="py-4">
              <h5 className="text-secondary ">{author}</h5>
              <h5 className="text-secondary  ">{date}</h5>
            </div>

            <p className="">{content.slice(0, 200)}</p>
          </div>

          <Link href={`/blog/${id}`}>
            <button className="flex justify-between md:mx-0 py-1  w-52 md:w-72 text-xl md:text-3xl  px-2 h-fit items-center rounded-[20px] bg-tertiary">
              Read More <ChevronRight size={30} />
            </button>
          </Link>
        </div>
      </div>{" "}
    </Reveal>
  );
};

export default StoryCard;
