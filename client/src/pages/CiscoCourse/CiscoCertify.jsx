import React, { useEffect } from 'react';
import AWSCertify from '../../assets/Cisco/Certifyimg.png';

const CiscoCertify = ({ title, title2, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}, []);
  return (
    <>
      {/* Background Image Section */}
      <div
        className="relative h-[50vh] bg-cover bg-no-repeat bg-center md:bg-cover md:h-[50vh]"
        style={{ backgroundImage: `url(${AWSCertify})` }}
      >
        {/* <h1 className="absolute text-center text-black top-1/2 justify-center transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl sm:text-4xl lg:text-5xl">
          {title} 
        </h1> */}
      </div>

      {/* Certification Description */}
      <div className="px-4 sm:px-8 md:px-12 py-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 font-bold mb-4">
          Certify With {title} – Specialty
        </h2>
        <h4 className="text-base sm:text-lg md:text-xl text-gray-700 mb-9">
       The {title}certification program is an industry-standard credential for IT professionals, validating the essential knowledge and skills required to secure systems, networks, and devices in an ever-evolving threat landscape. <br />
       This globally recognized certification ensures candidates are equipped to identify and address security risks, respond to incidents, and implement robust security solutions. Security+ provides the foundational skills necessary for a successful career in cybersecurity and is highly valued by employers worldwide.
        </h4>

        {/* Domains List */}
        <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">{title} – Specialty Domains:</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <h5 className="text-black text-lg font-bold"> Networking & Infrastructure:</h5>
              <ul>
                <li>CCNA (Cisco Certified Network Associate) – Foundational networking knowledge</li>
                <li>CCNP Enterprise – Advanced networking, including SD-WAN, automation, and security</li>
                <li>CCIE Enterprise Infrastructure – Expert-level networking design and troubleshooting</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold"> Security:</h5>
              <ul>
                <li>CCNP Security – Security solutions, firewalls, VPNs, and identity management</li>
                <li>CCIE Security – Advanced security solutions and network defense</li>
                <li>Cisco CyberOps Associate – Cybersecurity operations and threat intelligence</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold">Collaboration & Voice:</h5>
              <ul>
                <li>CCNP Collaboration – VoIP, video, and collaboration solutions</li>
                <li>CCIE Collaboration – Advanced unified communications and voice systems</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold">Data Center:</h5>
              <ul>
                <li>CCNP Data Center – Virtualization, automation, and storage networking</li>
                <li>CCIE Data Center – Advanced data center design and troubleshooting</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold">Cloud & Automation:</h5>
              <ul>
                <li>Cisco Certified DevNet Associate – Network automation, software development</li>
                <li>Cisco Certified DevNet Professional – Advanced network programmability</li>
                <li>CCNP Enterprise (with SD-WAN focus) – Software-defined networking</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold">Wireless & Mobility:</h5>
              <ul>
                <li>CCNP Enterprise (with Wireless focus) – WLAN design and implementation</li>
                <li>CCIE Wireless – Expert-level wireless network design</li>
              </ul>
            </li>
            <li>
            <h5 className="text-black text-lg font-bold">IoT & Industrial Networking:</h5>
              <ul>
                <li>Cisco Certified CyberOps Associate – IoT security</li>
                <li>Cisco Industrial Networking Specialist – Industrial network protocols and security</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CiscoCertify;