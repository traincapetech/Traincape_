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
      const res = await reviewsAPI.get(`http://localhost:8080/review/get-review?page=${page}&limit=${REVIEWS_PER_PAGE}`);
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
    <div className="mx-auto lg:px-16 px-2 py-8">
      {loading ? (
        <Loading type="reviews" />
      ) : (
        <div className="fade-in">
          <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 font-bold py-2  rounded hover:text-gray-800"
            >
              Home
            </button>
            <span className="ml-4 text-gray-500 font-bold"> &gt; Our Reviews</span>
          </div>

          {data.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((item, i) => (
                <ReviewCard key={item._id || i} {...item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-500 col-span-full">
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
              href="https://www.google.com/maps/place/Traincape+technology+Pvt+Ltd/"
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

export default React.memo(ReviewPage);