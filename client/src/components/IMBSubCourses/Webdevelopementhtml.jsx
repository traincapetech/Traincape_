import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Optional but recommended
import { useCartContext } from '../CartContext'; // Use useCartContext instead of CartContext

const WebDevelopmentHTML = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext(); // Use useCartContext to access addToCart

  const toggleAnswer = (index) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: 'IBM Web Development using HTML Certification Course',
      price: 3000,
      quantity,
    };
    addToCart(product);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  return (
    <>
      {/* Floating Cart Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full lg:h-[15rem] md:max-w-xs bg-white p-6 shadow-lg rounded-lg border hover:shadow-xl transition-shadow">
        <h2 className="text-lg font-bold text-gray-800">
          IBM Web Development Using HTML Certification Course
        </h2>
        <p className="text-xl font-bold text-gray-900 mt-2">₹3,000</p>
        <div className="mt-2 flex space-x-2">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="border px-2 py-1 w-16 text-center rounded-md"
            min="1"
            aria-label="Quantity"
          />
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            aria-label="Add to Cart"
          >
            Add To Cart
          </button>
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded-lg"
            aria-label="Buy Now"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="h-full px-4 md:px-[6rem] lg:px-[20rem] lg:pl-[5rem] xl:px-[40rem] xl:pl-[10rem]">
        <div className="max-w-6xl mx-auto mt-6 bg-white p-6 rounded-xl shadow-lg">
          {/* Navigation Tabs */}
          <div className="text-sm md:text-xl border-b pb-3 flex flex-wrap sm:flex-row md:flex-row space-x-10 md:space-x-10 text-blue-900 font-semibold">
            <span>Description</span>
            <span>Benefits</span>
            <span>Exam Details</span>
            <span>FAQ's</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4 tracking-wide">
            The IBM Web Development using HTML Certification Course provides a
            comprehensive introduction to the foundational language of the web.
            You’ll master the essentials of HTML, learning to structure content,
            create web pages, and incorporate multimedia elements.
          </p>
          <br />
          <p className="text-gray-700 mt-2 tracking-wide">
            This course covers everything from basic tags and elements to
            advanced concepts like semantic HTML5, forms, and accessibility.
            Through hands-on projects and quizzes, you’ll gain practical
            experience in building interactive and engaging web pages. Upon
            completion, you’ll receive an industry-recognized IBM certification,
            demonstrating your proficiency in HTML and opening doors to a
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
              you apart from others in the industry.
            </li>
            <li>
              <span className="font-bold">Enhanced Career Opportunities:</span>{" "}
              Having the certification can open new career opportunities and make
              you more competitive in the job market.
            </li>
            <li>
              <span className="font-bold">Increased Credibility:</span> The
              certification enhances your professional credibility and
              reputation.
            </li>
            <li>
              <span className="font-bold">Increased Trust:</span> People who are
              seeking expertise may specifically look for certified
              professionals. By holding the certification, you can instill
              confidence in people, assuring them that you possess the necessary
              skills and knowledge to meet their requirements.
            </li>
            <li>
              <span className="font-bold">Competitive Advantage:</span> In a
              competitive job market, having the certification can give you an
              edge over other candidates.
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
            {[
              {
                question: 'What are the requirements to earn the certification?',
                answer:
                  'To earn the certification, you need to pass a comprehensive exam that tests your knowledge and practical abilities. The exam covers various topics and requires a solid understanding of HTML and its tools.',
              },
              {
                question: 'How can I prepare for the certification exam?',
                answer:
                  'IBM certification courses will be provided with module-wise learning material and practice tests.',
              },
              {
                question: 'Where and how can I take the certification exam?',
                answer:
                  'The certification exam can be taken online from your home. Online exams require a stable internet connection and a suitable testing environment.',
              },
              {
                question: 'How long is the certification valid?',
                answer: 'The certification is valid for a lifetime.',
              },
              {
                question: 'How will the certification benefit my career?',
                answer:
                  'The certification can enhance your career prospects by making you more marketable and competitive.',
              },
              {
                question:
                  'Can I showcase my certification on my resume and professional profiles?',
                answer:
                  'Absolutely! You should proudly highlight your Certification on your resume, LinkedIn profile, and other professional platforms. It will help you stand out to potential employers and clients.',
              },
            ].map((faq, index) => (
              <div key={index}>
                <div
                  className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <p className="font-semibold">{faq.question}</p>
                </div>
                {selectedQuestion === index && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// PropTypes for type checking (optional but recommended)
WebDevelopmentHTML.propTypes = {
  addToCart: PropTypes.func,
};

export default WebDevelopmentHTML;