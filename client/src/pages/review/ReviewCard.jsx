import React, { useState, useEffect } from "react";
import reviewCSS from "./Card.module.css";

// Star component
const StarIcon = ({ filled }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={filled ? "#FFD700" : "#E0E0E0"} 
    className="w-4 h-4"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

// Simple review card that just uses the data directly from backend
const ReviewCard = ({ _id, name, image, review, reviewtime, star }) => {
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  
  // Reset image error state when image prop changes
  useEffect(() => {
    if (image) {
      setImageError(false);
      setImageUrl(image);
    }
  }, [image]);
  
  // Stars for rating
  const renderStars = () => {
    const stars = [];
    const rating = parseInt(star, 10) || 0;
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon key={i} filled={i < rating} />
      );
    }
    return stars;
  };

  // Create a fallback for when images fail to load
  const renderProfileImage = () => {
    if (!imageUrl || imageError) {
      // Render initials or default avatar when no image or image error
      return (
        <div className={reviewCSS.defaultAvatar}>
          <span className="text-gray-500 text-xl font-bold">
            {name ? name.charAt(0).toUpperCase() : "A"}
          </span>
        </div>
      );
    }

    return (
      <img 
        src={imageUrl} 
        alt={name || "User"} 
        className={reviewCSS.img}
        onError={() => setImageError(true)} 
        loading="lazy"
      />
    );
  };

  return (
    <div className={reviewCSS.reviewCard}>
      <div className={reviewCSS.reviewdiv}>
        {renderProfileImage()}
        
        <h4 className={reviewCSS.username}>
          {name || "Anonymous"}
        </h4>
        
        <div className="flex justify-center my-1">
          {renderStars()}
        </div>
        
        <p className={reviewCSS.description}>
          {review || "No review provided."}
        </p>
        
        <p className={reviewCSS.reviewtime}>
          {reviewtime}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ReviewCard);