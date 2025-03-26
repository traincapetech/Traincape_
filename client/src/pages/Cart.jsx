import React, { useState } from "react";
import { useCartContext } from "../components/CartContext";
import CartItem from "../components/CartItem";
import FormatPrice from "../components/Formatprice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCartContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const accountNumber = "732205000345";
  const bankName = "ICICI Bank";
  const branchName = "Palam Colony";
  const accountHolderName = "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED";
  const ifscCode = "ICIC0007322";
  const Email = "sales@traincapetech.info";

  const alertMessage = `Account Details :\nAccount Number: ${accountNumber}\nBank Name: ${bankName}\nBranch Name: ${branchName}\nAccount Holder Name: ${accountHolderName}\nIFSC Code: ${ifscCode}\nEMAIL : ${Email}\n`;

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

  const handlePayNow = () => {
    // Toggle dropdown visibility when Pay Now is clicked
    setShowDropdown(!showDropdown);
  };

  return (
    <section className="py-10 px-4 md:px-16 bg-gray-200 min-h-screen">
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
        <div className="flex justify-end mt-6 flex-col">
          <div className="text-lg md:text-xl font-bold">
            Total Subtotal: <FormatPrice price={totalSubtotal} />
          </div>

          <div className="flex justify-end flex-col w-24">
            <button
              className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
              onClick={handlePayNow}
            >
              Buy Now
            </button>

            {/* Payment Dropdown */}
            {showDropdown && (
              <div className="relative right-0 mt-2 bg-white z-20 text-black shadow-lg rounded-md w-36 ">
                <Link
                  to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
                  className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
                >
                  PayPal
                </Link>
                <Link
                  to="https://buy.stripe.com/8wM2az10TaYQgww29d"
                  className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
                >
                  Credit / Debit Card
                </Link>
                <button
                  onClick={() => {
                    alert(alertMessage);
                    setShowDropdown(false); // Close the dropdown after clicking Bank Transfer
                  }}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
                >
                  Bank Transfer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

