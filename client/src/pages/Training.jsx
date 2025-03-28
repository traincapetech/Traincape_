import React from "react";
// import Animation from '../assets/Animation.gif'
// import Animate from '../assets/animate.json';
import Lottie from "lottie-react";
import CourseCard from "../components/CourseCard";
import comptia from "../assets/CompTIA-Network.png";
import mircro from "../assets/micro.jpeg";
import PECB from "../assets/PECB1.png";
import AWS from "../assets/AWS.png";
// import Herobg from '../assets/herobg.jpg';
import Cisco from "../assets/Cisco/CiscoIcon.png";
import BGimg from "../assets/traningBg-4.jpg";
import { useNavigate } from "react-router-dom";

const Training = () => {
  const courseData = [
    {
      image: AWS,
      title: "AWS",
      description:
        "AWS is a top cloud platform providing scalable IT solutions.",
      price: "$450",
      url: "/aws",
    },
    {
      image: Cisco,
      title: "CISCO",
      description: "Master the art of cloud-based technology and services.",
      price: "$400",
      url: "/Cisco",
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
      url: "/microsoft",
    },
    {
      image: PECB,
      title: "PECB",
      description:
        "Excel in compliance, management systems, and IT security with PECB-certified training.",
      price: "$400",
      url: "/PECB",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-blue-400 md:pt-10 items-center gap-5 md:p-5 p-6 opacity-80 relative md:h-[40vh] lg:h-[50vh] h-[55vh]"
        style={{
          backgroundImage: `url(${BGimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* First Line (Left Aligned on Desktop, Centered on Mobile) */}
        <div className="font-bold text-4xl md:text-4xl md:pt-14  text-white text-center md:text-left hover:animate-pulse p-6 lg:text-6xl lg:p-4">
          Unlock Your Tech Potential
        </div>

        {/* Second Line (Centered, Larger Text for "Free") */}
        <div className="font-bold text-4xl md:text-4xl md:pb-12 text-white text-center hover:animate-pulse p-6 lg:text-6xl lg:p-4 lg:pr-40">
          with Our{" "}
          <span className="text-5xl md:text-6xl text-cyan-200 lg:text-7xl">
            Free
          </span>
        </div>

        {/* Third Line (Right Aligned on Desktop, Centered on Mobile) */}
        <div className="font-bold text-4xl md:text-4xl text-white text-center md:text-right p-6 md:p-2 ml-30 mb-56 pb-20 hover:animate-pulse lg:text-6xl ">
          Comprehensive IT Assessments
        </div>
      </div>

      <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-gray-600 font-bold py-2 px-4 rounded"
        >
          <span className="hover:text-gray-800">Home</span>
        </button>
        <div className="flex items-center text-gray-500 font-bold">
          <span>{" > "}</span>
          <span className="ml-4">Training</span>
        </div>
      </div>

      <div className="bg-teal-50 py-10 px-6">
        <h4 className="text-blue-600 text-center text-lg">Choose Now</h4>
        <h1 className="text-2xl font-bold text-center mb-8">
          Our Popular Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto ">
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
  );
};

export default Training;
