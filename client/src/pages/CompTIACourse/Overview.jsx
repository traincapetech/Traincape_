import React, { useEffect } from 'react';
import Banner from '../../assets/comptiabanner.jpeg'
// import {  FaBook, FaPencil } from 'react-icons/fa6';
// import { PiCertificateFill } from "react-icons/pi";
// import { Link } from 'react-router-dom';

const Overview = ({ title, url, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
  return (
       <div className="m-0">
         <h1 className="font-bold text-3xl md:text-5xl text-blue-900 text-center mb-6">{title} Certificate</h1>
         <img src={Banner} alt="" className="w-full h-auto mb-6" />
         <h3 className="text-2xl md:text-3xl font-bold my-2 text-slate-700">
           Kick-start your career with a {title} certification!
         </h3>
         <h5 className="text-sm md:text-base lg:text-lg text-gray-700">
         Advance your career in Cybersecurity with {title} CertMaster Learn!
         CompTIA, a globally recognized leader in IT certifications, offers the {title} certification program to validate the foundational skills needed to secure networks, protect systems, and mitigate cyber threats.
           <br /><br />
           CertMaster Learn for {title} is an online training solution that provides comprehensive coverage of exam objectives, preparing learners to successfully earn their certification and build a solid foundation in cybersecurity.
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
         <h5 className='pt-5'>The {title} Certification is trusted worldwide and ensures that learners possess the essential knowledge and skills required to pursue careers in IT security. The program includes a wide range of topics such as threat management, risk analysis, incident response, and securing networks, making it ideal for individuals aiming to start or advance their cybersecurity careers. <br /> Designed and developed by subject-matter experts, the CertMaster Learn curriculum focuses on hands-on application, interactive learning, and practical knowledge to prepare learners for roles like security analysts, network administrators, penetration testers, and more.This program bridges the gap between education and real-world expertise, ensuring candidates are ready to address the latest security challenges from day one.</h5>
       </div>
     );
   };
export default Overview