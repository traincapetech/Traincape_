import React, { useState } from "react";
import CreateAssignment from "../components/CreateAssignment";
import ViewAssignments from "../components/ViewAssignments";
import Sidebar from "../components/Sidebar";

const AdminPanel = () => {
  const [selectedOption, setSelectedOption] = useState("roleSelection");
  const [role, setRole] = useState("");
  const [securityKey, setSecurityKey] = useState("");
  const [error, setError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const adminKey = "admin123"; // Security key for Admin
  const instructorKey = "instructor456"; // Security key for Instructor
  const courses = ["comptia", "AWS", "PECB", "microsoft"]; // Available courses for selection

  // Handle Role Selection (Admin or Instructor)
  const handleRoleSelection = (role) => {
    setRole(role);
    if (role === "Instructor") {
      setSelectedOption("courseSelection"); // For Instructor, show course selection first
    } else {
      setSelectedOption("keyEntry"); // For Admin, show key entry immediately
    }
  };

  // Handle Security Key Submission
  const handleKeySubmission = () => {
    if (
      (role === "Admin" && securityKey === adminKey) ||
      (role === "Instructor" && securityKey === instructorKey)
    ) {
      if (role === "Instructor" && selectedCourse) {
        setSelectedOption("createAssignment"); // Proceed to create assignments after course selection for Instructor
      } else if (role === "Admin") {
        setSelectedOption("createAssignment"); // Admin can directly create assignments
      }
    } else {
      setError("Invalid security key. Please try again.");
    }
  };

  // Handle Course Selection (Only for Instructor)
  const handleCourseSelection = (event) => {
    const selected = event.target.value;
    setSelectedCourse(selected);
  };

  // Render Content Based on Role and Selected Option
  const renderContent = () => {
    if (role === "Instructor" && !selectedCourse) {
      return <p>Please select a course to proceed.</p>;
    }

    switch (selectedOption) {
      case "createAssignment":
        return <CreateAssignment role={role} selectedCourse={selectedCourse} />; // Pass role and course to CreateAssignment
      case "viewAssignments":
        return <ViewAssignments role={role} selectedCourse={selectedCourse} />; // Pass selected course to ViewAssignments
      default:
        return <div>Select an option</div>;
    }
  };

  // Initial Role Selection View
  if (selectedOption === "roleSelection") {
    return (
      <div className="flex items-center justify-center min-h-screen px-3 bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Join as</h1>
          <div className="space-y-4">
            <button
              onClick={() => handleRoleSelection("Admin")}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Join as Admin
            </button>
            <button
              onClick={() => handleRoleSelection("Instructor")}
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Join as Instructor
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Course Selection for Instructor
  if (selectedOption === "courseSelection") {
    return (
      <div className="flex items-center justify-center min-h-screen px-3 bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Select a Course</h1>
          <div className="space-y-4">
            <select
              value={selectedCourse}
              onChange={handleCourseSelection}
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
            >
              <option value="">Select a course...</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <button
              onClick={() => setSelectedOption("keyEntry")} // Move to key entry after course selection
              disabled={!selectedCourse}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Security Key Entry View
  if (selectedOption === "keyEntry") {
    return (
      <div className="flex items-center justify-center min-h-screen px-3 bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Enter Security Key</h1>
          <p className="mb-4">Please enter the security key for {role}.</p>
          <input
            type="password"
            value={securityKey}
            onChange={(e) => setSecurityKey(e.target.value)}
            placeholder="Security Key"
            className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-md"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleKeySubmission}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar selectedOption={selectedOption} role={role} onSelectOption={setSelectedOption} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;