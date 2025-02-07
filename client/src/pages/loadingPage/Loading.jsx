// import { useState, useEffect } from "react";
// import FadeLoader from "react-spinners/FadeLoader";

// function Loading() {
//   const [timeLeft, setTimeLeft] = useState(5); // Set initial countdown time (in seconds)
//   const [loadingComplete, setLoadingComplete] = useState(false);

//   // Start the countdown on component mount
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1); // Decrease timeLeft every second
//       }, 1000);

//       // Clean up the interval when the component unmounts or when the countdown reaches 0
//       return () => clearInterval(timer);
//     } else {
//       // Time is up, set loadingComplete to true
//       setLoadingComplete(true);
//       clearInterval(); // Stop the countdown
//     }
//   }, [timeLeft]);

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen  p-4">
//       <div className="flex flex-col items-center">
//         <FadeLoader
//           color="#21c1a6"
//           loading={!loadingComplete} // Show loader only if loading is true
//           size="150px"
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//         {!loadingComplete && (
//           <p className="text-xl text-black mt-4 font-medium">
//              {timeLeft}s left
//           </p>
//         )}
//         {loadingComplete && (
//           <p className="text-xl text-green-600 mt-4 font-semibold">
//             Page Loaded!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Loading;

import React from 'react'
import Lottie from "lottie-react";
import loader from "../../assets/loader.json"

const Loading = () => {
  return (
    <div className=''>
      <Lottie  animationData={loader} loop={true} className='md:w-1/2 w-full mx-auto'/>
    </div>
  )
}

export default Loading