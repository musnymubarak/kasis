import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const heroItems = [
  {
    id: 'combo',
    name: 'Combo',
    title: ['LEGENDARY', 'SHARING', 'COMBOS'],
    subtitle: 'Get the ultimate Kasi\'s experience with our mega-value combos. Perfect for sharing, loaded with flavor, and crafted to satisfy every craving.',
    image: '/combo_clean.png',
    thumb: '/combo_clean.png',
    accent: '#FF5E00',
    gradient: 'linear-gradient(135deg, #fff5eb 0%, #ffebd6 40%, #ffe0cc 100%)'
  },
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

// Cinematic 3D Tactile Spring Wheel Animation
const wheelVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? 120 : -120, // Dramatic 3D swing angle
    rotateZ: direction > 0 ? 15 : -15,   // Playful rotational tilt
    scale: 0.3,                          // Smooth deep depth scale
    y: 60,                               // Organic slide from below
    opacity: 0,
    filter: 'blur(8px)',                 // Cinematic motion blur
  }),
  center: {
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? -120 : 120,
    rotateZ: direction > 0 ? -15 : 15,
    scale: 0.3,
    y: -60,                              // Elegant dismiss upwards
    opacity: 0,
    filter: 'blur(8px)',
  }),
};

// Staggered Title Cascade Animation
const titleContainerVariants = {
  enter: (direction) => ({
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }),
  center: (direction) => ({
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }),
  exit: (direction) => ({
    transition: { staggerChildren: 0.05, staggerDirection: -1 } // Exits in reverse cascade order
  })
};

const titleLineVariants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 45 : -45, // Directional sliding cascade
    filter: 'blur(6px)',
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 90,  // Smoother and more elegant reveal
      damping: 16,    // Cushioned deceleration
      mass: 0.6
    }
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -45 : 45,
    filter: 'blur(6px)',
    transition: { duration: 0.3, ease: 'easeIn' }
  })
};

// Simple text slide animation (used for subtitle)
const textSlideVariants = {
  enter: { opacity: 0, y: 20, filter: 'blur(4px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -20, filter: 'blur(4px)' },
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

  // Auto-slide every 5 seconds with seamless user-interaction reset
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1); // Auto-slide transitions rotate forward for a natural flow
      setActiveIndex((prev) => (prev + 1) % heroItems.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

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
          <div className="hero-badge-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge hide-mobile"
            >
              🔥 Now Open in Carshalton
            </motion.div>
            <Link to="/menu" className="btn btn-primary hero-mobile-see-menu show-mobile">
              🍗 See Menu
            </Link>
          </div>
          
          {/* Animated title */}
          <AnimatePresence mode="wait" custom={direction}>
          <motion.h1 
            key={activeItem.id}
            custom={direction}
            variants={titleContainerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="hero-title"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <motion.span custom={direction} variants={titleLineVariants} className="title-line">
              {activeItem.title[0]}.
            </motion.span>
            <motion.span custom={direction} variants={titleLineVariants} className="accent title-line">
              {activeItem.title[1]}.
            </motion.span>
            <motion.span custom={direction} variants={titleLineVariants} className="stroke title-line">
              {activeItem.title[2]}.
            </motion.span>
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
            <Link to="/menu" className="btn btn-primary hide-mobile">🍗 See Menu</Link>
            <a href="tel:07909045300" className="btn btn-outline">Call & Order</a>
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
                  stiffness: 90,  // Slightly gentler spring stiffness for a relaxed, ultra-smooth sweep
                  damping: 20,    // Fully cushioned organic deceleration
                  mass: 0.8,      // Standard weight for smooth kinetic flow
                  duration: 1.0,  // Slightly longer duration for premium smoothness
                }}
                className="hero-main-image"
                style={{ perspective: '1200px' }}
              >
                <div className="hero-plate">
                  <img src={activeItem.image} alt={activeItem.name} />
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
