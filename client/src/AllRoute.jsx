import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import CourseDetails from './CourseDetails';

const AllRoute = () => {
  const location = useLocation();
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Replace with your real token retrieval logic
    setToken(true);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses-details" element={<Courses />} />
      
      {/* Dynamic route for course details */}
      <Route path="/course/:id" element={<CourseDetails />} />

      <Route
        path="/test"
        element={
          token ? (
            <div>Test Page</div>
          ) : (
            <Navigate
              to="/login"
              state={{
                from: "/test",
                testParams: location.state
              }}
              replace
            />
          )
        }
      />
      
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoute;
