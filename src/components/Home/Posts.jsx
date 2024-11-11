import { ChevronRight } from "lucide-react";
import Link from "next/link";
import PostsCard from "./PostsCard";

import Image from "next/image";
import { fetchBlogs } from "@/app/utils/fetch";

const Posts = async () => {
  const blogs = await fetchBlogs();
  const blogsData = blogs?.slice(0, 3);

  return (
    <>
      {blogsData && (
        <div className="section-padding relative ">
          <div className="  opacity-50 dark:opacity-100 absolute   right-[0] w-[1200px] h-[1300px] -top-[80%] z-[-1] ">
            <Image
              src="/assets/gradients/gradient-gv-1.png"
              className="w-full h-full"
              alt="gradient"
              height={2100}
              width={1800}
            />
          </div>

          <div className="flex h-full w-full overflow-visible mb-10 py-2 justify-between">
            <h2 className="text-tertiary font-semibold">
              Recent News and Insights
            </h2>{" "}
            <Link href="/blog">
              {" "}
              <button>
                <h5 className=" z-10 flex group text-secondary">
                  More{" "}
                  <ChevronRight
                    className="transition-all duration-300 group-hover:translate-x-3"
                    size={30}
                  />{" "}
                </h5>
              </button>
            </Link>
          </div>
          <div className="grid  h-full w-full gap-24 md:gap-10 grid-cols-1 md:grid-cols-3">
            {blogsData.map((blog) => {
              return (
                <PostsCard
                  title={blog.attributes.title}
                  key={blog.id}
                  content={blog.attributes.content}
                  featuredImage={blog.attributes.featuredImage.data.attributes}
                  id={blog.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Posts;
