import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { FaArrowRight } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Banner images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

=======
import style from "../css/Home.module.css";
import team from "../assets/team.jpeg";
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpeg";
import card3 from "../assets/card3.jpeg";
import card4 from "../assets/card4.jpeg";
import card5 from "../assets/card5.jpeg";
import card6 from "../assets/card6.jpeg";
<<<<<<< HEAD

// Vendor logos
=======
import { FaSquareWhatsapp, FaArrowRight } from "react-icons/fa6";
import { BsCheck2Circle } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import { useInView } from "react-intersection-observer";
// logo images
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
import comptia from "../assets/comptia-2.webp";
import pecb from "../assets/PECB1.png";
import certiport from "../assets/certiportlogo.png";
import pearson from "../assets/pearsonlogo.png";
import etraind from "../assets/etrainlogo.png";
import Typewriter from "typewriter-effect";
import { FaSquareWhatsapp } from "react-icons/fa6";

//logo
import Logo1 from "../assets/SBS.png";
import Logo2 from "../assets/ThreatMatrix.png";
import Logo3 from "../assets/Digitalearn.webp";
import Logo4 from "../assets/Gruslabs.svg";
import Logo5 from "../assets/MSA.png";
import Logo6 from "../assets/spectre.webp";
import CountUp from "react-countup";

// Team image
import team from "../assets/team.jpeg";

const serviceCards = [
  {
    title: "Cloud Services",
    description:
      "Cloud services provide computing resources over the internet, allowing users to access and use them on-demand without maintaining the underlying infrastructure.",
    image: card1,
  },
  {
    title: "UI Design",
    description:
      "UI design involves designing and developing visual and interactive components for websites and applications. Key skills include HTML, CSS, JavaScript, responsive design, and accessibility.",
    image: card2,
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing uses online strategies and channels to promote products and services, connecting businesses with customers. Techniques include SEO, PPC, social media, content marketing, and leveraging offline media.",
    image: card3,
  },
  {
    title: "Web Development",
    description:
      "Web development involves creating and maintaining websites and web applications. It includes frontend development (user interface), backend development (server-side logic), and full-stack development (both).",
    image: card4,
  },
  {
    title: "Software Services",
    description:
      "Software services include custom software development, web development, mobile app development, cloud computing, quality assurance, software maintenance, and consulting.",
    image: card5,
  },
  {
    title: "Software Development",
    description:
      "Software development is the process of designing, creating, testing, and maintaining computer programs and applications. It involves identifying needs, analyzing requirements, designing, developing, testing, deploying, and maintaining software.",
    image: card6,
  },
];
const images = [img1, img2, img3, img4];

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
<<<<<<< HEAD
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const bannerText = {
    title: "Your Gateway to Digital Solutions, Learning, and Industry Excellence.",
=======

  const bannerText = {
    title: "Elevate Your Career with Expert IT Training",
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
    type1: "Cloud Computing & Architecture",
    type2: "Advanced Cyber Security",
    type3: "Strategic Project Management",
    type4: "Professional Development",
    ctaText: "Begin Your Journey",
<<<<<<< HEAD
    ctaLink: "/contact-us",
  };

  const partners = [
    { logo: Logo1, name: "SBS", url: "https://sbs-mea.com/" },
    { logo: Logo2, name: "ThreatMatrix", url: "https://threatmatrix.co.uk/" },
    {
      logo: Logo3,
      name: "Digitalearn",
      url: "https://digitalearnsolution.com/",
    },
    { logo: Logo4, name: "Gruslabs", url: "https://www.gruslabs.com/" },
    { logo: Logo5, name: "MSA Software", url: "https://msasoftware.in/" },
    { logo: Logo6, name: "Spectre", url: "https://spectreme.ai/" },
=======
    ctaLink: "/contact-us", // Link to the page you want to navigate to
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const serviceCards = [
    {
      title: "Cloud Services",
      description: "Cloud services provide computing resources over the internet, allowing users to access and use them on-demand without maintaining the underlying infrastructure.",
      image: card1,
    },
    {
      title: "UI Design",
      description: "UI design involves designing and developing visual and interactive components for websites and applications. Key skills include HTML, CSS, JavaScript, responsive design, and accessibility.",
      image: card2,
    },
    {
      title: "Digital Marketing",
      description: "Digital marketing uses online strategies and channels to promote products and services, connecting businesses with customers. Techniques include SEO, PPC, social media, content marketing, and leveraging offline media.",
      image: card3,
    },
    {
      title: "Web Development",
      description: "Web development involves creating and maintaining websites and web applications. It includes frontend development (user interface), backend development (server-side logic), and full-stack development (both).",
      image: card4,
    },
    {
      title: "Software Services",
      description: "Software services include custom software development, web development, mobile app development, cloud computing, quality assurance, software maintenance, and consulting.",
      image: card5,
    },
    {
      title: "Software Development",
      description: "Software development is the process of designing, creating, testing, and maintaining computer programs and applications. It involves identifying needs, analyzing requirements, designing, developing, testing, deploying, and maintaining software.",
      image: card6,
    },
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
  ];

  const statsItems = [
    { count: "1,00,000+", label: "Sales" },
    { count: "5,00+", label: "Certification Courses" },
    { count: "8K+", label: "Users" },
    { count: "30,000+", label: "Hours" },
  ];

  const navigate = useNavigate();
  const partners = [
    { logo: Logo1, name: "SBS", url: "https://sbs-mea.com/" },
    { logo: Logo2, name: "ThreatMatrix", url: "https://threatmatrix.co.uk/" },
    { logo: Logo3, name: "Digitalearn", url: "https://digitalearnsolution.com/" },
    { logo: Logo4, name: "Gruslabs", url: "https://www.gruslabs.com/" },
    { logo: Logo5, name: "MSA Software", url: "https://msasoftware.in/" },
    { logo: Logo6, name: "Spectre", url: "https://spectreme.ai/" },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it animates only once
    threshold: 0.3, // Start animation when 30% of the div is in view
  });
  return (
    <div className="bg-gray-50">
      {/* Hero Banner Section */}
<<<<<<< HEAD
      <div className="flex flex-col md:flex-row min-h-[400px] md:h-screen bg-black text-white">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 bg-black bg-opacity-70 z-10 py-10 md:py-0">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 max-w-3xl drop-shadow-lg">
            {bannerText.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-4">
            {[
              bannerText.type1,
              bannerText.type2,
              bannerText.type3,
              bannerText.type4,
            ].map((type, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 hover:bg-opacity-20 transition text-white font-medium px-5 py-3 rounded-lg shadow-md text-center"
              >
                {type}
              </div>
            ))}
          </div>
          <Link
            to={bannerText.ctaLink}
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200"
          >
            {bannerText.ctaText}
            <FaArrowRight className="ml-3 text-base" />
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-full relative overflow-hidden flex items-center justify-center">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className={`max-h-full w-auto rounded-2xl object-cover border-[6px] border-black shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-opacity duration-700 ease-in-out ${
              fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>

      {/* Vendors Section */}
      <div className="py-20 bg-gradient-to-br from-[#eef3fb] via-[#f6f9fe] to-[#ffffff]">
        <h2 className="text-center font-extrabold text-4xl md:text-5xl text-[#1F3C88] mb-12 tracking-tight">
          Our Trusted Vendors & Providers
        </h2>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 transition-all duration-500 hover:shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
              {[comptia, pecb, certiport, pearson, etraind].map(
                (logo, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center transform transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={logo}
                      alt={`Vendor Logo ${index + 1}`}
                      className="object-contain max-h-16 max-w-[80%] mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/150x50?text=Logo";
                      }}
                    />
                  </div>
                )
              )}
=======
      <div className="relative bg-gradient-to-b from-[#1e3a76] to-[#152B54]">
        <HomeBanner text={bannerText} />
      </div>

      {/* Vendors Section with Enhanced Styling - Fixed version */}
      <div className="py-16 bg-white">
        <h2 className="text-center font-bold text-3xl md:text-4xl text-[#152B54] mb-8">Our Trusted Vendors & Providers</h2>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-100 rounded-xl p-8 shadow-inner">
            {/* Replace the slider with a simple grid for reliability */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[comptia, pecb, certiport, pearson, etraind].map((logo, index) => (
                <div key={index} className="flex justify-center items-center p-4 ">
                  <div className="bg-white rounded-lg shadow-md p-4 h-24 w-full flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Vendor Logo ${index + 1}`}
                      className="object-contain max-h-16 max-w-[80%] mx-auto filter hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'https://via.placeholder.com/150x50?text=Logo';
                      }}
                    />
                  </div>
                </div>
              ))}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-b from-[#E0F2FE] to-[#E0E7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D0E2FF] text-[#152B54] text-sm font-medium mb-3">
              ABOUT US
            </span>
            <h2 className="text-3xl font-bold text-[#1E293B] sm:text-4xl mb-4">
=======
      {/* About Us Section with Enhanced Styling */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-medium mb-3">ABOUT US</span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
              Empowering Your Business with Seamless IT Solutions
            </h2>
            <div className="h-1 w-20 bg-[#152B54] mx-auto"></div>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-[#152B54] rounded-xl opacity-20 transform rotate-3 blur-sm"></div>
              <img
                src={team}
                alt="Team"
                className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">
                Our Mission
              </h3>
              <p className="text-[#334155] mb-6 leading-relaxed">
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "End-to-End IT Technical Management",
                  "Strategic Technology Partnership",
                  "Responsive & Supportive Team ",
                  "Tailored Digital Growth Solutions ",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-2" />
                    <p className="text-[#334155]">{item}</p>
                  </div>
                ))}
              </div>
=======

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image Section with Floating Effect */}
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-[#152B54] rounded-xl opacity-20 transform rotate-3"></div>
              <img
                src={team}
                alt="Team"
                className="relative z-10 rounded-xl shadow-xl w-full object-cover h-[400px]"
              />
              {/* <div className="absolute -bottom-4 -right-4 bg-[#152B54] rounded-lg p-3 text-white font-bold shadow-lg z-20">
                <span className="text-xl">4+ Years</span>
                <p className="text-sm">Excellence in IT</p>
              </div> */}
            </div>

            {/* Text Section */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#152B54] mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Traincape Technology, we specialize in delivering premier IT support and
                management services tailored to optimize your technology
                operations. Our mission is to empower businesses with innovative,
                reliable, and scalable IT solutions that drive success.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Innovative Technology Solutions",
                  "Expert Certified Professionals",
                  "24/7 Customer Support",
                  "Customized Business Strategies"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <BsCheck2Circle className="text-green-500 text-xl mt-1 mr-2" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
              <NavLink to="/about-us">
                <button className="bg-[#152B54] text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center group">
                  <span>Learn More About Us</span>
                  <FaArrowRight className="ml-2 group-hover:ml-4 transition-all" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section with Professional Styling */}
      <section className="py-16 bg-[#FFCCBC]">
        {" "}
        {/* Soft Coral Orange */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-semibold mb-3 tracking-wide">
              OUR SERVICES
            </span>
            <h2 className="text-3xl font-extrabold text-[#152B54] sm:text-4xl mb-4 tracking-tight">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-[#1E2A47] max-w-3xl mx-auto text-lg leading-relaxed hover:text-blue-700 transition-colors duration-300 cursor-default">
              We provide top-notch IT services to help businesses grow and
              thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className="bg-[#E6F0FF] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border border-[#A3BFFA] cursor-pointer"
                onClick={() =>
                  navigate("/service-detail", { state: { service } })
                }
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#152B54] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#2C3A67] mb-6 line-clamp-3 hover:text-blue-600 transition-colors duration-300 cursor-default">
                    {service.description}
                  </p>
                  <button
                    className="text-[#152B54] font-semibold hover:text-blue-700 flex items-center transition-colors duration-300 group"
                    aria-label={`Learn more about ${service.title}`}
=======
      {/* Services Section with Enhanced Card Styling */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-medium mb-3">OUR SERVICES</span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide top-notch IT services to help businesses grow and thrive in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#152B54] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                  <button 
                    onClick={() => navigate('/our-services')}
                    className="text-[#152B54] font-semibold hover:text-blue-700 flex items-center transition-all group"
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2 group-hover:ml-3 transition-all" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
<<<<<<< HEAD
            <button
              onClick={() => navigate("/our-services")}
              className="bg-[#152B54] text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
=======
            <button 
              onClick={() => navigate('/our-services')}
              className="bg-[#152B54] text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Video Call-to-Action Section - Fix the video section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0c1d3d] to-[#152B54] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
<<<<<<< HEAD
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#152B54] text-sm font-medium mb-4">
                IT SOLUTIONS 2025
              </span>
=======
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#152B54] text-sm font-medium mb-4">IT SOLUTIONS 2024</span>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["TRUST OUR BEST IT SOLUTIONS FOR YOUR BUSINESS"],
                  }}
<<<<<<< HEAD
                />
              </h2>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              </p>

              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm flex items-center mb-8 border border-white/20">
                <Link
                  to="https://wa.me/+441253928501"
                  target="_blank"
                  className="mr-3"
                >
                  <FaSquareWhatsapp className="text-green-400 text-4xl hover:scale-110 transition-transform" />
                </Link>
                <div>
                  <p className="text-blue-200 text-sm">
                    24 HOURS SERVICE AVAILABLE
                  </p>
                  <h4 className="text-white font-bold cursor-pointer hover:text-blue-200 transition-colors">
                    Chat With Us: +44 1253 928501
                  </h4>
                </div>
              </div>

              <button
                onClick={() => navigate("/contact-us")}
                className="inline-block px-8 py-4 bg-white text-[#152B54] font-bold rounded-lg hover:bg-opacity-90 transition duration-300"
              >
                Contact Us Now
              </button>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {/* Fix the YouTube iframe by using a thumbnail first, then loading iframe on click */}
                {!videoLoaded ? (
                  <div
                    className="w-full aspect-video bg-gray-800 flex items-center justify-center cursor-pointer"
                    onClick={() => setVideoLoaded(true)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(https://img.youtube.com/vi/cZjkxmzo1Xg/maxresdefault.jpg)`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/cZjkxmzo1Xg?autoplay=1&controls=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                )}
              </div>
            </div>
=======
                />
              </h2>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Compellingly mesh cross-platform portals through functional human
                capital and world-class architectures for orthogonal initiatives. With our tailored IT solutions, your business can achieve unprecedented growth.
              </p>
              
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm flex items-center mb-8 border border-white/20">
                <Link to="https://wa.me/+441253928501" target="_blank" className="mr-3">
                  <FaSquareWhatsapp className="text-green-400 text-4xl hover:scale-110 transition-transform" />
                </Link>
                <div>
                  <p className="text-blue-200 text-sm">24 HOURS SERVICE AVAILABLE</p>
                  <h4 className="text-white font-bold cursor-pointer hover:text-blue-200 transition-colors">
                    Chat With Us: +44 1253 928501
                  </h4>
                </div>
              </div>
              
              <button
                onClick={() => navigate("/contact-us")}
                className="inline-block px-8 py-4 bg-white text-[#152B54] font-bold rounded-lg hover:bg-opacity-90 transition duration-300"
              >
                Contact Us Now
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {/* Fix the YouTube iframe by using a thumbnail first, then loading iframe on click */}
                {!videoLoaded ? (
                  <div 
                    className="w-full aspect-video bg-gray-800 flex items-center justify-center cursor-pointer" 
                    onClick={() => setVideoLoaded(true)}
                  >
                    <div className="absolute inset-0 bg-cover bg-center" 
                      style={{backgroundImage: `url(https://img.youtube.com/vi/cZjkxmzo1Xg/maxresdefault.jpg)`}}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/cZjkxmzo1Xg?autoplay=1&controls=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-medium mb-3">WHY CHOOSE US</span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Why Students Choose Traincape Technology
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied students who have transformed their careers with our expert training
            </p>
          </div>

          {/* <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <div className="text-[#152B54] font-bold text-4xl md:text-5xl mb-2">{item.count}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div> */}
          <div
                    ref={ref}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                  >
                    {[
                      { count: 100000, label: "Sales" },
                      { count: 500, label: "Certification Courses" },
                      { count: 8000, label: "Users" },
                      { count: 300000, label: "Hours" },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <span className="text-4xl font-semibold">
                          {inView ? (
                            <CountUp
                              start={0}
                              end={item.count}
                              duration={2} // Animation duration in seconds
                              separator={","}
                            />
                          ) : (
                            "0"
                          )}
                          +
                        </span>
                        <p className="text-base text-blue-500">{item.label}</p>
                      </div>
                    ))}
                  </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-medium mb-3">OUR NETWORK</span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Empowering partnerships and fostering teamwork to achieve unparalleled excellence. Our dedicated approach and shared vision create a synergy that fuels innovation and drives sustainable success for all.
            </p>
          </div>

          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
            {partners.map((partner, index) => (
              
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center h-36"
              >
                <img
                  src={partner.logo}
                  alt={partner.name || "Partner Logo"}
                  className="max-h-16 max-w-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300 mb-2"
                />
                <p className="text-white font-medium text-sm text-center mt-2 line-clamp-1">
                  {partner.name || partner.url.replace(/(https?:\/\/)?(www\.)?/i, '').split('/')[0]}
                </p>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-[#152B54] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center"
            >
              <span>Become a Partner</span>
              <FaArrowRight className="ml-2" />
            </button>

            <button
              onClick={() => navigate("/PartnerPage")}
              className="bg-gray-100 text-[#152B54] border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              View All Partners
            </button>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-semibold uppercase tracking-wide mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Why Students Choose Traincape Technology
            </h2>
            <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto mb-12">
              Join thousands of high-achieving students who have transformed their careers through our expert-led training programs and real-world opportunities.
            </p>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              {
                count: 100000,
                label: "Sales",
                bg: "bg-blue-100",
                text: "text-blue-700",
              },
              {
                count: 500,
                label: "Certification Courses",
                bg: "bg-green-100",
                text: "text-green-700",
              },
              {
                count: 8000,
                label: "Users",
                bg: "bg-purple-100",
                text: "text-purple-700",
              },
              {
                count: 300000,
                label: "Hours",
                bg: "bg-yellow-100",
                text: "text-yellow-700",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl shadow-lg transition duration-300 ease-out transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${item.bg}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className={`text-4xl font-bold block mb-2 ${item.text}`}>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.count}
                      duration={2}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                  +
                </span>
                <p className={`text-base font-semibold ${item.text}`}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-100 via-sky-200 to-blue-300 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-3 tracking-wide">
              OUR NETWORK
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4 tracking-tight">
              Our Trusted Partners
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Empowering partnerships through teamwork and shared vision to drive innovation and lasting success.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
            {partners.map((partner, index) => {
              const bgColors = [
                "bg-gray-800",
                "bg-blue-700",
                "bg-green-700",
                "bg-yellow-600",
                "bg-red-700",
                "bg-teal-700",
              ];

              const bgColor = bgColors[index % bgColors.length];

              return (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${bgColor} rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-400 transform hover:scale-105 flex flex-col items-center justify-center h-36 cursor-pointer`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name || "Partner Logo"}
                    className="max-h-16 max-w-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300 mb-3"
                  />
                  <p className="text-white font-semibold text-sm text-center truncate max-w-full">
                    {partner.name ||
                      partner.url
                        .replace(/(https?:\/\/)?(www\.)?/i, "")
                        .split("/")[0]}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => navigate("/contact-us")}
              className="partner-btn bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors duration-500 flex items-center shadow-md"
            >
              <span>Become a Partner</span>
              <FaArrowRight className="ml-2" />
            </button>

            <button
              onClick={() => navigate("/PartnerPage")}
              className="partner-btn bg-gray-100 text-teal-700 border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold hover:bg-teal-100 hover:text-teal-800 transition-colors duration-500"
            >
              View All Partners
            </button>
          </div>
        </div>

        <style jsx>{`
          .partner-btn {
            transition: background-color 0.4s ease, color 0.4s ease;
          }
        `}</style>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0a2239] to-[#183b70] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Ready to Transform Your Technology Experience?
          </h2>
          <p className="text-blue-300 mb-10 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Contact our team of experts today to discover how we can help your
            business grow with innovative technology solutions.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="inline-block px-12 py-4 bg-[#1e90ff] hover:bg-[#0f67d1] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5"
            aria-label="Get started today"
          >
=======
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0c1d3d] to-[#152B54] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Technology Experience?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact our team of experts today to discover how we can help your business grow
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="inline-block px-8 py-4 bg-white text-[#152B54] font-bold rounded-lg hover:bg-opacity-90 transition duration-300"
          >
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
