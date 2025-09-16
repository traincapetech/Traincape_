import React, { useState } from "react";

const APlusTemplate = ({ subcourse, examDetails = [], objectives = [], defaultTitle, defaultDescription }) => {
  const title = subcourse?.title || defaultTitle;
  const description = subcourse?.description || defaultDescription;
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">Discover Our Certifications</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">A+</span>
          <span className="mx-2">/</span>
          <span className="font-semibold">{title}</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">{title}</h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">{description}</p>

            {/* Tabs */}
            <div className="mt-8 bg-black rounded-lg shadow overflow-hidden">
              <div className="flex text-white text-sm">
                {["Overview", "Buy Now", "Career Path", "Resources"].map((tab) => (
                  <button
                    key={tab}
                    className={`flex-1 py-4 px-6 text-center font-semibold transition ${
                      activeTab === tab ? "bg-black border-b-2 border-red-600" : "bg-black/80 hover:bg-black/70"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-end">
            <div className="w-full max-w-xs bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src={subcourse?.image || "https://placehold.co/200x200"}
                alt={title}
                className="w-36 h-36 object-contain mb-4"
              />
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Plus</div>
                <div className="text-xl font-bold text-gray-800">A+ Certification</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow p-8 space-y-8">
                <h2 className="text-3xl font-bold">{title} exam objectives summary</h2>

                {objectives.map((sec) => (
                  <div key={sec.heading} className="space-y-2">
                    <h3 className="text-xl font-bold">{sec.heading} ({sec.percent}%)</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      {sec.bullets.map((b, i) => (
                        <li key={i}>
                          <span dangerouslySetInnerHTML={{ __html: b }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* CTA text */}
                <p className="text-center text-red-600 font-semibold">
                  Advance your career — Buy A+ certification exam or training today.
                </p>
              </div>

              {/* Email capture */}
              <div className="bg-white rounded-xl shadow p-8 flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Get A+ Exam Objectives and Practice Questions</h4>
                  <p className="text-gray-600 mb-4">
                    Enter your email to get updates, practice questions, and training bundles.
                  </p>
                  <form className="flex gap-3 items-center">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="flex-1 border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <button
                      type="button"
                      className="bg-red-600 text-white rounded-md px-4 py-3 font-semibold hover:bg-red-700"
                    >
                      Access now
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-2">
                    By submitting the form, you agree to the Privacy notice.
                  </p>
                </div>

                {/* Exam Details */}
                <div className="w-64 bg-gray-100 rounded-md p-4 text-sm">
                  <h5 className="font-semibold mb-3">Exam details</h5>
                  <ul className="space-y-2">
                    {examDetails.map(([k, v]) => (
                      <li key={k}>
                        <span className="font-medium">{k}:</span> <span className="ml-1">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills learned */}
              <div className="bg-white rounded-xl shadow p-8">
                <h4 className="text-xl font-bold mb-3">Skills learned</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Install, configure, and maintain hardware components and mobile devices.</li>
                  <li>Troubleshoot hardware, network, and connectivity issues.</li>
                  <li>Understand networking basics and configure SOHO networks.</li>
                  <li>Explain virtualization and cloud computing concepts.</li>
                  <li>Use troubleshooting tools to diagnose and resolve technical problems.</li>
                </ul>
              </div>

              {/* Stay informed */}
              <div className="bg-white rounded-xl shadow p-8 text-center">
                <h4 className="text-xl font-bold mb-2">Advance with confidence</h4>
                <p className="text-gray-600 mb-4">
                  Get updates, insights, and exclusive offers to support your learning journey and career growth.
                </p>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900">
                  Sign up now
                </button>
              </div>
            </div>

            {/* Right column purchase card */}
            <aside className="space-y-6">
              <div className="bg-white rounded-xl shadow p-6 sticky top-28">
                <div className="text-sm text-gray-500 mb-2">Price</div>
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  ₹{subcourse?.price ?? 1499}
                </div>
                <button className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 mb-3">
                  Buy Now
                </button>
                <button className="w-full border border-gray-300 py-2 rounded-md font-medium">
                  Add to cart
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default APlusTemplate;
