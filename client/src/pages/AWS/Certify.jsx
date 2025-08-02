import React from 'react';
import AWSCertify from '../../assets/AWS-certify.jpg';
import { useEffect } from 'react';
const Certify = ({ title, url, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);
    
  return (
    <>
      {/* Background Image Section */}
      <div
        className="relative h-[43vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${AWSCertify})` }}
      >
        <h1 className="absolute text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl sm:text-4xl lg:text-5xl">
          {title} – Specialty Certification
        </h1>
      </div>

      {/* Certification Description */}
      <div className="px-4 sm:px-8 md:px-12 py-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 font-bold mb-4">
          Certify with {title} – Specialty
        </h2>
        <h4 className="text-base sm:text-lg md:text-xl text-gray-700 mb-9">
          The {title} – Specialty certification program, offered through AWS, validates advanced knowledge and expertise in securing AWS cloud environments. This certification is designed for professionals who want to demonstrate their ability to implement security controls, manage risks, and safeguard data and applications within Amazon Web Services (AWS).
        </h4>

        {/* Domains List */}
        <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">{title} – Specialty Domains:</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <h5 className="text-black text-lg font-bold">Cloud Security Fundamentals</h5>
              <p className="text-base sm:text-lg">
                Understand the core principles of cloud security, the shared responsibility model, and AWS-specific security frameworks.
              </p>
            </li>
            <li>
              <h5 className="text-black text-lg font-bold">Identity and Access Management (IAM)</h5>
              <p className="text-base sm:text-lg">
                Manage IAM policies and roles, AWS Multi-Factor Authentication (MFA), and user access controls to secure cloud environments.
              </p>
            </li>
            <li>
              <h5 className="text-black text-lg font-bold">Data Protection and Encryption</h5>
              <p className="text-base sm:text-lg">
                Implement data encryption strategies, key management services, and secure data storage solutions across AWS.
              </p>
            </li>
            <li>
              <h5 className="text-black text-lg font-bold">Infrastructure Security</h5>
              <p className="text-base sm:text-lg">
                Configure and maintain secure networks, including security groups, VPCs (Virtual Private Clouds), and AWS firewall services.
              </p>
            </li>
            <li>
              <h5 className="text-black text-lg font-bold">Incident Response and Monitoring</h5>
              <p className="text-base sm:text-lg">
                Monitor and analyze security events, set up automated incident response processes, and use AWS tools like CloudTrail and CloudWatch for security auditing.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Certify;