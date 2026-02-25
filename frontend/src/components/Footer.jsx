import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Intergalactic Real Estate</h3>
          <p>Explore the galaxy, find your perfect home</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/listings">Browse</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: hello@intergalactic.space</p>
          <p>© 2026 Intergalactic Realty Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
