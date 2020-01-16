import React from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import EllipsisLoader from '../components/EllipsisLoader/EllipsisLoader';

const PC = () => {
  const initialState = [];
  console.log('initialState--->', initialState);
  return initialState.length === 0 ? 
  (
    <MainLayout backgroundColor='gray'>
      <div style={{ display: 'flex', justifyContent: 'center' }}><EllipsisLoader /></div>
    </MainLayout>
  )
  :
  (
    <MainLayout backgroundColor='gray'>
      <div style={{ display: 'flex', justifyContent: 'center' }}><EllipsisLoader /></div>
    </MainLayout>
  );
};

export default PC;
