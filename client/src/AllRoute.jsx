import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Home";
import Courses from "../Courses";
import CourseDetails from "../CourseDetails";
import SubCourseDetails from "../SubCourseDetails"; // ✅ NEW
import Checkout from "../Checkout";
import Login from "../Login";
import NotFound from "../NotFound";

const DebugWrapper = ({ name, children }) => {
  console.log(`🔎 Rendering route: ${name}`);
  return children;
};

const AllRoute = () => {
  const token = localStorage.getItem("authToken");

  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<DebugWrapper name="Home"><Home /></DebugWrapper>} />

      {/* COURSES LIST PAGE */}
      <Route
        path="/courses"
        element={<DebugWrapper name="Courses"><Courses /></DebugWrapper>}
      />

      {/* COURSE DETAILS (SUBCOURSES LIST) */}
      <Route
        path="/courses/:courseName"
        element={<DebugWrapper name="CourseDetails"><CourseDetails /></DebugWrapper>}
      />

      {/* SUBCOURSE DETAILS PAGE ✅ */}
      <Route
        path="/courses/:courseName/:subCourseName"
        element={<DebugWrapper name="SubCourseDetails"><SubCourseDetails /></DebugWrapper>}
      />

      {/* CHECKOUT */}
      <Route
        path="/checkout/:subCourseName"
        element={
          token ? (
            <DebugWrapper name="Checkout"><Checkout /></DebugWrapper>
          ) : (
            <Navigate to="/login" state={{ from: window.location.pathname }} replace />
          )
        }
      />

      {/* LOGIN */}
      <Route path="/login" element={<DebugWrapper name="Login"><Login /></DebugWrapper>} />

      {/* 404 */}
      <Route path="*" element={<DebugWrapper name="NotFound"><NotFound /></DebugWrapper>} />
    </Routes>
  );
};

export default AllRoute;
