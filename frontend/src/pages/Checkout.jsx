import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { transactionAPI, propertyAPI } from '../services/api';
import '../styles/Checkout.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Checkout() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await propertyAPI.getProperty(propertyId);
        setProperty(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load property');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  const handleCheckout = async () => {
    try {
      const response = await transactionAPI.createCheckoutSession({
        propertyId,
      });

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId: response.data.sessionId,
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Checkout failed');
    }
  };

  if (loading) return <div className="loading">Loading checkout...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!property) return <div className="error">Property not found</div>;

  return (
    <div className="checkout">
      <h1>Complete Your Purchase</h1>

      <div className="checkout-container">
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="order-item">
            <img
              src={property.mainImage || 'https://via.placeholder.com/100x100'}
              alt={property.title}
            />
            <div>
              <p className="item-title">{property.title}</p>
              <p className="item-location">
                {property.planet}, {property.galaxy}
              </p>
            </div>
          </div>

          <div className="order-total">
            <div className="total-row">
              <span>Property Price:</span>
              <span>${property.price.toLocaleString()}</span>
            </div>
            <div className="total-row">
              <span>Processing Fee:</span>
              <span>${(property.price * 0.02).toLocaleString()}</span>
            </div>
            <div className="total-row final">
              <span>Total:</span>
              <span>${(property.price * 1.02).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="checkout-form">
          <h2>Payment Details</h2>
          <p className="payment-info">
            You will be redirected to Stripe to complete your payment securely.
          </p>

          <button onClick={handleCheckout} className="checkout-button">
            Proceed to Payment
          </button>

          <button onClick={() => navigate(-1)} className="cancel-button">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
