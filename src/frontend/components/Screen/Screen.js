import React from 'react';

import Screws from '../Screws/Screws';
import CircleLed from '../CircleLed/CircleLed';
import Vents from '../Vents/Vents';
import './styles.css';

const Screen = (props) => {
  const { children } = props;
  return (
    <section className='screen__container'>
      <div className='screen__plate'>
        <div className='screen__glass'>
          {children}
        </div>
        <div className='screen__plate__top--details'>
          <Screws quantity={2} />
        </div>
        <div className='screen__plate__bottom--details'>
          <CircleLed color='red' size='small' fixed />
          <Vents quantity={3} />
        </div>
      </div>
    </section>
  );
};

export default Screen;
