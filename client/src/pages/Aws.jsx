import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import comptia from '../assets/comptia.json';
import ComptiaCourse from '../components/ComptiaCourse';
import Advance from '../assets/AWS/advance.png';
import cloud from '../assets/AWS/cloud.png';
import data from '../assets/AWS/data.png';
import developer from '../assets/AWS/developer.png';
import deveops from '../assets/AWS/Devops.png';
import machine from '../assets/AWS/machine.png';
import security from '../assets/AWS/security.png';
import solution from '../assets/AWS/solution.png';
import sysops from '../assets/AWS/sysops.png';
import AddToCartButton from '../components/AddToCartButton';
import { useNavigate } from 'react-router-dom';
const Aws = () => {

 const courseData = [
    {
      image: security,
      title: "AWS Certified Security",
      url: "/awsSecurity",
      course: "AWS",
      subCourse: "AwsCertifiedSecurity"
    },
    {
      image: sysops,
      title: "AWS Certified SysOps Administrator",
      url: "/awsSysops",
      course: "AWS",
      subCourse: "AwsCertifiedSysOps"
    },
    {
      image: developer,
      title: "AWS Certified Developer",
      url: "/awsDeveloper",
      course: "AWS",
      subCourse: "AwsCertifiedDeveloper"
    },
    {
      image: deveops,
      title: "AWS Certified DevOps Engineer",
      url: "/awsDevops",
      course: "AWS",
      subCourse: "AwsCertifiedDevOps"
    },
    {
      image: machine,
      title: "AWS Certified Machine Learning",
      url: "/awsMachine",
      course: "AWS",
      subCourse: "AwsCertifiedMachineLearning"
    },
    {
      image: data,
      title: "AWS Certified Data Analytics",
      description: "Master the art of cloud-based technology and services.",
      url: "/awsData",
      course: "AWS",
      subCourse: "AwsCertifiedData"
    },
    {
      image: cloud,
      title: "AWS Certified cloud practitioner",
      url: "/awsCloud",
      course: "AWS",
      subCourse: "AwsCertifiedCloud"
    },
    {
      image: solution,
      title: "AWS Certified Solutions Architect",
      url: "/awsSolution",
      course: "AWS",
      subCourse: "AwsCertifiedSolutionsArchitect"
    },
    {
      image: Advance,
      title: "AWS Certified Advanced Networking",
      url: "/awsNetworking",
      course: "AWS",
      subCourse: "AwsCertifiedAdvancedNetworking"
    },
  ];

  const navigate=useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  
    return () => clearTimeout(timeout);
  }, []);


    return (
        <>
                          <AddToCartButton />
        
            {/* Hero Section */}
      <div className="course-detail text-center bg-blue-100 py-10">
        <div className="info flex flex-col md:flex-row gap-6 items-center px-5">
          <Lottie 
            animationData={comptia} 
            className="w-full md:w-1/2" 
            onError={(error) => {
              console.warn('Lottie animation error:', error);
            }}
          />
          <div className="text w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-7 text-cyan-900">
              <a 
                href="https://aws.amazon.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                title="Visit AWS Official Website"
              >
                AWS
              </a>
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              AWS (Amazon Web Services) is a pioneering cloud computing platform that empowers businesses to innovate, scale, and transform globally. Offering a vast array of services, including storage, AI, machine learning, and analytics, AWS delivers unmatched flexibility, security, and reliability. With its pay-as-you-go model and global reach, AWS is the trusted choice for startups, enterprises, and government organizations alike.
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
          <span className="ml-4">AWS</span>
        </div>
      </div>
      {/* Courses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 py-10">
        {courseData.map((course, index) => (
          <ComptiaCourse
            key={index}
            image={course.image}
            title={course.title}
            url={course.url}
            course={course.course}
            subCourse={course.subCourse}
          />
        ))}
      </div>
        </>

    )
}

export default Aws