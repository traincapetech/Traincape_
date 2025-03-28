// import React from "react";
// import reviewSection from "./ReviewCard.module.css";
// import { Icon, StarIcon } from "@chakra-ui/icons";

// const ReviewCard = ({ _id, name, image, review, reviewtime, star }) => {
//   return (
//     <div className={reviewSection.reviewCard}>
//       <div className={reviewSection.reviewdiv}>
//         <img src={image} alt={name} />
//         <h2>{name}</h2>
//         <p>{review}</p>
//         <p>{reviewtime}</p>
//         <p>
//           {Array.from({ length: star }).map((_, index) => (
//             <Icon as={StarIcon} key={index} color="yellow" p="7px" />
//           ))}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ _id, name, image, review, reviewtime, star }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Max characters for review to display before "Read More" appears
  const maxReviewLength = 100;

  // Function to handle "Read More" / "Show Less"
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#102842] flex-col justify-between rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 md:px-6 p-2 space-y-4 h-full">
      
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="md:w-16 w-10 md:h-16 h-10 rounded-full object-cover border-2 border-gray-300"
          onError={(e) => {
            e.target.src = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          }}
        />
        <div>
          <h2 className="md:text-lg text-base font-semibold text-white">{name}</h2>
          <p className="text-sm text-gray-200">{reviewtime}</p>
        </div>
      </div>

      {/* Review content */}
      <div className="text-white text-center mt-4">
        <p className={isExpanded ? "" : "line-clamp-3"}>
          {review}
        </p>
        {review && review.length > maxReviewLength && (
          <button
            onClick={handleToggle}
            className="text-blue-500 text-sm mt-2 hover:underline"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Star ratings */}
      <div className="flex justify-center space-x-1 mx-auto pb-3 items-center">
        {Array.from({ length: star }).map((_, index) => (
          <FaStar key={index} color="orange" size={12} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;