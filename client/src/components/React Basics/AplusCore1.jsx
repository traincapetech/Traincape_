import React from "react";

const AplusCore1 = ({ subcourse }) => {
  // Hard-coded description for the A+ Core 1 course
  const description =
    "CompTIA A+ Core 1 is the first of two exams required to earn the industry-standard A+ certification, designed to launch your tech career. This exam focuses on foundational skills in hardware, networking, mobile devices, and troubleshooting. Passing Core 1 and Core 2 prepares you for roles like IT support specialist and help desk technician while building the knowledge needed to pursue advanced certifications like Network+ and Security+.";

  // Hard-coded exam objectives/rules for the A+ Core 1 course
  const examObjectives = [
    {
      title: "Mobile devices (13%)",
      topics: [
        "Hardware setup: installing components like batteries, cameras, and Wi-Fi antennas.",
        "Accessory options: configuring USB, Bluetooth, NFC, and docking stations.",
      ],
    },
    {
      title: "Networking (20%)",
      topics: [
        "Network fundamentals: TCP/IP, DNS, DHCP, and common ports.",
        "Network hardware: routers, switches, access points, and firewalls.",
      ],
    },
    {
      title: "Hardware (25%)",
      topics: [
        "System components: motherboards, CPUs, RAM, and storage devices.",
        "Peripheral devices: printers, scanners, and monitors.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">
            Discover Our Certifications
          </a>{" "}
          &gt;{" "}
          <span className="text-purple-600">
            {subcourse?.title || "A+ Core 1 V15"}
          </span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="flex-1">
            <h1 className="text-sm font-semibold text-purple-600 mb-2">
              V15
            </h1>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              {subcourse?.title || "A+ Core 1 V15"}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={subcourse?.image || "https://placehold.co/150x150"}
              alt={`${subcourse?.title || "A+ Core 1 V15"} logo`}
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        {/* Tabbed Navigation */}
        <div className="bg-gray-800 text-white rounded-md mt-8 overflow-hidden shadow-xl">
          <div className="flex">
            {["Overview", "Buy Now", "Career Path", "Resources"].map(
              (tab) => (
                <button
                  key={tab}
                  className="flex-1 py-4 text-center font-semibold transition-colors duration-200 ease-in-out hover:bg-gray-700"
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              {subcourse?.title || "A+ Core 1 V15"} exam objectives summary
            </h3>
            <div className="space-y-8">
              {examObjectives.map((objective, index) => (
                <div key={index}>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {objective.title}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    {objective.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AplusCore1;