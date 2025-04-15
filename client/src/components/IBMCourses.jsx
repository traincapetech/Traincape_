import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useCartContext } from "./CartContext";

const IBMCourses = ({ id, image, title, description, price, url }) => {
  // const { addToCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const handleAddToCart = () => {
  //   const product = { id, title, price, image, quantity: 1 };
  //   addToCart(product);
  //   navigate("/cart"); // Navigate only after adding to cart
  // };

  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg border border-[#212146] hover:shadow-xl transition-shadow">
      <h1 className="text-lg md:text-xl font-bold text-blue-800 mb-4 text-center">
        {title}
      </h1>

      <img
        className="w-20 h-20 md:w-28 md:h-28 mb-4 object-cover"
        src={image}
        alt={title}
      />

      <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4 text-center">
        {description}
      </h3>

      {/* <h5 className="text-xl font-bold mr-auto">{price}</h5> */}

      <Link to={url}>
        <button
          // onClick={handleAddToCart}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Know More
        </button>
      </Link>
    </div>
  );
};

export default IBMCourses;