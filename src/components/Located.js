import React from 'react';

const Located = ({ location }) => {
	return (
		<div className='header__located'>
			<h3>ISS is now located at:</h3>
			longtitude: {location?.longitude}, latitude: {location?.latitude}
		</div>
	);
};

export default Located;
