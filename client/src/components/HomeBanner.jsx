import React from "react";
import Herovideo from "../assets/homebannervideo4.mp4"; // Add your video file path here
import newgif from "../assets/homegif8.webp";

const HomeBanner = ({ text, animationData }) => {
  return (
    <div className="w-full h-[30rem] relative flex flex-row">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={Herovideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Left side - Text */}
      <div className="relative text-white text-left sm:text-left sm:w-1/2 px-10 sm:px-8 md:px-16">
        <h1 className="md:text-8xl sm:text-5xl text-4xl font-semibold font-serif mb-4">
          {text.title}
        </h1>
        <br />
        <br />
        <p className="md:text-3xl uppercase sm:text-xl text-lg mb-6 font-semibold">
          {text.type1}
          <br />
          <br />
          {text.type2}
          <br />
          <br />
          {text.type3}
          <br />
          <br />
          {text.type4}
          <br />
        </p>
        {/* Additional elements can go here (like buttons, links, etc.) */}
      </div>

      {/* Right side - Lottie Animation */}
      {/* <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 flex justify-center items-center">
        <img
          src={newgif}
          alt="Animation"
          className="w-full h-full object-contain"
        />
      </div> */}
    </div>
  );
};

export default HomeBanner;
