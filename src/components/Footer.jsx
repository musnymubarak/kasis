import React from 'react';
import { Link } from 'react-router-dom';
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
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand & Social */}
          <div className="footer-col-brand">
            <img src="/logo.png" alt="Kasi's Chicken Logo" className="logo-img footer-logo-img" />
            <div className="footer-social">
              <a href="https://instagram.com/kasis_chicken" target="_blank" rel="noopener noreferrer" className="social-link"><InstagramIcon size={18} /></a>
              <a href="#" className="social-link"><FacebookIcon size={18} /></a>
              <a href="tel:07909045300" className="social-link"><Phone size={18} /></a>
            </div>
          </div>
          
          {/* Col 2: Find Us */}
          <div className="footer-col-info">
            <h4>Our Roost</h4>
            <p>364, Middleton Road,</p>
            <p>Carshalton, SM5 1HA</p>
            <p className="footer-highlight-link" style={{ marginTop: '8px' }}>
              <a href="tel:07909045300">07909 045300</a>
            </p>
            <p className="footer-highlight-link">
              <a href="tel:02080586656">020 8058 6656</a>
            </p>
          </div>

          {/* Col 3: Opening Hours */}
          <div className="footer-col-info">
            <h4>Opening Hours</h4>
            <p>Monday – Sunday</p>
            <p className="footer-time-highlight">11:00 AM – 11:00 PM</p>
            <span className="footer-badge-pill">Collection &amp; Delivery</span>
          </div>

          {/* Col 4: Payments & Delivery Partners */}
          <div className="footer-col-info">
            <h4>Order Online</h4>
            <p className="footer-partner-text">Available on Just Eat, Deliveroo &amp; Uber Eats</p>
            <div className="footer-payment-badges">
              <span className="payment-badge">Visa</span>
              <span className="payment-badge">Mastercard</span>
              <span className="payment-badge">Apple Pay</span>
              <span className="payment-badge">Google Pay</span>
              <span className="payment-badge">Cash</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Kasi's Chicken, Carshalton. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <button 
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-cookie-settings')); }} 
              className="footer-cookie-btn"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
