import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// 🔽 Import custom subcourse UIs here
import AIPromptingEssentials from "./AIPromptingEssentials";

// 🔑 Map DB field `uiComponent` → React component
const subcourseComponents = {
  AIPromptingEssentials,
};

const SubCourseTemplate = () => {
  const { courseId, slug } = useParams();
  const [subcourse, setSubcourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Overview");
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubcourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/subcourses/${courseId}/${slug}`
        );
        setSubcourse(res.data);
      } catch (error) {
        console.error("❌ Error fetching subcourse:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubcourse();
  }, [courseId, slug]);

  const handleBuyNow = () => {
    if (loadingCheckout) return;
    setLoadingCheckout(true);

    navigate("/checkout", {
      state: {
        course: {
          id: subcourse?._id,
          title: subcourse?.title,
          price: subcourse?.price,
        },
      },
    });
  };

  if (loading) {
    return (
      <h2 className="text-center text-gray-500 text-2xl mt-10 animate-pulse">
        Loading subcourse details...
      </h2>
    );
  }

  if (!subcourse) {
    return (
      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold text-purple-600">
          Subcourse Not Found
        </h1>
        <p className="text-gray-600 mt-4">
          We couldn’t find details for this subcourse.
        </p>
      </div>
    );
  }

  const { examDetails } = subcourse;

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-100 min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header & Badge */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="lg:flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 leading-tight">
              {subcourse.title}{" "}
              {examDetails?.version && (
                <span className="text-sm font-medium align-top">
                  {examDetails.version}
                </span>
              )}
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              {subcourse.description}
            </p>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-purple-200">
              <div className="flex justify-between">
                {["Overview", "Buy Now"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative flex-1 py-3 text-center font-semibold transition text-sm md:text-base ${
                      activeTab === tab
                        ? "text-purple-700"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Badge on Right */}
          <div className="flex justify-end lg:w-64 mt-6 lg:mt-0">
            <div className="bg-white rounded-full border-2 border-purple-700 p-4 flex flex-col items-center shadow">
              <div className="text-purple-700 font-bold text-lg mb-1">
                CompTIA
              </div>
              <div className="text-gray-800 font-semibold text-xl">A+</div>
              <div className="text-gray-500 text-xs mt-1">Certification</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {activeTab === "Overview" && (
              <div className="bg-white rounded-xl shadow p-8 space-y-8">
                {/* Exam Overview */}
                {examDetails && (
                  <>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Exam Details
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="p-4 border rounded-lg shadow-sm bg-purple-50">
                        <p className="text-sm text-gray-500">Exam Code</p>
                        <p className="font-semibold">{examDetails.examCode}</p>
                      </div>
                      <div className="p-4 border rounded-lg shadow-sm bg-purple-50">
                        <p className="text-sm text-gray-500">Launch Date</p>
                        <p className="font-semibold">
                          {examDetails.launchDate
                            ? new Date(examDetails.launchDate).toLocaleDateString()
                            : "TBA"}
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg shadow-sm bg-purple-50">
                        <p className="text-sm text-gray-500">Questions</p>
                        <p className="font-semibold">{examDetails.questions}</p>
                      </div>
                      <div className="p-4 border rounded-lg shadow-sm bg-purple-50">
                        <p className="text-sm text-gray-500">Time Limit</p>
                        <p className="font-semibold">{examDetails.timeLimit}</p>
                      </div>
                      <div className="p-4 border rounded-lg shadow-sm bg-purple-50">
                        <p className="text-sm text-gray-500">Passing Score</p>
                        <p className="font-semibold">
                          {examDetails.passingScore}
                        </p>
                      </div>
                    </div>

                    {/* Objectives */}
                    {examDetails.objectives?.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Exam Objectives
                        </h3>
                        <div className="space-y-6">
                          {examDetails.objectives.map((obj, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 border rounded-lg p-5 shadow-sm"
                            >
                              <h4 className="font-semibold text-purple-700 mb-2">
                                {obj.category}
                              </h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {obj.items.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Dynamic UI Component */}
                {(() => {
                  const Component = subcourseComponents[subcourse.uiComponent];
                  return Component ? <Component subcourse={subcourse} /> : null;
                })()}
              </div>
            )}

            {activeTab === "Buy Now" && (
              <div className="bg-white rounded-xl shadow p-8 space-y-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-purple-700 text-center">
                  Purchase {subcourse.title}
                </h2>
                <p className="text-gray-700 text-lg text-center">
                  Get access to this subcourse instantly.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  ${subcourse?.price}
                </div>

                <button
                  onClick={handleBuyNow}
                  disabled={loadingCheckout}
                  className={`w-2/3 md:w-1/3 py-4 rounded-2xl text-white font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                    loadingCheckout
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500"
                  }`}
                >
                  {loadingCheckout ? "Redirecting..." : "Buy Now"}
                </button>
              </div>
            )}
          </div>

          {/* Right side (optional extras, maybe SEO info or highlights) */}
        </div>
      </div>
    </div>
  );
};

export default SubCourseTemplate;
