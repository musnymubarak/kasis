import React from 'react';
import { motion } from 'framer-motion';

const PartyBox = () => {
  const items = [
    { qty: '5×', title: 'Chicken Fillet Burgers', desc: 'Freshly prepared crispy fillets', icon: '🍔' },
    { qty: '8 pcs', title: 'Fried Chicken', desc: 'Deliciously golden & crispy', icon: '🍗' },
    { qty: '12×', title: 'Fiery Hot Wings', desc: 'Perfectly spiced wing selection', icon: '🌶️' },
    { qty: '8 pcs', title: 'Crispy Strips', desc: 'Served with 6x regular fries', icon: '🍟' },
    { qty: '4×', title: 'Corn on the Cob', desc: 'Regular sweet buttered corn', icon: '🌽' },
    { qty: '1.5L', title: 'Bottle of Drink', desc: 'Free refreshing beverage', icon: '🥤' }
  ];

  return (
    <section className="section bg-white" id="party">
      <div className="container">
        <div className="party-inner">
          <div className="party-content">
            <div className="party-badge">🔥 Feeds 5 - 6 People</div>
            <h2 className="section-title" style={{ letterSpacing: '0.5px', marginBottom: '16px' }}>
              THE ULTIMATE<br />PARTY BOX.
            </h2>
            <p className="section-sub" style={{ maxWidth: '580px' }}>
              Everything you need for a legendary feast. Loaded with your favorite crispy chicken varieties, perfect for family nights, celebrations, and game-day get-togethers!
            </p>
            
            <div className="party-grid">
              {items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
                  className="party-token"
                >
                  <span className="party-token-icon">{item.icon}</span>
                  <div className="party-token-meta">
                    <span className="party-token-qty">{item.qty}</span>
                    <span className="party-token-title">{item.title}</span>
                    <span className="party-token-desc">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
 
          <div className="party-freestyle-visual">
            <div className="freestyle-glow"></div>
            <div className="freestyle-blob"></div>
            
            <motion.div 
              className="freestyle-image-container"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <img 
                src="/images/Family/F5_faded.png" 
                alt="Party Box Platter Feast" 
                className="freestyle-platter"
              />
            </motion.div>
            
            <motion.div 
              className="freestyle-price-tag"
              initial={{ opacity: 0, x: 30, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="price-tag-label">Complete Feast</div>
              <div className="price-tag-value">
                <span className="currency">£</span>34<span className="decimal">.99</span>
              </div>
            </motion.div>
            
            <motion.a 
              href="tel:07909045300" 
              className="freestyle-action-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              🎉 Order Feast Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartyBox;
