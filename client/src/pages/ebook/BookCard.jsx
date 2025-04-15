import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import bookSection from "./BookCard.module.css";
import { Link } from "react-router-dom";

// Default book cover component
const DefaultBookCover = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-full h-full text-gray-400"
  >
    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
    <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"/>
  </svg>
);

const BookCard = ({
  _id,
  title,
  imageUrl,
  author,
  description,
  pdflink,
  Doclink,
  price
}) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageUrl || "");
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle image loading
  useEffect(() => {
    // Reset states when imageUrl changes
    if (imageUrl) {
      setImgSrc(imageUrl);
      setImageLoaded(false);
      setError(false);
    }
  }, [imageUrl]);

  // Handle image loading errors
  const handleImageError = () => {
    // If already errored or no image, just show the default cover
    setError(true);
    setImageLoaded(true);
  };

  const handleNavigate = () => {
    navigate(`/book-details/${_id}`);
  };

  // Truncate title if it's too long
  const truncatedTitle = title?.length > 40 
    ? `${title.substring(0, 40)}...` 
    : title;

  // Truncate author if it's too long
  const truncatedAuthor = author?.length > 30
    ? `${author.substring(0, 30)}...`
    : author;

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col"
      onClick={handleNavigate}
    >
      <div className="relative pb-[130%] overflow-hidden bg-gray-100">
        {/* Skeleton loader shown while image is loading */}
        {!imageLoaded && !error && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-4.44-6.19l-2.35 3.02-1.56-1.88a.5.5 0 0 0-.78.01l-1.74 2.23a.5.5 0 0 0 .39.81h8.98a.5.5 0 0 0 .4-.8l-2.78-3.4a.5.5 0 0 0-.56-.01z" />
            </svg>
          </div>
        )}

        {error || !imgSrc ? (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <DefaultBookCover />
          </div>
        ) : (
          <img
            src={imgSrc}
            alt={title || "Book Cover"}
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
          {truncatedTitle || "Untitled"}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {truncatedAuthor ? `By: ${truncatedAuthor}` : "Unknown Author"}
        </p>
        <div className="mt-auto flex justify-between items-center">
          <p className="text-lg font-semibold text-blue-600">
            {price ? `₹${price}` : "Free"}
          </p>
          {pdflink && (
            <Link 
              to={pdflink} 
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={(e) => e.stopPropagation()} // Prevent card navigation
            >
              Read PDF
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Add necessary styles if not already present
if (!document.getElementById('book-card-styles')) {
  const style = document.createElement('style');
  style.id = 'book-card-styles';
  style.textContent = `
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
}

export default memo(BookCard);
