import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="nav-logo-icon">K</div>
            <div className="nav-logo-text">KASI'S <span>CHICKEN</span></div>
          </div>
          
          <nav className="footer-nav">
            <a href="#menu">Menu</a>
            <a href="#deals">Deals</a>
            <a href="#kids">Kids</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <div className="footer-social">
            <a href="#" className="social-link">📸</a>
            <a href="#" className="social-link">👥</a>
            <a href="tel:+447782761970" className="social-link"><Phone size={20} /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Kasi's Chicken, Carshalton. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
