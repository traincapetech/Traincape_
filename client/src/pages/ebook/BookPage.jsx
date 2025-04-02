import axios from "axios";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import bookPagination from "./bookPagination";
import booksPage from "./BookPage.module.css";
import BookCard from "./BookCard";
import Loading from "../loadingPage/Loading";
import { useNavigate } from "react-router-dom";
import Pagination from "../review/Pagination";

// Cache to store previously fetched books
const bookCache = new Map();

// Prefetch next page of books to improve UX
const prefetchNextPage = async (page, totalPages) => {
  if (page < totalPages) {
    const nextPage = page + 1;
    const cacheKey = `books_page_${nextPage}`;
    
    // Only prefetch if not already in cache
    if (!bookCache.has(cacheKey)) {
      try {
        const res = await axios.get(
          `/books/get-books?page=${nextPage}&limit=18`,
          { signal: AbortSignal.timeout(5000) } // 5 second timeout for prefetch
        );
        
        bookCache.set(cacheKey, {
          books: res.data.book,
          currentPage: res.data.currentPage,
          totalPages: res.data.totalPages,
          timestamp: Date.now()
        });
      } catch (err) {
        // Silent fail for prefetch
        console.debug("Failed to prefetch next page", err);
      }
    }
  }
};

const BookPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Memoized fetchBooks function
  const fetchBooks = useCallback(async (page) => {
    setLoading(true);
    setError(null);

    // Check if we have cached data for this page
    const cacheKey = `books_page_${page}`;
    if (bookCache.has(cacheKey)) {
      const cachedData = bookCache.get(cacheKey);
      setData(cachedData.books);
      setCurrentPage(cachedData.currentPage);
      setTotalPages(cachedData.totalPages);
      setLoading(false);
      
      // Prefetch next page while user is viewing current page
      prefetchNextPage(page, cachedData.totalPages);
      return;
    }

    try {
      // Add a shorter timeout for faster perceived performance
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
      
      const res = await axios.get(
        `/books/get-books?page=${page}&limit=18`,
        { signal: controller.signal }
      );
      
      clearTimeout(timeoutId);
      
      // Cache the response data
      bookCache.set(cacheKey, {
        books: res.data.book,
        currentPage: res.data.currentPage,
        totalPages: res.data.totalPages,
        timestamp: Date.now()
      });
      
      setData(res.data.book);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
      
      // No artificial delay - show content as soon as it's available
      setLoading(false);
      
      // Prefetch next page while user is viewing current page
      prefetchNextPage(page, res.data.totalPages);
      
    } catch (err) {
      // Handle specific error types
      if (err.name === 'AbortError') {
        setError("Request timed out. Please try again.");
      } else {
        setError("An error occurred while fetching books.");
        console.error("Book fetch error:", err);
      }
      setLoading(false);
    }
  }, []);

  // Fetch books when currentPage changes
  useEffect(() => {
    // Clear cache items older than 5 minutes
    const now = Date.now();
    bookCache.forEach((value, key) => {
      if (now - value.timestamp > 5 * 60 * 1000) {
        bookCache.delete(key);
      }
    });
    
    fetchBooks(currentPage);
    
    // Add intersection observer to prefetch next page when user scrolls near bottom
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && currentPage < totalPages) {
        prefetchNextPage(currentPage, totalPages);
      }
    }, { rootMargin: '200px' });
    
    const footer = document.querySelector('footer') || document.body.lastElementChild;
    if (footer) observer.observe(footer);
    
    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, [currentPage, fetchBooks, loading, totalPages]);

  // Memoized grid content to prevent unnecessary rerenders
  const bookGrid = useMemo(() => (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-6 gap-2">
      {data.length > 0 ? (
        data.map((item) => (
          <BookCard key={item._id} {...item} />
        ))
      ) : (
        <p className="text-center text-lg text-gray-500 col-span-full">
          {error ? error : "No books available."}
        </p>
      )}
    </div>
  ), [data, error]);

  return (
    <div className="mx-auto lg:px-16 xl:px-16 px-2 py-8">
      {loading ? (
        <Loading type="books" /> // Use the enhanced books skeleton loader
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
              <span className="ml-4">Our Books</span>
            </div>
          </div>
          
          {bookGrid}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}

          {/* Button to Add New Books (if needed) */}
          {/* <div className="flex justify-center mt-6">
            <button
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              onClick={() => navigate("/add-book")}
            >
              Add New Book
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

// Optimized CSS with more efficient animation
if (!document.getElementById('book-page-styles')) {
  const style = document.createElement('style');
  style.id = 'book-page-styles';
  style.textContent = `
    .fade-in {
      animation: fadeIn 0.3s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

export default React.memo(BookPage);
