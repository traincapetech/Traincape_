import React from 'react'
import Lottie from 'lottie-react' // Assuming you're using lottie-react for animation
// import Herobg from '../assets/herobg.jpg'

const HomeBanner = ({ text, animationData }) => {
  return (
    <div 
      className="w-full h-screen relative flex flex-col sm:flex-row justify-center items-center py-8 md:pl-10"
      // style={{ backgroundImage: `url(${Herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-black opacity-60 sm:block hidden"></div> 

      {/* Left side - Text */}
      <div className="relative text-white text-center sm:text-left sm:w-1/2 px-10 sm:px-8 z-10">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">{text.title}</h1>
        <p className="text-lg sm:text-xl mb-6">{text.description}</p>
        {/* You can add additional elements here, like buttons, links, etc. */}
      </div>

      {/* Right side - Lottie Animation */}
      <div className="relative sm:w-1/2 flex justify-center items-center mt-0 md:mt-8 sm:mt-0 z-10">
        <Lottie animationData={animationData} loop={true} className="w-full max-w-xl h-auto" />
      </div>
    </div>
  )
}

export default HomeBanner