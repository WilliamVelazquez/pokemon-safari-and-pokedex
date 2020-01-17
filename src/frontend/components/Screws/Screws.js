import React from 'react';

import './styles.css';

const Screws = (props) => {
  const { quantity } = props;

  const createScrews = () => {
    const screws = [];
    for (let index = 0; index < quantity; index++) {
      screws.push(
        <div className='circle__screw' key={index}>
          <div className='circle__screw--border'>
            <div className={`circle__screw--cover ${props.color || 'gray'}`}>
              <div className='circle__screw--detail'>
                <div className='circle__screw--first-detail'></div>
                <div className='circle__screw--second-detail'></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return screws;
  };

  return (
    <div className='screws__container'>
      {
        createScrews()
      }
    </div>
  );
};

export default Screws;
