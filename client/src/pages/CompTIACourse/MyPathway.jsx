import React, { useEffect } from 'react';
import pathway from '../../assets/comptiapathway.jpg';

const MyPathway = ({ title, url, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
  return (
    <>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[43vh] sm:h-[30vh]   lg:h-[50vh]"
        style={{ backgroundImage: `url(${pathway})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="absolute top-1/3 left-[10%] sm:top-[80%] hidden   md:left-[10%] text-center text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
          My Pathway with {title}
        </h1>
      </div>

      {/* Title Section */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-black my-3 font-bold text-center">My Pathway with {title}</h1>
      <h3 className="text-base sm:text-lg md:text-xl text-gray-700 text-center px-4 sm:px-8 md:px-16">
      CompTIA’s My Pathway program is designed to help you unlock your potential by identifying the certifications needed to build a successful career in IT security. Whether you’re looking to launch a new career, expand your existing skillset, or deepen your expertise in cybersecurity, {title} serves as a foundational certification to help you reach your goals.
      </h3>

      {/* Certification Information Section */}
      <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8 my-6">
        <h1 className="text-2xl sm:text-3xl md:text-3xl text-black my-3 font-bold">{title} – A Key Certification for Cybersecurity Careers</h1>
        <h3 className="text-base sm:text-lg md:text-xl text-gray-700">
          The {title}  certification validates essential knowledge and practical skills required to secure networks, systems, and data against modern threats. It’s an ideal credential for individuals starting their journey in cybersecurity or seeking to strengthen their technical expertise for in-demand roles.
          <br />
        {title} can be combined with additional CompTIA certifications, such as Network+ or CySA+, to demonstrate a deeper understanding of security principles and advanced threat management techniques. This strategic certification pairing equips you with the skills employers value most, positioning you as a strong candidate for high-demand roles in IT security. 
        
        </h3>
        <h2 className=' p-0 m-0'>Pathways to High-Demand Roles</h2>
        <ul className='list-disc px-7 space-y-3 sm:px-8 md:px-12 text-gray-700 text-sm sm:text-base'>
          
            <li>Cybersecurity Specialist</li>
            <li>Network Administrator</li>
            <li>Security Analyst</li>
            <li>Systems Administrator</li>
            <li>Penetration Tester</li>
        </ul>
      </div>
    </>
  );
};

export default MyPathway;