import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';

const exploreCards = [
  {
    to: '/menu',
    label: 'Browse the Menu',
    title: 'Full Menu',
    desc: 'Burgers, chicken, wraps, family feasts, kids meals & more.',
    emoji: '🍔'
  },
  {
    to: '/deals',
    label: 'Save Every Day',
    title: 'Weekly Deals',
    desc: 'Daily specials and our legendary Party Box for 5–6 people.',
    emoji: '🔥'
  },
  {
    to: '/about',
    label: 'Why Kasi\'s?',
    title: 'About Us',
    desc: 'Fresh ingredients, big flavours, Carshalton\'s home of crispy chicken.',
    emoji: '🏆'
  }
];

const Home = () => {
  return (
    <>
      <Hero />
      <Ticker />
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-label">Explore Kasi's</div>
            <h2 className="section-title">What's Next?</h2>
            <p className="section-sub mx-auto">Pick where you want to go. Eat in, take away, or call ahead — we're ready.</p>
          </div>

          <div className="explore-grid">
            {exploreCards.map((card, i) => (
              <motion.div
                key={card.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={card.to} className="explore-card">
                  <div className="explore-card-emoji">{card.emoji}</div>
                  <div className="explore-card-label">{card.label}</div>
                  <h3 className="explore-card-title">{card.title}</h3>
                  <p className="explore-card-desc">{card.desc}</p>
                  <span className="explore-card-cta">Go &rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
