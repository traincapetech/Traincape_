import React, { useEffect } from 'react';
import AWSCertify from '../../assets/comptiacertify.jpg';

const Certify = ({ title, title2, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
  return (
    <>
      {/* Background Image Section */}
      <div
        className="relative h-[43vh] bg-contain bg-no-repeat bg-center md:bg-cover md:h-[60vh]"
        style={{ backgroundImage: `url(${AWSCertify})` }}
      >
        {/* <h1 className="absolute text-center text-black top-1/2 justify-center transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl sm:text-4xl lg:text-5xl">
          {title} 
        </h1> */}
      </div>

      {/* Certification Description */}
      <div className="px-4 sm:px-8 md:px-12 py-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 font-bold mb-4">
          Certify with {title} – Specialty
        </h2>
        <h4 className="text-base sm:text-lg md:text-xl text-gray-700 mb-9">
       The {title2} certification program is an industry-standard credential for IT professionals, validating the essential knowledge and skills required to secure systems, networks, and devices in an ever-evolving threat landscape. <br />
       This globally recognized certification ensures candidates are equipped to identify and address security risks, respond to incidents, and implement robust security solutions. Security+ provides the foundational skills necessary for a successful career in cybersecurity and is highly valued by employers worldwide.
        </h4>

        {/* Domains List */}
        <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">{title2} – Specialty Domains:</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <h5 className="text-black text-lg font-bold"> Threats, Attacks, and Vulnerabilities:</h5>
              <ul>
                <li>Analyzing indicators of compromise</li>
                <li>Determining attack types and techniques</li>
                <li>Social engineering, malware, and application attacks</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold"> Architecture and Design:</h5>
              <ul>
                <li>Implementing secure network architecture</li>
                <li>Understanding virtualization and cloud computing concepts</li>
                <li>Applying security design principles</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold">Implementation:</h5>
              <ul>
                <li>Installing and configuring network components</li>
                <li>Managing identity and access services</li>
                <li>Deploying wireless and endpoint security</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold">Operations and Incident Response:</h5>
              <ul>
                <li>Detecting and responding to security incidents</li>
                <li>Understanding digital forensics processes</li>
                <li>Configuring security monitoring tools
              </li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold">Governance, Risk, and Compliance:</h5>
              <ul>
                <li>Implementing risk management strategies</li>
                <li>Enforcing data privacy and protection measures</li>
                <li>Understanding regulatory compliance frameworks</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Certify;