import React from "react";
import { Link } from "react-router-dom";

// Import Logos
import Logo4 from "../assets/ibmlogo-courses.png";
import Logo6 from "../assets/metalogocourses.png";
import Logo3 from "../assets/pmilogo-courses.png";
import Logo10 from "../assets/adwslogo-courses.jpg";
import Logo2 from "../assets/tallylogo-courses.jpg";
import Logo12 from "../assets/adobenewlogo2.png";
import Logo13 from "../assets/autodesklogo.png";
import Logo8 from "../assets/unitylogonew2.jpg";
import Logo1 from "../assets/ciscologo-courses.webp";
import Logo5 from "../assets/microsoftnewlogo.jpg";
import Logo7 from "../assets/microcertilogo.png";
import Logo9 from "../assets/itlogo.png";

// Course Cards Data
const Cards = [
  {
    image: Logo4,
    title: "IBM Certifications",
    description: "Enhance your IT infrastructure protection with our specialized cybersecurity services.",
    url: "/IBM"
  },
  {
    image: Logo6,
    title: "Digital Marketing Certification",
    description: "Safeguard your digital assets in today's challenging landscape.",
    url:"/META"
  },
  {
    image: Logo3,
    title: "PMI Project Management",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
    url:"/PMI"
  },
  {
    image: Logo9,
    title: "Information Technology Specialist",
    description: "Empowering organizations to safeguard their digital assets in today's challenging landscape.",
    url:"/ITSpeacialist"
  },
  {
    image: Logo10,
    title: "App Development with Swift",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
    url:"/SwiftDevelopment"
  },
  {
    image: Logo2,
    title: "Tally Certifications",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
  },
  {
    image: Logo5,
    title: "Microsoft Office Specialist",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
  },
  {
    image: Logo13,
    title: "Autodesk Certified User",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
  },
  {
    image: Logo7,
    title: "Microsoft Certified Fundamentals",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
  },
  {
    image: Logo12,
    title: "Adobe Certified Professional",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
  },
  {
    image: Logo8,
    title: "Unity Certified User",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
  },
  {
    image: Logo1,
    title: "Cisco Certified",
    description: "We offer specialized cybersecurity services that ensure the protection of IT infrastructures and solutions.",
  },
];

const CourseDetails = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-12 bg-gray-50 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Explore Our Certification Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="bg-white flex flex-col gap-4 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full"
          >
            <Link to={card.url || "#"} className="flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-32 object-contain rounded-lg"
              />
            </Link>

            <div className="flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center sm:text-left mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-center sm:text-left flex-grow">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;