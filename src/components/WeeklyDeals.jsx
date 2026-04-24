import React from 'react';
import { motion } from 'framer-motion';

const deals = [
  {
    day: 'Sunday & Monday',
    name: 'FILLET TIME',
    desc: '2× Fillet Burgers — take them both, save big',
    price: '£5.99',
    tag: 'EVERY WEEK',
    emoji: '🍔',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)'
  },
  {
    day: 'Tuesday',
    name: 'WRAP TIME',
    desc: '1× Wrap — bold flavours, brilliant value',
    price: '£3.49',
    tag: 'TUESDAY',
    emoji: '🌯',
    gradient: 'linear-gradient(135deg, #E31C24, #c0141b)'
  },
  {
    day: 'Wednesday',
    name: 'WINGS ON 🔥',
    desc: '3× Chicken + 2× Wings — mid-week treat',
    price: '£3.99',
    tag: 'WEDNESDAY',
    emoji: '🍗',
    gradient: 'linear-gradient(135deg, #f59f00, #F5821F)'
  },
  {
    day: 'Thursday',
    name: 'PERI PERI',
    desc: '½ Peri Peri Chicken — bold & flame-grilled',
    price: '£8.99',
    tag: 'UNTIL 5PM',
    emoji: '🌶️',
    gradient: 'linear-gradient(135deg, #2d6a4f, #1b4332)'
  }
];

const WeeklyDeals = () => {
  return (
    <section className="section" id="deals">
      <div className="container">
        <div className="deals-header">
          <div>
            <div className="section-label">Every Week</div>
            <h2 className="section-title">Hot Deals,<br />Every Day.</h2>
          </div>
          <p className="section-sub" style={{ maxWidth: '320px' }}>Daily specials available until 4–5 PM. Don't miss out on incredible value.</p>
        </div>

        <div className="deals-grid">
          {deals.map((deal, i) => (
            <motion.div 
              key={deal.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="deal-card"
              style={{ background: deal.gradient }}
            >
              <div className="deal-tag">{deal.tag}</div>
              <div className="deal-day">{deal.day}</div>
              <h3 className="deal-name">{deal.name}</h3>
              <p className="deal-desc">{deal.desc}</p>
              <div className="deal-footer">
                <div className="deal-price">{deal.price}</div>
                <div className="deal-price-label">per deal</div>
              </div>
              <div className="deal-corner">{deal.emoji}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyDeals;
