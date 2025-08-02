import React, { useEffect, useState } from 'react'
import Certify from './CiscoCertify';
import Learn from './CiscoLearn';
import MyPathway from './CiscoMyPathway';
//import Resources from './Resources'
import { FaHome, FaCertificate, FaBook, FaAws } from 'react-icons/fa'; // Import specific icons from react-icons
import ContactUs from '../ContactUs';
import { FaPhoneVolume } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import Practice from './CiscoPractice';
import { BsFillPenFill } from "react-icons/bs";
import Overview from './CiscoOverview';
import { GiPathDistance } from "react-icons/gi";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";


const NavTab = ({ label, active, onClick, icon }) => {
    return (
      <button
        onClick={onClick}
        className={`text-lg flex w-full gap-4 items-center hover:bg-gray-700 px-4 py-2 rounded transition ${active ? 'bg-gray-700' : ''} md:text-base lg:text-lg`}
      >
        {icon && <span className="my-auto">{icon}</span>} {/* Display icon if available */}
        {label}
      </button>
    );
  };
  

// Reusable TabContainer Component
const TabContainer = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to toggle the sidebar
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
  return (
    <div className="grid sm:grid-flow-row grid-cols-1 lg:flex">
      {/* Sidebar */}
      <nav
        className={` bg-gray-800 text-white lg:w-64 w-full p-4 flex flex-col space-y-4 lg:block ${isSidebarOpen ? 'block' : ''} `}
      >
        {/* <div className="text-2xl font-bold mb-6">My App</div> */}
        {Object.keys(tabs).map((key) => (
          <NavTab
            key={key}
            label={key}
            active={activeTab === key}
            onClick={() => setActiveTab(key)}
            icon={
              key === 'Overview'
                ? <FaHome className='w-7 h-7' />
                : key === 'Certify'
                ? <FaCertificate className='w-7 h-7' />
                : key === 'Learn'
                ? <FaBook className='w-7 h-7' />
                : key === 'Contact'
                ? <FaPhoneVolume className='w-7 h-7' />
                : key === 'Resources'
                ? <GrResources className='w-7 h-7' />
                : key === 'Practice'
                ? <BsFillPenFill className='w-7 h-7' />
                : <GiPathDistance className='w-7 h-7' />
            }
          />
        ))}
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-6 m-0">
        <div className="mt-4 text-gray-600">{tabs[activeTab]}</div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden p-4 text-white bg-gray-800 absolute top-4 left-4 rounded"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        &#9776;
      </button>
    </div>
  );
};



const CCNA = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addToCart } = useCartContext();

  const toggleAnswer = (index) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    const product = {
      id: "ccna",
      title: "Cisco CCNA Certification",
      price: 3500,
      image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
      quantity: 1,
    };
    addToCart(product);
    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

    const tabs = {
        Overview: <Overview title={"Cisco Certified Network Associate (CCNA)"} />,
        Certify: <Certify title={"Cisco Certified Network Associate (CCNA)" } />,
        Learn: <Learn title={"Cisco Certified Network Associate (CCNA) "} />,
        Practice : <Practice course={"CISCO"} subTopic={"CiscoCertifiedNetworkAssociate"}/>,
        'My Pathway': <MyPathway title={"Cisco Certified Network Associate (CCNA)"} />,
        Contact: <ContactUs />,
      };
    
  return (
    <>
      <AddToCartButton />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
              alt="Cisco Logo"
              className="h-24 w-36 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Cisco Certified Network Associate <br />
            <span className="text-cyan-600">CCNA</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master networking fundamentals and launch your IT career with the industry's most respected entry-level networking certification.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Certification Course</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-40 h-20 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
              alt="Cisco Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-cyan-700 mb-4 text-center md:text-left">
            CCNA 200-301 Certification
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹3,500</h5>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Most Popular</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Cisco CCNA Certification
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹3,500</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹5,999</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">42% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 5 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-cyan-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Exam preparation materials
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-cyan-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Hands-on lab access
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-cyan-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full instructor support
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-cyan-600 border border-cyan-600 py-3 px-4 rounded-lg font-medium hover:bg-cyan-50 transition-all duration-300">
            Buy Now
          </button>
        </div>
        
        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="absolute -top-12 left-0 right-0 mx-auto w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-center text-sm font-medium">
            Item Added to Cart! 🎉
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="h-full px-4 md:px-[3rem] lg:px-[6rem] py-10">
        <div className="max-w-6xl mx-auto mt-6 bg-white p-0 rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="bg-gray-50 border-b">
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500">
              <button 
                className="inline-block p-4 text-cyan-600 border-b-2 border-cyan-600 active"
                aria-current="page"
              >
                Overview
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                Curriculum
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                Career Paths
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                FAQ
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                Reviews
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700 mb-4">
                  The Cisco Certified Network Associate (CCNA) certification is the industry's most respected networking certification for entry-level professionals. It covers a broad range of networking fundamentals based on the latest networking technologies, software development skills, and job roles.
                </p>
                <p className="text-gray-700 mb-4">
                  Our CCNA training prepares you to pass the CCNA 200-301 exam, which tests your knowledge of IP connectivity, network security, automation and programmability. This certification validates your ability to install, configure, operate, and troubleshoot medium-sized networks.
                </p>
                
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-cyan-700">
                        <strong>Sales Note:</strong> CCNA is the most in-demand networking certification in India, with a 35% increase in job postings requiring this credential in the past 2 years. With India's expanding IT infrastructure, professionals with Cisco certifications command average salaries 25-40% higher than their non-certified peers. The CCNA is particularly valuable for professionals seeking roles in leading Indian IT service providers, telecom companies, and multinational corporations. According to industry reports, over 70% of enterprise networking teams in India rely on Cisco technologies, making this certification highly sought after by employers. Our placement record shows 92% of CCNA-certified students secure networking positions within 3 months of certification, with an average starting salary of ₹6-9 LPA for freshers with this certification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Duration</h3>
                  <p className="text-gray-600">12 weeks (180 hours)</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Level</h3>
                  <p className="text-gray-600">Entry-level to Intermediate</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Exam Details</h3>
                  <p className="text-gray-600">CCNA 200-301 (120 minutes, 100+ questions)</p>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Network fundamentals and access</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">IP connectivity and services</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Security fundamentals</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Automation and programmability</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Network device configuration and troubleshooting</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Wireless, routing and switching technologies</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With a CCNA certification, you'll be qualified for positions such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Network Administrator</strong> (₹4-7 LPA)</li>
                  <li><strong>Network Engineer</strong> (₹5-9 LPA)</li>
                  <li><strong>Network Support Specialist</strong> (₹3.5-6 LPA)</li>
                  <li><strong>Help Desk Technician</strong> (₹3-5 LPA)</li>
                  <li><strong>Network Analyst</strong> (₹5-8 LPA)</li>
                </ul>
                <p className="text-gray-700">
                  CCNA is also an excellent foundation for pursuing higher-level Cisco certifications like CCNP and CCIE.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Hands-On Labs</h3>
                    <p className="text-gray-600">Practice on real Cisco equipment using our state-of-the-art virtual lab environment.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Instructors</h3>
                    <p className="text-gray-600">Learn from Cisco-certified professionals with years of industry experience.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Practice Exams</h3>
                    <p className="text-gray-600">Multiple practice tests that simulate the actual CCNA exam environment.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Job Placement Assistance</h3>
                    <p className="text-gray-600">Career guidance and placement support after successful completion of the course.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(0)}
                    >
                      <span className="font-medium text-gray-800">What are the prerequisites for the CCNA course?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        There are no formal prerequisites for the CCNA certification. However, we recommend a basic understanding of computer networking concepts and familiarity with using computers. Our course is designed to accommodate both beginners and those with some networking experience.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">How long is the CCNA certification valid?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        The CCNA certification is valid for three years. After this period, you'll need to recertify by either passing the current CCNA exam again, passing a higher-level Cisco certification exam, or earning 30 continuing education credits through the Cisco Continuing Education Program.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">Does this course include the exam fee?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        No, the course fee does not include the exam fee. The current exam fee for CCNA 200-301 is approximately ₹15,000-18,000 when scheduled through Pearson VUE. However, we do offer a discounted voucher option for students who complete our course successfully.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 font-bold mr-3">RJ</div>
                      <div>
                        <h4 className="font-semibold">Rahul Joshi</h4>
                        <p className="text-sm text-gray-500">Network Engineer at TCS</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"The CCNA course at Traincape was comprehensive and practical. The hands-on labs were invaluable in helping me understand complex networking concepts. I passed my exam on the first attempt and secured a job at TCS within two months."</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 font-bold mr-3">PG</div>
                      <div>
                        <h4 className="font-semibold">Priya Gupta</h4>
                        <p className="text-sm text-gray-500">System Administrator</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"I had no prior networking experience when I joined, but the instructors were patient and explained everything clearly. The practice exams were almost identical to the actual CCNA exam in terms of difficulty and topic coverage. Highly recommended!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CCNA;