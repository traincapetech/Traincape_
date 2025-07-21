import axios from 'axios';
import React, { useEffect, useState, useCallback } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "../loadingPage/Loading";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const CACHE_EXPIRY = 15 * 60 * 1000;
const REVIEWS_PER_PAGE = 12;
const reviewCache = new Map();

const reviewsAPI = axios.create({
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

const processReviews = (reviews) => {
  return Array.isArray(reviews)
    ? reviews.map(review => ({
        ...review,
        image: review.image?.startsWith('http') ? review.image : `/${review.image?.replace(/^\/+/, '')}`,
        name: review.name || 'Anonymous',
        star: review.star || 0,
        review: review.review || 'No review provided.'
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
      const res = await reviewsAPI.get(`https://traincape-backend-1.onrender.com/review/get-review?page=${page}&limit=${REVIEWS_PER_PAGE}`);
      const processed = processReviews(res.data.review);
      reviewCache.set(cacheKey, {
        reviews: processed,
        currentPage: res.data.currentPage,
        totalPages: res.data.totalPages,
        timestamp: Date.now()
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
<<<<<<< HEAD
    <div className="bg-gray-900 min-h-screen mx-auto lg:px-16 px-2 py-8 text-white">
=======
    <div className="mx-auto lg:px-16 px-2 py-8">
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
      {loading ? (
        <Loading type="reviews" />
      ) : (
        <div className="fade-in">
<<<<<<< HEAD
          <div className="flex items-center w-full py-4 px-6 bg-gray-800 text-white rounded shadow-md border border-gray-700 mb-6">
            <button
              onClick={() => navigate("/")}
              className="font-bold py-2 rounded hover:text-gray-300"
            >
              Home
            </button>
            <span className="ml-4 font-bold"> &gt; Our Reviews</span>
=======
          <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 font-bold py-2  rounded hover:text-gray-800"
            >
              Home
            </button>
            <span className="ml-4 text-gray-500 font-bold"> &gt; Our Reviews</span>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          </div>

          {data.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((item, i) => (
                <ReviewCard key={item._id || i} {...item} />
              ))}
            </div>
          ) : (
<<<<<<< HEAD
            <p className="text-center text-lg text-gray-300 col-span-full">
=======
            <p className="text-center text-lg text-gray-500 col-span-full">
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
              {error || "No reviews available."}
            </p>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}

          <div className="flex justify-center mt-6">
            <a
              href="https://www.google.com/maps/place/Traincape+Technology+Pvt+Ltd/@28.6103792,77.0820093,16.5z/data=!4m8!3m7!1s0x390d05ecdc6529c1:0x7419fbbcac72b568!8m2!3d28.607552!4d77.0819803!9m1!1b1!16s%2Fg%2F11p5zlpbky?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
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

<<<<<<< HEAD
export default React.memo(ReviewPage);
=======
export default React.memo(ReviewPage);
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
