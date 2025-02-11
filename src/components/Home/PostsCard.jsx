"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../UI/Animations/Reveal";

const PostsCard = ({ title, id, content, featuredImage }) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="w-full text-white group  h-[300px]">
        <div className="overflow-hidden h-full w-full rounded-xl">
          <Image
            width={300}
            height={300}
            className="object-cover w-full group-hover:scale-110 transition-all duration-300 "
            src={`http://209.250.233.239:1337${featuredImage?.url}`}
            alt={featuredImage?.name}
          />
        </div>

        <Reveal>
          <p className="text-[14px] text-tertiary">{title}</p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="text-[16px] break-words leading-5">
            {content.slice(0, 100)}
          </p>
        </Reveal>
      </div>
    </Link>
  );
};

export default PostsCard;
