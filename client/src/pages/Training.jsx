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
import AddToCartButton from "../components/AddToCartButton";

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

  return (
    <>
                      <AddToCartButton />

     <div
  className="relative bg-blue-400 md:pt-10 items-center gap-5 md:p-5 p-6 opacity-80 h-[55vh] md:h-[40vh] lg:h-[50vh]"
  style={{
    backgroundImage: `url(${BGimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Banner text */}
  <div className="text-3xl sm:text-4xl md:text-2xl lg:text-5xl font-bold text-white text-center md:text-left hover:animate-pulse p-4 sm:p-6 lg:p-4">
    Unlock Your Tech Potential
    <br className="hidden md:block"/>
    <br />
    <span className="block sm:inline">
      with Our
      <span className="text-cyan-200 ml-2 sm:ml-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Free
      </span>
    </span>
    <br className="hidden md:block"/>
    <br className="hidden md:block"/>
    Comprehensive IT Assessments
  </div>

  {/* Hero Section with YouTube Video */}
  <div
    className="absolute inset-0 flex justify-center md:justify-end items-center p-4 sm:p-6 z-10 rounded-2xl"
    data-aos="zoom-in-up"
    data-aos-offset="200"
    data-aos-duration="2000"
  >
    <iframe
      className="w-full mt-48 sm:h-64 md:h-72 md:mt-8 lg:h-72 md:w-72 lg:w-1/3 rounded-lg"
      src="https://www.youtube.com/embed/cZjkxmzo1Xg?autoplay=1&loop=1&playlist=cZjkxmzo1Xg&controls=1&mute=1"
      allow="autoplay; encrypted-media"
      allowFullScreen
      frameBorder="0"
    ></iframe>
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
