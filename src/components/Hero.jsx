import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroItems = [
  {
    id: 'chicken',
    name: 'Chicken',
    title: ['BIG', 'JUICY', 'UNFORGETTABLE'],
    subtitle: 'Freshly cooked chicken, bold flavours, generous portions. Kasi\'s Chicken — where every bite feels like home.',
    image: '/images/Chicken/3pcs.png',
    thumb: '/images/Chicken/3pcs.png',
    accent: '#E31C24',
    gradient: 'linear-gradient(135deg, #fff8f0 0%, #fff0e8 40%, #ffe8d8 100%)'
  },
  {
    id: 'burger',
    name: 'Burger',
    title: ['STACKED', 'LOADED', 'SATISFYING'],
    subtitle: 'Our signature burgers are built for hunger. Fresh ingredients, perfectly toasted buns, and that classic Kasi\'s taste.',
    image: '/images/Burgers/1/chicken_fillet-removebg-preview.png',
    thumb: '/images/Burgers/1/chicken_fillet-removebg-preview.png',
    accent: '#8B4513',
    gradient: 'linear-gradient(135deg, #fdf5e6 0%, #faf0e6 40%, #faebd7 100%)'
  },
  {
    id: 'wrap',
    name: 'Wrap',
    title: ['FRESH', 'FLAVOURFUL', 'HANDHELD'],
    subtitle: 'Succulent chicken and fresh salad wrapped in a soft tortilla. Perfect for a quick bite that doesn\'t compromise on flavour.',
    image: '/images/Wrap/wrap.png',
    thumb: '/images/Wrap/wrap.png',
    accent: '#2D6A4F',
    gradient: 'linear-gradient(135deg, #f0fff0 0%, #f5fffa 40%, #f0fff4 100%)'
  },
  {
    id: 'fries',
    name: 'Fries',
    title: ['GOLDEN', 'CRISPY', 'ADDICTIVE'],
    subtitle: 'The perfect side to every meal. Golden, crispy, and seasoned to perfection. You can\'t have just one.',
    image: '/images/Extras/fries.png',
    thumb: '/images/Extras/fries.png',
    accent: '#F5C500',
    gradient: 'linear-gradient(135deg, #fffcf0 0%, #fff8e1 40%, #fffde7 100%)'
  }
];

// Wheel rotation: old item rotates out, new spins in from opposite side
const wheelVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? 90 : -90,
    rotateZ: direction > 0 ? 15 : -15,
    scale: 0.6,
    opacity: 0,
    x: direction > 0 ? 200 : -200,
  }),
  center: {
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? -90 : 90,
    rotateZ: direction > 0 ? -15 : 15,
    scale: 0.6,
    opacity: 0,
    x: direction > 0 ? -200 : 200,
  }),
};

const textSlideVariants = {
  enter: { opacity: 0, y: 30, filter: 'blur(4px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -30, filter: 'blur(4px)' },
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeItem = heroItems[activeIndex];

  const handleSelect = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section className="hero">
      <div className="hero-bg-dots"></div>
      <motion.div 
        className="hero-bg-blob"
        animate={{ background: activeItem.gradient }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      ></motion.div>
      
      <div className="container hero-inner">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            🔥 Now Open in Carshalton
          </motion.div>
          
          {/* Animated title */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.h1 
              key={activeItem.id}
              custom={direction}
              variants={textSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title"
            >
              {activeItem.title[0]}.<br />
              <span className="accent">{activeItem.title[1]}.</span><br />
              <span className="stroke">{activeItem.title[2]}.</span>
            </motion.h1>
          </AnimatePresence>

          {/* Animated subtitle */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.p 
              key={activeItem.id + '-sub'}
              custom={direction}
              variants={textSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="hero-sub"
            >
              {activeItem.subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-actions"
          >
            <a href="#menu" className="btn btn-primary">🍗 See Menu</a>
            <a href="tel:+447782761970" className="btn btn-outline">Call & Order</a>
          </motion.div>

          <div className="hero-selectors">
            {heroItems.map((item, i) => (
              <button 
                key={item.id}
                className={`hero-selector ${activeIndex === i ? 'active' : ''}`}
                onClick={() => handleSelect(i)}
              >
                <img src={item.thumb} alt={item.name} />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Fresh Daily</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">30+</div>
              <div className="stat-label">Menu Items</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* The 3D wheel-rotation food image */}
          <div className="hero-visual-wrapper">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={activeItem.id}
                custom={direction}
                variants={wheelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 0.8,
                  duration: 0.6,
                }}
                className="hero-main-image"
                style={{ perspective: '1200px' }}
              >
                <motion.div 
                  className="hero-plate" 
                  style={{ background: `linear-gradient(135deg, ${activeItem.accent}ee, ${activeItem.accent}88)` }}
                  animate={{ 
                    boxShadow: `0 30px 80px ${activeItem.accent}44`
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={activeItem.image} alt={activeItem.name} />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Pills — outside AnimatePresence so they don't remount */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="hero-pill hero-pill-1"
            >
              🔥 Freshly Cooked <span>Always</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              className="hero-pill hero-pill-2"
            >
              ⭐ Big Flavours
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
