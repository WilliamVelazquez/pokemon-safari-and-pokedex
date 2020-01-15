import React from 'react';

import './styles.css';

const Wave = (props) =>(
  <div className='wave_container'>
    <svg viewBox="0 0 1440 320"><path fill="#FF4242" transform="scale(-1,0.6) translate(-1440,0)" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,122.7C640,149,800,235,960,272C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    {props.children}
  </div>
);

export default Wave;
