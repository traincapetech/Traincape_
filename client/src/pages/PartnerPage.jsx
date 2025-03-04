// import React, { useEffect } from "react";
// import { FaDownload, FaHandshake, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
// import partnerImage from "../assets/Partner-Image.jpg"; // Replace with your image path
// import { Link } from "react-router-dom";

// // Import Partner Logos
// import Logo1 from "../assets/SBS.png";
// import Logo2 from "../assets/ThreatMatrix.png";
// import Logo3 from "../assets/Digitalearn.webp";
// import Logo4 from "../assets/Gruslabs.svg";
// import Logo5 from "../assets/MSA.png";

// const partners = [
//   { logo: Logo1, url: "https://sbs-mea.com/" },
//   { logo: Logo2, url: "https://threatmatrix.co.uk/" },
//   { logo: Logo3, url: "https://digitalearnsolution.com/" },
//   { logo: Logo4, url: "https://www.gruslabs.com/" },
//   { logo: Logo5, url: "https://msasoftware.in/" },
// ];

// const PartnerPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen py-16">
//       <div className="container mx-auto px-6">

//         {/* Header Section */}
//         <header className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-blue-900 mb-4">Partner with Us</h1>
//           <p className="text-xl text-gray-700 leading-relaxed">
//             Strengthening Businesses Through Technology and Security
//           </p>
//         </header>

//         {/* Partner Benefits Section */}
//         <section className="bg-white rounded-lg shadow-lg py-16 px-12 mb-16">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="order-1 md:order-2">
//               <h2 className="text-3xl font-semibold text-blue-900 mb-4">Why Partner with Traincape Technology?</h2>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 Traincape Technology empowers businesses with cutting-edge cybersecurity solutions <b>and</b> comprehensive technology services, including web and mobile development. Partner with us to offer your clients a complete suite of solutions, from robust security to innovative digital experiences.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex items-start">
//                   <FaHandshake className="text-blue-600 text-2xl mr-4" />
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Trusted Partnerships</h3>
//                     <p className="text-gray-600">Join a network of trusted partners and expand your service offerings.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <FaLightbulb className="text-blue-600 text-2xl mr-4" />
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Comprehensive Solutions</h3>
//                     <p className="text-gray-600">Offer your clients end-to-end solutions, from cybersecurity to web and mobile development.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <FaUsers className="text-blue-600 text-2xl mr-4" />
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Expert Team</h3>
//                     <p className="text-gray-600">Leverage our team's expertise in cybersecurity and software development.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <FaRocket className="text-blue-600 text-2xl mr-4" />
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Growth Opportunities</h3>
//                     <p className="text-gray-600">Increase your revenue streams and expand your market reach through our partnership programs.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="order-2 md:order-1">
//               <img src={partnerImage} alt="Partner" className="w-full h-auto rounded-lg shadow-md" />
//             </div>
//           </div>
//         </section>

//         {/* Partners Section */}
//         <section className="bg-white py-12 px-12 rounded-lg shadow-lg mb-16"> {/* Changed background color */}
//           <h2 className="text-3xl font-semibold text-black mb-6 text-center">Our Trusted Partners</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//             {partners.map((partner, index) => (
//               <a
//                 key={index}
//                 href={partner.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="partner-card bg-gray-700 rounded-lg shadow p-6 flex justify-center items-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-md" // Changed card color
//               >
//                 <img
//                   src={partner.logo}
//                   alt={`Partner ${index + 1}`}
//                   className="w-32 h-32 object-contain"
//                 />
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* Download Section */}
//         <section className="bg-blue-900 py-12 text-center rounded-lg shadow-lg">
//           <h3 className="text-3xl font-semibold text-white mb-4">Ready to Partner?</h3>
//           <p className="text-lg text-gray-300 leading-relaxed mb-6">
//             Download our partnership portfolio to learn more about our programs and how we can collaborate.
//           </p>
//           <a
//             href="/assets/SPME_Cybersecurity_Portfolio.pdf"
//             download="SPME_Cybersecurity_Portfolio.pdf"
//             className="bg-white hover:bg-gray-100 text-blue-900 py-3 px-8 rounded-lg font-medium transition duration-300"
//           >
//             <FaDownload className="inline mr-2" /> Download Portfolio
//           </a>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default PartnerPage;

import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";

// Import Partner Logos
import Logo1 from "../assets/SBS.png";
import Logo2 from "../assets/ThreatMatrix.png";
import Logo3 from "../assets/Digitalearn.webp";
import Logo4 from "../assets/Gruslabs.svg";
import Logo5 from "../assets/MSA.png";

// Import Product Logos (Replace with actual product logos)
import Product1 from "../assets/hexnode.svg";
import Product2 from "../assets/symclogo.png";
import Product3 from "../assets/sumo.png";
import Product4 from "../assets/scalefusion.svg";
import Product5 from "../assets/qradar.png";
import Product6 from "../assets/AT&T.png";
import Product7 from "../assets/AlienVault.png";
import Product8 from "../assets/Rapid7_logo.svg";
import Product9 from "../assets/salesforce.svg";
// import Product10 from "../assets/Product10.png";

const partners = [
  { logo: Logo1, url: "https://sbs-mea.com/" },
  { logo: Logo2, url: "https://threatmatrix.co.uk/" },
  { logo: Logo3, url: "https://digitalearnsolution.com/" },
  { logo: Logo4, url: "https://www.gruslabs.com/" },
  { logo: Logo5, url: "https://msasoftware.in/" },
];

const products = [
  { logo: Product1, url: "https://www.hexnode.com/unified-endpoint-management/?utm_device=c&utm_source=google&utm_medium=cpc&utm_term=hexnode&utm_campaign=India-Search-Brand-Hexnode&hsa_cam=14880559867&hsa_grp=126022139177&hsa_mt=b&hsa_src=g&hsa_ad=550476363565&hsa_acc=6098326672&hsa_net=adwords&hsa_kw=hexnode&hsa_tgt=kwd-310840536220&hsa_ver=3&gad_source=1&gclid=CjwKCAiAw5W-BhAhEiwApv4goEPmzwqadRjctBYiVDcMrtcjEo010RJMgzJ7OiL_Y6mq0ucQPNTUmxoCstkQAvD_BwE" },
  { logo: Product2, url: "https://vip.symantec.com/" },
  { logo: Product3, url: "https://www.sumologic.com/" },
  { logo: Product4, url: "https://scalefusion.com/" },
  { logo: Product5, url: "https://www.ibm.com/qradar" },
  { logo: Product6, url: "https://www.att.com/" },
  { logo: Product7, url: "https://levelblue.com/" },
  { logo: Product8, url: "https://www.rapid7.com/" },
  { logo: Product9, url: "https://www.salesforce.com/in/" },
  // { logo: Product10, url: "https://product10.com" },
];

const PartnerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen py-16">
      <div className="container mx-auto px-6">

        {/* Partners Section */}
        <section className="bg-white py-12 px-12 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card bg-gray-700 rounded-lg shadow p-6 flex justify-center items-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={`Partner ${index + 1}`}
                  className="w-32 h-32 object-contain"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="bg-white py-12 px-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">Our Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card bg-gray-700 rounded-lg shadow p-6 flex justify-center items-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              >
                <img
                  src={product.logo}
                  alt={`Product ${index + 1}`}
                  className="w-32 h-32 object-contain"
                />
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PartnerPage;
