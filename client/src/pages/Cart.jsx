import React from "react";
import { useCart } from "../components/CartContext";

const Cart = () => {
  const { cart } = useCart(); // Get cart items from context

  return (
    <div className="py-10 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((course, index) => (
              <li key={index} className="border-b py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg">{course.title}</h3>
                  <p className="text-xl">{course.price}</p>
                </div>
                <p>{course.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
