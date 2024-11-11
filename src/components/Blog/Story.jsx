import React from "react";
import StoryCard from "./StoryCard";
import Banner from "./Banner";

const Story = () => {
  return (
    <div className="section-padding">
      <h2 className="w-full font-semibold section-padding  flex justify-start text-secondary">
        Stories
      </h2>
      <StoryCard />
      <StoryCard />
      <Banner />
      <StoryCard />
    </div>
  );
};

export default Story;
