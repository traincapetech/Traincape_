import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock, productImage } = product; // Destructure the necessary product data
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  
  // Handle decrease in quantity
  const setDecrease = () => {
    setAmount(amount > 1 ? amount - 1 : 1);
  };

  // Handle increase in quantity
  const setIncrease = () => {
    setAmount(amount < stock ? amount + 1 : stock);
  };

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,  // Spread all product details
      color,       // Add the selected color to the product
      quantity: amount,  // Add the quantity to the product
      productImage,      // Ensure productImage is included
    };
    addToCart(productToAdd);
  };

  // Handle manual quantity input change
  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
    setAmount(value); // Update the amount with the input value
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <p className="font-medium">Color:</p>
        {colors.map((curColor, index) => (
          <button
            key={index}
            style={{ backgroundColor: curColor }}
            className={`w-8 h-8 rounded-full border-none cursor-pointer transition-opacity duration-200 ${
              color === curColor
                ? "opacity-100 ring-2 ring-gray-700"
                : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => setColor(curColor)}
          >
            {color === curColor && <FaCheck className="text-white" />}
          </button>
        ))}
      </div>

      {/* Cart Amount Toggle for increase/decrease buttons */}
      <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />

      {/* Quantity Input */}
      <div className="mt-4">
        <input
          type="number"
          value={amount}
          onChange={handleQuantityChange}
          min="1"
          max={stock}
          className="border px-2 py-1 w-16 text-center rounded-md"
        />
      </div>

      {/* Add to Cart Button */}
      <NavLink to="/cart" onClick={handleAddToCart}>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Add To Cart
        </button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
