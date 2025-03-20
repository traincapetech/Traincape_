import React from "react";

const FormatPrice = ({ price }) => {
  // Ensure price is a number and handle decimals correctly
  const numericPrice = typeof price === 'number' ? price : parseFloat(price.toString().replace(/[^0-9.]/g, ""));

  // Ensure the price is a valid number
  if (isNaN(numericPrice)) {
    return <span>Invalid Price</span>;  // Handle invalid price
  }

  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericPrice);
};

export default FormatPrice;