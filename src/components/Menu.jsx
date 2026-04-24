import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  chicken: [
    { name: '1 Piece Meal', desc: '1 piece of chicken with fries & drink', price: '3.70', image: '/images/Chicken/3pcs.png' },
    { name: '2 Piece Meal', desc: '2 pieces of chicken with fries & drink', price: '5.99', image: '/images/Chicken/3pcs.png', popular: true },
    { name: '3 Piece Meal', desc: '3 pieces of chicken with fries & drink', price: '6.99', image: '/images/Chicken/3pcs.png' },
    { name: '6 Piece Meal', desc: '6 pieces of chicken, 3 fries & drink', price: '12.99', image: '/images/Chicken/chicken pieces.jpg', family: true },
    { name: 'Wings (3 pcs)', desc: 'Crispy wings — solo or as a meal', price: '2.49', image: '/images/Chicken/Wings.png' },
    { name: 'Strips (3 pcs)', desc: 'Golden chicken strips — solo or as a meal', price: '2.99', image: '/images/Chicken/Strips.png' },
    { name: 'Popcorn Chicken', desc: 'Crispy bite-sized popcorn chicken', price: '3.99', image: '/images/Chicken/Popcorn.png' },
    { name: 'Nuggets (6 pcs)', desc: 'Classic crispy chicken nuggets', price: '4.99', image: '/images/Chicken/Nuggets.png' },
  ],
  wraps: [
    { name: 'Chicken Wrap', desc: 'Classic chicken wrap served with salad', price: '4.50', image: '/images/Wrap/wrap.png' },
    { name: 'Spicy Wrap', desc: 'Fiery spicy chicken wrap — hot & bold', price: '4.50', image: '/images/Wrap/Spicy wrap meal.png' },
    { name: 'Peri Peri Wrap', desc: 'Succulent peri peri chicken wrap', price: '4.50', image: '/images/Wrap/periperi wrap.png' },
    { name: 'Lamb Doner', desc: 'Tender lamb doner in a soft wrap', price: '4.50', image: '/images/Wrap/lamb doner.png' },
  ],
  box: [
    { name: 'Classic Fillet Combo', desc: 'Chicken fillet burger, 1 piece chicken, fries & drink', price: '5.99', image: '/images/Box meal/1.png', popular: true },
    { name: 'Wrap & Wings Combo', desc: 'Chicken wrap, 3 wings, fries & drink', price: '6.99', image: '/images/Box meal/2.png' },
    { name: 'Crispy Choice Combo', desc: '1 piece chicken, 3 wings, 3 strips, fries & drink', price: '5.99', image: '/images/Box meal/3.3.png' },
    { name: 'Peri Peri Flame Combo', desc: 'Peri peri burger, 3 wings, coleslaw, fries & drink', price: '5.99', image: '/images/Box meal/4.png' },
  ],
  peri: [
    { name: 'Peri Peri Quarter', desc: 'Juicy peri peri quarter chicken with salad', price: '7.99', image: '/images/Peri Peri/D.png' },
    { name: 'Peri Peri Half', desc: 'Flame-grilled half peri peri chicken with salad', price: '8.99', image: '/images/Peri Peri/DD.png', popular: true },
    { name: 'Peri Peri Whole', desc: 'Full whole peri peri chicken — the ultimate feast', price: '12.99', image: '/images/Peri Peri/D...png' },
    { name: 'Peri Peri Wings', desc: 'Flame-marinated wings served with a drink', price: '7.99', image: '/images/Peri Peri/DD..png' },
  ],
  burger: [
    { name: '½ Pounder Beef Burger', desc: 'Big, juicy, unforgettable — the burger that rules them all', price: '7.99', image: '/images/Burgers/2/beef burger .png', popular: true },
    { name: 'Chicken Fillet Burger', desc: 'Classic crispy fillet burger — simple and satisfying', price: '4.50', image: '/images/Burgers/1/chicken_fillet-removebg-preview.png' },
    { name: 'Peri Peri Burger', desc: 'Flame-marinated peri peri chicken in a soft bun', price: '4.50', image: '/images/Burgers/1/Peri Peri.png' },
    { name: 'Veggi Burger', desc: 'Fresh & flavourful veggie option', price: '4.50', image: '/images/Burgers/2/veg_burger-removebg-preview.png' },
  ]
};

// Wrap the entire grid in a single motion.div so AnimatePresence has one child
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 16 },
  },
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('chicken');

  return (
    <section className="section bg-light" id="menu">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">What We Serve</div>
          <h2 className="section-title">Full Menu,<br />Every Day.</h2>
          <p className="section-sub mx-auto">Burgers · Chicken · Wraps · Box Meals · Peri Peri · Family Feasts</p>
        </div>

        <div className="menu-tabs">
          {Object.keys(menuData).map((tab) => (
            <button 
              key={tab}
              className={`menu-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'box' ? 'Box Meals' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Single child per key = no AnimatePresence warning */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="menu-grid"
          >
            {menuData[activeTab].map((item, i) => (
              <motion.div 
                key={item.name}
                variants={cardVariants}
                className="menu-card"
              >
                {item.popular && <div className="menu-badge popular">Popular</div>}
                {item.family && <div className="menu-badge family">Family</div>}
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="menu-card-content">
                  <h3 className="menu-card-title">{item.name}</h3>
                  <p className="menu-card-desc">{item.desc}</p>
                  <div className="menu-card-footer">
                    <div className="menu-price">
                      <span className="price-from">from</span>£{item.price}
                    </div>
                    <button className="menu-add-btn" onClick={(e) => {
                      const btn = e.currentTarget;
                      const orig = btn.innerText;
                      btn.innerText = '✓ Added!';
                      btn.style.backgroundColor = '#2d6a4f';
                      setTimeout(() => {
                        btn.innerText = orig;
                        btn.style.backgroundColor = '';
                      }, 1500);
                    }}>Add</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
