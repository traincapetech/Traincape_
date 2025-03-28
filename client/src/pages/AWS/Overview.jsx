import React from 'react';
import Banner from '../../assets/AwsBanner.png'
// import {  FaBook, FaPencil } from 'react-icons/fa6';
// import { PiCertificateFill } from "react-icons/pi";
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Overview = ({ title }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
    return (
      <div className="m-0">
        <h1 className="font-bold text-4xl md:text-5xl text-blue-900 text-center mb-6">{title} Certificate</h1>
        <img src={Banner} alt="" className="w-full h-auto mb-6" />
        <h3 className="text-2xl md:text-3xl font-bold my-2 text-slate-700">
          Kick-start your career with a {title} certification!
        </h3>
        <h5 className="text-sm md:text-base lg:text-lg text-gray-700">
          This program provides a comprehensive certification pathway designed to validate critical skills and knowledge for individuals aspiring to excel in the field of cloud security. Focused on Amazon Web Services (AWS), the program empowers learners to protect cloud environments, implement best practices, and defend against evolving threats.
          <br /><br />
          Achieving an {title} demonstrates a learner’s ability to secure AWS environments, ensuring they are equipped with the technical expertise required to manage real-world challenges from day one. This certification builds confidence in employers by showcasing a professional’s readiness to safeguard cloud infrastructures effectively.
        </h5>
        
        {/* <div className="flex flex-col md:flex-row gap-3 justify-center mt-7">
          <div className="py-5 px-16 border-2 bg-cyan-100 flex justify-center items-center text-center">
            <FaBook className="w-7 h-7 mb-2" />
            <h2 className="text-lg">Learn</h2>
          </div>
  
          <div className="py-5 px-16 border-2 bg-cyan-100 flex justify-center items-center text-center">
            <FaPencil className="w-7 h-7 mb-2" />
            <h2 className="text-lg">Practice</h2>
          </div>
  
          <div className="py-5 px-16 border-2 bg-cyan-100 flex justify-center items-center text-center">
            <PiCertificateFill className="w-8 h-8 mb-2" />
            <h2 className="text-lg">Certify</h2>
          </div>
        </div> */}
      </div>
    );
  };
  
export default Overview