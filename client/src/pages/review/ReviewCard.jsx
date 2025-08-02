import React, { useState, useEffect } from "react";

// Star icon component
const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "#fbbf24" : "#d1d5db"} 
    className="w-5 h-5"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ReviewCard = ({ _id, name, image, review, reviewtime, star }) => {
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (image) {
      setImageError(false);
      setImageUrl(image);
    }
  }, [image]);

  const renderStars = () => {
    const rating = parseInt(star, 10) || 0;
    return (
      <div className="flex justify-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>
    );
  };

  const renderProfileImage = () => {
    if (!imageUrl || imageError) {
      return (
        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-3">
          <span className="text-gray-600 text-xl font-bold">
            {name ? name.charAt(0).toUpperCase() : "A"}
          </span>
        </div>
      );
    }

    return (
      <img
        src={imageUrl}
        alt={name || "User"}
        className="w-20 h-20 rounded-full object-cover border border-gray-400 mb-3"
        onError={() => setImageError(true)}
        loading="lazy"
      />
    );
  };

  return (
    <div className="
      bg-cyan-100 text-cyan-900 rounded-lg shadow-md
      hover:bg-cyan-200 hover:text-cyan-950
      hover:shadow-xl
      transition duration-300 transform
      hover:-translate-y-1 hover:scale-105
      overflow-hidden mb-5
    ">
      <div className="p-4 flex flex-col items-center text-center">
        {renderProfileImage()}
        <h4 className="font-semibold text-lg mb-1">
          {name || "Anonymous"}
        </h4>
        {renderStars()}
        <p className="text-sm mt-2 leading-relaxed text-gray-700">
          {review || "No review provided."}
        </p>
        {reviewtime && (
          <p className="text-xs text-gray-500 mt-2 italic">{reviewtime}</p>
        )}
      </div>
    </div>
  );
};

export default React.memo(ReviewCard);
