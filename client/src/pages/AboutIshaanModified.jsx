import React, { useState, useEffect } from "react";
import image1 from "../assets/about-gallery/Traincape Technology Deck_page-0002.jpg";
import image2 from "../assets/about-gallery/Traincape Technology Deck_page-0003.jpg";
import image3 from "../assets/about-gallery/Traincape Technology Deck_page-0004.jpg";
import image4 from "../assets/about-gallery/Traincape Technology Deck_page-0005.jpg";
import image5 from "../assets/about-gallery/Traincape Technology Deck_page-0006.jpg";
import image6 from "../assets/about-gallery/Traincape Technology Deck_page-0007.jpg";
import image7 from "../assets/about-gallery/Traincape Technology Deck_page-0008.jpg";
import image8 from "../assets/about-gallery/Traincape Technology Deck_page-0009.jpg";
import image9 from "../assets/about-gallery/Traincape Technology Deck_page-0010.jpg";
import image10 from "../assets/about-gallery/Traincape Technology Deck_page-0011.jpg";
import image11 from "../assets/about-gallery/Traincape Technology Deck_page-0012.jpg";

import vision from "../assets/vision.jpeg";
import values from "../assets/values.jpeg";
import mission from "../assets/mission.jpeg";

import Owner from "../assets/ParichaySir.jpeg";
import bannerImage from "../assets/banner.jpeg";
import { motion } from "framer-motion";

const AboutPage = () => {
  // State for the carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for carousel
  const carouselImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  // Images for the row
  const rowImages = [
    {
      image: vision,
      title: "Vision",
      description:
        "At Traincape Technology, our vision is to be a global leader in IT training and solutions, empowering individuals and businesses to achieve excellence through innovation, expertise, and cutting-edge technology.",
    },
    {
      image: mission,
      title: "Mission",
      description:
        "  As an authorized partner of CompTIA and PECB, our mission is to deliver industry-leading training programs that empower professionals with globally recognized certifications.",
    },
    {
      image: values,
      title: "Values",
      description:
        "  We uphold innovation, integrity, customer-centricity, and a steadfast commitment to delivering quality in every service we provide.",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Carousel navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div
        className="w-full h-[100vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Lighter overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 5 }}
          className="z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-4 max-w-2xl drop-shadow-lg">
            Learn more about our story
          </p>
        </motion.div>
      </div>

      {/* Owner Section */}
      <div className="max-w-6xl mx-auto p-6 my-12">
        <div className="flex flex-row items-center gap-6 md:gap-12">
          <div className="md:w-[20%] sm:w-[30%] w-[40%]">
            <img
              src={Owner}
              alt="Owner"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
              Mr. Parichay Singh Rana
            </h2>
            <h3 className="text-lg sm:text-xl text-blue-600 mb-2 sm:mb-4">
              Our Chairman
            </h3>
            <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-4">
              Founded in 2021 by{" "}
              <span className="text-blue-500">Parichay Singh Rana</span>,
              Traincape Technology emerged with a vision to redefine how
              businesses harness the power of technology. Built on a foundation
              of expertise and innovation, our mission is to provide bespoke,
              reliable, and forward-thinking tech solutions.
            </p>
            <p className="text-xs sm:text-base text-gray-600">
              We believe in empowering businesses to unlock their true potential
              by delivering tools and strategies that drive success. At
              Traincape, we don't just adapt to technological advancements; we
              anticipate them, ensuring our clients stay ahead in an
              ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Gallery
        </h2>
        <div className="relative h-64 sm:h-80 md:h-96 mb-10">
          <div className="overflow-hidden rounded-lg shadow-lg h-full relative">
            {carouselImages.map((img, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 absolute w-full h-full ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-100"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-100"
          >
            →
          </button>
          {/* Dots */}
          <div className="flex justify-center mt-4">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Three Images Row */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Vision & Mission
        </h2>
        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          {rowImages.map((img, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-auto max-h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {img.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-600">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
