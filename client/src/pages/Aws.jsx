import React from 'react';
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
import { useEffect } from 'react';
import AddToCartButton from '../components/AddToCartButton';
const Aws = () => {

 const courseData = [
    {
      image :security,
      title: "AWS Certified Security",
      
     
      url : "/awsSecurity"
    },
   
    {
      image: sysops,
      title: "AWS Certified SysOps Administrator",
      url : "/awsSysops"
      
    },
    {
      image:developer ,
        title: "AWS Certified Developer",
       url : "/awsDeveloper"
        
      },
      {
      image: deveops,
        title: "AWS Certified DevOps Engineer",
         url : "/awsDevops"
        
      },
      {
      image: machine,
        title: "AWS Certified Machine Learning",
       url : "/awsMachine"
        
      },
      {
      image: data,
        title: "AWS Certified Data Analytics",
        description: "Master the art of cloud-based technology and services.",
         url : "/awsData"
      },
      {
       image: cloud,
        title: "AWS Certified cloud practitioner",
       url : "/awsCloud"
        
      },
      {
      image: solution,
        title: "AWS Certified Solutions Architect",
        url : "/awsSolution"
      },
      {
        image: Advance,
        title: "AWS Certified Advanced Networking",
       url : "/awsNetworking"
        
      },
     


  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <>
                          <AddToCartButton />
        
            {/* Hero Section */}
      <div className="course-detail text-center bg-blue-100 py-10">
        <div className="info flex flex-col md:flex-row gap-6 items-center px-5">
          <Lottie animationData={comptia} className="w-full md:w-1/2" />
          <div className="text w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-7 text-cyan-900">AWS</h2>
            <p className="text-base md:text-lg text-gray-700">
              AWS (Amazon Web Services) is a pioneering cloud computing platform that empowers businesses to innovate, scale, and transform globally. Offering a vast array of services, including storage, AI, machine learning, and analytics, AWS delivers unmatched flexibility, security, and reliability. With its pay-as-you-go model and global reach, AWS is the trusted choice for startups, enterprises, and government organizations alike.
            </p>
          </div>
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
          />
        ))}
      </div>
        </>

    )
}

export default Aws