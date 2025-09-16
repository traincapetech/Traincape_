import React from "react";
import APlusTemplate from "./APlusTemplate";

const APlusCore1And2V14 = ({ subcourse }) => {
  const examDetails = [
    ["Exam version", "V14 (Retiring)"],
    ["Exam series code", "220-1101 (Core 1) & 220-1102 (Core 2)"],
    ["Launch date", "April 2022"],
    ["Number of questions", "Up to 180 (90 per exam)"],
    ["Length", "90 minutes each exam"],
    ["Passing score", "675 / 900 (Core 1), 700 / 900 (Core 2)"],
    ["Retirement", "October 2025 (approx.)"],
  ];

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 1 & 2 V14 (Retiring Version)"
      defaultDescription="CompTIA A+ Core 1 & 2 V14 together represent the previous generation of A+ certification. This version is retiring soon, so complete both exams before the deadline."
      examDetails={examDetails}
      objectives={[]}
    />
  );
};

export default APlusCore1And2V14;
