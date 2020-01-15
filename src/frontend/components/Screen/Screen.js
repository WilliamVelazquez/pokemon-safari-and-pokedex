import React from 'react';

import './styles.css';

const Screen = (props) => {
  const {children} = props;
  return (
    <section className='screen__container'>
			<div className='screen__plate'>
				<div className='screen__glass'>
					{children}
				</div>
			</div>
    </section>
  );
};

export default Screen;