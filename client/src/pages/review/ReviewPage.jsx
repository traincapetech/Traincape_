// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import ReviewCard from "./ReviewCard";
// import Pagination from "./Pagination";
// import reviewpage from "./ReviewPage.module.css";
// import Loading from "../loadingPage/Loading";

// const ReviewPage = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchReviews(currentPage);
//   }, [currentPage]);

//   const fetchReviews = async (page) => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         `https://traincape-backend-1.onrender.com/review/get-review?page=${page}&limit=20`
//       );
//       setData(res.data.review);
//       setCurrentPage(res.data.currentPage);
//       setTotalPages(res.data.totalPages);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false); // Set loading to false after fetching
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         <>
//           {totalPages > 1 && (
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               setCurrentPage={setCurrentPage}
//             />
//           )}
//           <div className={reviewpage.reviewContainer}>
//             {data.length > 0 ? (
//               data.map((item) => (
//                 <div key={item._id} className={reviewpage.reviewdiv}>
//                   <ReviewCard {...item} />
//                 </div>
//               ))
//             ) : (
//               <p>No reviews available.</p>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default ReviewPage;
// Updated by Tripti
// Updated by Tripti
import axios from 'axios';
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "../loadingPage/Loading";
import Pagination from "./Pagination";

const ReviewPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage]);

  const fetchReviews = async (page) => {
    setLoading(true);
    setError(null);  // Reset error state
    try {
      const res = await axios.get(
        `https://traincape-backend-1.onrender.com/review/get-review?page=${page}&limit=18`
      );
      setData(res.data.review);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      setError("An error occurred while fetching reviews.");
      console.log(err);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Google Review URL (replace with your actual URL)
  const googleReviewURL = "https://www.google.com/maps/place/Traincape+technology+Pvt+Ltd/@28.6101198,77.0840136,17z/data=!4m8!3m7!1s0x390d05ecdc6529c1:0x7419fbbcac72b568!8m2!3d28.6101151!4d77.0865885!9m1!1b1!16s%2Fg%2F11p5zlpbky?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="mx-auto  lg:px-16 xl:px-16 px-2 py-8">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-6 gap-2">
            {data.length > 0 ? (
              data.map((item) => (
                <ReviewCard key={item._id} {...item} />
              ))
            ) : (
              <p className="text-center text-lg text-gray-500 col-span-full">
                No reviews available.
                {error && <p className="text-center text-red-500">{error}</p>}

              </p>
              
            )}
          </div>

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
        </>
      )}
    </div>
  );
};

export default ReviewPage;