import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css';

const isValidImageUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return /^(https?:\/\/|\/|data:image\/)/i.test(url);
};

function PropertyCard({ property }) {
  const imageSrc = property.mainImage || property.image || null;
  if (process.env.NODE_ENV !== 'production') {
    // debug output to help trace image rendering issues
    // eslint-disable-next-line no-console
    console.debug('[PropertyCard] imageSrc:', imageSrc, 'property._id:', property._id || property.id, 'title:', property.title);
  }

  return (
    <Link to={`/property/${property._id || property.id}`} className="property-card">
      <div className="property-image-container">
        {isValidImageUrl(imageSrc) ? (
          <img
            src={imageSrc}
            alt={property.title}
            className="property-image"
          />
        ) : (
          <div className="emoji-image">{(typeof imageSrc === 'string' && imageSrc.length < 4) ? imageSrc : '🏠'}</div>
        )}
        <div className="property-status">{property.status || 'available'}</div>
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
