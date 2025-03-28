import React from 'react';
import PECB_Overview from '../../assets/PECB1.png';
// import { FaBook, FaPencil } from 'react-icons/fa6';
// import { PiCertificateFill } from "react-icons/pi";
import { useEffect } from 'react';

const Overview = ({ title}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);

    return (
      <div className="m-0">
        <h1 className="font-bold text-4xl md:text-5xl text-blue-900 text-center mb-6">{title} Certificate</h1>
        <img src={PECB_Overview} alt="" className="w-full h-[45vh] mb-6" />
        <h3 className="text-2xl md:text-3xl font-bold my-2 text-slate-700">
          Elevate your professional credentials with the {title} certification!
        </h3>
        <h5 className="text-sm md:text-base lg:text-lg text-gray-700">
          This program offers a robust certification pathway tailored to validate essential skills and knowledge for individuals aiming to excel in their respective fields. Centered around PECB’s globally recognized standards, the program equips learners with the expertise to implement best practices and align with international compliance requirements.
          <br /><br />
          Achieving the {title} certification demonstrates a professional’s capability to uphold international standards, ensuring they are prepared to address industry challenges with confidence. This certification builds trust in employers by showcasing the professional’s dedication to quality, security, and excellence.
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

export default Overview;
