import React from "react";
import { useNavigate } from "react-router-dom";

const APlusCore1Page = ({ subcourse }) => {
  const navigate = useNavigate();

  const title = subcourse?.title || "A+ Core 1 V15 (New Version)";
  const description =
    subcourse?.description ||
    "CompTIA A+ Core 1 is the first of two exams required to earn the industry-standard A+ certification, designed to launch your tech career. This exam focuses on foundational skills in hardware, networking, mobile devices, and troubleshooting.";

  const handleBuyNow = () => {
    // ✅ Navigate to checkout page & pass subcourse data
    navigate("/checkout", { state: { subcourse } });
  };

  const objectives = [
    {
      heading: "Mobile devices",
      percent: 13,
      bullets: [
        "Install and configure mobile device hardware components.",
        "Set up Wi-Fi, Bluetooth, and cellular connectivity.",
        "Troubleshoot common hardware and sync issues."
      ],
    },
    {
      heading: "Networking",
      percent: 23,
      bullets: [
        "Understand protocols, ports, and wireless standards.",
        "Configure SOHO networks and VPNs.",
        "Use basic networking tools for troubleshooting."
      ],
    },
    {
      heading: "Hardware",
      percent: 25,
      bullets: [
        "Install RAM, CPUs, and storage devices.",
        "Work with cables, connectors, and power supplies.",
        "Maintain printers and other peripherals."
      ],
    },
    {
      heading: "Virtualization & Cloud",
      percent: 11,
      bullets: [
        "Understand virtual machines and hypervisors.",
        "Differentiate IaaS, SaaS, and PaaS models."
      ],
    },
    {
      heading: "Hardware & Network Troubleshooting",
      percent: 28,
      bullets: [
        "Identify and resolve connectivity and hardware issues.",
        "Use tools like multimeters, cable testers, and loopback plugs."
      ],
    },
  ];

  const examDetails = [
    ["Exam version", "V15"],
    ["Exam series code", "220-1201 (Core 1)"],
    ["Launch date", "March 25, 2025"],
    ["Number of questions", "Up to 90"],
    ["Length", "90 minutes"],
    ["Passing score", "675 / 900"],
    ["Experience", "12 months hands-on IT support"],
    ["Retirement (est.)", "2028 (approx.)"],
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Certifications</a>
          <span className="mx-2">/</span>
          <span className="font-medium">A+</span>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-700">{description}</p>
          </div>

          {/* Image Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs bg-white rounded-lg border p-6 flex flex-col items-center">
              <img
                src={subcourse?.image || "https://placehold.co/200x200"}
                alt={title}
                className="w-28 h-28 object-contain mb-3"
              />
              <div className="text-center">
                <p className="text-sm text-gray-500">Plus</p>
                <p className="text-lg font-semibold text-gray-800">A+ Certification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Objectives */}
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Exam Objectives (Core 1 V15)
              </h2>
              <div className="space-y-4">
                {objectives.map((sec) => (
                  <div key={sec.heading}>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {sec.heading} <span className="text-sm text-gray-500">({sec.percent}%)</span>
                    </h3>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1">
                      {sec.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h4 className="text-lg font-semibold mb-4">Exam Details</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {examDetails.map(([k, v]) => (
                  <li key={k}><span className="font-medium">{k}:</span> {v}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="text-xl font-bold text-gray-900 mb-3">
                ₹{subcourse?.price ?? 1499}
              </div>
              {/* ✅ Buy Now Click Handler */}
              <button
                onClick={handleBuyNow}
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
              >
                Buy Now
              </button>
              <button className="w-full mt-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
                Add to Cart
              </button>
            </div>
          </aside>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center text-xs text-gray-500">
          Exam information is subject to change. Check CompTIA official resources for updates.
        </div>
      </div>
    </div>
  );
};

export default APlusCore1Page;
