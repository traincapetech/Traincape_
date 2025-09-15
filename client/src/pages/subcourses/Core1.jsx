import React from "react";

const Core1 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">CompTIA A+ Core 1</h1>
      <p className="text-gray-600 mb-6">
        Learn hardware, troubleshooting, and basic IT skills.
      </p>

      <nav className="flex space-x-6 border-b pb-2 mb-6">
        <button className="text-red-600 font-semibold border-b-2 border-red-600">Overview</button>
        <button className="text-gray-600 hover:text-red-600">Buy Now</button>
        <button className="text-gray-600 hover:text-red-600">Career Path</button>
        <button className="text-gray-600 hover:text-red-600">Resources</button>
      </nav>

      <ul className="space-y-3">
        <li>🔧 <strong>Networking Fundamentals:</strong> Learn how to configure devices, manage connectivity, and explore LANs.</li>
        <li>📜 <strong>Network Operations:</strong> Explore key practices like documentation, monitoring, and disaster recovery.</li>
        <li>🔐 <strong>Network Security:</strong> Understand risks, vulnerabilities, and security protocols.</li>
      </ul>
    </div>
  );
};

export default Core1;
