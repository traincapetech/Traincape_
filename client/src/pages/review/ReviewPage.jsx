import axios from 'axios';
import React, { useEffect, useState, useCallback, useMemo, lazy, Suspense } from "react";
// Import ReviewCard normally for use in initial render
import ReviewCard from "./ReviewCard";
import Loading from "../loadingPage/Loading";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

// Cache to store previously fetched reviews with longer expiration
const reviewCache = new Map();
const CACHE_EXPIRY = 15 * 60 * 1000; // 15 minutes
const PREFETCH_TIMEOUT = 3000; // 3 second timeout for prefetch
const MAIN_REQUEST_TIMEOUT = 10000; // 10 second timeout for main request
const REVIEWS_PER_PAGE = 18;

// Create axios instance with base configuration
const reviewsAPI = axios.create({
  timeout: MAIN_REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  },
  // Add baseURL if necessary
  // baseURL: 'http://localhost:8080', // Uncomment and adjust if needed
});

// Process reviews to ensure all required fields are present and handle image paths
const processReviews = (reviews) => {
  if (!reviews || !Array.isArray(reviews)) return [];
  
  return reviews.map(review => {
    // Ensure the image path is absolute if it's relative
    let imageUrl = review.image;
    
    // If image exists but doesn't start with http/https, it might be a relative path
    if (imageUrl && typeof imageUrl === 'string' && !imageUrl.startsWith('http')) {
      // Check if it starts with a slash
      if (!imageUrl.startsWith('/')) {
        imageUrl = '/' + imageUrl;
      }
    }
    
    return {
      ...review,
      image: imageUrl,
      name: review.name || 'Anonymous',
      star: review.star || 0,
      review: review.review || 'No review provided.'
    };
  });
};

// Prefetch next page of reviews to improve UX
const prefetchNextPage = async (page, totalPages) => {
  if (page < totalPages) {
    const nextPage = page + 1;
    const cacheKey = `reviews_page_${nextPage}`;
    
    // Only prefetch if not already in cache
    if (!reviewCache.has(cacheKey)) {
      try {
        const res = await reviewsAPI.get(
          `/review/get-review?page=${nextPage}&limit=${REVIEWS_PER_PAGE}`
        );
        
        // Process the reviews to ensure consistent data
        const processedReviews = processReviews(res.data.review);
        
        reviewCache.set(cacheKey, {
          reviews: processedReviews,
          currentPage: res.data.currentPage,
          totalPages: res.data.totalPages,
          timestamp: Date.now()
        });
      } catch (err) {
        // Silent fail for prefetching
        console.debug("Failed to prefetch next page");
      }
    }
  }
};

const ReviewPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Memoized fetchReviews function
  const fetchReviews = useCallback(async (page) => {
    setLoading(true);
    setError(null);

    // Check if we have cached data for this page
    const cacheKey = `reviews_page_${page}`;
    if (reviewCache.has(cacheKey)) {
      const cachedData = reviewCache.get(cacheKey);
      // Only use cache if it's still valid
      if (Date.now() - cachedData.timestamp < CACHE_EXPIRY) {
        setData(cachedData.reviews);
        setCurrentPage(cachedData.currentPage);
        setTotalPages(cachedData.totalPages);
        setLoading(false);
        
        // Prefetch next page while user is viewing current page
        prefetchNextPage(page, cachedData.totalPages);
        return;
      } else {
        // Clear expired cache entry
        reviewCache.delete(cacheKey);
      }
    }

    try {
      const res = await reviewsAPI.get(
        `/review/get-review?page=${page}&limit=${REVIEWS_PER_PAGE}`
      );
      
      // Check if response contains expected data format
      if (res.data && res.data.review) {
        // Process the reviews to ensure consistent data
        const processedReviews = processReviews(res.data.review);
        
        // Cache the response data
        reviewCache.set(cacheKey, {
          reviews: processedReviews,
          currentPage: res.data.currentPage,
          totalPages: res.data.totalPages,
          timestamp: Date.now()
        });
        
        setData(processedReviews);
        setCurrentPage(res.data.currentPage);
        setTotalPages(res.data.totalPages);
        setLoading(false);
        
        // Prefetch next page while user is viewing current page
        prefetchNextPage(page, res.data.totalPages);
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (err) {
      // Detailed error logging to help diagnose the issue
      if (err.response) {
        // Server responded with an error status code
        console.error("Server error:", err.response.status, err.response.data);
        setError(`Server error: ${err.response.status}. Please try again later.`);
      } else if (err.request) {
        // Request was made but no response received (network issue)
        console.error("Network error - no response received");
        setError("Network error. Please check your connection and try again.");
      } else {
        // Error setting up the request
        console.error("Request configuration error:", err.message);
        setError("An error occurred while fetching reviews. Please try again.");
      }
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Clear cache items older than CACHE_EXPIRY
    const now = Date.now();
    reviewCache.forEach((value, key) => {
      if (now - value.timestamp > CACHE_EXPIRY) {
        reviewCache.delete(key);
      }
    });
    
    // Slight delay to allow component to mount properly before fetching
    const timer = setTimeout(() => {
      fetchReviews(currentPage);
    }, 100);
    
    // Create intersection observer with options optimized for performance
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && currentPage < totalPages) {
        // Defer prefetching to avoid competing with current page rendering
        setTimeout(() => {
          prefetchNextPage(currentPage, totalPages);
        }, 300);
      }
    }, { 
      rootMargin: '300px',
      threshold: 0.1
    });
    
    const footer = document.querySelector('footer') || document.body.lastElementChild;
    if (footer) observer.observe(footer);
    
    return () => {
      clearTimeout(timer);
      if (footer) observer.unobserve(footer);
    };
  }, [currentPage, fetchReviews, loading, totalPages]);

  // Google Review URL - memoized to avoid recreation
  const googleReviewURL = useMemo(() => 
    "https://www.google.com/maps/place/Traincape+technology+Pvt+Ltd/@28.6101198,77.0840136,17z/data=!4m8!3m7!1s0x390d05ecdc6529c1:0x7419fbbcac72b568!8m2!3d28.6101151!4d77.0865885!9m1!1b1!16s%2Fg%2F11p5zlpbky?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D",
  []);

  // Optimized review card rendering with fallback for empty data
  const reviewGrid = useMemo(() => {
    if (data && data.length === 0) {
      return (
        <p className="text-center text-lg text-gray-500 col-span-full">
          {error ? error : "No reviews available."}
        </p>
      );
    }
    
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 lg:gap-6 gap-2">
        {data && data.map((item, index) => (
          <ReviewCard key={item._id || `review-${index}`} {...item} />
        ))}
      </div>
    );
  }, [data, error]);

  return (
    <div className="mx-auto lg:px-16 xl:px-16 px-2 py-8">
      {loading ? (
        <Loading type="reviews" />
      ) : (
        <div className="fade-in">
           <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 font-bold py-2 px-4 rounded"
            >
              <span className="hover:text-gray-800">Home</span>
            </button>
            <div className="flex items-center text-gray-500 font-bold">
              <span>{" > "}</span>
              <span className="ml-4">Our Reviews</span>
            </div>
          </div>
          
          {reviewGrid}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}

          {/* Button to Write a Review */}
          <div className="flex justify-center mt-6">
            <a
              href={googleReviewURL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Write a Review
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// More efficient CSS with will-change for better performance
if (!document.getElementById('review-page-styles')) {
  const style = document.createElement('style');
  style.id = 'review-page-styles';
  style.textContent = `
    .fade-in {
      animation: fadeIn 0.25s ease-out;
      will-change: opacity;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

export default React.memo(ReviewPage);