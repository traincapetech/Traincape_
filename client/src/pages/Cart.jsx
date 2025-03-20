import React from "react";
import { useCartContext } from "../components/CartContext";
import CartItem from "../components/CartItem";
import FormatPrice from "../components/Formatprice";

const Cart = () => {
  const { cart } = useCartContext();

  // Calculate the total subtotal
  const totalSubtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // If the cart is empty, show the "Your Cart Is Empty" message
  if (cart.length === 0) {
    return (
      <section className="py-10 px-4 md:px-24 bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
            Your Cart Is Empty
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Add some items to your cart to get started!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 md:px-16    bg-gray-200 min-h-screen">
      <div className="mx-auto w-full max-w-4xl bg-blue-100 shadow-lg rounded-lg p-4 md:p-10">
        {/* Cart Headers */}
        <div className="text-base md:text-xl grid grid-cols-2 md:grid-cols-4 gap-4 pl-10 font-bold pb-3">
          <p>Item</p>
          <p className="hidden md:block">Price</p>
          <p>Quantity</p>
          <p className="hidden md:block">Remove</p>
        </div>
        <hr className="my-4" />

        {/* Cart Items */}
        <div className="flex flex-col gap-6">
          {cart.map((curElem) => (
            <CartItem key={curElem.id} {...curElem} />
          ))}
        </div>

        {/* Total Subtotal */}
        <div className="flex justify-end mt-6">
          <div className="text-lg md:text-xl font-bold">
            Total Subtotal: <FormatPrice price={totalSubtotal} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;