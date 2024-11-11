"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../UI/Animations/Reveal";

const PostsCard = () => {
  return (
    <Link href="#">
      <div className="w-full text-white group  h-[300px]">
        <div className="overflow-hidden w-full rounded-xl">
          <Image
            width={300}
            height={300}
            className="object-cover w-full group-hover:scale-110 transition-all duration-300 "
            src="/assets/posts/post-1.png"
            alt="post thumbnail"
          />
        </div>

        <Reveal>
          <p className="text-[14px] text-tertiary">Lorem ipsum</p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="text-[16px] break-words leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            architecto?
          </p>
        </Reveal>
      </div>
    </Link>
  );
};

export default PostsCard;
