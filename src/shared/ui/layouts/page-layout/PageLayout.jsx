import React from 'react';

const PageLayout = ({ children }) => {
	return (
		<section className='container-fluid vh-100'>
			<div className='row'>{children}</div>
		</section>
	);
};

export default PageLayout;
