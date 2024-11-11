"use server";

export const fetchBlogs = async () => {
  try {
    const res = await fetch(
      `http://209.250.233.239/api/blogs?populate=*&sort=createdAt:desc`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const blogs = await res.json();
    return blogs.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBlog = async (id) => {
  try {
    const res = await fetch(
      `http://209.250.233.239/api/blogs/${id}?populate=*`,
      {
        cache: "no-store",
      }
    );
    const blogDetail = await res.json();
    return blogDetail.data;
  } catch (error) {
    console.log(error);
  }
};
