"use client";

import React from "react";
import Image from "next/image";
import CustomBtn from "./CustomBtn";

const Hero = () => {
  function scrollToBottom() {}
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car -- Quickly and easly!
        </h1>
        <p className="hero__subtitle">
          Streamline you car rental experience with our offortless booking
          process.
        </p>
        <CustomBtn
          title="Explore Cars"
          styledClasses="bg-primary-blue text-white rounded-full mt-10"
          handleClick={scrollToBottom}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
