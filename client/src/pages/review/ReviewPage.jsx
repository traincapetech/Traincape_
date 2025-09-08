import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "../loadingPage/Loading";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const CACHE_EXPIRY = 15 * 60 * 1000; // 15 minutes
const REVIEWS_PER_PAGE = 12;
const reviewCache = new Map();

// Axios instance with increased timeout
const reviewsAPI = axios.create({
  timeout: 30000, // 30 seconds timeout to survive backend cold start
  headers: { "Content-Type": "application/json" },
});

// Helper to sanitize review data
const processReviews = (reviews) => {
  return Array.isArray(reviews)
    ? reviews.map((review) => ({
        ...review,
        image: review.image?.startsWith("http")
          ? review.image
          : `/${review.image?.replace(/^\/+/, "")}`,
        name: review.name || "Anonymous",
        star: review.star || 0,
        review: review.review || "No review provided.",
      }))
    : [];
};

const ReviewPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchReviews = useCallback(async (page) => {
    setLoading(true);
    setError(null); // Clear previous error

    const cacheKey = `reviews_page_${page}`;
    const cached = reviewCache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
      setData(cached.reviews);
      setCurrentPage(cached.currentPage);
      setTotalPages(cached.totalPages);
      setLoading(false);
      return;
    }

    try {
      const res = await reviewsAPI.get(
        `https://traincape-backend-1.onrender.com/review/get-review?page=${page}&limit=${REVIEWS_PER_PAGE}`
      );
      const processed = processReviews(res.data.review);
      reviewCache.set(cacheKey, {
        reviews: processed,
        currentPage: res.data.currentPage,
        totalPages: res.data.totalPages,
        timestamp: Date.now(),
      });
      setData(processed);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load reviews. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage, fetchReviews]);

  return (
    <div className="mx-auto lg:px-16 px-2 py-8">
      {loading ? (
        <Loading type="reviews" />
      ) : (
        <div className="fade-in">
          <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 font-bold py-2 rounded hover:text-gray-800"
            >
              Home
            </button>
            <span className="ml-4 text-gray-500 font-bold">
              &gt; Our Reviews
            </span>
          </div>

          {error ? (
            // --- Bonus UX: Show retry button if error occurs ---
            <div className="text-center my-8">
              <p className="text-red-600 text-lg font-semibold mb-4">
                {error}
              </p>
              <button
                onClick={() => fetchReviews(currentPage)}
                className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
              >
                Retry
              </button>
            </div>
          ) : data.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((item, i) => (
                <ReviewCard key={item._id || i} {...item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-500 col-span-full">
              No reviews available.
            </p>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}

          <div className="flex justify-center mt-8">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJwSll3OwFDTkRaLVyrLz7GXQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-yellow-600 hover:scale-105 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M12 .587l3.668 7.568L24 9.748l-6 5.858L19.335 24 12 20.018 4.665 24 6 15.606 0 9.748l8.332-1.593z" />
              </svg>
              Write a Google Review
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ReviewPage);
