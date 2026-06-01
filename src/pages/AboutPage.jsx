import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, ShieldCheck, Store, Crown } from 'lucide-react';
import Features from '../components/Features';

// Milestone details customized to chicken themes
const chickenMilestones = [
  {
    year: "2021",
    phase: "Phase 1: Hatching the Idea 🐣",
    title: "Perfecting the Recipe",
    desc: "Kasi's Chicken was born from a simple obsession: crafting the absolute crispiest, juiciest chicken in Carshalton. We spent 12 months testing flour blends, temperature curves, and importing exotic chilies to finalize our secret recipe.",
    icon: <Sparkles size={20} />,
    bg: "rgba(245, 197, 0, 0.1)",
    border: "#F5C500"
  },
  {
    year: "2023",
    phase: "Phase 2: Sourcing the Golden Grain 🌾",
    title: "100% Fresh Daily Commitment",
    desc: "We rejected frozen pre-packaged meats and signed direct partnerships with local farms. Our chicken is delivered fresh every morning, brined for 12 hours, and breaded only when you order. No exceptions.",
    icon: <ShieldCheck size={20} />,
    bg: "rgba(245, 130, 31, 0.1)",
    border: "#F5821F"
  },
  {
    year: "2025",
    phase: "Phase 3: Spreading Our Wings 🍗",
    title: "Middleton Road Grand Opening",
    desc: "We built and opened our flagship restaurant at 364 Middleton Road. From opening night, we welcomed Carshalton with piping-hot chicken, legendary party boxes, and our signature peri peri bastes.",
    icon: <Store size={20} />,
    bg: "rgba(227, 28, 36, 0.1)",
    border: "#E31C24"
  },
  {
    year: "Present & Beyond",
    phase: "Phase 4: Ruling the Roost 👑",
    title: "Carshalton's Crispy Choice",
    desc: "Serving thousands of wings, burgers, and wraps weekly. We remain a family-run business dedicated to friendly hospitality, consistent food quality, and supporting local community events in SM5.",
    icon: <Crown size={20} />,
    bg: "rgba(17, 17, 17, 0.05)",
    border: "#111111"
  }
];

// Glassmorphic badges floating around the central visual
const floatingBadges = [
  { text: "100% Fresh Daily", icon: <ShieldCheck size={14} />, x: -110, y: -70, delay: 0, duration: 4 },
  { text: "Secret Spice Blend", icon: <Flame size={14} />, x: 100, y: -40, delay: 0.5, duration: 5 },
  { text: "12-Hour Brined", icon: <Sparkles size={14} />, x: -110, y: 70, delay: 0.2, duration: 3.5 },
  { text: "Crispy Breading", icon: <Store size={14} />, x: 100, y: 80, delay: 0.8, duration: 4.5 }
];

const AboutPage = () => {
  return (
    <div className="page page-with-nav-offset about-page-wrapper">
      
      {/* 1. CHICKEN-THEMED INTERACTIVE HERO */}
      <section className="about-hero-section">
        <div className="about-hero-backdrop"></div>
        <div className="container">
          <div className="about-hero-grid">
            
            <div className="about-hero-content">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="about-hero-badge">
                  <Flame size={14} className="accent-color" /> The Crispy Legend
                </span>
                <h1 className="about-hero-title">
                  Cock-A-Doodle-<br/>
                  <span className="accent-color">Done Right.</span>
                </h1>
                <p className="about-hero-desc">
                  We don't do fast food. We do fresh food as fast as we can. Kasi's Chicken is Carshalton's ultimate destination for handcrafted crispy breading, flame-grilled peri peri, and a kitchen that never cuts corners.
                </p>
                
                {/* Micro Stats Card */}
                <div className="about-hero-stats">
                  <div className="about-stat-box">
                    <span className="about-stat-value">12hr</span>
                    <span className="about-stat-label">Slow Brined</span>
                  </div>
                  <div className="about-stat-box">
                    <span className="about-stat-value">100%</span>
                    <span className="about-stat-label">Fresh Chicken</span>
                  </div>
                  <div className="about-stat-box">
                    <span className="about-stat-value">SM5</span>
                    <span className="about-stat-label">Carshalton Born</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="about-hero-visual">
              <div className="about-visual-container">
                {/* Pulsating glowing backdrop */}
                <div className="about-visual-glow"></div>
                
                {/* Main floating plate container */}
                <motion.div 
                  className="about-visual-plate"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <img 
                    src="/images/Chicken/3pcs.png" 
                    alt="Crispy Fried Chicken" 
                    className="plate-3d-img" 
                  />
                  <div className="plate-badge">CRISPY GOLD</div>
                </motion.div>

                {/* Floating Glassmorphic Badges */}
                {floatingBadges.map((badge, idx) => (
                  <motion.div
                    key={idx}
                    className="about-floating-badge"
                    style={{ position: 'absolute', zIndex: 10 }}
                    initial={{ x: badge.x, y: badge.y }}
                    animate={{ 
                      y: [badge.y, badge.y - 12, badge.y],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: badge.duration,
                      delay: badge.delay,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="about-floating-badge-icon">{badge.icon}</span>
                    <span>{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CHICKEN-THEMED TIMELINE ROADMAP */}
      <section className="section bg-light" style={{ padding: '100px 0 140px', position: 'relative' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '80px' }}>
            <div className="section-label">Our Roost</div>
            <h2 className="section-title">The Crispy Journey</h2>
            <p className="section-sub mx-auto">Follow our path from a tiny egg of an idea to Carshalton's dominant chicken roost.</p>
          </div>

          <div className="roadmap-container">
            {/* The vertical timeline track */}
            <div className="roadmap-line"></div>

            {roadmapMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className={`roadmap-item ${isEven ? 'left' : 'right'}`}>
                  
                  {/* Chicken Egg/Milestone Point */}
                  <div 
                    className="roadmap-point chicken-point" 
                    style={{ 
                      borderColor: item.border,
                      boxShadow: `0 4px 15px ${item.border}3d`
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Glassmorphic timeline card */}
                  <motion.div 
                    className="roadmap-card chicken-card"
                    style={{ borderTop: `4px solid ${item.border}` }}
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: 'spring', damping: 22, stiffness: 90 }}
                  >
                    <div className="roadmap-card-header">
                      <span className="roadmap-year-tag" style={{ color: item.border, background: `${item.border}0f` }}>
                        {item.year}
                      </span>
                      <span className="roadmap-phase-text">{item.phase}</span>
                      <h3 className="roadmap-item-title">{item.title}</h3>
                    </div>
                    <p className="roadmap-item-desc">{item.desc}</p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Values / Features */}
      <Features />

    </div>
  );
};

// Variable reference correction for map rendering
const roadmapMilestones = chickenMilestones;

export default AboutPage;
