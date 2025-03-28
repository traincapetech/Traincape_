import React from 'react';
import pathway from '../../assets/AWS-pathway.png';
import { useEffect } from 'react';

const MyPathway = ({ title, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
    
  return (
    <>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[43vh] sm:h-[50vh] lg:h-[60vh]"
        style={{ backgroundImage: `url(${pathway})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="absolute top-1/3 left-[10%] sm:top-[80%] hidden   md:left-[10%] text-center text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
          My Pathway
        </h1>
      </div>

      {/* Title Section */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-black my-3 font-bold text-center">{`My Pathway`}</h1>
      <h3 className="text-base sm:text-lg md:text-xl text-gray-700 text-center px-4 sm:px-8 md:px-16">
        Certiport’s My Pathway is designed to help you reach your career goals by identifying and mapping the certifications needed to validate the skills required for your dream job. Whether you're looking to expand your knowledge, deepen your expertise, or continue your lifelong learning journey, My Pathway is available through your online AWS account, helping you take the next step in your professional development.
      </h3>

      {/* Certification Information Section */}
      <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8 my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-black my-3 font-bold">{title} – Specialty</h1>
        <h3 className="text-base sm:text-lg md:text-xl text-gray-700">
          The {title} – Specialty certification is an advanced, work-ready credential that can open doors to a wide range of specialized roles in cloud security. As organizations continue to move to the cloud, the demand for professionals who can safeguard their cloud environments is rapidly increasing. By earning the {title} – Specialty certification, you demonstrate your ability to secure applications and data on Amazon Web Services (AWS), one of the world’s leading cloud platforms. 
          <br />
          Whether you're aiming to expand your cloud security knowledge or specialize in securing AWS environments, this certification equips you with the skills needed to manage risk and ensure the integrity of cloud infrastructures. By pairing this certification with other AWS or cybersecurity credentials, you can position yourself as a highly skilled professional ready to tackle the growing demand for cloud security expertise. 
          <br />
          Through My Pathway, you can map out your learning journey, access the resources you need to prepare, and track your progress towards becoming an {title} professional. Get ready to stand out in the competitive field of cloud security with the {title} – Specialty certification.
        </h3>
      </div>
    </>
  );
};

export default MyPathway;