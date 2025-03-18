import React, { useEffect } from "react";
import banner from "../assets/banner.jpeg";
import Owner from "../assets/ParichaySir.jpeg";
import image1 from "../assets/Traincape Technology Deck_page-0002.jpg";
import image3 from "../assets/Traincape Technology Deck_page-0003.jpg";
import image6 from "../assets/Traincape Technology Deck_page-0008.jpg";
import vision from "../assets/vision.jpeg";
import values from "../assets/values.jpeg";
import mission from "../assets/mission.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full">
      {/* Banner Section */}
      <img
        src={banner}
        className="w-full h-[42vh] md:h-[110vh]"
        alt="Traincape Banner"
      />

      {/* Chairman Section */}
      <div className="bg-[#33395C] text-white text-center py-8">
        <h4 className="text-yellow-400 text-2xl font-semibold">Our Chairman</h4>
        <h1 className="text-4xl font-bold">Mr. Parichay Singh Rana</h1>
        <div className="flex flex-col md:flex-row items-center p-10 gap-6">
          <img
            src={Owner}
            alt="Parichay Singh Rana"
            className="w-[400px] h-[430px] rounded-2xl border-4 border-white hover:shadow-lg"
          />
          <div className="max-w-lg">
            <h3 className="text-lg md:text-xl font-medium">
              Founded in 2021 by{" "}
              <span className="text-orange-500 font-bold">
                Parichay Singh Rana
              </span>
              , Traincape Technology emerged with a vision to redefine how
              businesses harness technology. Our mission is to provide bespoke,
              reliable, and forward-thinking tech solutions, empowering
              businesses to unlock their true potential.
            </h3>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      {/* Carousel Section */}
      <div className="text-center py-10 flex justify-center">
        <div className="relative w-4/5 max-w-2xl overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-500 ease-in-out">
            <img
              src={image1}
              className="w-full flex-shrink-0"
              alt="Technology Insights"
            />
            <img
              src={image6}
              className="w-full flex-shrink-0"
              alt="Innovative Solutions"
            />
            <img
              src={image3}
              className="w-full flex-shrink-0"
              alt="Cutting-edge Training"
            />
          </div>
          <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2">
            <button className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-md hover:bg-opacity-80">
              ❮
            </button>
            <button className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-md hover:bg-opacity-80">
              ❯
            </button>
          </div>
        </div>
      </div>
      {/* Vision & Mission Section */}
      <div className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Our Vision & Mission</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-10">
          <div className="flex flex-col items-center max-w-sm">
            <img src={vision} alt="Vision" className="w-40 h-40" />
            <h3 className="text-2xl font-semibold mt-4">Vision</h3>
            <p className="text-gray-700 text-center">
              At Traincape Technology, our vision is to be a global leader in IT
              training and solutions, empowering individuals and businesses
              through innovation and expertise.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-sm">
            <img src={mission} alt="Mission" className="w-40 h-40" />
            <h3 className="text-2xl font-semibold mt-4">Mission</h3>
            <p className="text-gray-700 text-center">
              As an authorized partner of CompTIA and PECB, our mission is to
              deliver industry-leading training programs that empower
              professionals with globally recognized certifications.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-sm">
            <img src={values} alt="Values" className="w-40 h-40" />
            <h3 className="text-2xl font-semibold mt-4">Values</h3>
            <p className="text-gray-700 text-center">
              We uphold innovation, integrity, customer-centricity, and a
              steadfast commitment to delivering quality in every service we
              provide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
