import React from 'react';

import './styles.css';

const CircleLed = (props) =>(
	<div className={`circle__led${props.main?' absolute':''}`}>
		<div className={`circle__led--border ${props.size||'big'}`}>
			<div className={`circle__led--glass ${props.size||'big'} ${props.color||'blue'}`}>
				<div className={`circle__led--reflect ${props.size||'big'}`}>
				</div>
			</div>
		</div>
	</div>
);

export default CircleLed;
