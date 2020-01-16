import React from 'react';

import Wave from '../Wave/Wave';
import Header from '../Header/Header';

import './styles.css';

const MainLayout = (props) => {
  const {backgroundColor, children} = props;
  return (
    <main className={`main__container ${backgroundColor?backgroundColor:'red'}`}>
      <Wave />
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
