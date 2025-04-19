import React, { useState } from "react";
import { useCartContext } from "../../components/CartContext";
import CartItem from "./CartItem";
import FormatPrice from "../../components/Formatprice";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaPaypal, FaCreditCard, FaUniversity, FaAngleDown } from "react-icons/fa";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart } = useCartContext();
  const [showDropdown, setShowDropdown] = useState(false);

  const accountDetails = {
    accountNumber: "732205000345",
    bankName: "ICICI Bank",
    branchName: "Palam Colony",
    accountHolderName: "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED",
    ifscCode: "ICIC0007322",
    email: "sales@traincapetech.info",
  };

  const alertMessage = `Account Details:
Account Number: ${accountDetails.accountNumber}
Bank Name: ${accountDetails.bankName}
Branch Name: ${accountDetails.branchName}
Account Holder Name: ${accountDetails.accountHolderName}
IFSC Code: ${accountDetails.ifscCode}
Email: ${accountDetails.email}
`;

  const totalSubtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
     <EmptyCart/>
    );
  }

  const handlePayNow = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <section className="py-12 px-4 md:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Column */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-xl overflow-hidden">
              {/* Header - only visible on larger screens */}
              <div className="hidden md:grid grid-cols-4 text-sm font-medium text-gray-500 bg-gray-50 p-4">
                <span className="col-span-2">Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">Subtotal</span>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-sm rounded-xl p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <FormatPrice price={totalSubtotal} />
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3"></div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <FormatPrice price={totalSubtotal} />
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={handlePayNow}
                  className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-between"
                >
                  <span className="font-medium">Proceed to Checkout</span>
                  <FaAngleDown className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showDropdown && (
                  <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                    <Link
                      to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors"
                    >
                      <FaPaypal className="text-blue-600 mr-3" />
                      <span>PayPal</span>
                    </Link>
                    <Link
                      to="https://buy.stripe.com/8wM2az10TaYQgww29d"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors"
                    >
                      <FaCreditCard className="text-purple-600 mr-3" />
                      <span>Credit / Debit Card</span>
                    </Link>
                    <button
                      onClick={() => {
                        alert(alertMessage);
                        setShowDropdown(false);
                      }}
                      className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-blue-50 transition-colors"
                    >
                      <FaUniversity className="text-green-600 mr-3" />
                      <span>Bank Transfer</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-500">
                <p className="mb-2">We accept secure payments via PayPal, credit cards, and bank transfers.</p>
                <p>Need help? Contact us at <a href="mailto:sales@traincapetech.info" className="text-blue-600">sales@traincapetech.info</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;