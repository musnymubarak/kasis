import React from 'react';

const Ticker = () => {
  const items = [
    'Freshly Cooked Always',
    'Big Flavours, Generous Portions',
    'Family Meals Made Easy',
    'Full Menu Available Everyday',
    'Even Santa Loves Crispy Chicken',
  ];

  // Repeat items to fill the track
  const doubledItems = [...items, ...items, ...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubledItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="ticker-item">{item}</span>
            <span className="ticker-sep">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
