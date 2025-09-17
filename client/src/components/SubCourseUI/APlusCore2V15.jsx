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
    ["Recommended experience", "12 months of hands-on IT support"],
    ["Retirement (est.)", "2028 (approx.)"],
  ];

  const objectives = [
    {
      heading: "Operating Systems",
      percent: 27,
      bullets: [
        "Install and configure Windows OS, macOS, Linux, and mobile OS.",
        "Use command-line tools for system management.",
        "Perform system imaging and recovery."
      ],
    },
    {
      heading: "Security",
      percent: 24,
      bullets: [
        "Identify security threats, vulnerabilities, and mitigation strategies.",
        "Configure workstation security settings.",
        "Implement secure practices for user accounts and devices."
      ],
    },
    {
      heading: "Software Troubleshooting",
      percent: 26,
      bullets: [
        "Troubleshoot OS boot issues and application crashes.",
        "Resolve driver and service failures.",
        "Diagnose and repair malware infections."
      ],
    },
    {
      heading: "Operational Procedures",
      percent: 23,
      bullets: [
        "Follow best practices for documentation and change management.",
        "Understand disaster recovery and backup strategies.",
        "Apply safety and environmental procedures."
      ],
    },
  ];

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 2 V15 (New Version)"
      defaultDescription="CompTIA A+ Core 2 (V15) is the second of two exams required for A+ certification. This exam focuses on operating systems, security, software troubleshooting, and operational procedures."
      examDetails={examDetails}
      objectives={objectives}
    />
  );
};

export default APlusCore2V15;
