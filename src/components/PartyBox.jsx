import React from 'react';
import { motion } from 'framer-motion';

const PartyBox = () => {
  const items = [
    { icon: '🍔', text: '5× Chicken Fillet Burgers' },
    { icon: '🍗', text: '4 pcs Chicken + 12× Wings' },
    { icon: '🍟', text: '6 pcs Strips + 4× Regular Corn' },
    { icon: '🥤', text: 'Free 1.5L Bottle Drink Included' }
  ];

  return (
    <section className="section bg-white" id="party">
      <div className="container">
        <div className="party-inner">
          <div className="party-content">
            <div className="section-label">Feed the Crew</div>
            <h2 className="section-title">The Ultimate<br />Party Box.</h2>
            <p className="section-sub">Everything you need for a proper feast — perfect for family nights, celebrations, and get-togethers.</p>
            
            <div className="party-list">
              {items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="party-item"
                >
                  <span className="party-item-icon">{item.icon}</span>
                  <span className="party-item-text">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="party-visual">
            <div className="party-price-card">
              <div className="party-card-bg-emoji">🎊</div>
              <h3 className="party-card-label">Party Box</h3>
              <div className="party-big-price">
                <span className="currency">£</span>29<span className="decimal">.99</span>
              </div>
              <p className="party-card-text">Feeds the whole crew.<br />Big value, bigger flavours.</p>
              <a href="tel:+447782761970" className="btn btn-primary">🎉 Order Now</a>
            </div>
            
            <div className="party-image-hint">
              <img src="/menu/Eats - Family Meal.jpg.jpeg" alt="Family Meal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartyBox;
