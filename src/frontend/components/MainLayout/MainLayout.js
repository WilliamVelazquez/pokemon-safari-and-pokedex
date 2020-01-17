import React from 'react';

import Wave from '../Wave/Wave';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './styles.css';

const MainLayout = (props) => {
  const { backgroundColor, children } = props;
  return (
    <main className={`main__container ${backgroundColor ? backgroundColor : 'red'}`}>
      <Wave />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
