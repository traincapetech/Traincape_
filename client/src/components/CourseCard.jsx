import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CourseCard = ({ image, title, description, price, url }) => {
  const navigate = useNavigate();
  
  const handleCourseClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    
    if (token) {
      // User is logged in, proceed to course page
      navigate(url);
    } else {
      // User is not logged in, redirect to login with return path
      navigate('/login', { 
        state: { 
          from: url,
          message: `Please log in to access ${title} training` 
        } 
      });
    }
  };
  
  return (
    <div 
      onClick={handleCourseClick}
      className="w-full max-w-sm h-[20rem] justify-between course-card flex flex-col items-center bg-white shadow-lg hover:shadow-2xl p-4 rounded-2xl text-center border border-[#212146] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <img className="h-[10rem] object-cover rounded-md mb-4" src={image} alt={title} />
      {/* <div className="absolute top-[45%] right-8 w-16 h-16 bg-blue-600 text-white font-bold flex items-center justify-center rounded-full shadow-md text-2xl p-[20px]">
        {price}
      </div> */}
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default CourseCard;