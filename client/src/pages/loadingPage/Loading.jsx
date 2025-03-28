import React from 'react'
import Lottie from "lottie-react";
import loader from "../../assets/loader.json"

const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-[50vh]'>
      <div className="relative">
        <Lottie 
          animationData={loader} 
          loop={true} 
          className='md:w-96 w-64 mx-auto' 
          style={{ maxHeight: '300px' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-20 rounded-full"></div>
      </div>
    </div>
  )
}

export default Loading