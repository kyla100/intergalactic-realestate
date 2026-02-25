import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css';

const isValidImageUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return /^(https?:\/\/|\/|data:image\/)/i.test(url);
};

const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
};

const uploadedHouseImages = [
  '/house-listings/3-1.jpg',
  '/house-listings/360_F_343802551_b8OiOq8kcIr4FNE6UBlPSc82Ik9n5TUX.jpg',
  '/house-listings/Futuristic-Homes-on-Another-Planet-AI-Artwork-3_1-1024x574.jpg',
  '/house-listings/Futuristic-Homes-on-Another-Planet-AI-Artwork-9.jpg',
  '/house-listings/Futuristic-Homes-on-Another-Planet-AI-Artwork-e1717719795983.jpg',
  '/house-listings/capsule-house-concept-3.jpg',
  '/house-listings/dark-moody-saloon-bar-on-600nw-2414576593.jpg',
  '/house-listings/download.jpg',
  '/house-listings/images.jpg',
  '/house-listings/martian-houses-setareh-ilka-1.jpg',
  '/house-listings/martian-houses-setareh-ilka.jpeg',
  '/house-listings/martian-houses-setareh-ilka.jpg',
];

const getUploadedHouseImage = (property) => {
  const identity = String(property._id || property.id || property.title || 'listing');
  const seed = hashString(identity);
  return uploadedHouseImages[seed % uploadedHouseImages.length];
};

const getBackupImage = (property) => {
  const identity = String(property._id || property.id || property.title || 'listing');
  const seed = hashString(identity);
  return uploadedHouseImages[(seed + 1) % uploadedHouseImages.length];
};

function PropertyCard({ property }) {
  const imageSrc = property.mainImage || property.image || null;
  const resolvedImageSrc = isValidImageUrl(imageSrc) ? imageSrc : getUploadedHouseImage(property);
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
            const fallback = getBackupImage(property);
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
