import React, { useEffect } from "react";
import banner from "../../assets/ibmbanner.jpg";
import banner2 from "../../assets/tallybanner.jpg";
import Card1 from "../../assets/tally2.png";
import Card2 from "../../assets/tally3.png";
import Card3 from "../../assets/tallyprofesstional.png";
import Card4 from "../../assets/tallyessentail.png";
import Card5 from "../../assets/tallyessentail1.png";
import TallyCourses from "../../components/TallyCourses";
import { useNavigate } from "react-router-dom";

const Tally = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const navigate=useNavigate()
  const tallycourses = [
    {
        image: Card5,
        description: "TallyEssential Level – 1",
        price: "₹1149",
        url: "/IBMcourses",
      },
    {
      image: Card1,
      description: "TallyEssential Level – 2",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card2,
      description: "TallyEssential Level – 3 ",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card3,
      description: "TallyProfessional",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card4,
      description: "TallyEssential Comprehensive",
      price: "₹1149",
      url: "/IBMcourses",
    },
  ];

  return (
    <>
      <div
        className="bg-gray-100 w-full relative contrast-75 h-[65vh] content-center text-justify"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-5">
          <div className="lg:w-2/3 w-full ">
            <h1 className="text-3xl  md:text-4xl lg:text-4xl font-bold font-serif ">
              Tally Certifications
            </h1>
            <h5 className="text-sm md:text-lg lg:text-base xl:text-xl mt-4">
              An education initiative of Tally Solutions, the makers of the popular Tally software. 
              <br />
              It is the only entity authorized to issue certifications on Computerized Accounting and on Tally.
              <br />
              <br />
              An education initiative of Tally Solutions, the makers of the popular Tally software. It is the only entity authorized to issue certifications on Computerized Accounting and on Tally.
              Tally is an accounting software that helps businesses manage their finances and inventory. It's used by small and medium-sized businesses in many countries, including India.  
            </h5>
          </div>
          <div className="hidden lg:block xl:block  mt-5 p-5">
            <img    
              className="w-[28rem] h-64 transition-transform duration-300 ease-in-out hover:scale-110"
              src={banner2}
              alt="IBM Banner"
            />
          </div>
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
          <button
            onClick={() => {
              navigate("/Courses-details");
            }}
            className="text-gray-600 font-bold py-2 px-4 rounded"
          >
            <span className="hover:text-gray-800">Course Details</span>
          </button>
          <span>{" > "}</span>
          <span className="ml-4">Tally Certifications</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {tallycourses.map((course, index) => (
            <TallyCourses
              key={index}
              image={course.image}
              price={course.price}
              description={course.description}
              url={course.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tally;
