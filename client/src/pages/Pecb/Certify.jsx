import React from 'react';
import PECB_Overview from '../../assets/PECB1.png';
import { FaBook, FaPencil } from 'react-icons/fa6';
import { PiCertificateFill } from "react-icons/pi";
import { useEffect } from 'react';

const Overview = ({ title }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);

    return (
      <div className="m-0">
        <h1 className="font-bold text-4xl md:text-5xl text-blue-900 text-center mb-6">{title} Certificate</h1>
        <img src={PECB_Overview} alt="" className="w-full h-[45vh] mb-6" />
        <h3 className="text-2xl md:text-3xl font-bold my-2 text-slate-700">
          Advance your career with the {title} certification!
        </h3>
        <h5 className="text-sm md:text-base lg:text-lg text-gray-700">
          The {title} certification by PECB provides a structured pathway to validate your expertise and skills in compliance, governance, and management systems. This program is meticulously designed to meet the needs of professionals who aim to align with international standards and industry best practices.
          <br /><br />
          Achieving the {title} certification highlights your commitment to professional growth and your ability to implement and maintain high-quality management systems. It ensures that you are well-equipped to address modern organizational challenges and enhance operational efficiency while adhering to globally recognized benchmarks.
          <br /><br />
          With the PECB certification, you demonstrate your dedication to excellence and your readiness to make a significant impact in your field. Employers and organizations value PECB-certified professionals for their practical knowledge and ability to drive compliance and continuous improvement.
        </h5>
        
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-7">
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
        </div>
      </div>
    );
};

export default Overview;
