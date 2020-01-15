import React from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import EllipsisLoader from '../components/EllipsisLoader/EllipsisLoader';

const Pokedex = () => {
  return (
    <MainLayout>
      <div style={{ display: 'flex', justifyContent: 'center' }}><EllipsisLoader /></div>
    </MainLayout>
  );
};

export default Pokedex;
