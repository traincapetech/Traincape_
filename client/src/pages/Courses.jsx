import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from "../pages/AutoPlay";
import Logo1 from "../assets/ciscologo-courses.webp";
import Slider from "react-slick";
import Logo2 from "../assets/tallylogo-courses.jpg";
import Logo3 from "../assets/pmilogo-courses.png";
import Logo4 from "../assets/ibmlogo-courses.png";
import Logo5 from "../assets/quickbookslogo-courses.png";
import Logo6 from "../assets/metalogocourses.png";
import Logo7 from "../assets/dlilogo-courses.jpg";
import Logo8 from "../assets/unitylogo-courses.png";
import Logo9 from "../assets/csblogo-courses.png";
import Logo10 from "../assets/adwslogo-courses.jpg";
import Logo11 from "../assets/esblogo-courses.jpg";
import Logo12 from "../assets/adobenewlogo2.png";
import Logo13 from "../assets/autodesklogo.png";
import Logo14 from "../assets/microsoftlogo-courses.png";
import CourseDetails from "../components/CoursesDetails";

const Courses = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAlert = () => {
    alert(
      "Thank you for visiting! We're sorry, but at this time we are unable to add the selected course. However, please be assured that we will add it as soon as possible. We appreciate your understanding and look forward to serving you in the future."
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50">
      <div className="relative mb-12">
        <div className="w-full h-80 overflow-hidden">
          <AutoPlay />
        </div>
      </div>

      <div className="bg-gray-200 p-5">
        <p className="text-center font-bold uppercase text-4xl p-4">
          Get Certified by World's Leading IT Companies
        </p>
        <Slider {...settings} className="w-full">
          {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13, Logo14].map((logo, index) => (
            <div key={index} className="flex justify-center p-3">
              <img src={logo} alt={`Logo ${index + 1}`} className="max-h-20 object-contain" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center py-5">
        <h1 className="text-2xl font-bold">Explore Our Courses</h1>
      </div>

      {/* Responsive Course Details Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        <CourseDetails />
      </div>

      {/* Uncomment and adjust the following section if needed */}
      {/* <div className="flex flex-wrap justify-between gap-8 px-4">
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
          <div className="w-full h-60 overflow-hidden">
            <img src={comptia} alt="CompTIA Certification" className="w-full h-full object-cover" />
          </div>
          <div className="text-center p-4">
            <h1 className="text-xl font-semibold">CompTIA</h1>
            <button
              className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => navigate("/CompTIA-single-page")}
            >
              Know More
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
          <div className="w-full h-60 overflow-hidden">
            <img src={pecb} alt="PECB Certification" className="w-full h-full object-cover" />
          </div>
          <div className="text-center p-4">
            <h1 className="text-xl font-semibold">PECB</h1>
            <button
              className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => navigate("/PECB")}
            >
              Know More
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Courses;