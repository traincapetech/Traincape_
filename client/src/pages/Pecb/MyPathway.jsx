import React from 'react';
import PECB_Learn from '../../assets/PECB1.png';
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
        style={{ backgroundImage: `url(${PECB_Learn})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="absolute top-1/3 left-[10%] sm:top-[80%] hidden   md:left-[10%] text-center text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
          My Pathway
        </h1>
      </div>

      {/* Title Section */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-black my-3 font-bold text-center">{`My Pathway`}</h1>
      <h3 className="text-base sm:text-lg md:text-xl text-gray-700 text-center px-4 sm:px-8 md:px-16">
        PECB’s My Pathway is crafted to support your career aspirations by guiding you through the certifications that validate your expertise in international standards and practices. Whether you're looking to expand your skillset, gain specialized knowledge, or pursue continuous professional development, My Pathway provides you with the tools and resources to advance your career. Accessible through your PECB account, it’s your companion in achieving professional excellence and recognition in your field.
      </h3>

      {/* Certification Information Section */}
      <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8 my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-black my-3 font-bold">{title}</h1>
        <h3 className="text-base sm:text-lg md:text-xl text-gray-700">
          The {title} certification is a distinguished credential designed to showcase your expertise in implementing and managing international standards in your professional domain. As industries globally adopt best practices to enhance quality, security, and efficiency, the demand for certified professionals continues to rise. Achieving the {title} certification demonstrates your ability to align with these global standards and contribute to organizational excellence.
          <br />
          Whether you are aiming to strengthen your knowledge in compliance, risk management, or any other specialized field, this certification equips you with the competencies needed to excel in a competitive marketplace. By complementing this credential with additional PECB certifications, you can position yourself as a versatile and highly sought-after expert ready to meet the challenges of your industry.
          <br />
          With My Pathway, you can outline your professional development plan, access curated learning resources, and monitor your progress towards earning the {title} certification. Get ready to elevate your career with the credibility and recognition that comes with being PECB-certified.
        </h3>
      </div>
    </>
  );
};

export default MyPathway;
