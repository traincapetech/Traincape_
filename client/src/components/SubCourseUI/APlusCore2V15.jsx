import React from "react";
import APlusTemplate from "./APlusTemplate";

const APlusCore2V15 = ({ subcourse }) => {
  const examDetails = [
    ["Exam version", "V15"],
    ["Exam series code", "220-1202 (Core 2)"],
    ["Launch date", "March 25, 2025"],
    ["Number of questions", "Up to 90"],
    ["Length", "90 minutes"],
    ["Passing score", "700 / 900"],
    ["Recommended experience", "12 months of hands-on IT support experience"],
    ["Retirement (est.)", "2028 (approx.)"],
  ];

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 2 V15 (New Version)"
      defaultDescription="CompTIA A+ Core 2 covers operating systems, security, software troubleshooting, and operational procedures to prepare you for IT support roles."
      examDetails={examDetails}
      objectives={[]} // You can pass Core 2-specific objectives if you have them
    />
  );
};

export default APlusCore2V15;
