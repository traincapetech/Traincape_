import React from "react";
import { useCartContext } from "../components/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useCartContext();
  console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);

  return (
    <section className="py-10 px-24 bg-gray-200 min-h-screen">
      <div className=" mx-auto bg-blue-100 shadow-lg rounded-lg p-10">
        <div className="pl-10 text-xl grid grid-cols-5 justify-center font-bold  pb-3">
          <p>Item</p>
          <p className="hidden md:block">Price</p>
          <p>Quantity</p>
          <p className="hidden md:block">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr className="my-4" />

        <div className="flex flex-col gap-6">
          {cart.map((curElem) => (
            <CartItem key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;