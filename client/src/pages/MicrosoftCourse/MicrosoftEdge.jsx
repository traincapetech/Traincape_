import React, { useState, useEffect } from 'react'
import Overview from './MicrosoftOverview';
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

const NavTab = ({ label, active, onClick, icon }) => {
    return (
      <button
        onClick={onClick}
        className={`text-lg flex w-full gap-4 items-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-6 py-4 rounded-xl transition-all duration-300 ${active ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' : 'text-gray-300 hover:text-white'}`}
      >
        {icon && <span className="my-auto text-xl">{icon}</span>}
        <span className="font-semibold">{label}</span>
      </button>
    );
  };

// Reusable TabContainer Component with Modern UI
const TabContainer = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="grid sm:grid-flow-row grid-cols-1 lg:flex">
        {/* Modern Sidebar */}
        <nav
          className={`bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white lg:w-80 w-full p-6 flex flex-col space-y-4 lg:block ${isSidebarOpen ? 'block' : ''} shadow-2xl`}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Microsoft Edge
            </h2>
            <p className="text-gray-400 text-center text-sm mt-2">Microsoft Edge Certification</p>
          </div>
          
          {Object.keys(tabs).map((key) => (
            <NavTab
              key={key}
              label={key}
              active={activeTab === key}
              onClick={() => setActiveTab(key)}
              icon={
                key === 'Overview'
                  ? <FaHome className='w-6 h-6' />
                  : key === 'Certify'
                  ? <FaCertificate className='w-6 h-6' />
                  : key === 'Learn'
                  ? <FaBook className='w-6 h-6' />
                  : key === 'Contact'
                  ? <FaPhoneVolume className='w-6 h-6' />
                  : key === 'Resources'
                  ? <GrResources className='w-6 h-6' />
                  : key === 'Practice'
                  ? <BsFillPenFill className='w-6 h-6' />
                  : <GiPathDistance className='w-6 h-6' />
              }
            />
          ))}
        </nav>

        {/* Main Content with Modern Design */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{activeTab}</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 leading-relaxed">{tabs[activeTab]}</div>
          </div>
        </div>

        {/* Mobile Sidebar Toggle */}
        <button
          className="lg:hidden fixed top-4 left-4 p-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg z-50"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const MicrosoftEdge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create a combined Overview component that includes Learn and My Pathway
   const navigate = useNavigate();

  // Combined Overview (Overview + Learn + MyPathway)
  const CombinedOverview = () => (
    <div className="space-y-8">
      {/* Original Overview Content */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <Overview title={"Microsoft Edge"} />
      </div>
      
      {/* Learn Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaBook className="mr-3 text-green-600" />
          Learning Resources
        </h3>
        <Learn title={"Microsoft Edge"} />
      </div>
      
      {/* My Pathway Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <GiPathDistance className="mr-3 text-purple-600" />
          Career Pathway
        </h3>
        <MyPathway title={"Microsoft Edge"} />
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
        <Certify title={"Microsoft Edge"} />
      </div>
      
      {/* Practice Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <BsFillPenFill className="mr-3 text-yellow-600" />
          Practice & Assessment
        </h3>
        <Practice course={"Microsoft"} subTopic={"MicrosoftEdge"}/>
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
            <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">Microsoft</span>
            <span className="text-gray-400">›</span>
            <span className="text-blue-600 font-semibold">Edge</span>
          </div>
        </div>
      </div>

       {/* Breadcrumb */}
      <div className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <span
              className="text-gray-500 hover:text-blue-600 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Home
            </span>
            <span className="text-gray-400">›</span>
            <span
              className="text-gray-500 hover:text-blue-600 cursor-pointer"
              onClick={() => navigate('/training')}
            >
              Training
            </span>
            <span className="text-gray-400">›</span>
            <span
              className="text-gray-500 hover:text-blue-600 cursor-pointer"
              onClick={() => navigate('/microsoft')}
            >
              Microsoft
            </span>
            <span className="text-gray-400">›</span>
            <span className="text-blue-600 font-semibold">Azure Administrator</span>
          </div>
        </div>
      </div>

      <TabContainer tabs={tabs} />
    </>
  );
};

export default MicrosoftEdge;
