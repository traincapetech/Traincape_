import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={setDecrease}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        aria-label="Decrease Quantity"
      >
        <FaMinus />
      </button>

      <div className="px-4 py-2 border rounded-md text-lg font-semibold">{quantity}</div>

      <button
        onClick={setIncrease}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        aria-label="Increase Quantity"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;