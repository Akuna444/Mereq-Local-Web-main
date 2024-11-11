"use client";

import React from "react";
import Reveal from "../UI/Animations/Reveal";

const AboutHero = () => {
  return (
    <div className="w-full ">
      <div className="w-full section-padding">
        <div className="md:w-[50%] w-full ">
          <Reveal>
            <h1 className="py-8 dark:text-secondary ">Mereq</h1>
          </Reveal>
          <Reveal>
            <p>
              Like the perfect recipe, Mereq is a flavorful fusion of
              advertising expertise, technological flair, and creative taste.
              It&apos;s the secret ingredient that enriches the digital
              landscape, serving up a unique mix of brand growth, audience
              engagement, and technological advancement.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
