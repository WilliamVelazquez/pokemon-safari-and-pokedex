import React from 'react';

import Header from '../Header/Header';

import './styles.css';

const MainLayout = (props) => {
  const {children} = props;
  return (
    <main className='main__container'>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
