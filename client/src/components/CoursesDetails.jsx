import React from "react";
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
import { Link } from "react-router-dom";



const Cards = [
  {
    image: Logo4,
    title: "IBM Certifications",
    description:
      "Over 25 specialities guided by best in class doctors for effective care around the clock.",
    url :'/IBM'
  },
  {
    image: Logo6,
    title: "Digital Marketing Certification",
    description:
      "COVID-19 essentials and self-test kits provided, along with access to a large inventory for medicines.",
  },
  {
    image: Logo3,
    title: "PMI Project Management",
    description:
      "Discounts upto 20% on NABL-accredited lab tests and at-home tests in multiple cities.",
  },
  {
    image: Logo9,
    title: "Information Technology Specialist",
    description:
      "Over 500+ day care procedures covered with a variety of payment options, for employees and family members.",
  },
  {
    image: Logo10,
    title: "App Development with Swift ",
    description:
      "24/7 round the clock Ambulatory services along with equipped medical staff.",
  },
  {
    image: Logo2,
    title: "Tally Certifications",
    description:
      "Specially focused Mental Wellness plans available with regular informative webinars and constant support.",
  },
  {
    image: Logo5,
    title: "Microsoft Office Specialist",
    description:
      "Covid-19 specific online consultations, lab tests, medical equipment, SOS assistance, and home care services.",
  },
  {
    image: Logo13,
    title: "Autodesk Certified User",
    description:
      "Webinars and other knowledge-building sessions, peer-group challenges, and other employee engagement activities.",
  },
  {
    image: Logo7,
    title: "Microsoft Certified Fundamentals",
    description:
      "Webinars and other knowledge-building sessions, peer-group challenges, and other employee engagement activities.",
  },
  {
    image: Logo12,
    title: "Adobe Certified Professional",
    description:
      "Webinars and other knowledge-building sessions, peer-group challenges, and other employee engagement activities.",
  },
  {
    image: Logo8,
    title: "Unity Certified User ",
    description:
      "Webinars and other knowledge-building sessions, peer-group challenges, and other employee engagement activities.",
  },
  {
    image: Logo1,
    title: "Cisco Certified ",
    description:
      "Webinars and other knowledge-building sessions, peer-group challenges, and other employee engagement activities.",
  },
];

const CourseDetails = () => {
  return (
    <div className="mx-auto lg:p-12 bg-gray-50">
      {/* Split into two parts: Left section and Right section */}
      <div className="">
        <div className="grid grid-cols-3 gap-5">
          {Cards.map((card, index) => (
            
            <div
              key={index}
              className="bg-white flex gap-5 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image rendering */}
              
              <Link to={card.url} className="flex justify-center w-80">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-lg"
              />
            </Link>
              
              <div>
                <h3 className="text-2xl font-semibold text-left text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-left">{card.description}</p>
              </div>
            </div>
            
          ))}
        </div>
{/* 
        <div className="flex flex-col space-y-4">
          {Cards.slice(4).map((card, index) => (
            <div
              key={index}
              className="bg-white flex gap-5 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image rendering }
              <div className="flex justify-center my-auto  p-3">
                <img src={card.image} alt={card.title} className="w-24 h-24 rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-left text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-left">{card.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CourseDetails;