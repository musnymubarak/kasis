import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: '🍗',
      title: 'Freshly Cooked',
      text: 'Every order prepared fresh to order, every single time.'
    },
    {
      icon: '💥',
      title: 'Big Flavours',
      text: 'Generous portions with bold, craveable seasoning.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Friendly',
      text: 'Box meals and family feasts designed to bring everyone together.'
    },
    {
      icon: '💰',
      title: 'Great Value',
      text: 'Big bites, bigger smiles. Unbeatable value every day.'
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="features-grid">
          <div className="features-content">
            <div className="section-label">Why Choose Kasi's?</div>
            <h2 className="section-title">More Than<br />Good Food.</h2>
            <p className="section-sub">Every order prepared fresh. Always delicious. Kasi's Chicken is Carshalton's home of big flavours and warm hospitality.</p>
            
            <div className="features-list">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="feature-card"
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-info">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-text">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="features-visual">
            <div className="features-promo-card">
              <div className="promo-emoji">🏆</div>
              <h3 className="promo-title">Carshalton's<br />Favourite<br />Chicken.</h3>
              <p className="promo-text">364 Middleton Road, Carshalton — your new go-to for crispy, juicy chicken done right.</p>
              <div className="promo-contact">
                <div className="promo-contact-item">
                  <span>📍</span> 364 Middleton Road, Carshalton, SM5 1HA
                </div>
                <div className="promo-contact-item">
                  <span>📞</span> <a href="tel:07909045300" style={{ color: 'inherit' }}>07909 045300</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
