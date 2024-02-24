import React from 'react';

const UiForm = ({ children, title, classes, ...props }) => {
	return (
		<form
			{...props}
			className={`w-100 rounded-4 d-flex flex-column ${
				classes ? classes : 'py-5 px-3 px-sm-4 px-lg-5 background-secondary border-tertiary'
			}`}>
			{title && <h1 className='title text-center mb-5'>{title}</h1>}
			{children}
		</form>
	);
};

export default UiForm;
