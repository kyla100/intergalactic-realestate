import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { propertyAPI } from '../services/api';
import '../styles/PropertyDetail.css';

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await propertyAPI.getProperty(id);
        setProperty(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load property');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <div className="loading">Loading property details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!property) return <div className="error">Property not found</div>;

  return (
    <div className="property-detail">
      <div className="detail-header">
        <h1>{property.title}</h1>
        <p className="detail-location">
          📍 {property.location}, {property.planet} - {property.galaxy}
        </p>
      </div>

      <div className="detail-container">
        <div className="detail-main">
          <div className="detail-image">
            <img
              src={property.mainImage || 'https://via.placeholder.com/600x400'}
              alt={property.title}
            />
          </div>

          <div className="detail-info">
            <div className="detail-section">
              <h2>About This Property</h2>
              <p>{property.description}</p>
            </div>

            {property.features && property.features.length > 0 && (
              <div className="detail-section">
                <h2>Features</h2>
                <ul className="features-list">
                  {property.features.map((feature, index) => (
                    <li key={index}>
                      <strong>{feature.name}</strong>: {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="detail-section">
              <h2>Property Details</h2>
              <div className="details-grid">
                <div>
                  <strong>Area:</strong> {property.area?.value} {property.area?.unit}
                </div>
                <div>
                  <strong>Status:</strong> {property.status}
                </div>
                <div>
                  <strong>Rating:</strong> ⭐ {property.rating.toFixed(1)}/5
                </div>
                <div>
                  <strong>Reviews:</strong> {property.totalReviews}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="price-box">
            <p className="price-label">Price</p>
            <p className="price-amount">${property.price.toLocaleString()}</p>
            <p className="price-currency">{property.currency}</p>
          </div>

          <button className="buy-button">
            <a href={`/checkout/${property._id}`}>Buy Now</a>
          </button>

          <div className="seller-info">
            <h3>Seller Information</h3>
            {property.seller && (
              <>
                <p className="seller-name">
                  {property.seller.firstName} {property.seller.lastName}
                </p>
                <p className="seller-rating">
                  Rating: ⭐ {property.seller.rating.toFixed(1)}/5
                </p>
              </>
            )}
          </div>

          <div className="property-stats">
            <p>👁️ {property.views} views</p>
            <p>❤️ {property.favorites} favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
