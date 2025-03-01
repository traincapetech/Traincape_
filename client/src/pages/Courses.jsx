import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from "../pages/AutoPlay";
import Slider from "react-slick";
import CourseDetails from "../components/CoursesDetails";
import banner from "../assets/banner.jpeg";
import review1 from "../assets/Love (1).jpg";
import gif from "../assets/Feedback Gif.gif";

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

      {/* Responsive Course Details Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        <CourseDetails />
      </div>

      <div className="flex flex-col md:flex-row bg-gray-50 my-36 p-4 md:pl-20">
  <img src={banner} className="rounded bg-gray-50 w-full md:w-auto md:h-[20rem] object-cover" alt="Banner" />
  <div className="flex flex-col text-center text-2xl mx-8 md:mx-32 mt-4 md:mt-0">
    <h2 className="mt-7 text-3xl md:text-4xl font-bold text-cyan-500">
      Learner outcomes on Traincape Technology
    </h2>
    <h3 className="text-base md:text-lg mt-4">
      87% of people certifying for professional development report career benefits, including outcomes like getting a promotion, becoming better at their current job, and finding a new job.
    </h3>
  </div>
</div>


      {/* Testimonials Section */}
      <div className="bg-gray-200 h-auto py-10">
        <p className="flex text-3xl font-bold pt-10 font-serif justify-center">
          ------ Testimonial ------
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 mt-10">
  {/* Testimonial Cards */}
  {[ 
    {
      name: "Sumit Jain",
      review: "This is a great company. Everyone is very experienced and knowledgeable. I would recommend everyone to partner and work with them. Highly recommend checking them out!",
      image: review1
    },
    {
      name: "Lenssa Fite",
      review: "I'm so happy to find this training center. They provide outstanding training, support, coaching, and tutoring for all IT related courses. Always available for any questions regarding exam prep and certification.",
      image: review1
    },
    {
      name: "John Doe",
      review: "The team was awesome to work with, provided great expertise and communication to help me successfully complete my goal. I highly recommend them and will do more business in the future.",
      image: review1
    },
    {
      name: "Jane Smith",
      review: "This company is fantastic! The training is top-notch and helped me land a new job. I couldn't have asked for a better experience. Will definitely return for more courses!",
      image: review1
    }
  ].map((testimonial, index) => (
    <div
      key={index}
      className="bg-white rounded-md h-auto w-full max-w-xs m-2 mt-10 relative"
    >
      {/* Image container with responsiveness */}
      <div className="bg-red-400 rounded-full w-[6rem] sm:w-[7rem] mx-auto mt-10 h-[6rem] sm:h-[7rem] absolute top-0 left-0 right-0">
        <img
          src={testimonial.image}
          className="w-full h-full object-cover rounded-full"
          alt={`review${index + 1}`}
        />
      </div>
      <h2 className="text-center text-xl sm:text-xl font-bold pt-28 ">{testimonial.name}</h2>
      {/* Centered stars */}
      <div className="flex justify-center pt-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={30} style={{ color: "gold" }} />
        ))}
      </div>
      <p className="p-4 mt-4 text-justify text-sm sm:text-base ">
        {testimonial.review}
      </p>
    </div>
  ))}
</div>


      </div>

      <div className="relative bg-gray-50 h-[35rem] flex items-center justify-center p-8 overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold font-mono text-gray-800 mb-4">
            Take the next step toward your personal and professional <br className="hidden md:block" />
            goals with EtrainIndia.
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600 mb-8">
            Join now to receive personalized recommendations from the full EtrainIndia catalog.
        </h2>
        
    </div>
    <img 
        src={gif} 
        className="absolute bottom-0 right-0 h-[15rem] md:h-[20rem] opacity-75" 
        alt="EtrainIndia"
    />
</div>

    </div>
  );
};

export default Courses;
