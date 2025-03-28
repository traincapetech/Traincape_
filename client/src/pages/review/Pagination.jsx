// import React from "react";

// const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPageNumbers = () => {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <button
//           key={i}
//           onClick={() => handlePageChange(i)}
//           disabled={currentPage === i}
//           style={{
//             margin: "0 5px",
//             padding: "5px 10px",
//           }}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pages;
//   };

//   return (
//     <div
//       style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
//     >
//       {renderPageNumbers()}
//     </div>
//   );
// };

// export default Pagination;

// Updated by Triptiimport React from "react";
import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    // If there are fewer than 5 pages, show all of them. 
    // Otherwise, show a set of 5 pages (previous, current, next).
    const visiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
          className={`px-3 py-2 rounded-md text-sm sm:text-base ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 mt-6 sm:space-x-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-md text-sm sm:text-base bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white disabled:bg-gray-200"
      >
        Prev
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-md text-sm sm:text-base bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white disabled:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;