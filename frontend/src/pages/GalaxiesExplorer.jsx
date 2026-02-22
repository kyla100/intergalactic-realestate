import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { propertyData, getPropertiesByGalaxy } from '../data/propertyData';
import '../styles/GalaxiesExplorer.css';

function GalaxiesExplorer() {
  const [selectedGalaxy, setSelectedGalaxy] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const currentGalaxy = propertyData.galaxies.find(g => g.id === selectedGalaxy);
  const currentPlanet = currentGalaxy?.planets.find(p => p.id === selectedPlanet);

  const handleSelectGalaxy = (galaxyId) => {
    setSelectedGalaxy(galaxyId);
    setSelectedPlanet(null);
  };

  const handleSelectPlanet = (planetId) => {
    setSelectedPlanet(planetId);
  };

  return (
    <div className="galaxies-explorer">
      <div className="explorer-hero">
        <h1>🌌 Explore Galaxies Across the Universe</h1>
        <p>Discover residential opportunities on planets throughout the cosmos</p>
      </div>

      <div className="explorer-container">
        {/* Galaxies List */}
        <div className="galaxies-list">
          <h2>Select a Galaxy</h2>
          <div className="galaxy-buttons">
            {propertyData.galaxies.map(galaxy => (
              <button
                key={galaxy.id}
                className={`galaxy-button ${selectedGalaxy === galaxy.id ? 'active' : ''}`}
                onClick={() => handleSelectGalaxy(galaxy.id)}
              >
                <span className="galaxy-icon">🌌</span>
                <div className="galaxy-info">
                  <h3>{galaxy.name}</h3>
                  <p>{galaxy.planets.length} planets</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Planets List */}
        {currentGalaxy && (
          <div className="planets-list">
            <h2>Planets in {currentGalaxy.name}</h2>
            <p className="galaxy-description">{currentGalaxy.description}</p>
            <div className="planets-grid">
              {currentGalaxy.planets.map(planet => (
                <button
                  key={planet.id}
                  className={`planet-card ${selectedPlanet === planet.id ? 'active' : ''}`}
                  onClick={() => handleSelectPlanet(planet.id)}
                >
                  <div className="planet-header">
                    <span className="planet-icon">🪐</span>
                    <h3>{planet.name}</h3>
                  </div>
                  <p className="planet-description">{planet.description}</p>
                  <p className="property-count">{planet.properties.length} properties</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Properties List */}
        {currentPlanet && (
          <div className="properties-list">
            <h2>Properties on {currentPlanet.name}</h2>
            <p className="breadcrumb">
              {currentGalaxy.name} → {currentPlanet.name}
            </p>
            <div className="properties-grid">
              {currentPlanet.properties.map(property => (
                <Link
                  key={property.id}
                  to={`/property/${property.id}`}
                  className="property-card"
                >
                  <div className="property-image">{property.image}</div>
                  <div className="property-content">
                    <h3>{property.name}</h3>
                    <p className="property-description">{property.description}</p>
                    <div className="property-details">
                      <span>{property.bedrooms} 🛏️</span>
                      <span>{property.bathrooms} 🚿</span>
                      <span>{property.area} sq ft</span>
                    </div>
                    <div className="property-features">
                      {property.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                      {property.features.length > 2 && (
                        <span className="feature-tag">+{property.features.length - 2} more</span>
                      )}
                    </div>
                    <div className="property-footer">
                      {property.isPremium && <span className="premium-badge">⭐ Premium</span>}
                      <p className="property-price">${property.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {!selectedGalaxy && (
          <div className="empty-state">
            <p>👈 Select a galaxy to explore available properties</p>
          </div>
        )}

        {selectedGalaxy && !selectedPlanet && (
          <div className="empty-state">
            <p>👆 Select a planet to view available properties</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GalaxiesExplorer;
