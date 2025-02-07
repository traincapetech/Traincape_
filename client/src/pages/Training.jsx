import React from 'react'
// import Animation from '../assets/Animation.gif'
import Animate from '../assets/animate.json';
import Lottie from 'lottie-react';
import CourseCard from '../components/CourseCard';
import comptia from '../assets/CompTIA-Network.png'
import mircro from "../assets/micro.jpeg";
import PECB from "/Users/a/Downloads/Traincape-Technology-main/client/src/assets/PECB1.png";
import AWS from '../assets/AWS.png';
import Herobg from '../assets/herobg.jpg';
import Cisco from '../assets/Cisco/CiscoIcon.png';

const Training = () => {

  const courseData = [
    {
      image: AWS,
      title: "AWS",
      description: "AWS is a top cloud platform providing scalable IT solutions.",
      price: "$450",
      url: "/aws"
    },
    {
      image: Cisco,
      title: "CISCO",
      description: "Master the art of cloud-based technology and services.",
      price: "$400",
      url: "/Cisco"
    },
    {
      image: comptia,
      title: "COMPTIA",
      description: "A comprehensive course on network fundamentals.",
      price: "$300",
      url: "/training-comptia",
    },
    {
      image: mircro,
      title: "Microsoft",
      description: "Learn to secure and protect systems like a pro.",
      price: "$350",
      url: "/microsoft"
    },
    {
      image: PECB,
      title: "PECB",
      description: "Excel in compliance, management systems, and IT security with PECB-certified training.",
      price: "$400",
      url: "/PECB"
    },
    
  ];

  return (
    <>
      <div className="md:pt-28 bg-black  items-center gap-5 md:p-8 p-6 opacity-80 relative md:h-screen lg:h-[90vh] h-[85vh]        "
        style={{ backgroundImage: `url(${ Herobg })`, backgroundSize: 'cover', backgroundPosition: 'center', }}
      ></div>
      <div className='absolute md:top-[30%] top-[20%] grid grid-cols-1 lg:flex items-center md:px-8 gap-2'>
        {/* <div className="absolute inset-0 bg-black opacity-70 sm:block hidden"></div> */}
        <h1 className='text-white md:text-6xl md:w-[60%] w-full text-3xl px-6 font-bold '>Explore Premium Online Learning & Skill Development Programs</h1>
        {/* <img src={Animation} alt="" className="w-[250px] h-[230px]"/> */}
        <Lottie animationData={Animate} className='md:w-[500px] w-full md:h-[470px]' />

      </div>
      {/* <div className='flex items-center gap-5 p-6 bg-slate-600'>
        <h1 className='text-white text-[45px] w-[55%] font-bold'>Explore Premium Online Learning & Skill Development Programs</h1>
       
        <Lottie animationData={Animate} className='w-[560px] h-[470px]' />
      </div> */}

      <div className="courses text-center pt-10 px-6">

        <h3 className='text-4xl text-gray-900 font-bold'>Features</h3>
        <h1 className='text-3xl text-[#224591] font-bold'>Master new skills with flexible courses</h1>
        <div className="courses-card flex flex-wrap gap-5 justify-center p-5 mt-6">
          {/* Card 1 */}
          <div className="card relative flex flex-col md:flex-row items-center w-full md:w-[450px] gap-3 border border-blue-50 p-5 bg-[#212146] text-white rounded-lg shadow-lg">
            {/* Step Number */}
            
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white font-bold flex items-center justify-center rounded-full shadow-md text-3xl">
              1
            </div>
            <div className="card-img">
              <img
                className="w-20 h-20"
                src="https://ischool.themerex.net/wp-content/uploads/2024/07/new-presentation-copyright.svg"
                alt="Assessment Icon"
              />
            </div>
            <div className="card-text text-center md:text-left ml-5" >
              <h2 className="text-xl font-bold mb-2">Assessment</h2>
              <p className="text-sm mb-3">
                Take the assessment to demonstrate your expertise.
              </p>
              {/* <button className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg">
                Learn More
              </button> */}
            </div>
          </div>

          {/* Card 2 */}
          <div className="card relative flex flex-col md:flex-row items-center w-full md:w-[450px] gap-3 border border-blue-50 p-5 bg-[#212146] text-white rounded-lg shadow-lg">
            {/* Step Number */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white font-bold flex items-center justify-center rounded-full shadow-md text-3xl">
              2
            </div>
            <div className="card-img">
              <img
                className="w-20 h-20"
                src="https://ischool.themerex.net/wp-content/uploads/2024/07/new-target-copyright.svg"
                alt="Instant Result Icon"
              />
            </div>
            <div className="card-text text-center md:text-left ml-5">
              <h2 className="text-xl font-bold mb-2">Instant Result</h2>
              <p className="text-sm mb-3">
                Gain immediate insights into your strengths and areas for improvement.
              </p>
              {/* <button className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg">
                Learn More
              </button> */}
            </div>
          </div>

          {/* Card 3 */}
          <div className="card relative flex flex-col md:flex-row items-center w-full md:w-[450px] gap-3 border border-blue-50 p-5 bg-[#212146] text-white rounded-lg shadow-lg">
            {/* Step Number */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white font-bold flex items-center justify-center rounded-full shadow-md text-3xl">
              3
            </div>
            <div className="card-img">
              <img
                className="w-20 h-20"
                src="https://ischool.themerex.net/wp-content/uploads/2024/07/new-focus-group-copyright.svg"
                alt="Certification Icon"
              />
            </div>
            <div className="card-text text-center md:text-left ml-5">
              <h2 className="text-xl font-bold mb-2">Certification</h2>
              <p className="text-sm mb-3">
                Download your certification of achievement right away!
              </p>
              {/* <button className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg">
                Learn More
              </button> */}
            </div>
          </div>
        </div>


      </div>

      
    <div className="bg-teal-100 py-10 px-6">
      <h4 className="text-blue-600 text-center text-lg">Choose Now</h4>
      <h1 className="text-2xl font-bold text-center mb-8">Our Popular Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto">
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            price={course.price}
            title={course.title}
            description={course.description}
            url={course.url}
          />
        ))}
      </div>
      {/* <div className="flex justify-center mt-8">
        <button className="text-white bg-blue-700 hover:bg-blue-800 text-lg md:text-xl py-2 px-6 rounded-lg">
          View More
        </button>
      </div> */}
    </div>

    </>
  )
}

export default Training