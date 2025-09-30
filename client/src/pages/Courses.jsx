import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from "../pages/AutoPlay";
import Slider from "react-slick";
import CourseDetails from "../components/CoursesDetails";
import banner from "../assets/banner.jpeg";
import review1 from "../assets/review5.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review4.jpeg";
import review4 from "../assets/review6.png";
import gif from "../assets/student-mgmt.gif";
import mircro from "../assets/Microsoft-Emblem.jpg";
import { Helmet } from "react-helmet";

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
import { FaStar } from "react-icons/fa";
import AddToCartButton from "../components/AddToCartButton";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  // Dummy handler for AddToCart
  const handleAddToCart = (course) => {
    console.log("Added to cart:", course);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched courses:", data);
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <AddToCartButton />

      <div className="bg-gray-50">
        {/* Banner Section */}
        <div className="relative md:h-[11rem] lg:h-[20rem] mb-12">
          <div className="w-full md:h-[11rem] lg:h-[25rem] overflow-hidden">
            <AutoPlay />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 font-bold py-2 px-4 rounded"
          >
            <span className="hover:text-gray-800">Home</span>
          </button>
          <div className="flex items-center text-gray-500 font-bold">
            <span>{" > "}</span>
            <span className="ml-4">Course Details</span>
          </div>
        </div>

        {/* Logos Section */}
        <div className="bg-gray-200 p-5 m-5">
          <p className="text-center font-bold uppercase text-4xl p-4">
            Get Certified by World's Leading IT Companies
          </p>
          <Slider {...settings} className="w-full">
            {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13, Logo14].map(
              (logo, index) => (
                <div key={index} className="flex justify-center p-3">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="max-h-20 object-contain"
                  />
                </div>
              )
            )}
          </Slider>
        </div>

        {/* Course Details Section */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <CourseDetails onAddToCart={handleAddToCart} />
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-200 h-auto py-10">
          <p className="flex text-3xl font-bold pt-10 font-serif justify-center">
            ------ Testimonial ------
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 mt-10">
            {[ 
              { name: "Asim Farooq", review: "This is a great company...", image: review1 },
              { name: "Manish Kumar", review: "I'm so happy to find this training center...", image: review2 },
              { name: "Muthiah Lakshmanan", review: "The team was awesome to work with...", image: review3 },
              { name: "Rohit Mullick", review: "If you want to do certifications...", image: review4 },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-md h-auto w-full max-w-xs m-2 mt-10 relative"
              >
                <div className="bg-red-400 rounded-full w-[6rem] sm:w-[7rem] mx-auto mt-10 h-[6rem] sm:h-[7rem] absolute top-0 left-0 right-0">
                  <img
                    src={testimonial.image}
                    className="w-full h-full object-cover rounded-full"
                    alt={`review${index + 1}`}
                  />
                </div>
                <h2 className="text-center text-xl sm:text-xl font-bold pt-[10rem]">
                  {testimonial.name}
                </h2>
                <div className="flex justify-center pt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={30} style={{ color: "gold" }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        {!loading && courses.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => (
              <Link
                key={course._id}
                to={`/Courses-details/${course._id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
              >
                <div className="h-48 flex items-center justify-center bg-gray-50 relative">
                  <img
                    src={
                      course.image
                        ? `http://localhost:8080/proxy/image/${course.image}`
                        : "https://placehold.co/200x200"
                    }
                    alt={course.title}
                    className="h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.error("Image failed to load:", course.image);
                      e.target.src = "https://placehold.co/200x200";
                    }}
                  />
                  {course.category && (
                    <span className="absolute top-3 right-3 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  )}
                </div>

                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                    {course.title}
                  </h2>
                  <button className="mt-5 w-full inline-block px-5 py-3 text-sm font-semibold text-white bg-purple-700 rounded-lg shadow-md hover:bg-purple-800 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && courses.length === 0 && (
          <div className="text-center mt-20">
            <img
              src="https://illustrations.popsy.co/gray/web-search.svg"
              alt="No courses"
              className="w-48 mx-auto mb-6"
            />
            <h2 className="text-xl font-semibold text-gray-700">
              No courses available right now
            </h2>
            <p className="mt-2 text-gray-500">
              Check back later as we’re adding new certifications soon!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Courses;
