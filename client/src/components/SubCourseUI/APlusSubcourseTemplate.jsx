import React from "react";

const APlusSubcourseTemplate = ({ title, description, price, image }) => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-red-600">{title}</h1>
          <p className="text-lg text-gray-600 mt-4">{description}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-8">
          <img
            src={image || "https://placehold.co/300x200"}
            alt={title}
            className="w-72 h-72 object-contain rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Plus A+ Certification</h3>
            <p className="text-gray-700 mb-6">
              This course prepares you for the latest A+ Core exam version, helping you
              build skills as a Help Desk Support Specialist and launch your IT career.
            </p>
            <div className="text-xl font-semibold mb-4">
              Price: <span className="text-green-600">₹{price}</span>
            </div>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APlusSubcourseTemplate;
