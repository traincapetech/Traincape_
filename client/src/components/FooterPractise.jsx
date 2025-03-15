import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-800 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">TrainCape Technology</h2>
          <p className="text-gray-400">
            Traincape is a company that specializes in building websites and
            enhancing sales strategies. 🚀
          </p>
          <div className="mt-4 space-x-4 flex justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=100083755432171"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={24}
                color="#4267B2"
                className="hover:text-blue-800"
              />
            </a>
            <a
              href="https://www.instagram.com/traincape_technology?igsh=MWR5c3EyOTI4dHJ5eg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={24}
                color="#FF69B4"
                className="hover:text-pink-800"
              />
            </a>
            <a
              href="https://in.linkedin.com/company/traincape-technology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                color="#0077B5"
                className="hover:text-blue-800"
              />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                X - Stay in the pulse
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Discord - Chat with peers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Youtube - Subscribe for tutorials
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li>Links</li>
            <li>
              <Link
                to="/frequently-asked-questions"
                className="text-gray-400 hover:text-white"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-gray-400 hover:text-white">
                Contat Us
              </Link>
            </li>
            <li>
              <Link
                to="/Our-Policies"
                className="text-gray-400 hover:text-white"
              >
                Policy
              </Link>
            </li>
            <li>
              <Link
                to="/Career-details"
                className="text-gray-400 hover:text-white"
              >
                Career
              </Link>
            </li>
            <li>
              <Link to="/Employee" className="text-gray-400 hover:text-white">
                Employee
              </Link>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>Explore</li>
            <li>
              {" "}
              <Link to={"/about-us"} className="text-gray-400 hover:text-white">
                What we Do
              </Link>
            </li>
            <li>
              <Link to={"/about-us"} className="text-gray-400 hover:text-white">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/Internship" className="text-gray-400 hover:text-white">
                Internship
              </Link>
            </li>
            <li>
              <Link
                to="/PartnerPage"
                className="text-gray-400 hover:text-white"
              >
                Partners
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        <h1>Copyright © 2021 Traincape Technology. All Rights Reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
