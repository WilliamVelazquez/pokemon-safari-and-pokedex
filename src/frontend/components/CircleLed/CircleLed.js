import React from 'react';

import './styles.css';

const CircleLed = (props) =>(
	<div className={`circle__led${props.main?' absolute':''}`}>
		<div className={`circle__led--border ${props.size||'big'}${props.fixed?' fixed':''}`}>
			<div className={`circle__led--glass ${props.size||'big'}${props.fixed?' fixed':''} ${props.color||'blue'}`}>
				<div className={`circle__led--reflect ${props.size||'big'}${props.fixed?' fixed':''}`}>
				</div>
			</div>
		</div>
	</div>
);

export default CircleLed;
