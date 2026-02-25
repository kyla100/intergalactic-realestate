import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css';
import { getPropertyImage, getUploadedHouseImage } from '../utils/propertyImages';

function PropertyCard({ property }) {
  const resolvedImageSrc = getPropertyImage(property);
  if (process.env.NODE_ENV !== 'production') {
    // debug output to help trace image rendering issues
    // eslint-disable-next-line no-console
    console.debug('[PropertyCard] imageSrc:', resolvedImageSrc, 'property._id:', property._id || property.id, 'title:', property.title);
  }

  return (
    <Link to={`/property/${property._id || property.id}`} className="property-card">
      <div className="property-image-container">
        <img
          src={resolvedImageSrc}
          alt={property.title}
          className="property-image"
          onError={(e) => {
            const fallback = getUploadedHouseImage(property, 1);
            if (e.currentTarget.src !== fallback) {
              e.currentTarget.src = fallback;
            }
          }}
        />
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
