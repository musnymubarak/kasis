import React from 'react';
import WeeklyDeals from '../components/WeeklyDeals';
import PartyBox from '../components/PartyBox';

const DealsPage = () => {
  return (
    <div className="page page-with-nav-offset">
      <WeeklyDeals />
      <PartyBox />
    </div>
  );
};

export default DealsPage;
