import React, { useEffect } from 'react';
import Banner from '../../assets/Microsoft/microsoft-partner-types-logo-900x450.webp';
//import {  FaBook, FaPencil } from 'react-icons/fa6';
//import { PiCertificateFill } from "react-icons/pi";
//import { Link } from 'react-router-dom';


const MicrosoftOverview = ({ title, url, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
  return (
       <div className="m-0">
         <h1 className="font-bold text-3xl md:text-5xl text-blue-900 text-center mb-6">{title} Certificate</h1>
           <img src={Banner} alt="" className="w-[80%] mx-auto rounded-2xl mb-6 mt-10" /> 
         <h3 className="text-2xl md:text-3xl font-bold my-2 text-slate-700">
           Kick-start your career with a {title} certification!
         </h3>
         <br />
         <h5 className="text-sm md:text-base lg:text-lg text-gray-700">
         {title} certification courses are meticulously designed to validate and enhance professionals' expertise across a wide array of Microsoft technologies and platforms. These certifications are structured into several levels to cater to varying proficiency and career aspirations.
           <br />
           CertMaster Learn for Security+ is an online training solution that provides comprehensive coverage of exam objectives, preparing learners to successfully earn their certification and build a solid foundation in cybersecurity.
           <br />
           <h5>The Security+ certification is trusted worldwide and ensures that learners possess the essential knowledge and skills required to pursue careers in IT security. The program includes a wide range of topics such as threat management, risk analysis, incident response, and securing networks, making it ideal for individuals aiming to start or advance their cybersecurity careers. <br /> Designed and developed by subject-matter experts, the CertMaster Learn curriculum focuses on hands-on application, interactive learning, and practical knowledge to prepare learners for roles like security analysts, network administrators, penetration testers, and more. With at least 150 hours of instruction, this program bridges the gap between education and real-world expertise, ensuring candidates are ready to address the latest security challenges from day one.</h5>
         </h5>

         
         {/*<div className="flex flex-col md:flex-row gap-3 justify-center mt-7">
          <div className="py-5 px-16 border-2 bg-cyan-100 flex justify-center items-center text-center">
             <FaBook className="w-7 h-7 mb-2" />
             <h2 className="text-lg"><Link to="/Learn">Learn</Link></h2>
          </div>
         
   
           <div className="py-5 px-16 border-2 bg-cyan-100 flex justify-center items-center text-center">
             <FaPencil className="w-7 h-7 mb-2" />
             <h2 className="text-lg"><Link to="/Practice">Practice</Link></h2>
           </div>
   
           <div className="py-5 px-16 border-2 bg-cyan-100 flex justify-center items-center text-center">
             <PiCertificateFill className="w-8 h-8 mb-2" />
             <h2 className="text-lg"><Link to="/Certify">Certify</Link></h2>
           </div>
         </div>*/}
       </div>
     );
   };
export default MicrosoftOverview