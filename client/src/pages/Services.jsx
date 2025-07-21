import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/servicesBanner.webp";
import cloud from "../assets/Cloud-services.svg";
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
import project from "../assets/Project Planning.svg";
import arrow from "../assets/Process arrow.svg";
import Request from "../assets/Meeting-request.svg";
import Building from "../assets/Start Building.svg";
import CloudImg from "../assets/cloud.jpg";
import UiUx from "../assets/uiux.jpg";
import DigitalImg from "../assets/digital.jpg";
import Saas from "../assets/saas.jpg";
import SoftwareImg from "../assets/software.jpeg";
import webImg from "../assets/web.png";

const servicesData = [
  {
    title: "Cloud Services",
    description: "Cloud services provide computing resources over the internet, allowing users to access and use them on-demand without maintaining the underlying infrastructure.",
    image: cloud,
<<<<<<< HEAD
    banner: CloudImg,
=======
    banner: CloudImg
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
  },
  {
    title: "UI Development",
    description: "UI development involves designing and developing visual and interactive components for websites and applications. Key skills include HTML, CSS, JavaScript, responsive design, and accessibility.",
    image: UI,
    banner: UiUx,
  },
  {
    title: "Digital Marketing",
    description: "Digital marketing uses online strategies and channels to promote products and services, connecting businesses with customers through SEO, PPC, social media and content marketing.",
    image: Digital,
    banner: DigitalImg,
  },
  {
    title: "Web Development",
    description: "Web development involves creating and maintaining websites and web applications. It includes frontend, backend, and full-stack development.",
    image: Web,
    banner: webImg,
  },
  {
    title: "Software Services",
    description: "Custom software development, mobile apps, quality assurance, maintenance, and consulting—all tailored to your business needs.",
    image: Software,
    banner: Saas,
  },
  {
    title: "Software Development",
    description: "Designing, building, testing, and maintaining custom software applications that automate processes and improve business efficiency.",
    image: softwareDevelopment,
    banner: SoftwareImg,
  },
];

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (service) => {
    navigate("/service-detail", { state: { service } });
  };

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-b from-[#f5f7fa] to-[#ebeff5] font-[Inter,sans-serif]">
      {/* Hero Banner */}
      <div className="relative w-full">
        <img src={banner} alt="Banner" className="md:h-[60vh] h-[40vh] w-full object-cover" />
        <div className="absolute inset-0 bg-[#0d1b2a]/80 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Our Professional Services
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl animate-fade-in-up delay-200">
            Empowering businesses with cutting-edge technology for sustainable growth
=======
    <div className="bg-gray-50">
      {/* Hero Banner Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[#152B54] opacity-85"></div>
        <img src={banner} alt="Banner" className="md:h-[60vh] h-[40vh] w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Our Professional Services</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl drop-shadow-md">
            Empowering businesses with cutting-edge technology solutions for sustainable growth and innovation
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          </p>
        </div>
      </div>

<<<<<<< HEAD
      {/* Services Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-sm font-semibold tracking-widest text-[#0d1b2a] uppercase">What We Offer</h1>
          <p className="mt-3 text-4xl font-bold text-gray-800">Comprehensive Technology Solutions</p>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            Discover our range of services designed to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 animate-fade-in-up hover:scale-[1.02]"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#0d1b2a] p-4 rounded-full">
                  <img src={service.image} alt={service.title} className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#0d1b2a] mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 text-center h-28 overflow-hidden">{service.description}</p>
              <button
                onClick={() => handleClick(service)}
                className="mt-6 w-full bg-[#0d1b2a] text-white py-3 rounded-md hover:bg-blue-900 transition"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Other sections remain similar with updated styles... */}
      {/* For brevity, you can reapply the same principles from above to: 
        - Consultation Section 
        - Process Steps 
        - CTA at bottom 
        - Use same color palette, animation, font, and spacing enhancements */}
=======
      {/* Services Cards Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center w-full py-4 mb-10 bg-white rounded shadow-md border border-gray-200">
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
            <span className="ml-4">Our Services</span>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold tracking-wider text-[#152B54] uppercase">What We Offer</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Technology Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover our range of services designed to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="h-16 bg-[#152B54] flex items-center justify-center">
                <img src={service.image} alt={service.title} className="w-12 h-12 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#152B54] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 h-32 overflow-hidden">{service.description}</p>
                <button
                  className="w-full py-3 px-4 bg-[#152B54] text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
                  onClick={() => handleClick(service)}
                >
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Section */}
      <div className="bg-gradient-to-r from-[#0c1d3d] to-[#152B54] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <img
                src="https://i.pinimg.com/736x/b5/fc/e2/b5fce2660baac71920aa53a7f2bc0265.jpg"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto lg:mx-0 mb-8 lg:mb-0"
                alt="Consultation"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">24/7 SUPPORT</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Technology Consultation?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Our experts are ready to help you navigate technology challenges and identify the right solutions for your business needs. Schedule a free consultation today.
              </p>
              <button
                onClick={() => navigate("/contact-us")}
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#152B54] transition duration-300"
              >
                GET A FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-medium mb-3">WHAT WE DO FOR YOU</span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Our Proven Process</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful delivery of every project
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center mb-8 md:mb-0 w-full md:w-64 transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={project} alt="Project Planning" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#152B54] mb-3">Project Planning</h3>
              <p className="text-gray-600">
                We define objectives, scope, budget, and timeline to ensure project success.
              </p>
            </div>
            
            <div className="hidden md:block">
              <img src={arrow} alt="Process Arrow" className="w-16 transform -rotate-90 md:rotate-0" />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center mb-8 md:mb-0 w-full md:w-64 transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={Request} alt="Meeting Request" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#152B54] mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your requirements and propose the best solution for your needs.
              </p>
            </div>
            
            <div className="hidden md:block">
              <img src={arrow} alt="Process Arrow" className="w-16 transform -rotate-90 md:rotate-0" />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center w-full md:w-64 transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={Building} alt="Start Building" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#152B54] mb-3">Development</h3>
              <p className="text-gray-600">
                Our expert team implements the solution with regular updates and quality checks.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-[#152B54] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
            Partner with us to leverage the latest technologies and drive your business forward.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="inline-block px-8 py-4 bg-white text-[#152B54] font-bold rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Contact Us Today
          </button>
        </div>
      </div>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
    </div>
  );
};

export default Services;
