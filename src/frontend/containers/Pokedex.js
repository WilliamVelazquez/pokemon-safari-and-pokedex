import React from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import Screen from '../components/Screen/Screen';
import EllipsisLoader from '../components/EllipsisLoader/EllipsisLoader';

const Pokedex = () => {
  return (
    <MainLayout>
      <Screen>
        <div style={{ display: 'flex', justifyContent: 'center' }}><EllipsisLoader /></div>
      </Screen>
    </MainLayout>
  );
};

export default Pokedex;
