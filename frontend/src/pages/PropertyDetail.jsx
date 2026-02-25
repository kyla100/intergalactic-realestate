import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { propertyAPI } from '../services/api';
import { getAllProperties } from '../data/propertyData';
import { getPropertyImage, getUploadedHouseImage } from '../utils/propertyImages';
import '../styles/PropertyDetail.css';

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        // Try to fetch from API first
        const response = await propertyAPI.getProperty(id);
        setProperty(response.data);
      } catch (err) {
        // If API fails, try to find in mock data
        try {
          const mockProperties = getAllProperties();
          const mockProperty = mockProperties.find(p => p.id === parseInt(id));
          
          if (mockProperty) {
            // Format mock data to match the expected structure
            const formattedProperty = {
              _id: mockProperty.id,
              title: mockProperty.name,
              description: mockProperty.description,
              price: mockProperty.price,
              planet: mockProperty.planetName,
              galaxy: mockProperty.galaxyName,
              location: mockProperty.planetName,
              area: {
                value: mockProperty.area,
                unit: 'sq ft'
              },
              status: 'Available',
              rating: 4.5 + (Math.random() * 0.5),
              totalReviews: Math.floor(Math.random() * 50) + 10,
              mainImage: null,
              image: mockProperty.image,
              features: mockProperty.features.map((feature, idx) => ({
                name: feature,
                description: `Premium feature included in this property`
              })),
              currency: 'USD',
              seller: {
                firstName: 'Intergalactic',
                lastName: 'Realty',
                rating: 4.8
              },
              views: Math.floor(Math.random() * 1000) + 100,
              favorites: Math.floor(Math.random() * 200) + 20,
              bedrooms: mockProperty.bedrooms,
              bathrooms: mockProperty.bathrooms,
              isPremium: mockProperty.isPremium
            };
            setProperty(formattedProperty);
          } else {
            setError('Property not found');
          }
        } catch (mockError) {
          setError(err.response?.data?.message || 'Failed to load property');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && property) {
      // eslint-disable-next-line no-console
      console.debug('[PropertyDetail] loaded property id:', property._id || property.id, 'mainImage:', property.mainImage, 'image:', property.image);
    }
  }, [property]);

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
        {property.isPremium && <span className="premium-label">⭐ Premium Property</span>}
      </div>

      <div className="detail-container">
        <div className="detail-main">
          <div className="detail-image">
            <img
              src={getPropertyImage(property)}
              alt={property.title}
              onError={(e) => {
                const fallback = getUploadedHouseImage(property, 1);
                if (e.currentTarget.src !== fallback) {
                  e.currentTarget.src = fallback;
                }
              }}
            />
          </div>

          <div className="detail-info">
            <div className="detail-section">
              <h2>About This Property</h2>
              <p>{property.description}</p>
            </div>

            <div className="detail-section">
              <h2>Property Specifications</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-icon">🛏️</span>
                  <div>
                    <p className="spec-label">Bedrooms</p>
                    <p className="spec-value">{property.bedrooms}</p>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🚿</span>
                  <div>
                    <p className="spec-label">Bathrooms</p>
                    <p className="spec-value">{property.bathrooms}</p>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">📏</span>
                  <div>
                    <p className="spec-label">Area</p>
                    <p className="spec-value">{property.area?.value?.toLocaleString()} {property.area?.unit}</p>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🌍</span>
                  <div>
                    <p className="spec-label">Status</p>
                    <p className="spec-value">{property.status}</p>
                  </div>
                </div>
              </div>
            </div>

            {property.features && property.features.length > 0 && (
              <div className="detail-section">
                <h2>Features & Amenities</h2>
                <ul className="features-list">
                  {property.features.map((feature, index) => (
                    <li key={index}>
                      ✓ <strong>{typeof feature === 'string' ? feature : feature.name}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="detail-section">
              <h2>Property Details</h2>
              <div className="details-grid">
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
            <p className="detail-price-label">Investment Price</p>
            <p className="price-amount">${property.price.toLocaleString()}</p>
            <p className="price-currency">{property.currency}</p>
          </div>

          <a href={`/checkout/${property._id}`} className="buy-button">
            Purchase Property
          </a>

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

          <div className="security-info">
            <h3>🛡️ Secure Transaction</h3>
            <p>All purchases are protected by escrow and Stripe payment security</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
