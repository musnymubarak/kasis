import React from 'react';
import { motion } from 'framer-motion';
import Features from '../components/Features';

const AboutPage = () => {
  return (
    <div className="page page-with-nav-offset">
      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">Carshalton's Home<br />of Crispy Chicken.</h2>
            <p className="section-sub mx-auto">
              At Kasi's Chicken, we believe great food brings people together.
              Every order is prepared fresh, every recipe built around bold flavour,
              and every visit is meant to feel like home. From sharing buckets to
              quick lunch wraps, we cook with care so you eat with joy.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-highlights"
          >
            <div className="about-highlight">
              <div className="about-highlight-num">100%</div>
              <div className="about-highlight-label">Fresh Daily</div>
            </div>
            <div className="about-highlight">
              <div className="about-highlight-num">30+</div>
              <div className="about-highlight-label">Menu Items</div>
            </div>
            <div className="about-highlight">
              <div className="about-highlight-num">7</div>
              <div className="about-highlight-label">Days a Week</div>
            </div>
          </motion.div>
        </div>
      </section>

      <Features />
    </div>
  );
};

export default AboutPage;
