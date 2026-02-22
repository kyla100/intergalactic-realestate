import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const heroSlides = [
  '/hero/1_landscape.png',
  '/hero/2_landscape.png',
  '/hero/3_landscape.png',
  '/hero/4_landscape.png',
  '/hero/5_landscape.png',
];

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-slideshow" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide})`,
                animationDelay: `${index * 8}s`,
              }}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Explore Infinite Real Estate Possibilities</h1>
          <p>Buy and sell property across the Milky Way, Andromeda, and beyond</p>
          <Link to="/listings" className="cta-button">
            Start Exploring
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Intergalactic Real Estate?</h2>
        <div className="features-grid">
          <Link to="/galaxies" className="feature-card glow-option">
            <span className="feature-icon">🌍</span>
            <h3>Galaxies Across the Universe</h3>
            <p>Access properties in the Milky Way, Andromeda, and other known galaxies</p>
            <span className="feature-arrow">→</span>
          </Link>
          <Link to="/premium-properties" className="feature-card glow-option">
            <span className="feature-icon">💎</span>
            <h3>Premium Properties</h3>
            <p>High-quality listings with detailed features and stunning imagery</p>
            <span className="feature-arrow">→</span>
          </Link>
          <Link to="/secure-payments" className="feature-card glow-option">
            <span className="feature-icon">💰</span>
            <h3>Secure Payments</h3>
            <p>Safe transactions with Stripe integration and escrow services</p>
            <span className="feature-arrow">→</span>
          </Link>
          <Link to="/trusted-community" className="feature-card glow-option">
            <span className="feature-icon">👥</span>
            <h3>Trusted Community</h3>
            <p>Connect with verified buyers and sellers across the galaxy</p>
            <span className="feature-arrow">→</span>
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Own Property in Space?</h2>
        <Link to="/listings" className="cta-button large">
          Browse All Listings
        </Link>
      </section>
    </div>
  );
}

export default Home;
