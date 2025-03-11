import React from "react";
// import Lottie from "lottie-react"; // Assuming you're using lottie-react for animation
import Herobg from '../assets/homeupdated8.jpg'
import newgif from "../assets/homegif8.webp"

const HomeBanner = ({ text, animationData }) => {
  return (
    <div
      className="w-full h-[35rem] relative flex flex-col sm:flex-row justify-center items-center py-8 md:pl-10 "
      style={{ backgroundImage: `url(${Herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0  sm:block hidden"></div>

      {/* Left side - Text */}
      <div className="relative text-white text-left sm:text-left sm:w-1/2 px-10 sm:px-8  ">
        <h1 className="md:text-8xl sm:text-5xl font-semibold font-serif mb-4">
          {text.title}
        </h1>
        <br />
        <br />

        <p className="md:text-3xl uppercase sm:text-xl mb-6  font-semibold">
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
        {/* You can add additional elements here, like buttons, links, etc. */}
      </div>

      {/* Right side - Lottie Animation */}
      <div className="relative h-full w-auto  ">
        {/* <Lottie
          animationData={animationData}
          loop={true}
          className="w-full max-w-xl h-auto"
        /> */}
        <img src={newgif} className="rounded-2xl    "/>
      </div>
    </div>
  );
};

export default HomeBanner;
