import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../CartContext"; // Adjust the import path as necessary
import ibmlogo from "../../assets/ibmnewlogo.webp";
import SQL from "../../assets/sqllogo.png";
import AddToCartButton from "../AddToCartButton";

const IBMSQL = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation message
  const { addToCart } = useCartContext();

  const toggleAnswer = (index) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    const product = {
      id: "5", // You can use a unique ID for this course
      title: "IBM SQL and Relational Database 101 Certification Course",
      price: 3000,
      image: SQL,
      quantity: 1,
    };
    addToCart(product);
    // Show confirmation message
    setShowConfirmation(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <>
                          <AddToCartButton />

      <div className="relative bg-gradient-to-b from-blue-100 to-white w-full h-auto md:h-[20rem] pt-10 px-4 md:px-10 text-left">
        <img
          src={ibmlogo}
          alt="IBM Logo"
          className="h-40 w-32 mx-auto md:mx-0 xl:pl-20 xl:w-auto"
        />
        <h1 className="text-2xl md:text-xl lg:text-4xl font-bold text-blue-900 text-center md:text-left xl:pl-20">
          IBM SQL and Relational Database 101 <br />
          Certification Course
        </h1>
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-72 flex flex-col items-center md:items-start bg-white shadow-lg p-6 rounded-lg border hover:shadow-xl transition-shadow">
          {/* Title */}
          <h1 className="bg-gray-300 w-full text-lg md:text-xl font-bold mb-4 text-center">
            Certification Course
          </h1>

          {/* Image */}
          <img
            className="w-36 h-20 object-cover ml-10"
            src={SQL}
            alt="SQL Logo"
          />

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-blue-600 mb-4 text-center md:text-left">
            IBM SQL and Relational Database 101 Certification Course{" "}
          </h3>

          {/* Price */}
          <h5 className="text-base font-bold text-left">₹3,000</h5>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full lg:h-[13rem] md:max-w-xs bg-white p-6 shadow-lg rounded-lg border hover:shadow-xl transition-shadow">
        <h2 className="text-lg font-bold text-gray-800">
          IBM SQL and Relational Database 101 Certification Course{" "}
        </h2>
        <p className="text-xl font-bold text-gray-900 mt-2">₹3,000</p>
        <div className="mt-2 flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add To Cart
          </button>
          {/* <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
            Buy Now
          </button> */}
        </div>
        {/* Confirmation Message */}
        {showConfirmation && (
          <div className=" mt-5 bg-green-500 text-white px-8  rounded-lg shadow-lg z-50">
            Item Added to Cart!
          </div>
        )}
      </div>

      <div className="h-full px-4 md:px-[6rem] lg:px-[20rem] lg:pl-[5rem] xl:px-[40rem] xl:pl-[10rem]">
        <div className="max-w-6xl mx-auto mt-6 bg-white p-6 rounded-xl shadow-lg">
          <div className="text-sm md:text-xl border-b pb-3 flex flex-wrap sm:flex-row md:flex-row space-x-10 md:space-x-10 text-blue-900 font-semibold">
            <span>Description</span>
            <span>Benefits</span>
            <span>Exam Details</span>
            <span>FAQ's</span>
          </div>
          <p className="text-gray-700 mt-4 tracking-wide">
            The IBM SQL and Relational Database 101 Certification Course
            provides a comprehensive introduction to the foundational language
            of the web. You’ll master the essentials of SQL, learning to
            structure content, create web pages, and incorporate multimedia
            elements.
          </p>
          <br />
          <p className="text-gray-700 mt-2 tracking-wide">
            This course covers everything from basic tags and elements to
            advanced concepts like semantic SQL5, forms, and accessibility.
            Through hands-on projects and quizzes, you’ll gain practical
            experience in building interactive and engaging web pages. Upon
            completion, you’ll receive an industry-recognized IBM certification,
            demonstrating your proficiency in SQL and opening doors to a
            rewarding career in web development.
          </p>

          {/* Benefits */}
          <p className="text-2xl font-serif text-blue-900 font-bold mt-6">
            Benefits
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              <span className="font-bold">Industry Recognition:</span> The
              certification is a globally recognized credential that
              demonstrates your commitment to professional development and sets
              you apart from others in the industry.{" "}
            </li>
            <li>
              <span className="font-bold">Enhanced Career Opportunities:</span>{" "}
              Having the certification can open new career opportunities and
              make you more competitive in the job market.{" "}
            </li>
            <li>
              <span className="font-bold">Increased Credibility:</span>
              The certification enhances your professional credibility and
              reputation.{" "}
            </li>
            <li>
              <span className="font-bold">Increased Trust:</span> The People who
              are seeking expertise may specifically look for certified
              professionals. By holding the certification, you can instill
              confidence in people, assuring them that you possess the necessary
              skills and knowledge to meet their requirements.{" "}
            </li>
            <li>
              <span className="font-bold">Competitive Advantage:</span> In a
              competitive job market, having the certification can give you an
              edge over other candidates.{" "}
            </li>
          </ul>

          {/* Exam Details */}
          <p className="text-2xl font-serif text-blue-900 font-bold mt-6">
            Exam Details
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              <span className="font-bold">Exam Duration:</span> 1 hour.
            </li>
            <li>
              <span className="font-bold">Passing:</span> 70%
            </li>
            <li>
              Clicking the “Final Check” button means your submission is FINAL.
              You will NOT be able to resubmit your answer for that question
              again.
            </li>
            <li className="font-bold">
              IMPORTANT: Do not let the time run out without submitting, or your
              answers will be marked as incomplete.
            </li>
          </ul>

          {/* FAQ Section */}
          <p className="text-2xl font-serif text-blue-900 font-bold mt-6">
            FAQ's
          </p>
          <div className="mt-4">
            {/* FAQ Question 1 */}
            <div
              className="bg-gray-100 p-4 rounded-md w-full cursor-pointer"
              onClick={() => toggleAnswer(0)}
            >
              <p className="font-semibold">
                What are the requirements to earn the certification?
              </p>
            </div>
            {selectedQuestion === 0 && (
              <p className="mt-2 text-gray-700">
                To earn the certification, you need to pass a comprehensive exam
                that tests your knowledge and practical abilities. The exam
                covers various topics and requires a solid understanding of SQL
                and its tools.{" "}
              </p>
            )}

            {/* FAQ Question 2 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(1)}
            >
              <p className="font-semibold">
                How can I prepare for the certification exam?
              </p>
            </div>
            {selectedQuestion === 1 && (
              <p className="mt-2 text-gray-700">
                IBM certification courses will be provided with module-wise
                learning material and practice tests.
              </p>
            )}

            {/* FAQ Question 3 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(2)}
            >
              <p className="font-semibold">
                Where and how can I take the certification exam?
              </p>
            </div>
            {selectedQuestion === 2 && (
              <p className="mt-2 text-gray-700">
                The certification exam can be taken online from your home.
                Online exams require a stable internet connection and a suitable
                testing environment.
              </p>
            )}

            {/* FAQ Question 4 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(3)}
            >
              <p className="font-semibold">
                How long is the certification valid?
              </p>
            </div>
            {selectedQuestion === 3 && (
              <p className="mt-2 text-gray-700">
                The certification is valid for lifetime.
              </p>
            )}

            {/* FAQ Question 5 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(4)}
            >
              <p className="font-semibold">
                How will the certification benefit my career?
              </p>
            </div>
            {selectedQuestion === 4 && (
              <p className="mt-2 text-gray-700">
                The certification can enhance your career prospects by making
                you more marketable and competitive.
              </p>
            )}

            {/* FAQ Question 6 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(5)}
            >
              <p className="font-semibold ">
                Can I showcase my certification on my resume and professional
                profiles?
              </p>
            </div>
            {selectedQuestion === 5 && (
              <p className="mt-2 text-gray-700">
                Absolutely! You should proudly highlight your Certification on
                your resume, LinkedIn profile, and other professional platforms.
                It will help you stand out to potential employers and clients.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IBMSQL;