import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state; // Access the passed service data

  // Function to handle navigation to the Contact Us page
  const handleGetStartedClick = () => {
    navigate("/contact-us");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            src={service.banner} // Use service.banner if that's the image you want
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
            services that ensure your success. Whether you’re looking to
            optimize your business processes or expand your capabilities, we’re
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