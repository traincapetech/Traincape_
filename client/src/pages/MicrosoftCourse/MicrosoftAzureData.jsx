import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Overview from './MicrosoftOverview';
import Certify from './Certify';
import Learn from './Learn';
import MyPathway from './MyPathway';
import { FaHome, FaCertificate, FaBook } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import Practice from './Practice';
import { BsFillPenFill } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";

// Top Nav Button
const NavTab = ({ label, active, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-4 rounded-lg text-lg font-semibold transition-all 
      ${active 
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
        : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </button>
  );
};

// Reusable Top Navigation Container
const TabContainer = ({ tabs, title, subtitle }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      
      {/* Top Navbar */}
      <nav className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-5 flex flex-col lg:flex-row items-start lg:items-center gap-4 shadow-2xl">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.keys(tabs).map((key) => (
            <NavTab
              key={key}
              label={key}
              active={activeTab === key}
              onClick={() => setActiveTab(key)}
              icon={
                key === 'Overview'
                  ? <FaHome className="w-5 h-5" />
                  : key === 'Certify'
                  ? <FaCertificate className="w-5 h-5" />
                  : key === 'Learn'
                  ? <FaBook className="w-5 h-5" />
                  : key === 'Contact'
                  ? <FaPhoneVolume className="w-5 h-5" />
                  : key === 'Resources'
                  ? <GrResources className="w-5 h-5" />
                  : key === 'Practice'
                  ? <BsFillPenFill className="w-5 h-5" />
                  : <GiPathDistance className="w-5 h-5" />
              }
            />
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{activeTab}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-gray-700">{tabs[activeTab]}</div>
        </div>
      </main>
    </div>
  );
};

// Main Page Component
const MicrosoftAzureData = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Combined Overview Content
  const CombinedOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <Overview title={"Microsoft Azure Data"} />
      </div>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaBook className="mr-3 text-green-600" />
          Learning Resources
        </h3>
        <Learn title={"Microsoft Azure Data"} />
      </div>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <GiPathDistance className="mr-3 text-purple-600" />
          Career Pathway
        </h3>
        <MyPathway title={"Microsoft Azure Data"} />
      </div>
    </div>
  );

  // Combined Certify Content
  const CombinedCertify = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaCertificate className="mr-3 text-orange-600" />
          Certification Details
        </h3>
        <Certify title={"Microsoft Azure Data"} />
      </div>
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <BsFillPenFill className="mr-3 text-yellow-600" />
          Practice & Assessment
        </h3>
        <Practice course={"Microsoft"} subTopic={"MicrosoftAzureData"}/>
      </div>
    </div>
  );

  const tabs = {
    Overview: <CombinedOverview />,
    Certify: <CombinedCertify />,
  };

  return (
    <>
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
            <span className="text-blue-600 font-semibold">Microsoft Azure Data Certification</span>
          </div>
        </div>
      </div>

      <TabContainer
      tabs={tabs}
      title="Microsoft Azure"
      subtitle="Microsoft Azure Data Certification"
    />

</>
  );
};

export default MicrosoftAzureData;