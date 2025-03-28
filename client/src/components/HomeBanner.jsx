import React from "react";
import Lottie from "lottie-react"; // Assuming you're using lottie-react for animation

const HomeBanner = ({ text, animationData }) => {
  return (
    <div className="w-full min-h-[30rem] flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-12 md:py-0 relative">
      {/* Left side - Text */}
      <div className="text-white md:w-1/2 mb-8 md:mb-0">
        <h1 className="md:text-6xl text-4xl font-bold font-serif mb-4 text-center md:text-left tracking-tight text-shadow-sm">
          {text.title}
        </h1>
        <div className="md:text-2xl text-center md:text-left font-serif text-xl mb-6 space-y-4">
          <p className="mb-3 font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm inline-block">{text.type1}</p>
          <p className="mb-3 font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm inline-block">{text.type2}</p>
          <p className="mb-3 font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm inline-block">{text.type3}</p>
          <p className="mb-3 font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm inline-block">{text.type4}</p>
        </div>
        
        {/* Add CTA button */}
        <div className="text-center md:text-left mt-6">
          <a 
            href={text.ctaLink || "/contact-us"} 
            className="inline-block bg-white text-[#152B54] px-6 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-lg transform hover:scale-105"
          >
            {text.ctaText || "Get Started"}
          </a>
        </div>
      </div>

      {/* Right side - Lottie Animation with fallback */}
      <div className="md:w-1/2 z-10 flex justify-center">
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full max-w-md h-auto"
          />
        ) : (
          <div className="w-full max-w-md h-64 bg-white/10 rounded-lg flex items-center justify-center">
            <p className="text-white/70">Animation Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeBanner;