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

  const objectives = [
    {
      heading: "Operating Systems",
      percent: 31,
      bullets: [
        "Install and configure Windows OS, macOS, Linux, and mobile OS.",
        "Use command-line tools to manage operating systems.",
        "Apply basic scripting techniques for automation."
      ],
    },
    {
      heading: "Security",
      percent: 25,
      bullets: [
        "Identify common security threats and vulnerabilities.",
        "Secure mobile devices and workstations.",
        "Apply security best practices for networks and users."
      ],
    },
    {
      heading: "Software Troubleshooting",
      percent: 22,
      bullets: [
        "Troubleshoot common OS problems.",
        "Resolve application and service issues.",
        "Diagnose malware and security incidents."
      ],
    },
    {
      heading: "Operational Procedures",
      percent: 22,
      bullets: [
        "Follow change management processes.",
        "Document and label hardware/software configurations.",
        "Follow environmental and safety guidelines."
      ],
    },
  ];

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 2 V14 (Retiring Version)"
      defaultDescription="CompTIA A+ Core 2 (V14) focuses on operating systems, software troubleshooting, and security. This version is retiring soon — check the official CompTIA schedule."
      examDetails={examDetails}
      objectives={objectives}
    />
  );
};

export default APlusCore2V14;
