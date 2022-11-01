import React from 'react';

const ListItem = ({ item }) => {
	return (
		<div className='content__list-profile'>
			<img
				src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
				alt='img'
			/>
			{item.name}
		</div>
	);
};

export default ListItem;
