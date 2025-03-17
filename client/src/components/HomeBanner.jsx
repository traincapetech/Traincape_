import React from "react";
import Lottie from "lottie-react"; // Assuming you're using lottie-react for animation

const HomeBanner = ({ text, animationData }) => {
  return (
    <div className="w-full h-[30rem] flex items-center justify-between px-6 relative">
      {/* Left side - Text */}
      <div className="text-white">
        <h1 className="md:text-7xl  text-4xl font-semibold font-serif mb-4 text-center">
          {text.title}
        </h1>
        <br />
        <p className="md:text-3xl text-center uppercase  text-xl mb-6 font-semibold">
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
        </p>
      </div>

      {/* Right side - Lottie Animation */}
      <div className=" justify-center items-center md:w-1/3 mt-0 z-10 hidden md:block">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full max-w-xl h-auto"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
