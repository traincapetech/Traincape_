import React, { useState, useEffect } from 'react'
import Overview from './Overview';
import Certify from './Certify';
import Learn from './Learn';
import MyPathway from './MyPathway';
import { FaHome, FaCertificate, FaBook } from 'react-icons/fa';
import ContactUs from '../ContactUs';
import { FaPhoneVolume } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import Practice from './Practice';
import { BsFillPenFill } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import PecbBrochureSection from '../../components/PecbBrochureSection';
import { useNavigate } from 'react-router-dom';


const NavTab = ({ label, active, onClick, icon }) => {
    return (
      <button
        onClick={onClick}
        className={`text-lg flex gap-4 items-center w-full hover:bg-gray-700 px-4 py-2 rounded transition ${active ? 'bg-gray-700' : ''} md:text-base lg:text-lg`}
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
}, []);
  return (
    <div className="grid sm:grid-flow-row grid-cols-1 lg:flex">
      {/* Sidebar */}
      <nav
        className={`bg-gray-800 text-white lg:w-64 w-full p-4 flex flex-col space-y-4 lg:block ${isSidebarOpen ? 'block' : ''} `}
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
                : < GiPathDistance 
 className='w-7 h-7' />
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
        {/* &#9776; */}
      </button>
    </div>
  );
};



const CybersecurityAuditTrainings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseName = "PECB Cybersecurity Audit Trainings";

  // Create a combined Overview component that includes Learn, My Pathway, and Brochure
   const navigate = useNavigate();

  // Combined Overview (Overview + Learn + MyPathway)
  const CombinedOverview = () => (
    <div className="space-y-8">
      {/* Original Overview Content */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <Overview title={courseName} />
      </div>
      
      {/* Brochure Section */}
      <PecbBrochureSection courseName={courseName} />
      
      {/* Learn Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaBook className="mr-3 text-green-600" />
          Learning Resources
        </h3>
        <Learn title={courseName} />
      </div>
      
      {/* My Pathway Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <GiPathDistance className="mr-3 text-purple-600" />
          Career Pathway
        </h3>
        <MyPathway title={courseName} />
      </div>
    </div>
  );

  // Create a combined Certify component that includes Practice
  const CombinedCertify = () => (
    <div className="space-y-8">
      {/* Original Certify Content */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaCertificate className="mr-3 text-orange-600" />
          Certification Details
        </h3>
        <Certify title={courseName} />
      </div>
      
      {/* Practice Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <BsFillPenFill className="mr-3 text-yellow-600" />
          Practice & Assessment
        </h3>
        <Practice course={"PECB"} subTopic={"PECBCybersecurityAuditTraining"}/>
      </div>
    </div>
  );

  const tabs = {
    Overview: <CombinedOverview />,
    Certify: <CombinedCertify />,
  };

  return (
    <>
      {/* Modern Breadcrumb Navigation */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">Home</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">Training</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">PECB</span>
            <span className="text-gray-400">›</span>
            <span className="text-blue-600 font-semibold">Cybersecurity Audit Trainings</span>
          </div>
        </div>
      </div>

      <TabContainer tabs={tabs} />
    </>
  );
};

export default CybersecurityAuditTrainings;