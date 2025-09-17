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

  const objectives = [
    {
      heading: "Mobile devices",
      percent: 15,
      bullets: [
        "Install and configure laptop hardware and components.",
        "Compare and contrast display components.",
        "Set up mobile device synchronization."
      ],
    },
    {
      heading: "Networking",
      percent: 20,
      bullets: [
        "Explain basic networking concepts and protocols.",
        "Install and configure SOHO wireless/wired routers.",
        "Use networking tools to troubleshoot connections."
      ],
    },
    {
      heading: "Hardware",
      percent: 25,
      bullets: [
        "Install and configure motherboards, RAM, CPUs, and power supplies.",
        "Install and configure storage devices and RAID arrays.",
        "Install and configure peripheral devices."
      ],
    },
    {
      heading: "Virtualization & Cloud",
      percent: 11,
      bullets: [
        "Set up and configure client-side virtualization.",
        "Compare and contrast cloud computing concepts."
      ],
    },
    {
      heading: "Troubleshooting",
      percent: 29,
      bullets: [
        "Apply the best practice methodology for resolving problems.",
        "Troubleshoot common hardware and display issues.",
        "Troubleshoot network connectivity problems."
      ],
    },
  ];

  return (
    <APlusTemplate
      subcourse={subcourse}
      defaultTitle="A+ Core 1 V14 (Retiring Version)"
      defaultDescription="CompTIA A+ Core 1 (V14) covers foundational IT hardware, networking, and troubleshooting skills. This version is retiring soon — complete it before the deadline."
      examDetails={examDetails}
      objectives={objectives}
    />
  );
};

export default APlusCore1V14;
