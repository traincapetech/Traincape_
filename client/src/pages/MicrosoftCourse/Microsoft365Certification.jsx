import React, { useState } from 'react'
import Certify from './Certify';
import Learn from './Learn';
import MyPathway from './MyPathway';
//import Resources from './Resources'
import { FaHome, FaCertificate, FaBook, FaAws } from 'react-icons/fa'; // Import specific icons from react-icons
import ContactUs from '../ContactUs';
import { FaPhoneVolume } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import Practice from './Practice';
import { BsFillPenFill } from "react-icons/bs";
import MicrosoftOverview from './MicrosoftOverview';
import { GiPathDistance } from "react-icons/gi";
import { useEffect } from 'react';

const NavTab = ({ label, active, onClick, icon }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
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
                : <GiPathDistance className='w-7 h-7'/>
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



const Microsoft365Certification = () => {
    const tabs = {
        Overview: <MicrosoftOverview title={"Microsoft 365 certifications"} />,
        Certify: <Certify title={"Microsoft 365 certifications" } />,
        Learn: <Learn title={"Microsoft 365 certifications "} />,
        Practice : <Practice course={"Microsoft"} subTopic={"Microsoft365Associate"}/>,
        'My Pathway': <MyPathway title={"Microsoft 365 certifications"} />,
       // Resources:< Resources/>,
        Contact: <ContactUs />,
      };
    
      return <TabContainer tabs={tabs} />;
  
}

export default Microsoft365Certification;