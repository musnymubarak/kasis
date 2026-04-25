import React from 'react';
import { Phone } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/logo.png" alt="Kasi's Chicken Logo" className="logo-img footer-logo-img" />
          </div>
          
          <div className="footer-contact-summary">
            <p>364, Middleton Road, Carshalton, SM5 1HA</p>
            <p>07909 045300 / 020 8058 6656</p>
          </div>

          <nav className="footer-nav">
            <a href="#menu">Menu</a>
            <a href="#deals">Deals</a>
            <a href="#kids">Kids</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <div className="footer-social">
            <a href="https://instagram.com/kasis_chicken" target="_blank" rel="noopener noreferrer" className="social-link"><InstagramIcon size={20} /></a>
            <a href="#" className="social-link"><FacebookIcon size={20} /></a>
            <a href="tel:07909045300" className="social-link"><Phone size={20} /></a>
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
