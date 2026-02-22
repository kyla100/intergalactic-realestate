import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPremiumProperties } from '../data/propertyData';
import '../styles/PremiumProperties.css';

function PremiumProperties() {
  const [sortBy, setSortBy] = useState('price-low');
  const [filterGalaxy, setFilterGalaxy] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const premiumProperties = getPremiumProperties();

  // Get unique galaxies
  const galaxies = ['all', ...new Set(premiumProperties.map(p => p.galaxyName))];

  // Filter and sort properties
  let filteredProperties = premiumProperties.filter(property => {
    const matchesGalaxy = filterGalaxy === 'all' || property.galaxyName === filterGalaxy;
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.planetName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGalaxy && matchesSearch;
  });

  // Sort properties
  if (sortBy === 'price-low') {
    filteredProperties.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProperties.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProperties.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'size') {
    filteredProperties.sort((a, b) => b.area - a.area);
  }

  return (
    <div className="premium-properties">
      <div className="premium-hero">
        <div className="hero-content">
          <h1>💎 Premium Properties Across the Universe</h1>
          <p>Discover the finest residential spaces with secure payments and trusted communities</p>
          
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-icon">✅</span>
              <div>
                <h3>Secure Payments</h3>
                <p>All transactions protected with escrow & Stripe integration</p>
              </div>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">👥</span>
              <div>
                <h3>Trusted Community</h3>
                <p>Verified buyers and sellers across all galaxies</p>
              </div>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">🛡️</span>
              <div>
                <h3>Quality Assurance</h3>
                <p>Inspected and verified properties with full documentation</p>
              </div>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">🌍</span>
              <div>
                <h3>Universal Coverage</h3>
                <p>Properties available across multiple galaxies and planets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="premium-content">
        {/* Filters and Search */}
        <div className="filters-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search properties or planets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filters-row">
            <div className="filter-group">
              <label>Filter by Galaxy:</label>
              <select value={filterGalaxy} onChange={(e) => setFilterGalaxy(e.target.value)}>
                {galaxies.map(galaxy => (
                  <option key={galaxy} value={galaxy}>
                    {galaxy === 'all' ? 'All Galaxies' : galaxy}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="size">Size: Largest First</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className="results-info">
            <p>Showing <strong>{filteredProperties.length}</strong> premium properties</p>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="premium-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="premium-card"
              >
                <div className="premium-card-header">
                  <div className="property-image">{property.image}</div>
                  <div className="premium-label">⭐ PREMIUM</div>
                </div>

                <div className="premium-card-body">
                  <h3>{property.name}</h3>
                  <p className="location">{property.planetName}, {property.galaxyName}</p>
                  
                  <div className="property-specs">
                    <div className="spec">
                      <span className="spec-icon">🛏️</span>
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="spec">
                      <span className="spec-icon">🚿</span>
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="spec">
                      <span className="spec-icon">📏</span>
                      <span>{property.area.toLocaleString()} sq ft</span>
                    </div>
                  </div>

                  <p className="description">{property.description}</p>

                  <div className="features-section">
                    <p className="features-label">Key Features:</p>
                    <div className="features-list">
                      {property.features.map((feature, idx) => (
                        <span key={idx} className="feature">✓ {feature}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="premium-card-footer">
                  <div className="price-section">
                    <p className="price-label">Investment Price</p>
                    <p className="price">${property.price.toLocaleString()}</p>
                  </div>
                  <button className="view-details-btn">View Details →</button>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-results">
              <p>No premium properties match your search criteria.</p>
              <button onClick={() => { setSearchTerm(''); setFilterGalaxy('all'); }} className="reset-btn">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="premium-info-section">
        <h2>Why Choose Premium Properties?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🏆 Luxury Living</h3>
            <p>Access the finest properties with premium amenities and finishes across all galaxies.</p>
          </div>
          <div className="benefit-card">
            <h3>💰 Value Investment</h3>
            <p>Premium properties offer excellent long-term investment potential and appreciation.</p>
          </div>
          <div className="benefit-card">
            <h3>🔒 Secure Transactions</h3>
            <p>All premium property sales include full escrow protection and Stripe payment security.</p>
          </div>
          <div className="benefit-card">
            <h3>🌐 Galactic Community</h3>
            <p>Join a trusted network of premium property owners across the universe.</p>
          </div>
          <div className="benefit-card">
            <h3>📋 Full Documentation</h3>
            <p>Every premium property comes with complete legal documentation and inspection reports.</p>
          </div>
          <div className="benefit-card">
            <h3>🎯 Verification Guarantee</h3>
            <p>All sellers are verified and properties are authenticated before listing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumProperties;
