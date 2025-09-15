import React from "react";

const Core2 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">CompTIA A+ Core 2</h1>
      <p className="text-gray-600 mb-6">
        Deep dive into operating systems, security, and advanced IT skills.
      </p>

      <nav className="flex space-x-6 border-b pb-2 mb-6">
        <button className="text-red-600 font-semibold border-b-2 border-red-600">Overview</button>
        <button className="text-gray-600 hover:text-red-600">Buy Now</button>
        <button className="text-gray-600 hover:text-red-600">Career Path</button>
        <button className="text-gray-600 hover:text-red-600">Resources</button>
      </nav>

      <ul className="space-y-3">
        <li>🖥 <strong>Operating Systems:</strong> Learn Windows, Linux, and macOS fundamentals.</li>
        <li>🔧 <strong>Troubleshooting:</strong> Master problem-solving techniques for real-world IT issues.</li>
        <li>🔐 <strong>Security:</strong> Dive deeper into endpoint security and risk mitigation.</li>
      </ul>
    </div>
  );
};

export default Core2;
