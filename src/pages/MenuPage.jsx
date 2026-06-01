import React from 'react';
import Menu from '../components/Menu';
import KidsMenu from '../components/KidsMenu';

const MenuPage = () => {
  return (
    <div className="page page-with-nav-offset">
      <Menu />
      <KidsMenu />
    </div>
  );
};

export default MenuPage;
