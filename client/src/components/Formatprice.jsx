import React from "react";

const FormatPrice = ({ price, currency = 'INR' }) => {
  // Ensure price is a number and handle decimals correctly
  const numericPrice = typeof price === 'number' ? price : parseFloat(price.toString().replace(/[^0-9.]/g, ""));

  // Ensure the price is a valid number
  if (isNaN(numericPrice)) {
    return <span>Invalid Price</span>;  // Handle invalid price
  }

  // Normalize currency code
  const currencyCode = (currency || 'INR').toUpperCase();

  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericPrice);
};

export default FormatPrice;