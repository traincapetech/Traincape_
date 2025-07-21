import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
<<<<<<< HEAD
// Import the images used in servicesData
import cloud from "../assets/Cloud-services.svg";
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";
import cloudBanner from "../assets/cloud.jpg";
import uiuxBanner from "../assets/uiux.jpg";
import digitalBanner from "../assets/digital.jpg";
import saasBanner from "../assets/saas.jpg";
import softwareBanner from "../assets/software.jpeg";
import webBanner from "../assets/web.png";

const servicesData = [
  {
    title: "Cloud Services",
    description: "Cloud services provide computing resources over the internet, allowing users to access and use them on-demand without maintaining the underlying infrastructure.",
    image: cloud,
    banner: cloudBanner,
  },
  {
    title: "UI Development",
    description: "UI development involves designing and developing visual and interactive components for websites and applications. Key skills include HTML, CSS, JavaScript, responsive design, and accessibility.",
    image: UI,
    banner: uiuxBanner,
  },
  {
    title: "Digital Marketing",
    description: "Digital marketing uses online strategies and channels to promote products and services, connecting businesses with customers through SEO, PPC, social media and content marketing.",
    image: Digital,
    banner: digitalBanner,
  },
  {
    title: "Web Development",
    description: "Web development involves creating and maintaining websites and web applications. It includes frontend, backend, and full-stack development.",
    image: Web,
    banner: webBanner,
  },
  {
    title: "Software Services",
    description: "Custom software development, mobile apps, quality assurance, maintenance, and consulting—all tailored to your business needs.",
    image: Software,
    banner: saasBanner,
  },
  {
    title: "Software Development",
    description: "Designing, building, testing, and maintaining custom software applications that automate processes and improve business efficiency.",
    image: softwareDevelopment,
    banner: softwareBanner,
  },
];

const getBannerForService = (title) => {
  switch (title) {
    case "Cloud Services":
      return cloudBanner;
    case "UI Development":
      return uiuxBanner;
    case "Digital Marketing":
      return digitalBanner;
    case "Web Development":
      return webBanner;
    case "Software Services":
      return saasBanner;
    case "Software Development":
      return softwareBanner;
    default:
      return cloudBanner;
  }
};
=======
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa

const ServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
<<<<<<< HEAD
  // Use the passed service or the first from servicesData
  const service = location.state?.service || servicesData[0];
=======
  const { service } = location.state; // Access the passed service data

  // Function to handle navigation to the Contact Us page
  const handleGetStartedClick = () => {
    navigate("/contact-us");
  };
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa

  // Always call useEffect first
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle navigation to the Contact Us page
  const handleGetStartedClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-7">
      <div className="flex items-center w-full py-4 px-6 mb-6 bg-white rounded shadow-md border border-gray-200">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-gray-600 font-bold py-2 px-4 rounded"
        >
          <span className="hover:text-gray-800">Home</span>
        </button>
        <div className="flex items-center text-gray-500 font-bold">
          <span>{" > "}</span>
          <button
            onClick={() => {
              navigate("/our-services");
            }}
            className="text-gray-600 font-bold py-2 px-4 rounded"
          >
            <span className="hover:text-gray-800">Our Services</span>
          </button>
          <span>{" > "}</span>
          <span className="ml-4">{service.title}</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white p-3 md:p-8 rounded-lg shadow-lg">
        {/* Service Title */}
        <h1 className="md:text-4xl text-2xl font-extrabold text-blue-600">
          {service.title}
        </h1>

        {/* Service Image */}
        <div className="mt-6">
          <img
            src={getBannerForService(service.title)}
            alt={service.title}
            className="w-full md:h-64 h-auto md:object-fill object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Service Description */}
        <p className="mt-6 md:text-xl font-semibold text-base text-gray-700 leading-relaxed">
          {service.description}
        </p>

        {/* Detailed Information Section */}
        <div className="mt-8 space-y-6">
          <h2 className="md:text-3xl text-xl font-semibold text-blue-600">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg">
            <li>Scalable and flexible solutions</li>
            <li>Cost-efficient and optimized infrastructure</li>
            <li>Secure and reliable services</li>
            <li>24/7 support and maintenance</li>
            <li>Seamless integration with your existing systems</li>
          </ul>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8">
          <h2 className="md:text-3xl text-xl font-semibold text-blue-600">
            Why Choose Us?
          </h2>
          <p className="mt-4 md:text-lg text-base text-gray-700 leading-relaxed">
            We offer innovative solutions that cater to your specific business
            needs. Our team of experts is dedicated to providing tailored
<<<<<<< HEAD
            services that ensure your success. Whether you're looking to
            optimize your business processes or expand your capabilities, we're
=======
            services that ensure your success. Whether you’re looking to
            optimize your business processes or expand your capabilities, we’re
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            here to help you achieve your goals.
          </p>
        </div>

        {/* Call to Action with useNavigate */}
        <div className="mt-10 text-center">
          <button
            onClick={handleGetStartedClick}
            className="inline-block px-6 py-3 bg-blue-600 text-white text-base md:text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;