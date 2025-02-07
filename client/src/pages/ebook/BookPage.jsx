import axios from "axios";
import React, { useEffect, useState } from "react";
import bookPagination from "./bookPagination";
import booksPage from "./BookPage.module.css";
import BookCard from "./BookCard";
import Loading from "../loadingPage/Loading";

const BookPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage]);

  const fetchReviews = async (page) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://traincape-backend-1.onrender.com/books/get-book?page=${page}&limit=20`
      );
      setData(res.data.book);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <bookPagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
          <div className={booksPage.reviewContainer}>
            {data.length > 0 &&
              data.map((item) => (
                <div key={item._id} className={booksPage.reviewdiv}>
                  <BookCard {...item} />
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default BookPage;
