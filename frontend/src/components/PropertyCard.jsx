import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css';

function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property._id}`} className="property-card">
      <div className="property-image-container">
        <img
          src={property.mainImage || 'https://via.placeholder.com/300x200?text=Property'}
          alt={property.title}
          className="property-image"
        />
        <div className="property-status">{property.status}</div>
      </div>

      <div className="property-content">
        <h3>{property.title}</h3>
        <p className="property-location">
          {property.planet}, {property.galaxy}
        </p>
        <p className="property-description">{property.description.substring(0, 100)}...</p>

        <div className="property-footer">
          <span className="property-price">${property.price.toLocaleString()}</span>
          <span className="property-rating">⭐ {property.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
