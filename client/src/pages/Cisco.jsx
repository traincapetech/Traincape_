import React from 'react'
import comptia from '../assets/comptia.json';
import Lottie from 'lottie-react'; 
import CiscoCourse from '../components/CiscoCourse.jsx';
import CiscoCCST from '../assets/Cisco/Cisco-ccst.png';
import CiscoCCT from '../assets/Cisco/CCT.png';
import CCSTsc from '../assets/Cisco/CCSTcybersecurity.png';
import CCTRS from '../assets/Cisco/CCT-RS.jpg'
import CCTDC from '../assets/Cisco/cct-data-center.png'
import CCNA from '../assets/Cisco/CCNA.png'
import CCCA from '../assets/Cisco/CCCA.png'
import CCNPEnterprise from '../assets/Cisco/ccnpEnterprise.png'
import CCNPSecurity from '../assets/Cisco/ccnpSecurity.png'
import CCNPDatacenter from '../assets/Cisco/ccnpDatacenter.png'
import CCNPServiceprovider from '../assets/Cisco/ccnpServiceprovider.png'
import CCNPCollaboration from '../assets/Cisco/ccnpCollaboration.png'
import CCNPDevnet from '../assets/Cisco/CCNPDevNet.png'
import CCIEenterpriseinfa from '../assets/Cisco/CCIEEnterpriseInfastructure.png'
import CCIEenterpriseWireless from '../assets/Cisco/CCIEWireless.png'
import CCIESecurity from '../assets/Cisco/CCIESecurity.png'
import CCIEDatacenter from '../assets/Cisco/CCIEdatacenter.png'
import CCIEServiceprovider from '../assets/Cisco/CCIEserviceprovider.png'
import CCIECollabration from '../assets/Cisco/CCIECollabration.png'
import { useNavigate } from 'react-router-dom';

const Cisco = () => {

    
  const courseData = [
    {
      image :CiscoCCST,
      title: "Cisco Certified Support Technician (CCST)",
      description: "A comprehensive course on network fundamentals.",
     
      url : "/CCSTsupportTech"
    },
    {
      image : CCSTsc, 
      title: "CCST Cybersecurity",
      description: "Learn to secure and protect systems like a pro.",
     url: "/CCSTcybersecurity"
    },
    {
      image: CiscoCCST,
      title: "CCST Networking",
      description: "Master the art of cloud-based technology and services.",
      url: "/CCSTNetworking"
    },
    {
      image:CiscoCCT ,
        title: "Cisco Certified Technician (CCT)",
        description: "Master the art of cloud-based technology and services.",
        url: "/CCTtechnician"
      },
      {
      image: CCTRS,
        title: "CCT Routing & Switching (Exam: 100-490 RSTECH)",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCTroutingSwitching"
      },
      {
      image: CCTDC,
        title: "CCT Data Center (Exam: 010-151 DCTECH)",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCTdatacenter"
      },
      {
      image: CCNA,
        title: "Cisco Certified Network Associate (CCNA)",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCNA"
      },
      {
       image: CCCA,
        title: "Cisco Certified CyberOps Associate",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCCA"
      },
      {
      image: CCNPEnterprise,
        title: "CCNP Enterprise",
        description: "Master the art of cloud-based technology and services.",
        url : "/CCNPenterprises"
      },
      {
        image: CCNPSecurity,
        title: "CCNP Security",
        description: "Master the art of cloud-based technology and services.",
        url: "/CCNPsecurity"
      },
      {
        image: CCNPDatacenter,
        title: "CCNP Data Center",
        description: "Master the art of cloud-based technology and services.",
        url: "/CCNPdatacenter"
      },
      {
        image :CCNPServiceprovider,
        title: "CCNP Service Provider",
        description: "Master the art of cloud-based technology and services.",
        url: "/CCNPserviceprovider"
      },
      
      {
        image: CCNPCollaboration,
        title: "CCNP Collaboration",
        description: "Master the art of cloud-based technology and services.",
        url : "/CCNPcollaboration"
      },
      
      {
        image: CCNPDevnet,
        title: "CCNP DevNet (Developer)",
        description: "Master the art of cloud-based technology and services.",
        url: "/CCNPdevnet"
      },
      {
        image: CCIEenterpriseinfa,
        title: "CCIE Enterprise Infrastructure",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCIEinfastructure"
      },
      {
        image: CCIEenterpriseWireless,
        title: "CCIE Enterprise Wireless",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCIEwireless"
      },
      {
        image: CCIESecurity,
        title: "CCIE Security",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCIEsecurity"
      },
      {
        image: CCIEDatacenter,
        title: "CCIE Data Center",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCIEdatacenter"
      },
      {
        image: CCIEServiceprovider,
        title: "CCIE Service Provider",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCIEserviceprovider"
      },
      {
        image: CCIECollabration,
        title: "CCIE Collaboration",
        description: "Master the art of cloud-based technology and services.",
        url:"/CCIEcollab"
      }
    ];
    const navigate=useNavigate();
    return (
        <>
            <div className="course-detail text-center bg-blue-100 py-10">
        <div className="info flex flex-col md:flex-row gap-6 items-center px-5">
          <Lottie animationData={comptia} className="w-full md:w-1/2" />
          <div className="text w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-7 text-cyan-900">CISCO</h2>
            <p className="text-base md:text-lg text-gray-700">
            A Cisco CCNA (Cisco Certified Network Associate) course is an entry-level IT certification offered by Cisco that provides foundational knowledge in networking fundamentals, covering topics like network access, IP connectivity, routing, switching, security basics, and more, essentially preparing individuals to install, configure, operate, and troubleshoot basic network devices like routers and switches within a Cisco environment; it's widely recognized as a stepping stone for careers in network administration and IT support roles. 
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-gray-600 font-bold py-2 px-4 rounded"
        >
          <span className="hover:text-gray-800">Home</span>
        </button>
        <div className="flex items-center text-gray-500 font-bold">
          <span>{" > "}</span>
          <button
            onClick={() => {
              navigate("/training");
            }}
            className="text-gray-600 font-bold py-2 px-4 rounded"
          >
            <span className="hover:text-gray-800">Training</span>
          </button>
          <span>{" > "}</span>
          <span className="ml-4">Cisco</span>
        </div>
      </div>
      {/* Courses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-10">
        {courseData.map((course, index) => (
          <CiscoCourse
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            url={course.url}
          />
        ))}
      </div>
        </>
    )
}

export default Cisco