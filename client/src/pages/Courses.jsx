import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from "../pages/AutoPlay";
import Slider from "react-slick";
import CourseDetails from "../components/CoursesDetails";

// Import Logos
import Logo1 from "../assets/ciscologo-courses.webp";
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

const Courses = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <div className="relative h-[22rem] mb-12">
        <div className="w-full h-[24rem] overflow-hidden">


          <AutoPlay />
        </div>
      </div>

      <div className="bg-gray-200 p-5 m-5">
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
    </div>
  );
};

export default Courses;