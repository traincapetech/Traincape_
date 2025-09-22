import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    window.location.href = "/login";
    navigate("/login");
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navigateToAdmin = () => {
    navigate("/admin-panel");
    setIsDropdownOpen(false);
  };

  // ✅ Navigate to My Courses
  const navigateToMyCourses = () => {
    navigate("/my-courses");
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-end items-center">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg z-50 w-48">
            <div className="p-4 text-left">
              <p className="text-gray-600 font-bold text-lg">{user?.username}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <div className="border-t border-gray-200">
              {/* ✅ My Courses Button */}
              <button
                className="w-full px-4 py-2 text-left text-sm text-green-600 hover:bg-gray-100 focus:outline-none"
                onClick={navigateToMyCourses}
              >
                My Courses
              </button>

              {user?.role === "admin" && (
                <button
                  className="w-full px-4 py-2 text-left text-sm text-blue-600 hover:bg-gray-100 focus:outline-none"
                  onClick={navigateToAdmin}
                >
                  Admin Panel
                </button>
              )}

              <button
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 focus:outline-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
