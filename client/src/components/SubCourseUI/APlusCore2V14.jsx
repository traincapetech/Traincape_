import React from "react";
import APlusTemplate from "./APlusTemplate";

const APlusCore2V14 = ({ subcourse }) => {
  const examDetails = [
    ["Exam version", "V14 (Retiring)"],
    ["Exam series code", "220-1102 (Core 2)"],
    ["Launch date", "April 2022"],
    ["Number of questions", "Up to 90"],
    ["Length", "90 minutes"],
    ["Passing score", "700 / 900"],
    ["Retirement", "October 2025 (approx.)"],
  ];

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 2 V14 (Retiring Version)"
      defaultDescription="CompTIA A+ Core 2 (V14) focuses on OS, security, and operational procedures. This exam is retiring soon — check CompTIA schedule if you still need to attempt it."
      examDetails={examDetails}
      objectives={[]}
    />
  );
};

export default APlusCore2V14;
