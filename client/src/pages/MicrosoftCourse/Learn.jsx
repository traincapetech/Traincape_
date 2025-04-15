import React from 'react';
import LearnImg from '../../assets/Microsoft/MICROSOFT-CERTIFIED.jpeg';
import { useEffect } from 'react';

const Learn = ({ title, title2, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
  return (
    <>
      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 text-center mb-7 font-bold">
        The Pathway to {title}{title2} – Specialty Success
      </h1>

      {/* Image Section */}
      <div className="w-full max-w-auto mx-auto justify-center flex mb-8">
        <img className="w-full lg:w-[50%] h-auto" src={LearnImg} alt={`${title} Learning`} />
      </div>

      {/* Introduction Section */}
      <h4 className="text-base sm:text-lg md:text-xl text-gray-700 my-9 text-center">
        Preparing your students for the {title} – Specialty certification is an important step in equipping them with the skills needed to secure cloud environments. Let Certiport help streamline this process with targeted course materials and practice tests designed to ensure effective learning and certification success.
      </h4>

      {/* Preparation Tools Section */}
      <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8 md:px-12 mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">
        Help Your Students Prepare for the {title} Exam
        </h2>
        <h4 className="text-base sm:text-lg md:text-xl text-gray-700 text-center">
        Microsoft has partnered with leading curriculum providers to offer high-quality learning materials tailored to the {title2} certification. These resources cover all exam objectives and provide students with the knowledge and skills needed to succeed in cybersecurity roles. <br />
        We currently offer learning materials through trusted partners such as CertMaster Learn and CertMaster Labs, with additional options available from renowned curriculum providers. Stay tuned for new learning products or connect directly with your Microsoft representative to explore the latest offerings.
        </h4>
      </div>

      {/* AWS Educate Section */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Align to Industry-Recognized Certifications</h2>
      <h4 className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-6">
      By integrating {title} into your curriculum, you prepare students for a globally recognized certification that validates their ability to secure networks, identify vulnerabilities, and mitigate threats. The skills acquired through this certification are transferable and job-ready, giving students a competitive edge in the workforce. <br />
      Equip your students for a successful cybersecurity career with {title}{title2} and industry-aligned resources designed for their success!
      </h4>

      {/* AWS Educate Features List */}
     
    </>
  );
};

export default Learn;