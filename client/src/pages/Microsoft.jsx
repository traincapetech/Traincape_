import React, { useEffect } from 'react'
import comptia from '../assets/comptia.json';
import Lottie from 'lottie-react';
import MicrosoftCourse from '../components/MicrosoftCourse.jsx';
import mircro from "../assets/Microsoft-Emblem.jpg";
import AddToCartButton from '../components/AddToCartButton.jsx';
import { useNavigate } from 'react-router-dom';


const Microsoft = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0,});
}, []);

    
  const courseData = [
    {
      image :mircro,
      title: "Microsoft Azure Administrator",
      description: "A comprehensive course on network fundamentals.",
     
      url : "/microsoftazureadmin"
    },
    {
      image : mircro , 
      title: "Microsoft Azure AI Fundamentals",
      description: "Learn to secure and protect systems like a pro.",
     url: "/microsoftAi"
    },
    {
      image: mircro,
      title: "Microsoft Azure Developer Associate",
      description: "Master the art of cloud-based technology and services.",
      url: "/microsoftDeveloper"
    },
    {
      image:mircro ,
        title: "Microsoft Azure Fundamentals",
        description: "Master the art of cloud-based technology and services.",
        url: "/microsoftFundamentals"
      },
      {
      image: mircro,
        title: "Microsoft Dynamics 365",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftDynamic365"
      },
      {
      image: mircro,
        title: "Microsoft Azure",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftAzure"
      },
      {
      image: mircro,
        title: "Microsoft 365",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoft365"
      },
      {
       image: mircro,
        title: "Microsoft 365 Fundamentals",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoft365fundamentals"
      },
      {
      image: mircro,
        title: "Microsoft security, compliance and Identity",
        description: "Master the art of cloud-based technology and services.",
        url : "/microsoft S C I"
      },
      {
        image: mircro,
        title: "Microsoft Power Platform",
        description: "Master the art of cloud-based technology and services.",
        url: "/microsoftpowerplatform"
      },
      {
        image: mircro,
        title: "Microsoft Azure Data Fundamentals",
        description: "Master the art of cloud-based technology and services.",
        url: "/microsoftazuredata"
      },
      {
        image :mircro,
        title: "Microsoft 365 certified teams administrator associate",
        description: "Master the art of cloud-based technology and services.",
        url: "/microsoft365associate"
      },
      
      {
        image: mircro,
        title: "Microsoft Power BI",
        description: "Master the art of cloud-based technology and services.",
        url : "/microsoftpowerbi"
      },
      
      {
        image: mircro,
        title: "Microsoft Azure Cosmos DB Developer Specialty",
        description: "Master the art of cloud-based technology and services.",
        url: "/microsoftAzurecosmos"
      },
      {
        image: mircro,
        title: "Microsoft Azure for SAP workloads Specialty",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftazureSAP"
      },
      {
        image: mircro,
        title: "Microsoft Azure Solutions Architect Expert",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftAzuresolutions"
      },
      {
        image: mircro,
        title: "Microsoft Azure Virtual Desktop Specialty",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftAzurevirtual"
      },
      {
        image: mircro,
        title: "Microsoft Dynamics 365 Sales Functional Consultant Associate",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftdynamicfunction"
      },
      {
        image: mircro,
        title: "Microsoft 365 certifications",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoft365certification"
      },
      {
        image: mircro,
        title: "Microsoft Cybersecurity Analyst",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftcyberanalyst"
      },
      {
        image: mircro,
        title: "Microsoft Ms-900: Microsoft 365 Fundamentals",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftMS-900"
      },
      {
        image: mircro,
        title: "Microsoft Pl-300 Microsoft Power Bi Certification Training",
        description: "Master the art of cloud-based technology and services.",
        url:"/microsoftpl-300"
      },


  ];
  
  const navigate = useNavigate();
    return (
        <>
                          <AddToCartButton />
        
            <div className="course-detail text-center bg-blue-100 py-10">
        <div className="info flex flex-col md:flex-row gap-6 items-center px-5">
          <Lottie animationData={comptia} className="w-full md:w-1/2" />
          <div className="text w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-7 text-cyan-900">Microsoft</h2>
            <p className="text-base md:text-lg text-gray-700">
            Microsoft is a globally recognized technology company that develops, licenses, and supports a wide range of software, hardware, and cloud services. Known for products like Windows, Office, and Azure, Microsoft plays a pivotal role in empowering individuals and organizations worldwide. Through innovative solutions in cloud computing, artificial intelligence, and productivity tools, Microsoft enables professionals to enhance their capabilities and achieve their goals in diverse industries.
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
          <span className="ml-4">Microsoft</span>
        </div>
      </div>
      {/* Courses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-10">
        {courseData.map((course, index) => (
          <MicrosoftCourse
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

export default Microsoft