// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Blog Website. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
