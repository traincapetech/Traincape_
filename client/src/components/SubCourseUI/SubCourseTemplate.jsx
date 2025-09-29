// src/components/SubCourseTemplate.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// 🔽 Import custom subcourse UIs here
import AIPromptingEssentials from "./AIPromptingEssentials";

// 🔑 Map DB field `uiComponent` → React component
const subcourseComponents = {
  // AIPromptingEssentials,
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

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-100 min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header & Badge */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="lg:flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 leading-tight">
              {subcourse.title}{" "}
              <span className="text-sm font-medium align-top">V15</span>
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              {subcourse.description}
            </p>

            {/* Tabs - Horizontal Navbar with Gradient Indicator */}
            <div className="bg-white rounded-lg shadow-sm border border-purple-200">
              <div className="flex justify-between">
                {["Overview", "Buy Now", "Career Path"].map((tab) => (
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
              <div className="bg-white rounded-xl shadow p-8 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  A+ Core 1 (V15) exam objectives summary
                </h2>
                <p className="text-gray-700 text-lg">{subcourse.description}</p>

                {/* Dynamic Component */}
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
                  ₹{subcourse?.price ?? 99}
                </div>

                {/* Smaller Buy Now Button */}
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

          {/* Right Card (removed Buy Now) */}
          <aside className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6 sticky top-28">
              <img
                src={subcourse?.image || "https://placehold.co/200x200"}
                alt={subcourse?.title}
                className="w-36 h-36 object-contain mb-4 mx-auto"
              />
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600">
                  {subcourse?.category}
                </div>
                <div className="text-xl font-bold text-gray-800">
                  {subcourse?.title}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SubCourseTemplate;
