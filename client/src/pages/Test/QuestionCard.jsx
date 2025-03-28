import React from "react";

const QuestionCard = ({
  questionText, // Changed to match the API response
  options,
  currentQuestion,
  setCurrentQuestion,
  handleSubmit,
  selectedOption,
  handleOptionChange,
  totalQuestions,
}) => {
  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Q.{currentQuestion + 1} {questionText} {/* Updated to questionText */}
      </h2>
      <div className="space-y-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="mr-2"
            />
            <label htmlFor={`option-${index}`} className="text-lg">
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white py-2 px-6 rounded-md"
        >
          Previous
        </button>

        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-6 rounded-md"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-6 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;