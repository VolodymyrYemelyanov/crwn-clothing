import React from 'react';

import Dirctory from '../../components/directory/directory.component';

import './homepage.style.scss';

const HomePage = (props) => {
	console.log(props);
	return (
		<div className='homepage'>
			<Dirctory />
		</div>
	);
}

export default HomePage;