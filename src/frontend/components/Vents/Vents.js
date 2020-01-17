import React from 'react';

import './styles.css';

const Vents = (props) => {
  const { quantity } = props;

  const createVents = () => {
    const vents = [];
    for (let index = 0; index < quantity; index++) {
      vents.push(<div className='vents__item' key={index}></div>);
    }
    return vents;
  };

  return (
    <div className='vents__container'>
      {
        createVents()
      }
    </div>
  );
};

export default Vents;
