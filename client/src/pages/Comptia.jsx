import React from 'react'
import comptia from '../assets/comptia.json';
import Lottie from 'lottie-react';
import ComptiaCourse from '../components/ComptiaCourse';
import A from '../assets/comptia/A.jpeg';
import CASP from '../assets/comptia/CASP.jpeg';
import cloud from '../assets/comptia/cloud.jpeg';
import CYSA from '../assets/comptia/CYSA.jpeg';
import Data from '../assets/comptia/Data.jpeg';
import ITF from '../assets/comptia/ITF.jpeg';
import Linux from '../assets/comptia/Linux.jpeg';
import Network from '../assets/comptia/Network.jpeg';
import PenTest from '../assets/comptia/PenTest.jpeg';
import Project from '../assets/comptia/Project.jpeg';
import Security from '../assets/comptia/Security.jpeg';
import Server from '../assets/comptia/Server.jpeg';
import { useEffect } from 'react';
const Comptia = () => {

    
  const courseData = [
    {
      image :Security,
      title: "Security+ (SY0-701) CertMaster Learn",
      description: "A comprehensive course on network fundamentals.",
     
      url : "/comptiaSecurity"
    },
    {
      image : Linux , 
      title: "Linux+ Certification Exam Objectives",
      description: "Learn to secure and protect systems like a pro.",
     url: "/comptiaLinux"
    },
    {
      image: Project,
      title: "CompTIA Project+ PK0-005 Certification",
      description: "Master the art of cloud-based technology and services.",
      url: "/comptiaProject"
    },
    {
      image:Project ,
        title: "CompTIA Project+ Certification Exam Objectives - PK0-004",
        description: "Master the art of cloud-based technology and services.",
        url: "/comptiaProject004"
      },
      {
      image: PenTest,
        title: "CompTIA PenTest+ Certification Exam Objectives - PT0-002",
        description: "Master the art of cloud-based technology and services.",
        url:"/comptiaPentest"
      },
      {
      image: A,
        title: "CompTIA A+ Certification Exam Core 1 Objectives - CORE 1 (220-1101)",
        description: "Master the art of cloud-based technology and services.",
        url:"/comptiaA"
      },
      {
      image: Network,
        title: "CompTIA Network+ Certification Exam Objectives - N10-008",
        description: "Master the art of cloud-based technology and services.",
        url:"/comptiaNetwork"
      },
      {
       image: cloud,
        title: "CompTIA Cloud+ CV0-003",
        description: "Master the art of cloud-based technology and services.",
        url:"/comptiaCloud"
      },
      {
      image: Server,
        title: "CompTIA Server+ Certification Exam Objectives - SK0-005",
        description: "Master the art of cloud-based technology and services.",
        url : "/comptiaServer"
      },
      {
        image: Data,
        title: "CompTIA Data+ Certification Exam Objectives - DA0-001",
        description: "Master the art of cloud-based technology and services.",
        url: "/comptiaData"
      },
      {
        image: cloud,
        title: "CompTIA Cloud Essentials+ - CLO-002",
        description: "Master the art of cloud-based technology and services.",
        url: "/comptiaCloudCLO"
      },
      {
        image :Security,
        title: "CompTIA Security+ Certification Exam Objectives - SY0-601",
        description: "Master the art of cloud-based technology and services.",
        url: "/ComptiaSecurity601"
      },
      
      {
        image: cloud,
        title: "CompTIA Cybersecurity Analyst",
        description: "Master the art of cloud-based technology and services.",
        url : "/comptiaCybersecurity"
      },
      
      {
        image: CASP,
        title: "CompTIA Advanced Security Practitioner (CASP+) Certification Exam Objectives -CAS-004",
        description: "Master the art of cloud-based technology and services.",
        url: "/comptiaAdvance"
      },
      {
        image: Network,
        title: "CompTIA Network+ Certification Exam Objectives -N10-007",
        description: "Master the art of cloud-based technology and services.",
        url:"/comptiaNetwork007"
      },


  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
            <div className="course-detail text-center bg-blue-100 py-10">
        <div className="info flex flex-col md:flex-row gap-6 items-center px-5">
          <Lottie animationData={comptia} className="w-full md:w-1/2" />
          <div className="text w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-7 text-cyan-900">CompTIA</h2>
            <p className="text-base md:text-lg text-gray-700">
              CompTIA (Computing Technology Industry Association) is a globally recognized non-profit organization offering certifications to validate IT skills across diverse career paths like IT support, network administration, cybersecurity, and data analytics. With certifications structured into pathways such as Core Skills, Infrastructure, Cybersecurity, and Data Analytics, CompTIA empowers professionals to excel in their fields.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-10">
        {courseData.map((course, index) => (
          <ComptiaCourse
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

export default Comptia