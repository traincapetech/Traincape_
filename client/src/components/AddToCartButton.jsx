<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "./CartContext"; // Import the cart context
import { FaCaretSquareUp, FaCaretUp, FaCartPlus } from "react-icons/fa";

const AddToCartButton = ({ onClick, className, text }) => {
  const navigate = useNavigate();
  const { cart } = useCartContext(); // Access the cart state

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleClick = () => {
    if (onClick) {
      // Use the provided onClick function if available
      onClick();
    } else {
      // Otherwise, navigate to the cart page (default behavior)
      navigate("/cart");
    }
  };

  // If this is the fixed floating cart button (no className and no text)
  if (!className && !text) {
    return (
      <div
        id="add-to-cart-button"
        style={{
          position: "fixed",
          bottom: "90px", // Position it above the WhatsApp icon
          right: "25px",
          backgroundColor: "#1f2937", // Custom color for the button
          borderRadius: "50%",
          padding: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: "9998", // Ensure it's below the WhatsApp icon
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleClick}
      >
        <FaCartPlus style={{ color: 'white', fontSize: '30px' }}/>
        {/* Display the cart item count as a badge */}
        {totalItems > 0 && (
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
            }}
          >
            {totalItems}
          </div>
        )}
      </div>
    );
  }

  // Regular button style for product pages
  return (
    <button
      className={className || "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md"}
      onClick={handleClick}
    >
      {text || "Add to Cart"}
    </button>
  );
};

=======
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "./CartContext"; // Import the cart context
import { FaCaretSquareUp, FaCaretUp, FaCartPlus } from "react-icons/fa";

const AddToCartButton = ({ onClick, className, text }) => {
  const navigate = useNavigate();
  const { cart } = useCartContext(); // Access the cart state

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleClick = () => {
    if (onClick) {
      // Use the provided onClick function if available
      onClick();
    } else {
      // Otherwise, navigate to the cart page (default behavior)
      navigate("/cart");
    }
  };

  // If this is the fixed floating cart button (no className and no text)
  if (!className && !text) {
    return (
      <div
        id="add-to-cart-button"
        style={{
          position: "fixed",
          bottom: "90px", // Position it above the WhatsApp icon
          right: "25px",
          backgroundColor: "#1f2937", // Custom color for the button
          borderRadius: "50%",
          padding: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: "9998", // Ensure it's below the WhatsApp icon
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleClick}
      >
        <FaCartPlus style={{ color: 'white', fontSize: '30px' }}/>
        {/* Display the cart item count as a badge */}
        {totalItems > 0 && (
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
            }}
          >
            {totalItems}
          </div>
        )}
      </div>
    );
  }

  // Regular button style for product pages
  return (
    <button
      className={className || "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md"}
      onClick={handleClick}
    >
      {text || "Add to Cart"}
    </button>
  );
};

>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
export default AddToCartButton;