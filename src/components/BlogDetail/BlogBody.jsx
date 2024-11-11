import React from "react";
import ReactMarkdown from "react-markdown";

const BlogBody = ({ content }) => {
  return (
    <div className="section-padding ">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogBody;
