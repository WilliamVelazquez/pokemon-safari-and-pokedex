import React, { useState, useEffect, useRef } from 'react';
import { useVisibleOnScreen } from '../../hooks/useVisibleOnScreen';

import EllipsisLoader from '../EllipsisLoader/EllipsisLoader';

import './styles.css';

const ObservableLoader = (props) => {
	const { completed, handleIntersection } = props;
	const [observable] = useVisibleOnScreen(handleIntersection, completed);
	
  return (
    <div ref={observable} className='list__loader'> 
			{
				!completed &&
				<EllipsisLoader />
			}
    </div>
  );
};

export default ObservableLoader;
