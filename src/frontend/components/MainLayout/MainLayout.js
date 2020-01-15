import React from 'react';

import Wave from '../Wave/Wave';
import Header from '../Header/Header';

import './styles.css';

const MainLayout = (props) => {
  const {children} = props;
  return (
    <main className='main__container'>
      <Wave />
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
