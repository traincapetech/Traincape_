import React from "react";
import APlusTemplate from "./APlusTemplate";

const APlusCore1V14 = ({ subcourse }) => {
  const examDetails = [
    ["Exam version", "V14 (Retiring)"],
    ["Exam series code", "220-1101 (Core 1)"],
    ["Launch date", "April 2022"],
    ["Number of questions", "Up to 90"],
    ["Length", "90 minutes"],
    ["Passing score", "675 / 900"],
    ["Retirement", "October 2025 (approx.)"],
  ];

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 1 V14 (Retiring Version)"
      defaultDescription="CompTIA A+ Core 1 (V14) covers hardware, networking, and troubleshooting skills. This version is retiring soon — prepare quickly if you’re taking this exam."
      examDetails={examDetails}
      objectives={[]}
    />
  );
};

export default APlusCore1V14;
