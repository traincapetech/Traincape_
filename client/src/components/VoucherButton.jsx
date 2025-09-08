import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VoucherButton.module.css';
import { useCartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/api';

const VoucherButton = ({ course, subCourse, className = '' }) => {
  const [voucherAvailable, setVoucherAvailable] = useState(false);
  const [voucherData, setVoucherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (course && subCourse) {
      checkVoucherAvailability();
    }
  }, [course, subCourse]);

  const checkVoucherAvailability = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/vouchers/available`, { params: { course, subCourse } });

      if (response.data.available) {
        setVoucherAvailable(true);
        setVoucherData(response.data.batch);
      } else {
        setVoucherAvailable(false);
      }
    } catch (error) {
      console.error('Error checking voucher availability:', error);
      setVoucherAvailable(false);
    } finally {
      setLoading(false);
    }
  };

  const handleVoucherClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!voucherAvailable || !voucherData) return;

    const cartItem = {
      id: `voucher-${course}-${subCourse}`,
      name: `${course} - ${subCourse} Voucher`,
      price: voucherData.price,
      type: 'voucher',
      course,
      subCourse,
      quantity: 1
    };

    addToCart(cartItem);
    navigate('/cart');
  };

  if (loading) {
    return (
      <button 
        className={`voucher-btn loading ${className}`}
        disabled
      >
        <div className="spinner"></div>
        Checking...
      </button>
    );
  }

  if (!voucherAvailable) {
    return null; // Don't show button if no vouchers available
  }

  return (
    <>
      <button 
        onClick={handleVoucherClick}
        className={`voucher-btn ${className}`}
        title={`Add voucher to cart for ${course} - ${subCourse}`}
      >
        <span className="voucher-icon">🎫</span>
        <span className="voucher-text">Add Voucher to Cart</span>
        {voucherData && (
          <span className="voucher-price">${voucherData.price}</span>
        )}
      </button>
    </>
  );
};

export default VoucherButton;
