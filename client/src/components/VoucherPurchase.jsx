import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import './VoucherPurchase.module.css';

// Temporary placeholder for Stripe - replace with actual key in production
const stripePromise = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
  : null;

const VoucherPurchase = ({ course, subCourse, onClose }) => {
  const [voucherData, setVoucherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    checkVoucherAvailability();
  }, [course, subCourse]);

  const checkVoucherAvailability = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://traincape-backend-1.onrender.com/vouchers/available', {
        params: { course, subCourse }
      });

      if (response.data.available) {
        setVoucherData(response.data.batch);
      } else {
        setError('No vouchers available for this course');
      }
    } catch (error) {
      console.error('Error checking voucher availability:', error);
      setError('Error checking voucher availability');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePurchase = async () => {
    if (!customerData.name || !customerData.email) {
      setError('Please fill in all required fields');
      return;
    }

    setPurchasing(true);
    setError('');

    try {
      // First, purchase the voucher
      const purchaseResponse = await axios.post('https://traincape-backend-1.onrender.com/vouchers/purchase', {
        course,
        subCourse,
        customer: customerData
      });

      if (purchaseResponse.data.success) {
        const { purchase } = purchaseResponse.data;

        // Initialize Stripe payment
        if (!stripePromise) {
          setError('Payment system not configured. Please contact support.');
          return;
        }
        
        const stripe = await stripePromise;
        const { error: stripeError } = await stripe.redirectToCheckout({
          lineItems: [{
            price_data: {
              currency: 'usd',
              product_data: {
                name: `${course} - ${subCourse} Voucher`,
                description: `Certification voucher for ${course} ${subCourse}`,
              },
              unit_amount: Math.round(purchase.price * 100), // Convert to cents
            },
            quantity: 1,
          }],
          mode: 'payment',
          success_url: `${window.location.origin}/voucher-success?purchaseId=${purchase.purchaseId}`,
          cancel_url: `${window.location.origin}/voucher-cancel`,
          metadata: {
            purchaseId: purchase.purchaseId,
            voucherCode: purchase.voucherCode
          }
        });

        if (stripeError) {
          setError('Payment failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error purchasing voucher:', error);
      setError(error.response?.data?.message || 'Error purchasing voucher');
    } finally {
      setPurchasing(false);
    }
  };

  if (loading) {
    return (
      <div className="voucher-purchase-overlay">
        <div className="voucher-purchase-modal">
          <div className="loading">
            <div className="spinner"></div>
            <p>Checking voucher availability...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !voucherData) {
    return (
      <div className="voucher-purchase-overlay">
        <div className="voucher-purchase-modal">
          <div className="error-message">
            <h3>Voucher Not Available</h3>
            <p>{error}</p>
            <button onClick={onClose} className="close-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="voucher-purchase-overlay">
      <div className="voucher-purchase-modal">
        <div className="modal-header">
          <h2>Purchase Voucher</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="voucher-details">
          <h3>{course} - {subCourse}</h3>
          <div className="price-info">
            <span className="price">${voucherData?.price}</span>
            <span className="currency">USD</span>
          </div>
          <p className="availability">
            {voucherData?.availableVouchers} vouchers available
          </p>
        </div>

        <form className="customer-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={customerData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
        </form>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        <div className="modal-footer">
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          <button
            onClick={handlePurchase}
            disabled={purchasing || !customerData.name || !customerData.email}
            className="purchase-btn"
          >
            {purchasing ? 'Processing...' : `Purchase for $${voucherData?.price}`}
          </button>
        </div>

        <div className="purchase-info">
          <h4>What's included:</h4>
          <ul>
            <li>✅ Official certification voucher</li>
            <li>✅ Instant delivery via email</li>
            <li>✅ Secure payment processing</li>
            <li>✅ 24/7 customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VoucherPurchase;
