// src/pages/Services.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import cloud from "../assets/Cloud-services.svg";
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";
import CloudImg from "../assets/cloud.jpg";
import UiUx from "../assets/uiux.jpg";
import DigitalImg from "../assets/digital.jpg";
import Saas from "../assets/saas.jpg";
import SoftwareImg from "../assets/software.jpeg";
import webImg from "../assets/web.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@mui/material";

const servicesData = [
  {
    title: "Cloud Services",
    description:
      "Cloud services provide computing resources over the internet, allowing users to access and use them on-demand without maintaining the underlying infrastructure. These services offer benefits such as cost optimization, scalability, accessibility, reliability, and innovation.",
    image: cloud,
    banner: CloudImg,
  },
  {
    title: "UI Development",
    description:
      "UI development involves designing and developing visual and interactive components for websites and applications. Key skills include HTML, CSS, JavaScript, responsive design, and accessibility.",
    image: UI,
    banner: UiUx,
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing uses online strategies and channels to promote products and services, connecting businesses with customers. Techniques include SEO, PPC, social media, content marketing, and leveraging offline media.",
    image: Digital,
    banner: DigitalImg,
  },
  {
    title: "Web Development",
    description:
      "Web development involves creating and maintaining websites and web applications. It includes frontend development, backend development, and full-stack development.",
    image: Web,
    banner: webImg,
  },
  {
    title: "Software Services",
    description:
      "Software services include custom software development, web development, mobile app development, cloud computing, quality assurance, software maintenance, and consulting.",
    image: Software,
    banner: Saas,
  },
  {
    title: "Software Development",
    description:
      "Software development is the process of designing, creating, testing, and maintaining computer programs and applications. It is essential for creating custom applications that automate processes and improve efficiency.",
    image: softwareDevelopment,
    banner: SoftwareImg,
  },
];

const Services = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = servicesData.length;
  const segment = 1 / (totalCards + 2);

  // ✅ Declare transforms individually (no map or loops)
  const y0 = useTransform(scrollYProgress, [0 * segment, 0 * segment + segment * 1.4], [200, -150]);
  const opacity0 = useTransform(scrollYProgress, [0, segment * 0.2, segment * 0.8, segment * 1.4], [0, 1, 1, 0.1]);
  const scale0 = useTransform(scrollYProgress, [0, segment * 0.3, segment * 1.4], [0.92, 1, 0.9]);

  const y1 = useTransform(scrollYProgress, [1 * segment, 1 * segment + segment * 1.4], [200, -150]);
  const opacity1 = useTransform(scrollYProgress, [1 * segment, 1 * segment + segment * 0.2, 1 * segment + segment * 0.8, 1 * segment + segment * 1.4], [0, 1, 1, 0.1]);
  const scale1 = useTransform(scrollYProgress, [1 * segment, 1 * segment + segment * 0.3, 1 * segment + segment * 1.4], [0.92, 1, 0.9]);

  const y2 = useTransform(scrollYProgress, [2 * segment, 2 * segment + segment * 1.4], [200, -150]);
  const opacity2 = useTransform(scrollYProgress, [2 * segment, 2 * segment + segment * 0.2, 2 * segment + segment * 0.8, 2 * segment + segment * 1.4], [0, 1, 1, 0.1]);
  const scale2 = useTransform(scrollYProgress, [2 * segment, 2 * segment + segment * 0.3, 2 * segment + segment * 1.4], [0.92, 1, 0.9]);

  const y3 = useTransform(scrollYProgress, [3 * segment, 3 * segment + segment * 1.4], [200, -150]);
  const opacity3 = useTransform(scrollYProgress, [3 * segment, 3 * segment + segment * 0.2, 3 * segment + segment * 0.8, 3 * segment + segment * 1.4], [0, 1, 1, 0.1]);
  const scale3 = useTransform(scrollYProgress, [3 * segment, 3 * segment + segment * 0.3, 3 * segment + segment * 1.4], [0.92, 1, 0.9]);

  const y4 = useTransform(scrollYProgress, [4 * segment, 4 * segment + segment * 1.4], [200, -150]);
  const opacity4 = useTransform(scrollYProgress, [4 * segment, 4 * segment + segment * 0.2, 4 * segment + segment * 0.8, 4 * segment + segment * 1.4], [0, 1, 1, 0.1]);
  const scale4 = useTransform(scrollYProgress, [4 * segment, 4 * segment + segment * 0.3, 4 * segment + segment * 1.4], [0.92, 1, 0.9]);

  const y5 = useTransform(scrollYProgress, [5 * segment, 5 * segment + segment * 1.4], [200, -150]);
  const opacity5 = useTransform(scrollYProgress, [5 * segment, 5 * segment + segment * 0.2, 5 * segment + segment * 0.8, 5 * segment + segment * 1.4], [0, 1, 1, 0.1]);
  const scale5 = useTransform(scrollYProgress, [5 * segment, 5 * segment + segment * 0.3, 5 * segment + segment * 1.4], [0.92, 1, 0.9]);

  const cardTransforms = [
    { y: y0, opacity: opacity0, scale: scale0 },
    { y: y1, opacity: opacity1, scale: scale1 },
    { y: y2, opacity: opacity2, scale: scale2 },
    { y: y3, opacity: opacity3, scale: scale3 },
    { y: y4, opacity: opacity4, scale: scale4 },
    { y: y5, opacity: opacity5, scale: scale5 },
  ];

  // Track visible card smoothly
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const newIndex = Math.min(totalCards - 1, Math.floor(v / segment));
    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (service) => {
    navigate("/service-detail", { state: { service } });
  };

  return (
    <>
      <Helmet>
        <title>Our Services - IT Certifications</title>
        <meta
          name="description"
          content="Empowering businesses with cutting-edge technology solutions."
        />
        <link rel="canonical" href="https://traincapetech.in/our-services" />
      </Helmet>

      <div className="bg-gray-50">
        {/* ✅ HERO SECTION */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video
            className="md:h-[80vh] h-[80vh] w-full object-cover"
            src="https://videos.pexels.com/video-files/9667569/9667569-hd_1920_1080_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Our IT Services
            </h1>
            <p className="text-white text-lg md:text-xl max-w-3xl drop-shadow-md">
              Empowering businesses with cutting-edge technology solutions for
              sustainable growth and innovation.
            </p>
            <div className="w-full flex items-center justify-center gap-10 mt-6">
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "white",
                  fontSize: "1.1rem",
                  padding: "7px 20px",
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#f1f1f1",
                    borderColor: "#f1f1f1",
                  },
                }}
              >
                Explore
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "white",
                  fontSize: "1.1rem",
                  padding: "7px 20px",
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#f1f1f1",
                    borderColor: "#f1f1f1",
                  },
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* ✅ Scroll + Clickable Cards */}
        <div ref={containerRef} className="min-h-[800vh] py-16 bg-gray-50">
          <div className="sticky top-0 h-screen flex flex-col lg:flex-row justify-between px-6 md:px-20">
            {/* LEFT SECTION */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#152B54] mb-6">
                End-to-End Digital Services to Design, Build, & Support Business
              </h2>
              <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                We offer custom and full-cycle web design services that include
                intuitive interface design, feature-rich development, and
                ongoing support. Whether you want to start a new venture or
                scale your existing one globally, our web designing company in
                India creates a complete digital ecosystem for your business. It
                begins on web and can extend to mobile apps for seamless
                performance & lasting impact.
              </p>
            </div>

            {/* RIGHT SECTION */}
            <div className="lg:w-1/2 relative flex items-center justify-center mt-20 lg:mt-0">
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  style={cardTransforms[index]}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`absolute w-[85%] min-h-[420px] bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-300 ${
                    activeIndex === index
                      ? "pointer-events-auto"
                      : "pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="text-2xl font-bold text-[#152B54]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description.slice(0, 220)}...
                  </p>
                  <button
                    className="px-6 py-3 bg-[#152B54] text-white rounded-lg hover:bg-blue-800 transition duration-300"
                    onClick={() => handleClick(service)}
                  >
                    Learn More →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
