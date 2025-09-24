import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
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
      className={`text-lg flex gap-2 items-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-xl transition-all duration-300 
        ${active ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' : 'text-gray-300 hover:text-white'}`}
    >
      {icon && <span className="my-auto text-xl">{icon}</span>}
      <span className="font-semibold">{label}</span>
    </button>
  );
};

// Horizontal TabContainer
const TabContainer = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="grid grid-cols-1">

        {/* --- Horizontal NavBar --- */}
        <nav className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white w-full p-4 flex flex-col lg:flex-row items-start lg:items-center gap-4 shadow-2xl">
          
          {/* LEFT: Title */}
          <div className="flex-grow text-center lg:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Microsoft Dynamics 365 Functional
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Microsoft Dynamics 365 Functional Certification
            </p>
          </div>

          {/* RIGHT: Tabs */}
          <div className="flex flex-row gap-3 justify-center">
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
          </div>
        </nav>

        {/* --- Main Content --- */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{activeTab}</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 leading-relaxed">{tabs[activeTab]}</div>
          </div>
        </div>

      </div>
    </div>
  );
};

const MicrosoftDynamicFunctional = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Combined Sections ---
   const navigate = useNavigate();

  // Combined Overview (Overview + Learn + MyPathway)
  const CombinedOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <Overview title={"Microsoft Dynamics 365 Functional"} />
      </div>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaBook className="mr-3 text-green-600" />
          Learning Resources
        </h3>
        <Learn title={"Microsoft Dynamics 365 Functional"} />
      </div>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <GiPathDistance className="mr-3 text-purple-600" />
          Career Pathway
        </h3>
        <MyPathway title={"Microsoft Dynamics 365 Functional"} />
      </div>
    </div>
  );

  const CombinedCertify = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaCertificate className="mr-3 text-orange-600" />
          Certification Details
        </h3>
        <Certify title={"Microsoft Dynamics 365 Functional"} />
      </div>
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <BsFillPenFill className="mr-3 text-yellow-600" />
          Practice & Assessment
        </h3>
        <Practice course={"Microsoft"} subTopic={"MicrosoftDynamicFunctional"}/>
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
            <span className="text-blue-600 font-semibold">Microsoft Dynamics 365</span>
          </div>
        </div>
      </div>

      <TabContainer tabs={tabs} />
    </>
  );
};

export default MicrosoftDynamicFunctional;
