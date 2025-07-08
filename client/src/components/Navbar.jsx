import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaCopy, FaCheck, FaChevronDown, FaBriefcase, FaGoogle, FaProjectDiagram, FaLaptopCode, FaApple, FaCalculator, FaMicrosoft, FaDraftingCompass, FaPaintBrush, FaGamepad, FaNetworkWired } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slices/userSlice";
import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
import DashboardHeader from "../pages/DashboardHeader";
import ReactDOM from "react-dom";
import { 
  SiIbm, 
  SiDigitalocean, 
  SiInformationtechnology,
  SiSwift,
  SiTally,
  SiMicrosoftoffice,
  SiAutodesk,
  SiMicrosoft,
  SiAdobe,
  SiUnity,
  SiCisco
} from "react-icons/si";
import scannerImg from "../assets/123.jpg";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const token = localStorage.getItem("token");
  const dropdownRef = useRef(null);
  const payNowButtonRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobilePayNowButtonRef = useRef(null);
  const coursesDropdownRef = useRef(null);
  const coursesButtonRef = useRef(null);

  const courses = [
    {
      name: "IBM Certifications",
      description: "Professional certification programs from IBM",
      icon: <FaBriefcase className="text-blue-600 text-xl" />,
      path: "/IBM"
    },
    {
      name: "Digital Marketing Certification",
      description: "Comprehensive digital marketing training",
      icon: <FaGoogle className="text-pink-500 text-xl" />,
      path: "/META"
    },
    {
      name: "PMI Project Management",
      description: "Project Management Institute certifications",
      icon: <FaProjectDiagram className="text-orange-500 text-xl" />,
      path: "/PMI"
    },
    {
      name: "Information Technology Specialist",
      description: "IT professional certification programs",
      icon: <FaLaptopCode className="text-teal-600 text-xl" />,
      path: "/ITSpeacialist"
    },
    {
      name: "App Development with Swift",
      description: "iOS app development certification",
      icon: <FaApple className="text-gray-800 text-xl" />,
      path: "/SwiftDevelopment"
    },
    {
      name: "Tally Certifications",
      description: "Accounting and business software training",
      icon: <FaCalculator className="text-green-700 text-xl" />,
      path: "/Tally"
    },
    {
      name: "Microsoft Office Specialist",
      description: "Microsoft Office suite certification",
      icon: <FaMicrosoft className="text-blue-800 text-xl" />,
      path: "/Microsoftoffice"
    },
    {
      name: "Autodesk Certified User",
      description: "CAD and design software certification",
      icon: <FaDraftingCompass className="text-green-500 text-xl" />,
      path: "/Autodesk"
    },
    {
      name: "Microsoft Certified Fundamentals",
      description: "Entry-level Microsoft certifications",
      icon: <FaMicrosoft className="text-blue-500 text-xl" />,
      path: "/MicrosoftCertified"
    },
    {
      name: "Adobe Certified Professional",
      description: "Adobe creative suite certification",
      icon: <FaPaintBrush className="text-red-600 text-xl" />,
      path: "/Adobe"
    },
    {
      name: "Unity Certified User",
      description: "Game development certification",
      icon: <FaGamepad className="text-purple-700 text-xl" />,
      path: "/unity"
    },
    {
      name: "Cisco Certified",
      description: "Networking and security certifications",
      icon: <FaNetworkWired className="text-blue-500 text-xl" />,
      path: "/ciscocard"
    }
  ];

  const accountNumber = "732205000345";
  const bankName = "ICICI Bank";
  const branchName = "Palam Colony";
  const accountHolderName = "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED";
  const ifscCode = "ICIC0007322";
  const Email = "sales@traincapetech.info";

  const bankDetails = {
    "Account Number": accountNumber,
    "Bank Name": bankName,
    "Branch Name": branchName,
    "Account Holder Name": accountHolderName,
    "IFSC Code": ifscCode,
    "EMAIL": Email
  };

  const updateDropdownPosition = () => {
    if (payNowButtonRef.current) {
      const rect = payNowButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesButtonRef.current && coursesButtonRef.current.contains(event.target)) {
        return;
      }
      
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target)) {
        setShowCoursesDropdown(false);
      }

      if (payNowButtonRef.current && payNowButtonRef.current.contains(event.target)) {
        return;
      }
      
      if (mobilePayNowButtonRef.current && mobilePayNowButtonRef.current.contains(event.target)) {
        return;
      }
      
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        mobileDropdownRef.current && 
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    navigate("/login");
    setMenuOpen(false);
  };

  const handlePayNow = (event) => {
    event.preventDefault();
    event.stopPropagation();
    updateDropdownPosition();
    setShowDropdown(!showDropdown);
  };

  const handleBankTransfer = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowBankDetails(true);
    setShowDropdown(false);
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  const copyToClipboard = () => {
    const detailsText = Object.entries(bankDetails)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    
    navigator.clipboard.writeText(detailsText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-teal-300 border-b-2 w-fit border-red-500"
      : "hover:text-teal-400";

  const handleExternalLink = (url, event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowDropdown(false);
    if (isMenuOpen) {
      setMenuOpen(false);
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderDropdown = () => {
    if (!showDropdown) return null;
    
    const dropdownContent = (
      <div
        ref={dropdownRef}
        className="fixed bg-white text-black shadow-xl rounded-md w-48 py-1 border border-gray-200"
        style={{
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          width: `${dropdownPosition.width}px`,
          zIndex: 9999
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => handleExternalLink("https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB", e)}
          className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
        >
          PayPal
        </button>
        <button
          onClick={(e) => handleExternalLink("https://buy.stripe.com/8wM2az10TaYQgww29d", e)}
          className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
        >
          Credit / Debit Card
        </button>
        <button
          onClick={handleBankTransfer}
          className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
        >
          Bank Transfer
        </button>
      </div>
    );
    
    return ReactDOM.createPortal(
      dropdownContent,
      document.body
    );
  };

  const renderCoursesDropdown = () => (
    <div
      ref={coursesDropdownRef}
      className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-md w-full max-w-[600px] md:w-[600px] md:max-w-[600px] py-4 z-50 border border-gray-200
        max-h-[70vh] overflow-y-auto
        sm:w-[90vw] sm:max-w-[90vw]
        "
      style={{ minWidth: '220px' }}
      onClick={(e) => e.stopPropagation()}
      role="menu"
      aria-label="Courses Dropdown"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={course.path}
            className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-all duration-200 group"
            onClick={() => {
              setShowCoursesDropdown(false);
              navigate(course.path);
            }}
            role="menuitem"
            tabIndex={0}
          >
            <div className="mt-1 flex-shrink-0">
              {course.icon}
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-gray-900 group-hover:text-blue-600">
                {course.name}
              </div>
              <div className="text-sm text-gray-500">
                {course.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav className="bg-gray-900 lg:h-24 h-28 md:px-0 lg:px-10 px-2 shadow-lg lg:flex" aria-label="Main Navigation" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="mx-auto flex items-center lg:w-[15%] justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Traincape Technology"
              className="w-[130px] h-[130px]"
              width="130"
              height="130"
            />
          </div>

          <div className="hidden md:flex lg:hidden justify-between w-full items-center text-white">
            <div className="flex md:space-x-3 space-x-6 mx-auto">
              <Link to="/" className={`${isActive("/")} text-xl`} aria-label="Home">
                Home
              </Link>
              <Link to="/about-us" className={`${isActive("/about-us")} text-xl`} aria-label="About Us">
                About
              </Link>
              <Link
                to="/our-services"
                className={`${isActive("/our-services")} text-xl`}
                aria-label="Our Services"
              >
                Services
              </Link>
              <Link
                to="/review-page"
                className={`${isActive("/review-page")} text-xl`}
                aria-label="Reviews"
              >
                Reviews
              </Link>
              <div className="relative">
                <Link
                  to="/Courses-details"
                  className={`${isActive("/Courses-details")} text-xl flex items-center gap-2 text-white relative`}
                  aria-label="Courses Details"
                  ref={coursesButtonRef}
                  onClick={(e) => {
                    if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
                      e.preventDefault();
                      setShowCoursesDropdown(!showCoursesDropdown);
                    }
                  }}
                >
                  Courses
                  <FaChevronDown 
                    className="text-sm ml-1 inline cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-teal-300" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowCoursesDropdown(!showCoursesDropdown);
                    }}
                  />
                  {showCoursesDropdown && renderCoursesDropdown()}
                </Link>
              </div>
              <Link
                to="/contact-us"
                className={`${isActive("/contact-us")} text-xl`}
                aria-label="Contact Us"
              >
                Contact
              </Link>
              <Link to="/training" className={`${isActive("/training")} text-xl`} aria-label="Training">
                Training
              </Link>
            </div>

            <div className="flex items-center space-x-3 px-2">
              <div className="relative">
                <button
                  ref={payNowButtonRef}
                  className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
                  onClick={handlePayNow}
                  aria-expanded={showDropdown}
                  aria-haspopup="true"
                >
                  Pay Now
                </button>
              </div>

              {token ? (
                <div>
                  <DashboardHeader />
                </div>
              ) : (
                <button
                  className="text-black font-bold bg-white hover:bg-teal-100 px-4 py-2 rounded-md"
                  onClick={handleLogin}
                  aria-label="Login"
                >
                  Login
                </button>
              )}
            </div>
          </div>

          <div className="md:hidden" onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!isMenuOpen);
          }}>
            <button aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? (
                <ImCross className="text-white text-3xl" />
              ) : (
                <GiHamburgerMenu className="text-white text-3xl" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 p-4`}
          aria-hidden={!isMenuOpen}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end">
            <button 
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <ImCross className="text-white text-3xl cursor-pointer" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`${isActive("/")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`${isActive("/about-us")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/our-services"
              className={`${isActive("/our-services")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/review-page"
              className={`${isActive("/review-page")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </Link>
            <div className="relative">
              <Link
                to="/Courses-details"
                className={`${isActive("/Courses-details")} text-lg flex items-center gap-1 relative`}
                aria-label="Courses Details"
                ref={coursesButtonRef}
                onClick={(e) => {
                  if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
                    e.preventDefault();
                    setShowCoursesDropdown(!showCoursesDropdown);
                  }
                }}
              >
                Courses <FaChevronDown 
                  className="text-sm mt-1 cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-teal-300" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowCoursesDropdown(!showCoursesDropdown);
                  }}
                />
                {showCoursesDropdown && renderCoursesDropdown()}
              </Link>
            </div>
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/training"
              className={`${isActive("/training")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Training
            </Link>

            <div className="relative">
              <button
                ref={mobilePayNowButtonRef}
                className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none w-full"
                onClick={handlePayNow}
              >
                Pay Now
              </button>
              
              {showDropdown && (
                <div 
                  ref={mobileDropdownRef}
                  className="mt-2 bg-white text-black shadow-lg w-full rounded-md overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={(e) => handleExternalLink("https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB", e)}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    PayPal
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://buy.stripe.com/8wM2az10TaYQgww29d", e)}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Credit / Debit Card
                  </button>
                  <button
                    onClick={handleBankTransfer}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Bank Transfer
                  </button>
                </div>
              )}
            </div>

            {token ? (
              <div>
                <DashboardHeader />
              </div>
            ) : (
              <button
                className="text-black font-bold bg-white hover:bg-teal-100 px-4 py-2 rounded-md"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>

        <div className="hidden lg:flex justify-between w-full items-center text-white">
          <div className="flex space-x-6 mx-auto">
            <Link to="/" className={`${isActive("/")} text-xl`}>
              Home
            </Link>
            <Link to="/about-us" className={`${isActive("/about-us")} text-xl`}>
              About
            </Link>
            <Link
              to="/our-services"
              className={`${isActive("/our-services")} text-xl`}
            >
              Services
            </Link>
            <Link
              to="/review-page"
              className={`${isActive("/review-page")} text-xl`}
            >
              Reviews
            </Link>
            <div className="relative">
              <Link
                to="/Courses-details"
                className={`${isActive("/Courses-details")} text-xl flex items-center gap-2 text-white relative`}
                aria-label="Courses Details"
                ref={coursesButtonRef}
                onClick={(e) => {
                  if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
                    e.preventDefault();
                    setShowCoursesDropdown(!showCoursesDropdown);
                  }
                }}
              >
                Courses
                <FaChevronDown 
                  className="text-sm ml-1 inline cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-teal-300" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowCoursesDropdown(!showCoursesDropdown);
                  }}
                />
                {showCoursesDropdown && renderCoursesDropdown()}
              </Link>
            </div>
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} text-xl`}
            >
              Contact
            </Link>
            <Link to="/training" className={`${isActive("/training")} text-xl`}>
              Training
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <button
                ref={payNowButtonRef}
                className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
                onClick={handlePayNow}
                aria-expanded={showDropdown}
                aria-haspopup="true"
              >
                Pay Now
              </button>
            </div>

            {token ? (
              <div>
                <DashboardHeader />
              </div>
            ) : (
              <button
                className="text-black font-bold bg-white hover:bg-teal-100 px-4 py-2 rounded-md"
                onClick={handleLogin}
                aria-label="Login"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}
      </nav>

      {renderDropdown()}

      {showBankDetails && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999]"
          onClick={(e) => e.stopPropagation()}
        >
          <div 
            className="bg-white rounded-lg p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Scanner Image */}
              <img
                src={scannerImg}
                alt="Scan to Pay"
                className="w-96 h-96 object-contain rounded-md border border-gray-200 bg-gray-50"
              />
              {/* Details and Copy Button */}
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Bank Account Details</h2>
                  <button
                    onClick={() => setShowBankDetails(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close modal"
                  >
                    <ImCross />
                  </button>
                </div>
                <div className="border border-gray-200 rounded-md p-4 mb-4 bg-gray-50">
                  {Object.entries(bankDetails).map(([key, value]) => (
                    <div key={key} className="mb-2">
                      <span className="font-medium">{key}: </span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center px-4 py-2 rounded-md ${
                      copied ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {copied ? (
                      <>
                        <FaCheck className="mr-2" /> Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy className="mr-2" /> Copy Details
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 