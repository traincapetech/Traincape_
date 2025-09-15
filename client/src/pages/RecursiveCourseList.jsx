import React from "react";
import { useNavigate } from "react-router-dom";

const RecursiveCourseList = ({ levels, basePath }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {levels.map((item) => (
        <div
          key={item.name}
          className="bg-white rounded-xl shadow p-5 flex flex-col hover:shadow-md transition"
        >
          <h3 className="text-lg font-bold mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
          <p className="text-lg font-semibold mt-3 text-green-700">
            ${item.price}
          </p>

          {item.children && item.children.length > 0 ? (
            <button
              onClick={() =>
                navigate(`${basePath}/${encodeURIComponent(item.name)}`)
              }
              className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              View More
            </button>
          ) : (
            <button
              onClick={() =>
                navigate(`/checkout/${encodeURIComponent(item.name)}`)
              }
              className="mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Enroll Now
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecursiveCourseList;
