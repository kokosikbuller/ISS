import React from 'react';

const Time = ({ date }) => {
	return (
		<div className='header__time'>
			<h3>Current UTC time: {date?.format('HH:mm')}</h3>
			{date?.format('dddd')}, {date?.format('DD MMM YYYY')}
		</div>
	);
};

export default Time;
