import React from "react";

const Sidebar = ({ role, selectedOption, onSelectOption }) => {
  return (
    <div className="lg:w-64 w-full bg-gray-800 text-white px-6 pb-4 space-y-6 lg:space-y-0 lg:flex lg:flex-col">
      <h1 className="text-2xl font-bold md:pb-6">
        {role === "Admin" ? "Admin Panel" : "Instructor Panel"}
      </h1>
      <ul className="space-y-2 lg:flex lg:flex-col">
        <li
          className={`py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 ${
            selectedOption === "createAssignment" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelectOption("createAssignment")}
        >
          Create Assignment
        </li>
        <li
          className={`py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 ${
            selectedOption === "viewAssignments" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelectOption("viewAssignments")}
        >
          View Assignments
        </li>
        {/* <li
          className={`py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 ${
            selectedOption === "settings" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelectOption("settings")}
        >
          Settings
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;