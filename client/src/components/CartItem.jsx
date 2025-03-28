import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "./CartContext";
import FormatPrice from "./Formatprice";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, title, image, description, price, quantity }) => {
  const { removeItem, updateQuantity } = useCartContext();

  const handleIncrease = () => {
    if (quantity < 99) updateQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) updateQuantity(id, quantity - 1);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b">
      {/* Item Info */}
      <div className="flex items-center space-x-4 col-span-2 md:col-span-1">
        <img src={image} alt={title} className="w-16 h-16 object-cover" />
        <div>
          <p className="font-semibold text-sm md:text-base">{title}</p>
          <p className="text-gray-600 text-xs md:text-sm">{description}</p>
        </div>
      </div>

      {/* Price (Hidden on Mobile) */}
      <p className="text-center ">
        <FormatPrice price={price} />
      </p>

      {/* Quantity Controls */}
      <CartAmountToggle
        quantity={quantity}
        setDecrease={handleDecrease}
        setIncrease={handleIncrease}
      />

      {/* Remove Button */}
      <button
        onClick={() => removeItem(id)}
        className="text-red-500 hover:text-red-700 md:ml-10"
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default CartItem;