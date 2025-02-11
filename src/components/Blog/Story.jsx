import React from "react";
import StoryCard from "./StoryCard";
import Banner from "./Banner";
import { fetchBlogs } from "@/app/utils/fetch";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const Story = async () => {
  const blogsData = await fetchBlogs();
  const topBlog = blogsData[0];

  return (
    <>
      {blogsData ? (
        <>
          <div className="section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 relative h-[60vh] md:h-[80vh] rounded-[20px] overflow-hidden bg-secondary">
              <Image
                src={`http://209.250.233.239:1337${topBlog.attributes.featuredImage.data.attributes.url}`}
                alt="top story thumbnail"
                className="w-full md:h-[80vh] h-[200px]  object-cover"
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
                  <h2 className="center-text"> {topBlog.attributes.title}</h2>
                  <p className="md:text-[20px] center-text max-sm:leading-3 text-[10px]">
                    {topBlog.attributes.content.slice(0, 20)}
                  </p>
                </div>
              </div>
              <div className="w-full flex mb-10  md:hidden justify-center">
                <Link href={`/blog/${topBlog.id}`}>
                  <ChevronDown size={50} />
                </Link>
              </div>
              <Link href={`/blog/${topBlog.id}`}>
                <ChevronRight
                  size={120}
                  className="absolute hidden md:block  right-0 bottom-0"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <h2 className="w-full mb-5 section-padding font-semibold  flex justify-start text-secondary">
              Stories
            </h2>
            <div className="  flex flex-col w-full gap-16">
              {blogsData.map((blog) => {
                return (
                  <StoryCard
                    title={blog.attributes.title}
                    key={blog.id}
                    author={blog.attributes.author}
                    date={blog.attributes.date}
                    content={blog.attributes.content}
                    featuredImage={
                      blog.attributes?.featuredImage.data?.attributes
                    }
                    id={blog.id}
                  />
                );
              })}
              <Banner />
            </div>
          </div>
        </>
      ) : (
        <h1>No posts available</h1>
      )}
    </>
  );
};

export default Story;
