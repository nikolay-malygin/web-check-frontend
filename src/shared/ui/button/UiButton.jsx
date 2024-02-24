import React from 'react';

const UiButton = ({ children, classes, icon, type, ...props }) => {
	return (
		<button
			type={type ? type : 'button'}
			{...props}
			className={`${classes ? classes : 'background-blue color-white'} btn fw-semibold`}>
			{icon && <i className={`${icon} ${children && 'me-2'}`}></i>}
			{children}
		</button>
	);
};

export default UiButton;
