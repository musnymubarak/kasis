import React from 'react';
import { motion } from 'framer-motion';

const kidsMeals = [
  { name: '4 Chicken Nuggets', emoji: '🍗', image: '/images/Kids/K 1.png' },
  { name: 'Cheese Burger', emoji: '🍔', image: '/images/Kids/K 2.png' },
  { name: 'Chicken Steak Burger', emoji: '🍗🍔', image: '/images/Kids/K 3.png' },
  { name: 'Mini Fillet Burger', emoji: '🐔', image: '/images/Kids/K 4.png' },
  { name: '6 Chicken Nuggets', emoji: '🍿', image: '/images/Kids/K 5.png' },
  { name: '6 Popcorn Chicken', emoji: '🍟', image: '/images/Kids/K 6.png' }
];

const KidsMenu = () => {
  return (
    <section className="section bg-light" id="kids">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Little Ones</div>
          <h2 className="section-title">Kids Meals —<br />All Just £3.99</h2>
          <p className="section-sub mx-auto">Every kids meal includes regular fries & a drink. Six brilliant options they'll love.</p>
        </div>

        <div className="kids-grid">
          {kidsMeals.map((meal, i) => (
            <motion.div 
              key={meal.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="kids-card"
            >
              <div className="kids-card-image">
                <img src={meal.image} alt={meal.name} loading="lazy" />
              </div>
              <div className="kids-card-emoji">{meal.emoji}</div>
              <h3 className="kids-card-name">{meal.name}</h3>
              <p className="kids-card-desc">Reg Fries & Drink</p>
              <div className="kids-price">£3.99</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KidsMenu;
