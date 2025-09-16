import React from "react";
import APlusTemplate from "./APlusTemplate";

const APlusCore1And2V15 = ({ subcourse }) => {
  const examDetails = [
    ["Exam version", "V15"],
    ["Exam series code", "220-1201 (Core 1) & 220-1202 (Core 2)"],
    ["Launch date", "March 25, 2025"],
    ["Number of questions", "Up to 180 (90 per exam)"],
    ["Length", "90 minutes each exam"],
    ["Passing score", "675 / 900 (Core 1), 700 / 900 (Core 2)"],
    ["Recommended experience", "12 months of hands-on IT support experience"],
    ["Retirement (est.)", "2028 (approx.)"],
  ];

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 1 & 2 V15 (New Version)"
      defaultDescription="CompTIA A+ Core 1 & 2 together form the complete A+ certification. Core 1 focuses on hardware, networking, and troubleshooting, while Core 2 covers OS, security, and operational procedures."
      examDetails={examDetails}
      objectives={[]}
    />
  );
};

export default APlusCore1And2V15;
