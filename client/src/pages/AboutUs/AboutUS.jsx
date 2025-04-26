import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/about-us-Bg.jpg";
import {
  FaStar,
  FaChalkboardTeacher,
  FaHandshake,
  FaTools,
  FaLaptopCode,
  FaMobileAlt,
  FaCertificate,
} from "react-icons/fa";
import { BiCertification } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import founderImage from "../../assets/Parichay-Sir.jpeg";
import { useLanguage } from "../../context/LanguageContext.jsx";
import translations from "./data.js";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AboutUS = () => {
  // Add useEffect for smooth scrolling
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // State for responsive handling
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Get language state from context
  const { language, toggleLanguage } = useLanguage();

  // Get translations based on current language
  const t = translations[language];

  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it animates only once
    threshold: 0.3, // Start animation when 30% of the div is in view
  });
  return (
    <>
      {/* Language Selector */}
      <div className="fixed top-20 right-10 z-50 bg-white rounded-full shadow-md p-2">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="bg-[#152B54]  text-white py-1 px-3 rounded-full text-sm hover:bg-[#3a7bd5] transition duration-300"
        >
          {language === "en"
            ? "English"
            : language === "hi"
            ? "हिंदी"
            : language === "ar"
            ? "العربية"
            : language === "pt"
            ? "Português"
            : language === "fr"
            ? "Français"
            : "Nederlands"}
        </button>

        {isDropdownOpen && (
          <div className="absolute bg-white shadow-lg rounded-lg mt-5 w-40 left-1/2 transform -translate-x-1/2">
            <ul className="list-none p-2 ">
              <li
                className="p-2 hover:bg-[#3a7bd5] cursor-pointer"
                onClick={() => toggleLanguage("en")}
              >
                English
              </li>
              <li
                className="p-2 hover:bg-[#3a7bd5] cursor-pointer"
                onClick={() => toggleLanguage("hi")}
              >
                हिंदी
              </li>
              <li
                className="p-2 hover:bg-[#3a7bd5] cursor-pointer"
                onClick={() => toggleLanguage("ar")}
              >
                العربية
              </li>
              <li
                className="p-2 hover:bg-[#3a7bd5] cursor-pointer"
                onClick={() => toggleLanguage("pt")}
              >
                Português
              </li>
              <li
                className="p-2 hover:bg-[#3a7bd5] cursor-pointer"
                onClick={() => toggleLanguage("fr")}
              >
                Français
              </li>
              <li
                className="p-2 hover:bg-[#3a7bd5] cursor-pointer"
                onClick={() => toggleLanguage("nl")}
              >
                Nederlands
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative h-[100px] md:h-[200px] lg:h-[300px] overflow-hidden">
        <div className="relative h-full w-full">
          <img
            src={BannerImage}
            alt="About Traincape Technology"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%] max-w-[800px] z-10 px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 drop-shadow-md">
              {t.aboutHeader}
            </h1>
            <p className="text-base md:text-lg lg:text-xl drop-shadow-md mx-auto max-w-[700px]">
              {t.empowering}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-gray-600 font-bold py-2 px-4 rounded"
        >
          <span className="hover:text-gray-800">{t.home}</span>
        </button>
        <div className="flex items-center text-gray-500 font-bold">
          <span>{" > "}</span>
          <span className="ml-4">{t.aboutUs}</span>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="flex w-full px-4 py-8 md:py-12 lg:py-16 bg-white items-start flex-wrap justify-center">
        {/* Statistics Section */}
        <section className="w-full md:w-[30%] lg:w-[35%] bg-gray-50 py-8 sm:py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-xs font-medium mb-3">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Why Students Choose Traincape Technology
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Join thousands of satisfied students who have transformed their
                careers with our expert training
              </p>
            </div>

            <div ref={ref} className="grid grid-cols-2 gap-6 sm:gap-8">
              {[
                { count: 100000, label: "Sales" },
                { count: 500, label: "Certification Courses" },
                { count: 8000, label: "Users" },
                { count: 300000, label: "Hours" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <span className="text-2xl font-bold text-[#152B54]">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={item.count}
                        duration={2}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                    +
                  </span>
                  <p className="text-sm text-blue-500 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <div className="w-full md:w-[50%] lg:w-[45%] mt-8 md:mt-0 px-4">
          {/* <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-[#152B54] font-semibold">
              {t.ourStory}
            </h2>
            <div className="h-1 w-16 bg-[#ff8c00] mx-auto mt-2 mb-4"></div>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
              {t.storySubtitle}
            </p>
          </div> */}

          <div className="flex flex-col items-center text-center">
            <div className="text-left w-full">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4">
                {t.storyPara2}
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4">
                {t.storyPara1}
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                {t.storyPara3}
              </p>
            </div>
            <img
              src={founderImage}
              alt="Founder of Traincape Technology"
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover object-top border-4 border-[#152B54] shadow-lg mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/250x250?text=Founder";
              }}
            />
            <h3 className="text-xl font-semibold text-[#152B54] mb-1">
              Parichay Singh Rana
            </h3>
            <p className="text-sm text-gray-600 mb-6">{t.founder}</p>
          </div>
        </div>
      </div>

      {/* Vision, Mission, Values */}
      <section className="bg-gray-100 py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-[#152B54] font-bold mb-2">
              {t.ourFoundation}
            </h2>
            <div className="h-1 w-[70px] bg-[#ff8c00] mx-auto mt-2 mb-4"></div>
            <p className="text-base text-gray-600 max-w-[700px] mx-auto mt-4 leading-relaxed">
              {t.foundationSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Vision Card */}
            <div className="bg-white rounded-lg p-5 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px]">
              <div className="w-[70px] h-[70px] mx-auto mb-4">
                <FaStar className="text-[#152B54] text-[40px] w-full h-full" />
              </div>
              <h3 className="text-xl md:text-2xl text-[#152B54] mb-4 font-semibold">
                {t.ourVision}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow">
                {t.visionDesc}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-lg p-5 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px]">
              <div className="w-[70px] h-[70px] mx-auto mb-4">
                <FaChalkboardTeacher className="text-[#152B54] text-[40px] w-full h-full" />
              </div>
              <h3 className="text-xl md:text-2xl text-[#152B54] mb-4 font-semibold">
                {t.ourMission}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow">
                {t.missionDesc}
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-lg p-5 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px]">
              <div className="w-[70px] h-[70px] mx-auto mb-4">
                <FaHandshake className="text-[#152B54] text-[40px] w-full h-full" />
              </div>
              <h3 className="text-xl md:text-2xl text-[#152B54] mb-4 font-semibold">
                {t.ourValues}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow">
                {t.valuesDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-[#152B54] font-bold mb-2">
              {t.ourServices}
            </h2>
            <div className="h-1 w-[70px] bg-[#ff8c00] mx-auto mt-2 mb-4"></div>
            <p className="text-base text-gray-600 max-w-[700px] mx-auto mt-4 leading-relaxed">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Website Development */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px] hover:bg-[#152B54] group">
              <BsGlobe className="text-[40px] text-[#152B54] mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold group-hover:text-white transition-colors duration-300">
                {t.websiteDev}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                {t.websiteDesc}
              </p>
            </div>

            {/* Mobile App Development */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px] hover:bg-[#152B54] group">
              <FaMobileAlt className="text-[40px] text-[#152B54] mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold group-hover:text-white transition-colors duration-300">
                {t.appDev}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                {t.appDesc}
              </p>
            </div>

            {/* Certification Vouchers */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px] hover:bg-[#152B54] group">
              <BiCertification className="text-[40px] text-[#152B54] mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold group-hover:text-white transition-colors duration-300">
                {t.certVouchers}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                {t.vouchersDesc}
              </p>
            </div>

            {/* Internship Programs */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px] hover:bg-[#152B54] group">
              <FaTools className="text-[40px] text-[#152B54] mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold group-hover:text-white transition-colors duration-300">
                {t.internship}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                {t.internshipDesc}
              </p>
            </div>

            {/* Professional Training */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px] hover:bg-[#152B54] group">
              <FaLaptopCode className="text-[40px] text-[#152B54] mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold group-hover:text-white transition-colors duration-300">
                {t.profTraining}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                {t.trainingDesc}
              </p>
            </div>

            {/* Free Assessment */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px] hover:bg-[#152B54] group">
              <FaCertificate className="text-[40px] text-[#152B54] mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold group-hover:text-white transition-colors duration-300">
                {t.freeAssess}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                {t.assessDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-[#152B54] font-bold mb-2">
              {t.whyChoose}
            </h2>
            <div className="h-1 w-[70px] bg-[#ff8c00] mx-auto mt-2 mb-4"></div>
            <p className="text-base text-gray-600 max-w-[700px] mx-auto mt-4 leading-relaxed">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Training and Assessment Items */}
            <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:translate-y-[-5px]">
              <AiOutlineCheck className="text-2xl lg:text-3xl text-[#ff8c00] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-[#152B54] mb-1 font-semibold">
                  {t.expInstructors}{" "}
                </h3>
                <p className="text-base text-gray-600">{t.instructorsDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:translate-y-[-5px]">
              <AiOutlineCheck className="text-2xl lg:text-3xl text-[#ff8c00] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-[#152B54] mb-1 font-semibold">
                  {t.handsOn}
                </h3>
                <p className="text-base text-gray-600">{t.handsOnDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:translate-y-[-5px]">
              <AiOutlineCheck className="text-2xl lg:text-3xl text-[#ff8c00] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-[#152B54] mb-1 font-semibold">
                  {t.careerSupport}
                </h3>
                <p className="text-base text-gray-600">{t.careerDesc}</p>
              </div>
            </div>

            {/* Web and App Development Items */}
            <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:translate-y-[-5px]">
              <AiOutlineCheck className="text-2xl lg:text-3xl text-[#ff8c00] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-[#152B54] mb-1 font-semibold">
                  {t.customDev}
                </h3>
                <p className="text-base text-gray-600">{t.customDevDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:translate-y-[-5px]">
              <AiOutlineCheck className="text-2xl lg:text-3xl text-[#ff8c00] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-[#152B54] mb-1 font-semibold">
                  {t.modernTech}
                </h3>
                <p className="text-base text-gray-600">{t.modernTechDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:translate-y-[-5px]">
              <AiOutlineCheck className="text-2xl lg:text-3xl text-[#ff8c00] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-[#152B54] mb-1 font-semibold">
                  {t.ongoingSupport}
                </h3>
                <p className="text-base text-gray-600">{t.supportDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-[#152B54] font-bold mb-2">
              {t.certPartners}
            </h2>
            <div className="h-1 w-[70px] bg-[#ff8c00] mx-auto mt-2 mb-4"></div>
            <p className="text-base text-gray-600 max-w-[700px] mx-auto mt-4 leading-relaxed">
              {t.partnersSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {/* CompTIA */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px]">
              <h3 className="text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold">
                CompTIA
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-4 flex-grow">
                {t.comptiaDesc}
              </p>
              <Link
                to="/Comptia"
                className="inline-block bg-[#152B54] text-white py-2 px-5 rounded-full font-semibold text-sm transition duration-300 ease-in-out hover:bg-[#3a7bd5] hover:scale-105 mt-auto"
              >
                {t.viewCourses}
              </Link>
            </div>

            {/* PECB */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px]">
              <h3 className="text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold">
                PECB
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-4 flex-grow">
                {t.pecbDesc}
              </p>
              <Link
                to="/PECB"
                className="inline-block bg-[#152B54] text-white py-2 px-5 rounded-full font-semibold text-sm transition duration-300 ease-in-out hover:bg-[#3a7bd5] hover:scale-105 mt-auto"
              >
                {t.viewCourses}
              </Link>
            </div>

            {/* Microsoft */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md transition duration-300 ease-in-out text-center h-full flex flex-col hover:translate-y-[-5px]">
              <h3 className="text-xl lg:text-2xl text-[#152B54] mb-2 font-semibold">
                Microsoft
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-4 flex-grow">
                {t.microsoftDesc}
              </p>
              <Link
                to="/microsoft"
                className="inline-block bg-[#152B54] text-white py-2 px-5 rounded-full font-semibold text-sm transition duration-300 ease-in-out hover:bg-[#3a7bd5] hover:scale-105 mt-auto"
              >
                {t.viewCourses}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download Section (optional) */}
      {/* <section className="bg-gray-200 py-8 md:py-10">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left bg-white rounded-lg p-6 shadow-md">
          <div className="sm:max-w-[70%]">
            <h2 className="text-xl md:text-2xl text-[#152B54] mb-2">Download Our Course Catalog</h2>
            <p className="text-gray-600">Get detailed information about all our training programs and certification courses</p>
          </div>
          <a href="#download" className="flex items-center gap-2 bg-[#152B54] text-white py-2 px-5 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-[#3a7bd5] hover:scale-105">
            <span className="text-xl">↓</span> Download PDF
          </a>
        </div>
      </div>
    </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#152B54] to-[#3a7bd5] text-white text-center py-12 md:py-16">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
            {t.readyAdvance}
          </h2>
          <p className="text-base md:text-lg mb-6 max-w-[700px] mx-auto px-4">
            {t.careerHelp}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link
              to="/contact-us"
              className="bg-[#ff8c00] text-white py-2 px-6 rounded-full font-semibold text-base transition duration-300 hover:bg-white hover:text-[#152B54] hover:scale-105 w-full sm:w-auto max-w-[250px]"
            >
              {t.contactUs}
            </Link>
            <Link
              to="/Courses-details"
              className="bg-transparent text-white py-2 px-6 rounded-full font-semibold text-base border-2 border-white transition duration-300 hover:bg-white hover:text-[#152B54] hover:scale-105 w-full sm:w-auto max-w-[250px]"
            >
              {t.exploreCourses}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUS;
