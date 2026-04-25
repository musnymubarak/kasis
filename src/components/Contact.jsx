import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  return (
    <section className="section bg-white" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="section-label">Find Us</div>
            <h2 className="section-title">Come Visit<br />Us Today.</h2>
            <p className="section-sub">We'd love to see you. Walk in or call ahead — your crispy chicken is waiting.</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <div className="contact-item-label">Address</div>
                  <div className="contact-item-value">364 Middleton Road, Carshalton, Sutton, SM5 1HA</div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">
                    <a href="tel:07909045300">07909 045300</a> / <a href="tel:02080586656">020 8058 6656</a>
                  </div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value"><a href="mailto:kasis.chicken364@gmail.com">kasis.chicken364@gmail.com</a></div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><InstagramIcon size={24} /></div>
                <div>
                  <div className="contact-item-label">Instagram</div>
                  <div className="contact-item-value"><a href="https://instagram.com/kasis_chicken" target="_blank" rel="noopener noreferrer">@kasis_chicken</a></div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="contact-visual">
            <div className="contact-map-card">
              <div className="map-placeholder">
                <div className="map-icon">📍</div>
                <h3>Carshalton,<br />SM5 1HA</h3>
                <p>364, Middleton Road<br />Sutton, Greater London</p>
                <a 
                  href="https://www.google.com/maps/dir//364+Middleton+Rd,+Carshalton+SM5+1HA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
