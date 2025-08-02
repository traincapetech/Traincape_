import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Test from "../Test/Test";

const Practice = ({ course, subTopic }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}, []);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [level, setLevel] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);

  const handleLevelSelect = (level) => {
    setLevel(level);
  };

  const handleStartQuiz = () => {
    setStartQuiz(true);
    
    // Check if user is logged in
    const token = localStorage.getItem("token");
    
    if (token) {
      // User is logged in, navigate to test page
      navigate("/test", { state: { level, course, subTopic } });
    } else {
      // User is not logged in, redirect to login page with return location
      navigate("/login", { 
        state: { 
          from: "/test", 
          testParams: { level, course, subTopic } 
        } 
      });
    }
  };

  const handleVerifyCertificate = () => {
    // Navigate to the /verifyCertificate page
    navigate("/verifyCertificate");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);

  return (
    <div className="p-6 w-full bg-gray-50 flex flex-col justify-center items-center">
      {!startQuiz ? (
        <>
          <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">
            Choose Your Level
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-6">
            <div
              className="p-6 bg-blue-100 border border-blue-300   text-center cursor-pointer hover:bg-blue-200 transition-transform transform hover:scale-105"
              onClick={() => handleLevelSelect("easy")}
            >
              <h3 className="text-xl font-medium text-blue-600">Easy</h3>
            </div>
            <div
              className="p-6 bg-yellow-100 border border-yellow-300   text-center cursor-pointer hover:bg-yellow-200 transition-transform transform hover:scale-105"
              onClick={() => handleLevelSelect("intermediate")}
            >
              <h3 className="text-xl font-medium text-yellow-600">
                Intermediate
              </h3>
            </div>
            <div
              className="p-6 bg-green-100 border border-green-300   text-center cursor-pointer hover:bg-green-200 transition-transform transform hover:scale-105"
              onClick={() => handleLevelSelect("advanced")}
            >
              <h3 className="text-xl font-medium text-green-600">Advanced</h3>
            </div>
          </div>

          {level && (
            <div className="mt-6 text-lg text-center">
              <h4 className="font-medium">
                You selected:{" "}
                <span className="text-blue-600 uppercase">{level}</span> level
              </h4>
            </div>
          )}

          {level && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleStartQuiz}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg  hover:bg-blue-600 transition"
              >
                Start Quiz
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <h5 className="text-xl font-semibold">Course: {course}</h5>
            <p className="text-lg">Subtopic: {subTopic}</p>
          </div>

          {/* Test guidelines */}
          <div className="mt-8 p-4 w-full bg-yellow-50 border border-yellow-300  ">
            <h3 className="text-lg font-semibold text-yellow-700 mb-4">
              Test Guidelines
            </h3>
            <ul className="list-disc pl-5 text-lg">
              <li className="mb-2">You must be logged in to start the test.</li>
              <li className="mb-2">
                Do not cheat during the test. It's meant to assess your
                knowledge accurately.
              </li>
              <li className="mb-2">
                Make sure you have a stable internet connection before starting.
              </li>
              {/* <li className="mb-2">If you face any issues during the test, contact support immediately.</li> */}
            </ul>
          </div>

          {/* Verify Certificate section */}
          <div className="mt-8 p-4 w-full bg-green-50 border border-green-300 text-left">
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Verify Your Certificate
            </h3>
            <div className="flex-col justify-between ">
              <p className="text-lg mb-4">
                If you have already received the certificate, you can verify it
                using the Certificate ID displayed on the certificate.
              </p>
              <button
                onClick={handleVerifyCertificate}
                className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Verify Certificate
              </button>
            </div>
          </div>
        </>
      ) : (
        <Test level={level} course={course} subtopic={subTopic} />
      )}
    </div>
  );
};

export default Practice;