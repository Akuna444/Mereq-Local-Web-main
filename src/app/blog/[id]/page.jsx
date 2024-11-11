import { fetchBlog } from "@/app/utils/fetch";
import BlogBody from "@/components/BlogDetail/BlogBody";
import Hero from "@/components/BlogDetail/Hero";
import Tags from "@/components/BlogDetail/Tags";
import { useParams } from "next/navigation";

const BlogDetail = async ({ params }) => {
  const id = params.id;
  const blogDetail = await fetchBlog(id);
  const blogDetailData = blogDetail.attributes;
  console.log("bl", blogDetailData.featuredImage.data.attributes);

  return (
    <>
      {blogDetailData && (
        <>
          <Hero
            title={blogDetailData.title}
            date={blogDetailData.createdAt}
            author={blogDetailData.author}
            content={blogDetailData.content}
            featuredImage={blogDetailData.featuredImage.data.attributes}
          />
          <BlogBody content={blogDetailData.content} />
          <Tags tags={blogDetailData.tags} />
        </>
      )}
    </>
  );
};

export default BlogDetail;
