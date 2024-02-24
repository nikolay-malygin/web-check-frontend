import React from 'react';

const PageFormContainer = ({ children }) => {
	return (
		<div className='container my-5'>
			<div className='row justify-content-center'>
				<div className='col-12 col-sm-8 col-xl-7'>{children}</div>
			</div>
		</div>
	);
};

export default PageFormContainer;
