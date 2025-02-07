import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import courses from "../css/Courses.module.css";
import comptia from "../assets/Comptia.webp";
import pecb from "../assets/pecb.png";

const Courses = () => {
  const navigate = useNavigate();
  // const btnText = "COMING SOON";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleAlert = () => {
    alert(
      "Thank you for visiting! We're sorry, but at this time we are unable to add the selected course. However, please be assured that we will add it as soon as possible. We appreciate your understanding and look forward to serving you in the future."
    );
  };

  return (
    <div className={courses.cloudContainer}>
      <div className={courses.cloudBanner}>
        <h1>Courses</h1>
        <div className={courses.underline}></div>
      </div>
      <div className={courses.bannerDown}>
        <h1>Explore Our Courses</h1>
      </div>
      <div className={courses.courses}>
       
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={comptia} alt="CompTia-Certification" />
          </div>
          <div className={courses.CourseText}>
            <h1>CompTIA</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/CompTIA-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={pecb} alt="PECB--Certification" />
          </div>
          <div className={courses.CourseText}>
            <h1>PECB</h1>
            <button className={courses.courseBtn} onClick={() => navigate("/PECB")}>
              Know More
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Courses;
