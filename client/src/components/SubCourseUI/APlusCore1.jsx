import React from "react";
import APlusTemplate from "./APlusTemplate";

const APlusCore1 = ({ subcourse }) => {
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

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 1 V15 (New Version)"
      defaultDescription="CompTIA A+ Core 1 is the first of two exams required to earn the industry-standard A+ certification, designed to launch your tech career. This exam focuses on foundational skills in hardware, networking, mobile devices, and troubleshooting."
      examDetails={examDetails}
      objectives={objectives}
    />
  );
};

export default APlusCore1;
